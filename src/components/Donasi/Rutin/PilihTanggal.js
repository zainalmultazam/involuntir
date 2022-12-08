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

const PilihTanggal = ({ onClickOutside, status, pilihTanggal }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  // tanggal yang ditampilkan
  let tanggal = [],
    i = 0,
    len = 31
  while (++i <= len) tanggal.push(i)

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="fixed bottom-0 z-50 h-4/5 bg-white w-full rounded-t-[15px] overflow-y-auto"
        ref={clickRef}
        style={{ maxWidth: '430px' }}
      >
        <div className="relative">
          <div className="pt-[24px] sticky top-0 bg-white">
            <div className="mx-[20px] inline-flex">
              <div onClick={() => onClickOutside()} className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57 5.92999L3.5 12L9.57 18.07"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.4999 12H3.66992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-[16px] text-base font-medium">
                Pilih tanggal donasi rutin
              </span>
            </div>
            <hr className="mt-[24px]" />
          </div>

          {tanggal.map(function (i) {
            return (
              <>
                <div
                  className="bg-[#E4E4E44D] cursor-pointer"
                  onClick={() => pilihTanggal(i)}
                >
                  <p className="px-[20px] py-[15px] font-medium text-base text-center">
                    {i}
                  </p>
                </div>
                <hr style={{ border: '0.5px solid #E4E4E480' }} />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PilihTanggal
