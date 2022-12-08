import React from 'react'
import { useState } from 'react'
import NavLink from 'components/Navbar'
import NavKategori from 'components/aktivitas/NavKategori'
import IdrFormat from 'utils/IdrFormat'
import ProgressBar from 'components/ProgressBar'
import { Link } from 'react-router-dom'

const items = [
  {
    id: 1,
    slug: 'rumahzakat',
    judul_campaign: 'Open recruitment anggota baru volunteer bach #20',
    foto: '',
    total_donasi: 9000000,
    current_donasi: 9000000,
    nominal_campaign: 10200654,
    batas_waktu_campaign: 56,
  },
  {
    id: 1,
    slug: 'yayasanmuamalatindonesia',
    judul_campaign: 'Campaign hari relawan sedunia',
    foto: '',
    total_donasi: 9000000,
    current_donasi: 9000000,
    nominal_campaign: 10200654,
    batas_waktu_campaign: 56,
  },
  {
    id: 1,
    slug: 'dompetduafa',
    judul_campaign: 'Kasi kampanye virtual: say no to pasung',
    foto: '',
    total_donasi: 9000000,
    current_donasi: 9000000,
    nominal_campaign: 10200654,
    batas_waktu_campaign: 56,
  },
]

const Aktivitas = () => {
  const [clk, setClk] = useState()

  function dayToGo(TargetDay) {
    const firstDate = new Date(TargetDay)
    if (!isNaN(firstDate.getTime())) {
      const oneDay = 24 * 60 * 60 * 1000
      const secondDate = new Date()
      const diffDays = Math.round((firstDate - secondDate) / oneDay)
      if (diffDays <= 0) {
        return 'Berakhir'
      }
      return diffDays + ' Hari'
    }
    return 'Tanpa batas'
  }
  return (
    <div
      style={{ maxWidth: '430px' }}
      className="mx-auto overflow-hidden overflow-y-auto"
    >
      {/* NAVBAWAH */}
      <NavLink />

      <NavKategori />
      <div className="mt-3 px-5">
        {items.map((item) => (
          <div key={item.id}>
            <Link
              to={{
                pathname: `/aktivitas/detail`,
              }}
            >
              <div className="grid grid-cols-9 gap-3 my-3">
                <div className="col-span-3">
                  <img
                    src={`images/images_campaign/${item.foto_campaign}`}
                    alt=""
                    className="w-full h-full"
                    style={{
                      height: '120px',
                      width: '120px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/images/involunter/defaultImage.png'
                    }}
                  />
                </div>

                <div className="col-span-6 ml-[6px]">
                  <p className="line-clamp-2 text-left font-semibold text-base text-peduly-dark">
                    {item.judul_campaign}
                  </p>
                  <div className="flex mt-3">
                    <div className="flex">
                      <svg
                        className="mt-1"
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62253 7.00001C8.43002 7.00001 9.89527 5.65686 9.89527 4.00001C9.89527 2.34315 8.43002 1 6.62253 1C4.81505 1 3.3498 2.34315 3.3498 4.00001C3.3498 5.65686 4.81505 7.00001 6.62253 7.00001Z"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.2451 13C12.2451 10.678 9.72511 8.79999 6.62256 8.79999C3.52 8.79999 1 10.678 1 13"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-peduly-dark ml-[4px] leading-6">
                        Pendaftar <br /> 103 Orang
                      </p>
                    </div>
                    <div className="flex ml-6">
                      <svg
                        className="mt-1"
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.875 13C2.977 13 0.625 10.648 0.625 7.75C0.625 4.852 2.977 2.5 5.875 2.5C8.773 2.5 11.125 4.852 11.125 7.75"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.875 4.60001V7.60001"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.075 1H7.675"
                          stroke="#212121"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.075 10V12.4"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.275 10V12.4"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-peduly-dark ml-[4px] leading-6">
                        Batas Waktu <br /> 63 Hari lagi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* {items.map((item) => (
          <div key={item.id}>
            <Link
              to={{
                pathname: `/aktivitas/detail`,
              }}
            >
              <div
                style={{ marginBottom: '17px', marginTop: '13px' }}
                className="flex px-5 my-3"
              >
                <div className="mr-5">
                  <img
                    src={`images/images_campaign/${item.foto_campaign}`}
                    alt=""
                    className="w-full h-full"
                    style={{
                      height: '120px',
                      width: '120px',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/images/involunter/defaultImage.png'
                    }}
                  />
                </div>

                <div className="block">
                  <p className="line-clamp-2 text-left font-semibold text-base text-peduly-dark mt-[10px]">
                    {item.judul_campaign}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex">
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62253 7.00001C8.43002 7.00001 9.89527 5.65686 9.89527 4.00001C9.89527 2.34315 8.43002 1 6.62253 1C4.81505 1 3.3498 2.34315 3.3498 4.00001C3.3498 5.65686 4.81505 7.00001 6.62253 7.00001Z"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.2451 13C12.2451 10.678 9.72511 8.79999 6.62256 8.79999C3.52 8.79999 1 10.678 1 13"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-peduly-dark ml-[7px]">
                        Pendaftar <br /> 103 Orang
                      </p>
                    </div>
                    <div className="flex">
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.62253 7.00001C8.43002 7.00001 9.89527 5.65686 9.89527 4.00001C9.89527 2.34315 8.43002 1 6.62253 1C4.81505 1 3.3498 2.34315 3.3498 4.00001C3.3498 5.65686 4.81505 7.00001 6.62253 7.00001Z"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.2451 13C12.2451 10.678 9.72511 8.79999 6.62256 8.79999C3.52 8.79999 1 10.678 1 13"
                          stroke="#212121"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-peduly-dark ml-[7px]">
                        Batas Waktu <br /> 56 Hari lagi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))} */}
    </div>
  )
}

export default Aktivitas
