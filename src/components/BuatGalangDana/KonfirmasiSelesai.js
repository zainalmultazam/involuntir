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

const KonfirmasiSelesai = ({ onClickOutside, status }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  const history = useHistory()

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="fixed bottom-0 z-50 bg-white w-full h-[414px] rounded-t-[30px] overflow-hidden"
        ref={clickRef}
        style={{ maxWidth: '430px' }}
      >
        <div className="mx-[20px] pt-[24px]">
          <h1 className="text-large font-medium">Syarat dan ketentuan</h1>
          <p className="text-large font-normal mt-[16px]">
            Dengan ini, saya menyatakan dan setuju bahwa:
          </p>
          <ol className="list-decimal ml-4 text-base font-normal mt-[16px] space-y-2">
            <li>
              Galang dana ini sesuai dengan{' '}
              <a
                href="https://help.peduly.com/syarat-ketentuan/"
                className="text-peduly-primary"
                to=""
              >
                syarat dan ketentuan Peduly
              </a>
            </li>
            <li>
              Peduly akan mengenaan biaya administrasi sebesar 5% dari donasi
              yang masuk
            </li>
            <li>
              Bank atau dompet digital akan mengenakan{' '}
              <Link className="text-peduly-primary" to={'/biaya'}>
                biaya transaksi
              </Link>{' '}
              yang diambil dari dana donasi yang masuk
            </li>
          </ol>
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
              onClick={() => history.push('/galangdana/create/preview')}
            >
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KonfirmasiSelesai
