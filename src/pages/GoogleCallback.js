import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
import axios from 'axios'
import { API_URL } from 'config/api.js'

function GoogleCallback() {
  const location = useLocation()

  useEffect(() => {
    axios
      .get(`${API_URL}/api/auth/google/callback${location.search}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        sessionStorage.setItem('isLoggedIn', true)
        const token = res.data.token
        const decode = jwt(token)
        const exp = decode.exp * 1000

        Cookies.set('token', token)
        Cookies.set('expireAt', new Date(exp))
        history.push('/')
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory()

  return <div>Loading...</div>
}

export default GoogleCallback
