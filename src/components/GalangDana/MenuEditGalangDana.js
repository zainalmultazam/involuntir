import React from 'react'
import { Link } from 'react-router-dom'

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

const MenuEditGalangDana = ({ onClickOutside, status }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="w-full  fixed  z-40 bottom-[94px]"
        style={{ maxWidth: '430px' }}
      >
        <div className="flex  justify-end">
          <div className="w-[210px] space-y-4">
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Bagikan</h3>
              <Link
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={20}
                  height={22}
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 7.00002C17.6569 7.00002 19 5.65687 19 4.00001C19 2.34315 17.6569 1 16 1C14.3431 1 13 2.34315 13 4.00001C13 5.65687 14.3431 7.00002 16 7.00002Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.00001 13.5713C5.65687 13.5713 7.00002 12.2282 7.00002 10.5713C7.00002 8.91444 5.65687 7.57129 4.00001 7.57129C2.34315 7.57129 1 8.91444 1 10.5713C1 12.2282 2.34315 13.5713 4.00001 13.5713Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.59009 12.51L13.4201 16.49"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4101 5.50977L6.59009 9.48978"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Panduan</h3>
              <Link
                to={`/panduan`}
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
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
                Verifikasi Akun
              </h3>
              <Link
                to={'/pengaturan/verifikasi-akun'}
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={25}
                  height={26}
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3081 13C14.6218 13 17.3081 10.3137 17.3081 7C17.3081 3.68629 14.6218 1 11.3081 1C7.9944 1 5.30811 3.68629 5.30811 7C5.30811 10.3137 7.9944 13 11.3081 13Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 25.0001C1 20.3561 5.62 16.6001 11.308 16.6001C12.46 16.6001 13.576 16.7561 14.62 17.0441"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.308 20.1999C23.308 21.0999 23.056 21.9519 22.612 22.6719C22.36 23.1039 22.036 23.4879 21.664 23.7999C20.824 24.5559 19.72 24.9999 18.508 24.9999C16.756 24.9999 15.232 24.0639 14.404 22.6719C13.96 21.9519 13.708 21.0999 13.708 20.1999C13.708 18.6879 14.404 17.3319 15.508 16.4559C16.336 15.7959 17.38 15.3999 18.508 15.3999C21.16 15.3999 23.308 17.5479 23.308 20.1999Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.636 20.1999L17.824 21.3879L20.38 19.0239"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">List Donatur</h3>
              <Link
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.25654 11.7461C9.13539 11.734 8.99001 11.734 8.85674 11.7461C5.97335 11.6492 3.68359 9.28672 3.68359 6.3791C3.68359 3.4109 6.08238 1 9.0627 1C12.0309 1 14.4418 3.4109 14.4418 6.3791C14.4297 9.28672 12.1399 11.6492 9.25654 11.7461Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.0401 3.4231C20.3904 3.4231 22.2803 5.32517 22.2803 7.66338C22.2803 9.95313 20.4631 11.8189 18.1976 11.9037C18.1006 11.8915 17.9916 11.8915 17.8826 11.9037"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.19889 16.2165C0.267037 18.1792 0.267037 21.3775 3.19889 23.3281C6.53054 25.5572 11.9944 25.5572 15.3261 23.3281C18.258 21.3654 18.258 18.167 15.3261 16.2165C12.0066 13.9994 6.54266 13.9994 3.19889 16.2165Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3782 22.8071C21.2505 22.6254 22.0743 22.2741 22.7527 21.7531C24.6427 20.3357 24.6427 17.9974 22.7527 16.58C22.0864 16.0711 21.2747 15.7319 20.4145 15.5381"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Tulis Kabar</h3>
              <Link
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12H22"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V2"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Tarik Dana</h3>
              <Link
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={31}
                  height={26}
                  viewBox="0 0 31 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.05884H18.6471"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.64697 19.353H9.4705"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 19.353H18.6471"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.2353 15.8659V18.8024C29.2353 23.7576 27.9788 25 22.9671 25H7.26824C2.25647 25 1 23.7576 1 18.8024V7.19765C1 2.24235 2.25647 1 7.26824 1H18.6471"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.4119 9.47059V1L29.2354 3.82353"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.4117 1L23.5881 3.82353"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Edit</h3>
              <Link
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={26}
                  height={26}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.666 1.29761H9.29579C3.37023 1.29761 1 3.66783 1 9.5934V16.7041C1 22.6296 3.37023 24.9999 9.29579 24.9999H16.4065C22.332 24.9999 24.7023 22.6296 24.7023 16.7041V14.3339"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6388 2.50655L8.30012 11.8452C7.94459 12.2008 7.58905 12.9 7.51794 13.4096L7.00835 16.9768C6.81873 18.2686 7.73127 19.1692 9.02304 18.9915L12.5902 18.4819C13.088 18.4108 13.7872 18.0552 14.1546 17.6997L23.4933 8.36101C25.105 6.74926 25.8635 4.87678 23.4933 2.50655C21.123 0.136324 19.2506 0.894797 17.6388 2.50655Z"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2998 3.84546C17.0938 6.67788 19.31 8.89404 22.1543 9.69992"
                    stroke="white"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-end ">
              <h3 className="text-base font-normal text-right">Hapus</h3>
              <Link
                className="flex items-center justify-center relative w-[56px] h-[56px] rounded-full bg-peduly-primary mx-[20px] cursor-pointer"
                ref={clickRef}
              >
                <svg
                  width={24}
                  height={26}
                  viewBox="0 0 24 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.6 5.77603C18.604 5.38003 14.584 5.17603 10.576 5.17603C8.2 5.17603 5.824 5.29603 3.448 5.53603L1 5.77603"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.6001 4.564L7.8641 2.992C8.0561 1.852 8.2001 1 10.2281 1H13.3721C15.4001 1 15.5561 1.9 15.7361 3.004L16.0001 4.564"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.0201 9.56787L19.2401 21.6519C19.1081 23.5359 19.0001 24.9999 15.6521 24.9999H7.94808C4.60008 24.9999 4.49208 23.5359 4.36008 21.6519L3.58008 9.56787"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.7959 18.3999H13.7919"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.7998 13.6001H14.7998"
                    stroke="white"
                    strokeWidth={2}
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

export default MenuEditGalangDana
