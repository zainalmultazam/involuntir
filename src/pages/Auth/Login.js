import { Link } from 'react-router-dom'
import { useState } from 'react'
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
import Alert from 'components/Alert/Alert'
import GoogleLogin from 'assets/icons/GoogleLogin'
import NavLink from '../../components/Navbar/index'
import axios from 'axios'
import { API_URL } from 'config/api'
import { useEffect } from 'react'
import { getSlug, removeSlug } from 'utils/cookiesHooks'

const Login = () => {
  const [email, setEmail] = useState('')
  const [hasError, setHasError] = useState(false)
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(false)

  const [passwordType, setPasswordType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: email,
      password: password,
    }

    await axios
      .post(`${API_URL}/api/auth/login`, data)
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem('isLoggedIn', true)
          const token = res.data.token
          const decode = jwt(token)
          const exp = decode.exp * 1000

          Cookies.set('token', token)
          Cookies.set('expireAt', new Date(exp))

          if (getSlug()) {
            window.location.pathname = `/donasi-sekali/${getSlug()}/jumlah-donasi`
            removeSlug()
          } else {
            window.location.pathname = '/'
          }
        }
      })
      .catch((err) => {
        setHasError(err.message)
      })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

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
          <p className="font-bold mx-auto text-[24px] mt-[36px]">Masuk</p>
          <p className="mx-auto text-[#717171] text-[14px]">
            Belum memiliki akun?{' '}
            <Link to="/register" className="text-peduly-primary">
              Daftar
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] border-[#CACACA]">
              <input
                name="email"
                type="email"
                autoComplete="off"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                placeholder="Alamat Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
              <input
                name="password"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                placeholder="Password"
                type={passwordType}
                value={passwordInput}
                onChange={handlePasswordChange}
                required
              />
              <div
                onClick={togglePassword}
                className="absolute right-[20px] z-10 "
              >
                {passwordType === 'password' ? (
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
            <div className="flex justify-end mt-[24px]">
              <Link
                to="/password/lupa"
                className="text-peduly-primary text-[14px]"
              >
                Lupa password?
              </Link>
            </div>
            {hasError && (
              <div
                className="bg-red-100 rounded-lg py-2 px-6 mb-3 mt-3 text-base text-red-700 inline-flex items-center w-full"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="times-circle"
                  className="svg-inline--fa fa-times-circle w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
                  />
                </svg>
                email atau password salah
              </div>
            )}
            <button className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]">
              Masuk
            </button>
          </form>
          {isLogin && (
            <Alert
              title="anda ingin logout?"
              desc="logout"
              action={setIsLogin}
            />
          )}
          <div className="my-16">
            <p className="text-center text-[#717171] text-[14px] font-normal">
              Atau masuk dengan
            </p>
            {/* <div className="flex justify-between w-[188px] mx-auto mt-5 mb-16">
              <GoogleLogin />
              <FacebookLogin />
              <MacLogin />
            </div> */}
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
