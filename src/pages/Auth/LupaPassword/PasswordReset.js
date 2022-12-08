import { useState } from 'react'
import { Redirect, useHistory, useLocation } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from 'config/api'
import { setPasswordReset } from 'utils/cookiesHooks'

const PasswordReset = () => {
  const [errorMsg, setErrorMsg] = useState({})
  const [passwordType, setPasswordType] = useState('password')
  const [passwordConfirmType, setPasswordConfirmType] = useState('password')
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const search = useLocation().search
  const history = useHistory()

  const email = new URLSearchParams(search).get('email')
  const token = new URLSearchParams(search).get('token')

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value)
  }

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value)
  }

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text')
      return
    }
    setPasswordType('password')
  }

  const togglePasswordConfirm = () => {
    if (passwordConfirmType === 'password') {
      setPasswordConfirmType('text')
      return
    }
    setPasswordConfirmType('password')
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    if (
      passwordInput === passwordConfirm &&
      passwordInput !== '' &&
      passwordConfirm !== ''
    ) {
      axios
        .get(
          `${API_URL}/api/password/resetpassword?email=${email}&token=${token}&new_pass=${passwordConfirm}`
        )
        .then((response) => {
          if (response.data.status === 201) {
            setPasswordReset()
            history.push({
              pathname: `/password/reset/berhasil`,
              state: {
                H1: 'Selamat!',
                P1: 'Akun kamu bisa digunakan kembali',
                hrf: '/login',
                Button: 'Masuk',
              },
            })
          } else if (response.data.status === 202) {
            window.alert(response.data.msg)
          }
        })
        .catch((error) => {
          setErrorMsg(error.response.data.error)
        })
    }
  }

  if (!email || !token) {
    return <Redirect to="/password/lupa" />
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="mx-[30px]">
        <div className="mx-margin-left mt-32">
          <div className="w-[246px]">
            <span className="text-[24px] leading-4 font-semibold">
              Buat Password Baru
            </span>
          </div>
          <div className="w-[315px] text-gray-400">
            <p className="text-[16px] leading-5 font-normal">
              Password harus berbeda dari sebelumnya dan belum pernah digunakan
            </p>
          </div>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="mt-[24px] w-full  block justify-center ">
            <div className="relative">
              <label
                htmlFor="pwd"
                className="text-left font-normal text-basic mx-margin-left "
              >
                kata sandi baru
              </label>
              <div className="relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
                <input
                  id="pwd"
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
            </div>
            {errorMsg.password ? (
              <p className=" text-small text-peduly-danger mt-1">
                {errorMsg.password[0]}
              </p>
            ) : (
              ''
            )}
          </div>

          <div className="mt-[24px] w-full  block justify-center ">
            <label
              htmlFor="pwdConfirm"
              className="text-left font-normal text-basic mx-margin-left "
            >
              Konfirmasi kata sandi
            </label>
            <div className="relative w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[20px] border-[#CACACA]">
              <input
                id="pwdConfirm"
                name="password"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                placeholder="Password"
                type={passwordConfirmType}
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                required
              />
              <div
                onClick={togglePasswordConfirm}
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
            {passwordInput !== passwordConfirm && passwordConfirm ? (
              <div
                class="bg-red-100 rounded-lg py-2 px-6 mb-3 mt-5 text-base text-red-700 inline-flex items-center w-full"
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
                Password Harus sama
              </div>
            ) : (
              ''
            )}
          </div>

          <div className="w-full flex justify-center mt-8 ">
            <button
              className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]"
              type="submit"
            >
              Ubah Kata Sandi
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default PasswordReset
