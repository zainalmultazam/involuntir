import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from 'components/Navbar'
import TabProfile from 'components/Profile/TabProfile'

const user = [
  {
    nama: 'Halo Bagas',
    username: '@halobagas',
    desc: 'Saya tertarik dengan segala aktivitas sosial apalagi cat feeding bersama komunitas',
    foto: '/images/images_profile/peduly.png',
    backgroundFoto: '/images/background-images/background-image.png',
    tiktok: 'https://tiktok.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
]

const NewProfille = () => {
  return (
    <div
      style={{ maxWidth: '430px' }}
      className="mx-auto overflow-hidden overflow-y-auto min-h-screen"
    >
      {/* NAVBAWAH */}
      <NavLink />
      <div className="w-full max-w-[430] h-[138px]">
        {user[0].backgroundFoto !== '' ? (
          <img
            src={user[0].backgroundFoto}
            alt=""
            className="w-full max-w-[430] h-[138px] object-cover"
          />
        ) : (
          <div className="w-full max-w-[430] h-[138px] bg-[#d9d9d9]"></div>
        )}
      </div>
      <img
        src={user[0].foto}
        alt=""
        className="relative w-[86px] h-[86px] border-4 border-white rounded-full ml-5"
        style={{
          marginTop: '-43px',
        }}
        onError={(e) => {
          e.target.onerror = null
          e.target.src = '/images/involunter/defaultImage.png'
        }}
      />
      <div className="px-5 flex flex-col mt-3">
        <div className="flex justify-between">
          <h1 className="text-lg text-peduly-dark font-semibold self-center">
            {user[0].nama}
          </h1>
          <Link to={'/newpengaturan'}>
            <button className="px-[15px] py-[10px] text-sm text-peduly-primary font-semibold border border-solid border-peduly-primary rounded-full">
              Pengaturan
            </button>
          </Link>
        </div>
        <h2
          className="text-sm text-peduly-subtitle font-normal"
          style={{
            marginTop: '-8px',
          }}
        >
          {user[0].username}
        </h2>
        {user[0].desc !== '' && (
          <p className="text-sm text-peduly-dark font-normal mt-[14px]">
            Saya tertarik dengan segala aktivitas sosial apalagi cat feeding
            bersama komunitas
          </p>
        )}
        {user[0].instagram !== '' ||
        user[0].linkedin !== '' ||
        user[0].tiktok !== '' ||
        user[0].twitter !== '' ? (
          <div className="flex mt-5">
            {user[0].tiktok !== '' && (
              <Link
                to={{ pathname: `${user[0].tiktok}` }}
                target="_blank"
                className="ml-0 w-6 h-6 mr-5"
              >
                <img
                  src="/icon/sosial-media/tiktok.svg"
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
              </Link>
            )}
            {user[0].instagram !== '' && (
              <Link
                to={{ pathname: `${user[0].instagram}` }}
                target="_blank"
                className="ml-0 w-6 h-6 mr-5"
              >
                <img
                  src="/icon/sosial-media/instagram.svg"
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
              </Link>
            )}
            {user[0].twitter !== '' && (
              <Link
                to={{ pathname: `${user[0].twitter}` }}
                target="_blank"
                className="ml-0 w-6 h-6 mr-5"
              >
                <img
                  src="/icon/sosial-media/twitter.svg"
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
              </Link>
            )}
            {user[0].linkedin !== '' && (
              <Link
                to={{ pathname: `${user[0].linkedin}` }}
                target="_blank"
                className="ml-0 w-6 h-6 mr-5"
              >
                <img
                  src="/icon/sosial-media/linkedin.svg"
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
              </Link>
            )}
          </div>
        ) : (
          ''
        )}

        <div className="mt-8 flex flex-col">
          <Link to={'/galangdana/create'}>
            <div className="flex py-[18px] pl-6 rounded-full w-full items-center border border-solid border-peduly-light">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 9H8.25"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 15H8.25"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-base text-peduly-dark font-semibold ml-2">
                Buat Aktivitas
              </h1>
            </div>
          </Link>
          <Link to={'/donasi'}>
            <div className="flex py-[18px] pl-6 rounded-full w-full items-center border border-solid border-peduly-light mt-[14px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 12.41V7.84004C2.5 6.65004 3.23 5.59 4.34 5.17L12.28 2.17C13.52 1.7 14.85 2.62003 14.85 3.95003V7.75002"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 12H14"
                  stroke="#0288D1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h1 className="text-base text-peduly-dark font-semibold ml-2">
                Donasi
              </h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <TabProfile />
      </div>
    </div>
  )
}

export default NewProfille
