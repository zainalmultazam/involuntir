import React from 'react'
import { Link, useHistory } from 'react-router-dom'

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

const DetailKategori = ({ onClickOutside, status, kategori, detail }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  const history = useHistory()

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="fixed bottom-0 z-50 bg-white w-full h-[488px] rounded-t-[30px] overflow-hidden"
        ref={clickRef}
        style={{ maxWidth: '430px' }}
      >
        <div className="mt-[24px] mx-[20px]">
          <div className="text-large">
            <h1 className=" font-medium mb-[12px]">{kategori}</h1>
            <div dangerouslySetInnerHTML={{ __html: detail }} />
          </div>
        </div>
        <div
          className="fixed w-full bottom-[24px]"
          style={{ maxWidth: '430px' }}
        >
          <div className="grid grid-cols-2 gap-3 mx-[20px] ">
            <button
              className="bg-[#E4E4E4] text-[#717171] rounded-[30px]  h-[60px] "
              onClick={() => onClickOutside(true)}
            >
              Batal
            </button>
            <button
              className="bg-peduly-primary text-white rounded-[30px] h-[60px]"
              onClick={() => history.push('/galangdana/create/step')}
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailKategori
