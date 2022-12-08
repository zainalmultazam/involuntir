import { useState } from 'react'
import axios from 'axios'
import { API_URL } from 'config/api'
import BackButton from 'components/BackButton'
import { Redirect, useHistory } from 'react-router-dom'
import { getToken, setUbahKataSandiBerhasil } from 'utils/cookiesHooks'

const UbahKataSandi = () => {
  const [message, setMessage] = useState(false)
  const [isSame, setIsSame] = useState(undefined)
  const [kataSandiLama, setKataSandiLama] = useState('')
  const [kataSandiBaru, setKataSandiBaru] = useState('')
  const [kataSandiBaruDua, setKataSandiBaruDua] = useState('')
  const [kataSandiLamaType, setKataSandiLamaType] = useState('password')
  const [kataSandiBaruType, setKataSandiBaruType] = useState('password')

  const regex = /^(?=.*[a-z])[a-zA-Z\d]{8,}$/
  const history = useHistory()

  const handleKataSandiLama = (e) => {
    setKataSandiLama(e.target.value)
  }

  const handleKataSandiBaru = (e) => {
    if (e.target.value === kataSandiBaruDua) {
      setIsSame(true)
    } else {
      setIsSame(false)
    }
    setKataSandiBaru(e.target.value)
  }

  const handleKataSandiBaruDua = (e) => {
    if (e.target.value === kataSandiBaru) {
      setIsSame(true)
    } else {
      setIsSame(false)
    }
    setKataSandiBaruDua(e.target.value)
  }

  const toggleKataSandiLama = () => {
    if (kataSandiLamaType === 'password') {
      setKataSandiLamaType('text')
      return
    }
    setKataSandiLamaType('password')
  }

  const toggleKataSandiBaru = () => {
    if (kataSandiBaruType === 'password') {
      setKataSandiBaruType('text')
      return
    }
    setKataSandiBaruType('password')
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await axios
      .put(
        `${API_URL}/api/user/change_password`,
        {
          old_password: kataSandiLama,
          new_password: kataSandiBaru,
        },
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setUbahKataSandiBerhasil()
          history.push({
            pathname: `/pengaturan/ubah-kata-sandi/berhasil`,
            state: {
              H1: 'Selamat!',
              P1: 'Akun kamu bisa digunakan kembali',
              hrf: 'profile',
              Button: 'Kembali',
            },
          })
        }
      })
      .catch(() => {
        setMessage(true)
      })
  }

  function validator() {
    if (
      regex.test(kataSandiBaru) &&
      kataSandiBaru.length > 8 &&
      isSame &&
      kataSandiLama !== '' &&
      kataSandiBaru !== kataSandiLama
    ) {
      return true
    }
    return false
  }

  if (!getToken()) {
    return <Redirect to="/" />
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf={'1'} txt="Ubah Kata Sandi" />
      <form
        className="mt-[102px] mx-[20px] space-y-5"
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <div>
          <label className="text-base font-normal ml-[10px]">
            Kata sandi lama
          </label>
          <div className="relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
            <input
              name="password"
              className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
              placeholder="Masukkan kata sandi"
              type={kataSandiLamaType}
              value={kataSandiLama}
              onChange={handleKataSandiLama}
              required
            />
            <div
              onClick={toggleKataSandiLama}
              className="absolute right-[20px] z-10 "
            >
              {kataSandiLamaType === 'password' ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5299 9.47001L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C12.9899 8.42001 13.8799 8.82001 14.5299 9.47001Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8201 5.77001C16.0701 4.45001 14.0701 3.73001 12.0001 3.73001C8.47009 3.73001 5.18009 5.81001 2.89009 9.41001C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.4C18.8201 5.8 15.5301 3.72 12.0001 3.72C8.47009 3.72 5.18009 5.8 2.89009 9.4C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div>
          <label className="text-base font-normal ml-[10px]">
            Kata sandi baru
          </label>
          <div className="relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
            <input
              name="password"
              className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
              placeholder="Masukkan kata sandi"
              type={kataSandiBaruType}
              value={kataSandiBaru}
              onChange={handleKataSandiBaru}
              required
            />
            <div
              onClick={toggleKataSandiBaru}
              className="absolute right-[20px] z-10 "
            >
              {kataSandiBaruType === 'password' ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5299 9.47001L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C12.9899 8.42001 13.8799 8.82001 14.5299 9.47001Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8201 5.77001C16.0701 4.45001 14.0701 3.73001 12.0001 3.73001C8.47009 3.73001 5.18009 5.81001 2.89009 9.41001C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.4C18.8201 5.8 15.5301 3.72 12.0001 3.72C8.47009 3.72 5.18009 5.8 2.89009 9.4C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          {(!kataSandiBaru || !regex.test(kataSandiBaru)) && (
            <p className=" text-small text-peduly-danger mt-1 ml-[10px]">
              Password harus menggunakan karakter dan angka
            </p>
          )}
          {kataSandiBaru.length < 8 && (
            <p className=" text-small text-peduly-danger mt-1 ml-[10px]">
              Password harus lebih dari 8 karakter
            </p>
          )}
        </div>
        <div>
          <label className="text-base font-normal ml-[10px]">
            Konfirmasi kata sandi
          </label>
          <div className="relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
            <input
              name="password"
              className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
              placeholder="Masukkan kata sandi"
              type={kataSandiBaruType}
              value={kataSandiBaruDua}
              onChange={handleKataSandiBaruDua}
              required
            />
            <div
              onClick={toggleKataSandiBaru}
              className="absolute right-[20px] z-10 "
            >
              {kataSandiBaruType === 'password' ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5299 9.47001L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C12.9899 8.42001 13.8799 8.82001 14.5299 9.47001Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.8201 5.77001C16.0701 4.45001 14.0701 3.73001 12.0001 3.73001C8.47009 3.73001 5.18009 5.81001 2.89009 9.41001C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.47 14.53L2 22"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L14.53 9.47"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42001 11.9999 8.42001C13.9799 8.42001 15.5799 10.02 15.5799 12Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.4C18.8201 5.8 15.5301 3.72 12.0001 3.72C8.47009 3.72 5.18009 5.8 2.89009 9.4C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
                    stroke="#ADADAD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
          {!isSame && kataSandiBaruDua && (
            <p className=" text-small text-peduly-danger mt-1 ml-[10px]">
              Password harus sama
            </p>
          )}
          {isSame && kataSandiBaru === kataSandiLama && (
            <p className=" text-small text-peduly-danger mt-1 ml-[10px]">
              Password Tidak Boleh Sama dengan Password Lama
            </p>
          )}

          {message && (
            <p className=" text-small text-peduly-danger mt-1 ml-[10px]">
              Gagal!! Password Lama Salah
            </p>
          )}
        </div>
        <div className=" bg-white  justify-center items-center max-w-[430px] py-[10px] z-40">
          <span className="w-[90%]">
            {validator() ? (
              <button
                className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px]"
                type="submit"
              >
                Ubah Kata Sandi
              </button>
            ) : (
              <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
                Ubah Kata Sandi
              </button>
            )}
          </span>
        </div>
      </form>
    </div>
  )
}

export default UbahKataSandi
