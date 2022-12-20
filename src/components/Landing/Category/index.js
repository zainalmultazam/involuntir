import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from 'axios'
import ProgressBar from '../../../components/ProgressBar'
import data from '../../../json/landing.json'
import IdrFormat from 'utils/IdrFormat'
import { API_URL } from 'config/api'
import SkeletonDonasi from '../../SkeletonLoading/SkeletonDonasi'

const campaigns = [
  {
    id: 1,
    slug: 'rumahzakat',
    judul_campaign: 'Open recruitment anggota baru volunteer bach #20',
    foto: '',
    total_pendaftar: 103,
    batas_waktu: 56,
  },
  {
    id: 1,
    slug: 'yayasanmuamalatindonesia',
    judul_campaign: 'Campaign hari relawan sedunia',
    foto: '',
    total_pendaftar: 100,
    batas_waktu: 56,
  },
  {
    id: 1,
    slug: 'dompetduafa',
    judul_campaign: 'Kasi kampanye virtual: say no to pasung',
    foto: '',
    total_pendaftar: 90,
    batas_waktu: 56,
  },
]

export const Category = () => {
  const kategori = data.kategori
  const [itemKategori, setItemKategori] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await instance.get('/api/galangdana?limit=4')

    const response = await data.data
    setLoading(false)

    setItemKategori(response.data)
  }

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

  async function ChangeCategory(item) {
    setLoading(true)
    const data = await instance.get(`api/galangdana?limit=4&kategori=${item}`)

    const response = await data.data
    setLoading(false)

    setItemKategori(response.data)
  }

  return (
    <div className="mt-[24px]">
      <div className="flex justify-between mx-5">
        <div>
          <p className="text-xl font-semibold text-peduly-dark">
            Aktivitas Terpopuler
          </p>
        </div>
        <div className="flex items-center">
          <Link to="/aktivitas">
            <p className="text-peduly-primary text-basic font-semibold">
              Lihat semua
            </p>
          </Link>
        </div>
      </div>

      <div className="mx-5 overflow-x-scroll whitespace-nowrap py-[16px] pr-[20px]">
        {kategori.map((value) => (
          <button
            key={value.object}
            type="button"
            className="h-[41px] py-[5px] px-[35px] border border-solid border-peduly-primary bg-white text-sm text-peduly-primary rounded-full mr-[10px] hover:shadow-md inline-block"
            onClick={() => ChangeCategory(value.object)}
          >
            <div className="flex flex-row content-center">
              <img
                style={{
                  marginRight: '10px',
                  width: '20px',
                }}
                src={value.imgurl}
                alt=""
              />
              {value.title}
            </div>
          </button>
        ))}
      </div>

      <div
        style={{ marginTop: '10px', maxWidth: '430px' }}
        className="mx-[20px]"
      >
        {campaigns.map((item) => (
          <div key={item.id}>
            <Link
              to={{
                pathname: `/aktivitas/detail`,
              }}
            >
              <div className="grid grid-cols-9 gap-3 my-3">
                <div className="col-span-3">
                  <img
                    src=""
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
                      <p className="text-sm text-peduly-dark ml-[7px] leading-6">
                        Pendaftar <br /> {item.total_pendaftar} Orang
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
                      <p className="text-sm text-peduly-dark ml-[7px] leading-6">
                        Batas Waktu <br /> {item.batas_waktu} Hari lagi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* {!loading ? (
          itemKategori.length <= 0 ? (
            <div className="h-[40px] text-center text-base">
              tidak ditemukan
            </div>
          ) : (
            itemKategori.map((value) => (
              <div key={value.id}>
                <Link
                  to={{
                    pathname: `/donasi-sekali/${value.judul_slug}`,
                  }}
                >
                  <div
                    style={{ marginBottom: '17px', marginTop: '13px' }}
                    className="grid grid-cols-12 gap-4"
                  >
                    <div className="col-span-6">
                      <img
                        src={`${API_URL}/images/images_campaign/${value.foto_campaign}`}
                        alt=""
                        className="w-full h-full"
                        style={{
                          height: '121px',
                          width: '4/6',
                          objectFit: 'cover',
                          borderRadius: '15px',
                        }}
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = '/images/no-picture.png'
                        }}
                      />
                    </div>

                    <div className="col-span-6">
                      <p className="line-clamp-2 text-left font-medium text-base">
                        {value.judul_campaign}
                      </p>
                      <div className="rounded-full progress mt-[10px]">
                        <ProgressBar
                          current={value.total_donasi || value.currentDonasi}
                          target={
                            value
                              ? value.nominal_campaign || value.nominal_campaign
                              : 0
                          }
                          waktu={value.batas_waktu_campaign}
                        />
                      </div>
                      <div
                        className="grid grid-cols-8 font-medium text-xs"
                        style={{ marginTop: '11px' }}
                      >
                        <div className="col-span-5">
                          <p style={{ fontSize: '11px' }}>Target</p>
                          <p
                            style={{
                              fontSize: '12px',
                            }}
                            className="truncate"
                          >
                            Rp {IdrFormat(value.nominal_campaign)}
                          </p>
                        </div>
                        <div className="col-span-3 text-right">
                          <p style={{ fontSize: '11px' }}>Sisa Hari</p>
                          <p
                            style={{
                              fontSize: '12px',
                            }}
                            className="truncate"
                          >
                            {dayToGo(value.batas_waktu_campaign)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )
        ) : (
          <div className="pb-[24px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <SkeletonDonasi />
              </div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  )
}
