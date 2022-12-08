import TopUp from 'components/Akun/Balance/TopUp'
import NavLink from 'components/Navbar'
import { UserContext } from 'context/UserContext'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function DashboardTopUp() {
  const [popUp, setPopUp] = useState(false)
  const { user } = useContext(UserContext)
  return (
    <>
      {popUp && (
        <div
          className="fixed z-30 w-full h-full mx-auto"
          style={{ background: 'rgb(111, 111, 111, 0.5)' }}
        ></div>
      )}
      {popUp ? (
        <TopUp
          status={popUp}
          onClickOutside={() => (popUp ? setPopUp(!popUp) : null)}
        />
      ) : (
        <div className="mx-auto" style={{ maxWidth: '414px' }}>
          <NavLink />
        </div>
      )}
      <div className="mx-auto max-w-[430px]  mb-[104px]">
        <div className="flex flex-col">
          <div className="top-0 z-20 bg-peduly-primary ">
            <div className="w-[414px]">
              <div className="mx-[20px] inline-flex items-center h-[72px]">
                <div>
                  <Link to={`/profile/${user.id}`}>
                    <svg
                      className="cursor-pointer"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.57 5.92999L3.5 12L9.57 18.07"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.4999 12H3.66992"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <span className=" relative ml-[16px]  text-[16px] leading-[21.79px] font-normal text-white mt-1">
                  Dompet Peduly
                </span>
              </div>
            </div>
          </div>
          <div className=" bg-[#E7513B] " style={{ height: '130px' }}>
            <h1
              className="py-6 ml-1 font-medium text-white px-14 "
              style={{ fontSize: '30px' }}
            >
              <span className="text-2xl">Rp.</span> 120.000
            </h1>
          </div>
        </div>
        <div className="relative items-center justify-center mx-auto bg-white rounded-2xl ">
          <div
            className="absolute z-10 inset-x-0 mx-auto  grid  grid-cols-2  bg-white w-[90%] divide-gray-200 rounded-2xl"
            style={{
              marginTop: '-42px',
              boxShadow: 'rgba(0,0,0,0.06) 0px 1px 16px',
            }}
          >
            <button
              type="button"
              className="z-10 flex flex-col items-center pt-4 pb-2 border-r-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M2 8.5h12.5M6 16.5h2M10.5 16.5h4"
                ></path>
                <path
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06M20 9.5v-6l2 2M20 3.5l-2 2"
                ></path>
              </svg>
              <p className="py-1 text-base text-gray-500 font-normalleading-relaxed">
                Tarik Dana
              </p>
            </button>
            <button
              type="button"
              onClick={() => {
                setPopUp(true)
              }}
              className="z-10 flex flex-col items-center pt-4 pb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10c-.28 0-.55.02-.81.06.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 014.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26z"
                ></path>
                <path
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M9 19c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 015 23a3.97 3.97 0 01-3.42-1.94A3.92 3.92 0 011 19c0-2.21 1.79-4 4-4s4 1.79 4 4zM6.492 18.98h-2.98M5 17.52v2.99"
                ></path>
                <path
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-2.72 1.64-4.62 4.19-4.94.26-.04.53-.06.81-.06h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12z"
                ></path>
                <path
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"
                ></path>
              </svg>
              <p className="py-1 text-base font-normal leading-relaxed text-gray-500">
                Top Up Saldo
              </p>
            </button>
          </div>
        </div>
        <div className="relative grid grid-cols-1 px-4 py-10 ">
          <h1 className="py-4 text-xl font-semibold border-b text-peduly-dark">
            Transaksi Terakhir
          </h1>
          <div className="flex justify-between py-6 border-b ">
            <div className="flex flex-col">
              <p className="text-base font-semibold text-peduly-dark">
                Penarikan Dana
              </p>
              <p className="text-base text-gray-400">12/12/2022 19:45</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-semibold text-peduly-dark">
                Rp132.000.000
              </p>
              <p className="text-base text-right text-peduly-success">
                Berhasil
              </p>
            </div>
          </div>
          <div className="flex justify-between py-6 border-b">
            <div className="flex flex-col">
              <p className="text-base font-semibold text-peduly-dark">
                Top Up Saldo
              </p>
              <p className="text-base text-gray-400">12/12/2022 19:45</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-semibold text-peduly-dark">
                Rp132.000.000
              </p>
              <p className="text-base text-right text-peduly-danger">
                Dibatalkan
              </p>
            </div>
          </div>
        </div>
        <NavLink />
      </div>
    </>
  )
}
