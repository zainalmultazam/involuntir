import axios from 'axios'
import Spinner from 'components/loaders/Spinner'
import { API_URL } from 'config/api'
import { useEffect } from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import isExistGalangdana from 'service/isExistGalangdana'
import { setReferal } from 'utils/cookiesHooks'

const CampaignMiddleware = ({ children }) => {
  /* A hook that is used to set the state of the component. */
  const [exist, setExist] = useState(false)
  const [loading, setLoading] = useState(true)

  // substring for remove '/' from the beginning of the path
  const path = window.location.pathname.substring(1)

  // get reveral
  const queryParams = new URLSearchParams(window.location.search)
  const referal = queryParams.get('rel')

  const checkReferal = async () => {
    let getData = await axios.get(
      `${API_URL}/api/donation/checkreferal?referal=${referal}`
    )
    const res = await getData.data.status
    if (res === 201) {
      setReferal(referal)
    }
  }

  useEffect(() => {
    if (referal) {
      checkReferal()
    }
    isExistGalangdana(path, setExist, setLoading)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /* Redirecting to the donasi-sekali page if the slug exists in the database. galang dana donasi sekali */
  if (!loading) {
    if (exist) {
      return <Redirect to={`/donasi-sekali/${path}`} />
    }
    return children
  }

  /* A loading spinner. */
  return (
    <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
      <Spinner color="#e7513b" />
    </div>
  )
}

export default CampaignMiddleware
