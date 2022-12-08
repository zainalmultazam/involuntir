import { useEffect } from 'react'

const VerifikasiBerhasil = () => {
  useEffect(() => {
    let toLogin = setTimeout(() => (window.location.href = '/login'), 3000)
    return () => {
      clearTimeout(toLogin)
    }
  }, [])

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="mx-[30px]">
        <div className="h-[150px] w-full mt-32 justify-center flex align-middle">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.863 0 0 26.8629 0 60C0 93.1371 26.863 120 60 120Z"
              fill="#E7513B"
            />
            <path
              d="M54.0537 82.8878C52.7039 82.8901 51.3899 82.4534 50.31 81.6436L50.243 81.5934L36.1422 70.8067C35.4881 70.3064 34.9391 69.6821 34.5265 68.9694C34.1139 68.2568 33.8458 67.4698 33.7375 66.6535C33.6292 65.8372 33.6829 65.0075 33.8955 64.212C34.1081 63.4164 34.4754 62.6706 34.9764 62.0171C35.4774 61.3636 36.1023 60.8152 36.8154 60.4033C37.5284 59.9915 38.3157 59.7242 39.1321 59.6168C39.9486 59.5094 40.7782 59.564 41.5735 59.7774C42.3688 59.9909 43.1143 60.3589 43.7673 60.8606L52.9006 67.8646L74.4833 39.7076C75.494 38.3892 76.987 37.5264 78.6339 37.3088C80.2808 37.0913 81.9468 37.5369 83.2651 38.5476L83.2669 38.549L83.1331 38.7349L83.2707 38.549C84.5877 39.5611 85.4494 41.0545 85.6666 42.7012C85.8838 44.348 85.4388 46.0137 84.4293 47.3327L59.0434 80.4366C58.4561 81.1994 57.701 81.8166 56.8366 82.2404C55.9723 82.6642 55.0219 82.8832 54.0592 82.8804L54.0537 82.8878Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="mt-4 flex justify-center mx-auto text-center">
          <span className="text-[24px] font-semibold leading-[32.68px]">
            Verifikasi Berhasil
          </span>
        </div>
        <div className="mt-4 flex justify-center mx-auto text-gray-400 text-center">
          <p className="text-[14px] leading-[14.07px] font-semibold">
            Sekarang sudah bisa masuk ke akun kamu
          </p>
        </div>

        <div className="w-full flex justify-center my-40">
          <button
            className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] h-[60px]"
            onClick={() => {
              window.location.href = '/login'
            }}
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  )
}

export default VerifikasiBerhasil
