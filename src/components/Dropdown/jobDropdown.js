/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { API_URL } from 'config/api'
import { useState } from 'react'
import Cookies from 'js-cookie'

const JobDropdown = (props) => {
  const [pekerjaan, setPekerjaan] = useState({})
  const [token, setToken] = useState()

  function handlePekerjaan(e) {
    setPekerjaan(e.target.value)
    props.value = pekerjaan
  }

  useEffect(() => {
    axios
      .get(`${API_URL}/api/pekerjaan`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setPekerjaan(res.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [token])

  useEffect(() => {
    let data = ''
    try {
      data = Cookies.get('token')
      setToken(data)
    } catch (e) {
      console.log(`Error occured ${e}`)
    }
  }, [])

  const select_figma_styling = {
    paddingLeft: '20px',
    paddingTop: '16px',
    paddingBottom: '16px',
    maxWidth: '374px',
    width: '100%',
    border: '1px solid #CACACA',
    appearance: 'none',
    borderRadius: '30px',
  }

  return (
    <div className="">
      <div className="relative flex items-center mt-2">
        <span
          className="absolute focus:outline-none"
          style={{ right: '24px', top: '48px' }}
        ></span>
        <select
          style={select_figma_styling}
          onChange={(e) => handlePekerjaan(e)}
        >
          {pekerjaan.length > 0 ? (
            pekerjaan.map((pek) => (
              <option value={pek.pekerjaan}>{pek.pekerjaan}</option>
            ))
          ) : (
            <option>Loading...</option>
          )}
        </select>
      </div>
    </div>
  )
}

export default JobDropdown
