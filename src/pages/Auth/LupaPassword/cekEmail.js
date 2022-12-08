import BackButton from 'components/BackButton'
import { useEffect } from 'react'
import {
  getLupaKatSandiEmail,
  removeLupaKatSandiEmail,
} from 'utils/cookiesHooks'
import { Redirect } from 'react-router-dom'

const CekEmail = () => {
  useEffect(() => {
    if (getLupaKatSandiEmail() === 'sukses') {
      removeLupaKatSandiEmail()
    }
  }, [])

  if (!getLupaKatSandiEmail()) {
    return <Redirect to="/password/lupa" />
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf="/" txt="Kembali" />
      <div className="mx-[30px]">
        <div className="h-[150px] w-full mt-32 justify-center flex align-middle">
          <svg
            width={120}
            height={120}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 10V40L70 30"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M60 40L50 30"
              stroke="#E7513B"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35 60C15 60 15 68.95 15 80V85C15 98.8 15 110 40 110H80C100 110 105 98.8 105 85V80C105 68.95 105 60 85 60C80 60 78.6 61.05 76 63L70.9 68.4C65 74.7 55 74.7 49.05 68.4L44 63C41.4 61.05 40 60 35 60Z"
              stroke="#E7513B"
              strokeWidth={6}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25 60V40C25 29.95 25 21.65 40 20.2"
              stroke="#E7513B"
              strokeWidth={6}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M95 60V40C95 29.95 95 21.65 80 20.2"
              stroke="#E7513B"
              strokeWidth={6}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="mt-8 flex justify-center mx-auto w-[198px]">
          <span className="text-[24px] font-semibold leading-4">
            Cek Emailmu
          </span>
        </div>
        <div className="mt-4 flex justify-center mx-auto text-gray-400 text-center w-[301px]">
          <p className="text-[12px]">
            Kami telah mengirim instruksi ganti kata sandi baru <br /> ke email
            kamu.
          </p>
        </div>

        <div className="w-full flex justify-center mt-6">
          <button
            className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] h-[60px]"
            onClick={() => {
              window.location.href = 'https://www.google.com/gmail/'
            }}
          >
            Cek Email
          </button>
        </div>
      </div>
    </div>
  )
}

export default CekEmail
