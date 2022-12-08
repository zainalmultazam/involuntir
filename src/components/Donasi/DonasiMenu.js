import React from 'react'
import { Link } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'

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

const DonasiMenu = ({ onClickOutside, status }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="w-full  fixed  z-40 bottom-[139px]"
        style={{ maxWidth: '430px' }}
      >
        <div className="flex  justify-end">
          <div className="w-[230px] space-y-4">
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Panduan</h3>
              <Link
                to={'/panduan'}
                ref={clickRef}
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
              >
                <svg
                  width={22}
                  height={23}
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6593 12.6955L15.0197 13.9157C14.0098 14.2524 13.2314 15.0308 12.8948 16.0407L11.6746 19.6803C10.6437 22.815 6.22561 22.7519 5.25784 19.6172L1.15535 6.405C0.355886 3.77519 2.77531 1.35579 5.36304 2.15525L18.5962 6.25771C21.731 7.24652 21.773 11.6646 18.6593 12.6955Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">
                Buat Galang Dana
              </h3>
              <Link
                to={`${getToken() ? '/galangdana' : '/login'}`}
                ref={clickRef}
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12.0001H22"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 22V2"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonasiMenu
