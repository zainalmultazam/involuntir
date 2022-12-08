import axios from 'axios'
import { API_URL } from 'config/api'
import Cookies from 'js-cookie'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

const LogoutConfirmation = ({ onClickOutside, status }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  const history = useHistory()

  const handleLogout = (inputUrl, inputToken) => {
    try {
      axios
        .post(inputUrl, {
          headers: {
            Authorization: `Bearer ${inputToken}`,
          },
        })
        .then((res) => res)
        .catch((err) => err)
    } catch (err) {}
  }

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="fixed bottom-0 z-50 bg-white w-full h-[189px] rounded-t-[15px] overflow-hidden"
        ref={clickRef}
        style={{ maxWidth: '430px' }}
      >
        <div className="text-center my-[40px] mx-[36px]">
          <h1 className="text-lg font-normal">Keluar dari Peduly</h1>
        </div>
        <div className="flex items-center justify-center pb-3 text-base font-normal">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-[15px] px-[63px] h-[60px] "
            onClick={() => onClickOutside(true)}
          >
            Batal
          </button>
          <button
            className="bg-peduly-primary text-white rounded-[15px] px-[63px] h-[60px] ml-[12px]"
            onClick={() => {
              handleLogout(`${API_URL}/api/auth/logout`, getToken())
              Cookies.remove('token')
              Cookies.remove('expireAt')
              Cookies.remove('_id')
              window.localStorage.clear()
              history.push('/')
            }}
          >
            Keluar
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutConfirmation
