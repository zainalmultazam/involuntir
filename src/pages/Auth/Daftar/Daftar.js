import GoogleLogin from 'assets/icons/GoogleLogin'
import axios from 'axios'
import Spinner from 'components/loaders/Spinner'
import { API_URL } from 'config/api'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { setRegisterEmail } from 'utils/cookiesHooks'
import NavLink from '../../../components/Navbar/index'

const Daftar = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Error, setError] = useState({})
  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTimeout(() => {
      setLoading(true)
    }, 1000)

    const data = {
      name: name,
      email: email,
      password: password,
    }

    await axios
      .post(`${API_URL}/api/auth/register`, data)
      .then((res) => {
        if (res.status === 201) {
          setRegisterEmail()
          history.push('/register/verifikasi-email')
        }
      })
      .catch((e) => {
        setError(e.response.data.error)
        setTimeout(() => {
          setError('')
        }, 10000)
      })
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value)
    setPassword(e.target.value)
  }

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  if (loading) {
    return (
      <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
        <Spinner color="#e7513b" />
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto">
      <NavLink />
      <div className="mx-[30px]">
        <div className="flex flex-col mt-[66px]">
          <div className="rounded-full mx-auto max-w-[80px]">
            <svg
              width="38"
              height="80"
              viewBox="0 0 38 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.9"
                d="M18.983 42.0339L37.9661 80H0L18.983 42.0339Z"
                fill="black"
              />
              <path
                d="M18.983 37.9661C29.4671 37.9661 37.9661 29.4671 37.9661 18.983C37.9661 8.49899 29.4671 0 18.983 0C8.49899 0 0 8.49899 0 18.983C0 29.4671 8.49899 37.9661 18.983 37.9661Z"
                fill="#0288D1"
              />
            </svg>
          </div>
          <p className="font-bold mx-auto text-[24px] mt-[36px]">Daftar</p>
          <p className="mx-auto text-[#717171] text-[14px]">
            Sudah memiliki akun?{' '}
            <Link to="/login" className="text-peduly-primary">
              Masuk
            </Link>{' '}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] border-[#CACACA]">
              <input
                type="text"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                placeholder="Nama lengkap"
                required
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
              <input
                type="email"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                placeholder="Alamat Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div
              className={`${
                Error.password && 'ring-1 ring-peduly-danger border-none'
              } relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]`}
            >
              <input
                placeholder="Password"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                type={passwordType}
                value={passwordInput}
                required
                onChange={handlePasswordChange}
              />
              <div
                onClick={togglePassword}
                className="absolute right-[20px] z-10 "
              >
                {passwordType === 'password' ? (
                  <svg
                    width="24"
                    height="24"
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
                    width="24"
                    height="24"
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
            {Error.password && (
              <p className="text-sm font-light text-peduly-danger mt-1">
                {Error.password[0]}
              </p>
            )}
            <button
              className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]"
              type="submit"
            >
              Daftar
            </button>
          </form>
          <div className="my-16">
            <p className="text-center text-[#717171] text-[14px] font-normal">
              Atau daftar dengan
            </p>
            {/* <div className="flex justify-between w-[188px] mx-auto mt-5">
              <GoogleLogin />
              <FacebookLogin />
              <MacLogin />
            </div> */}
            <GoogleLogin />
          </div>
          <div className="text-center mb-20 mt-10 text-[12px]">
            <p>Dengan mendaftar, kamu setuju dengan</p>
            <p>
              <a
                href="https://help.peduly.com/syarat-ketentuan/"
                className="text-peduly-primary text-[12px] underline"
              >
                Syarat dan Ketentuan
              </a>{' '}
              &{' '}
              <a
                href="https://help.peduly.com/privasi/"
                className="text-peduly-primary text-[12px] underline"
              >
                kebijakan privasi
              </a>{' '}
              peduly.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daftar
