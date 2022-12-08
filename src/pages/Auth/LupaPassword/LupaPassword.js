import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from 'config/api'
import Spinner from 'components/loaders/Spinner'
import BackButton from 'components/BackButton'
import { setLupaKatSandiEmail } from 'utils/cookiesHooks'

const LupaPassword = () => {
  const [emailValue, setEmailValue] = useState('')
  const [errorMsg, setErrorMsg] = useState({})
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    await axios
      .get(`${API_URL}/api/password/resetemail?email=${emailValue}`)
      .then((response) => {
        if (response.data.status === 202 || response.data.status === 204) {
          setLoading(false)
          setErrorMsg(response.data)
        } else if (
          response.data.status === 201 ||
          response.data.status === 200
        ) {
          setLupaKatSandiEmail()
          history.push('/password/cek-email')
        }
      })
      .catch((error) => {})
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
        <Spinner color="#e7513b" />
      </div>
    )
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf="/login" txt="Kembali" />
      <div className="mx-[30px]">
        <div className="h-[150px] w-full mt-32 justify-center flex align-middle">
          <svg
            width={120}
            height={120}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M66.0001 106.85C62.7001 111.25 57.2999 111.25 53.9999 106.85L46.4999 96.85C45.6499 95.75 43.85 94.85 42.5 94.85H40C20 94.85 10 89.85 10 64.85V39.85C10 19.85 20 9.85001 40 9.85001H80C100 9.85001 110 19.85 110 39.85V64.85"
              stroke="#E7513B"
              strokeWidth={6}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M91.0001 107C99.8366 107 107 99.8365 107 91C107 82.1634 99.8366 75 91.0001 75C82.1635 75 75 82.1634 75 91C75 99.8365 82.1635 107 91.0001 107Z"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M110 110L105 105"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M79.9823 55H80.0272"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M59.9774 55H60.0223"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M39.9725 55H40.0174"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mt-8 flex justify-center mx-auto w-[198px]">
          <span className="text-[24px] font-semibold leading-4">
            Lupa Kata Sandi?
          </span>
        </div>
        <div className="mt-4 flex justify-center mx-auto text-gray-400 text-center w-[301px]">
          <p className=" text-[12px]">
            Masukkan email supaya kami bisa kirim email intruksi untuk reset
            kata sandi kamu
          </p>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div
            className={`${
              errorMsg.msg && 'ring-1 ring-peduly-danger border-none'
            } relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] border-[#CACACA]`}
          >
            <input
              type="email"
              className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
              placeholder="Alamat Email"
              required
              onChange={(e) => {
                setEmailValue(e.target.value)
              }}
            />
          </div>
          {errorMsg.msg && (
            <p className="mx-4 text-basic text-peduly-danger mt-1">
              {errorMsg.msg}
            </p>
          )}
          <div className="w-full flex justify-center mt-4">
            <button
              className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] h-[60px]"
              type="submit"
            >
              Kirim
            </button>
          </div>
        </form>

        <div className="flex text-[14px] justify-center my-28">
          <p className="text-gray-400">Belum punya akun?</p>{' '}
          <Link to="/register" className="text-peduly-primary ml-1">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LupaPassword
