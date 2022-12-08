import { useState } from 'react'
import DonasiMenu from './DonasiMenu'

const NavDonasiMenu = () => {
  const [popUp, setPopUp] = useState(false)
  return (
    <div>
      {popUp && (
        <div
          className="mx-auto w-full h-full fixed z-30"
          style={{ background: 'rgba(255, 255, 255, 0.9)' }}
        ></div>
      )}
      <div
        className="w-ful flex justify-end mx-auto"
        style={{ maxWidth: '430px' }}
      >
        <div className="fixed bottom-[70px] mr-[19px] flex justify-end items-center max-w-[430px] z-50">
          {popUp ? (
            <span
              className="flex justify-center items-center w-[56px] h-[56px] bg-white rounded-full cursor-pointer"
              style={{ boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.25)' }}
              onClick={() => setPopUp(!popUp)}
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07111 16.0712L16.2132 1.92903"
                  stroke="#E7513B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.2132 16.071L2.07111 1.92883"
                  stroke="#E7513B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          ) : (
            <span
              className="flex justify-center items-center w-[56px] h-[56px] bg-peduly-primary rounded-full cursor-pointer"
              style={{ boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.25)' }}
              onClick={() => setPopUp(!popUp)}
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
            </span>
          )}
        </div>
      </div>
      <div className="mx-auto" style={{ maxWidth: '430px' }}>
        <DonasiMenu
          status={popUp}
          onClickOutside={() => (popUp ? setPopUp(!popUp) : null)}
        />
      </div>
    </div>
  )
}

export default NavDonasiMenu
