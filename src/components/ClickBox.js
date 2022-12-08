import axios from 'axios'
import { API_URL } from 'config/api'
import React from 'react'

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

const ClickBox = ({ onClickOutside, status, idCampaign, reload }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  const updateYes = async () => {
    onClickOutside(false)
    await axios
      .get(`${API_URL}/api/fundraiser/approve?id_donasi=${idCampaign}`)
      .then((res) => {
        reload()
      })
      .catch((err) => {})
  }

  const updateNo = async () => {
    onClickOutside(false)
    await axios
      .get(`${API_URL}/api/fundraiser/ditolak?id_donasi=${idCampaign}`)
      .then((res) => {
        reload()
      })
      .catch((err) => {})
  }

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="fixed bottom-0 z-50 bg-white w-full h-[259px] rounded-t-[15px] overflow-hidden"
        ref={clickRef}
        style={{ maxWidth: '430px' }}
      >
        <div className="text-center mt-[40px] mx-[36px]">
          <h3 className="text-black text-lg font-medium">
            Konfirmasi pembayaran donasi{' '}
          </h3>
          <p className="text-[#717171] text-sm font-normal mt-[16px]">
            Dengan menerima donasi kamu bertanggung jawab atas semua informasi
            yang diberikan donatur
          </p>
        </div>
        <div className="flex items-center justify-center mt-[45px] pb-3">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-[15px] px-[63px] h-[60px] "
            onClick={() => updateNo()}
          >
            Tolak
          </button>
          <button
            className="bg-[#34A853] text-white rounded-[15px] px-[63px] h-[60px] ml-[12px]"
            onClick={() => updateYes()}
          >
            Terima
          </button>
        </div>
      </div>
    </div>
  )
}

export default ClickBox
