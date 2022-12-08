import { createContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { USER_API } from 'service/API'
import { fetcher } from 'config/axiosHooks'
import { useHistory } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'

const initialState = {
  isLoggedIn: false,
  token: null,
  expireAt: null,
}

export const UserContext = createContext(initialState)

export const UserProvider = (props) => {
  const [user, setUser] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const [namaBank, setNamaBank] = useState('')

  const history = useHistory()

  const getUser = async () => {
    try {
      const res = await fetcher(USER_API)
      if (res) {
        window.localStorage.setItem('id-user', res.data.user.id)
        window.localStorage.setItem('role', res.data.user.role)
        window.localStorage.setItem('telp-user', res.data.user.no_telp)
        window.localStorage.setItem('email-user', res.data.user.email)
        window.localStorage.setItem('name-user', res.data.user.name)
        setUser(res.data.user)
      }
    } catch (error) {
      if (error?.status > 400) {
        Cookies.remove('token')
        Cookies.remove('expireAt')
        history.push('/login')
      }
    }
  }

  useEffect(() => {
    if (getToken()) {
      getUser()
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn: false,
        paymentMethod,
        setPaymentMethod,
        namaBank,
        setNamaBank,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
