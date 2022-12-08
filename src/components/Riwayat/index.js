import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import IdrFormat from 'utils/IdrFormat'
import moment from 'moment'
import { getToken } from 'utils/cookiesHooks'
import { fetcher } from 'config/axiosHooks'
import { API_URL } from 'config/api'
import Cookies from 'js-cookie'
import NullRiwayat from 'components/Riwayat/NullRiwayat'
import 'moment/locale/id'
import SkeletonRiwayatDonasi from 'components/SkeletonLoading/SkeletonRiwayatDonasi'
import NullRiwayatLogin from './NullRiwayatLogin'

export const Donasi = () => {
  const [listRiwayat, setListRiwayat] = useState([])
  const [sekeltonLoading, setSekeltonLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    if (getToken()) getRiwayat()
    const loading = setTimeout(() => {
      if (listRiwayat.length === 0) setSekeltonLoading(false)
    }, 1500)
    return () => clearTimeout(loading)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const getRiwayat = async () => {
    try {
      const data = await fetcher(`${API_URL}/api/donation/histories`, {
        method: 'GET',
      })

      const response = await data.data

      setListRiwayat(response)
    } catch (err) {
      if (err?.status > 400) {
        Cookies.remove('token')
        Cookies.remove('expireAt')
        history.push('/login')
      }
    }
  }

  const bulan = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div style={{ marginTop: '70px' }}>
      {getToken() ? (
        listRiwayat.length > 0 ? (
          listRiwayat.map((data, i, r) => (
            <div
              className="text-[12px] leading-[19.2px] font-semibold"
              key={i}
              style={{ marginBottom: i + 1 === r.length ? '65px' : '' }}
            >
              <div
                className=" text-[#717171]"
                style={{ backgroundColor: 'rgba(228, 228, 228, 0.3)' }}
              >
                <div className="mx-[20px] flex justify-between h-[40px]">
                  <div className="flex items-center">
                    <p>
                      {
                        bulan[
                          parseInt(
                            data.month_year.split('-')[0].replace(/^0+/, '') - 1
                          )
                        ]
                      }{' '}
                      {data.month_year.split('-')[1]}
                    </p>
                    <svg
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-[12px]"
                    >
                      <circle cx="2" cy="2" r="2" fill="#212121" />
                    </svg>
                    <p>Rp {IdrFormat(data.total_donasi)}</p>
                  </div>
                  <div className="flex items-center">
                    <p>{data.jumlah_donasi} Donasi</p>
                  </div>
                </div>
              </div>
              {data.donasi.map((donasi, i) => (
                <div className="mx-[20px]" key={i}>
                  <Link to={`/riwayat/detail/${donasi.id}`}>
                    <div
                      style={{ marginBottom: '5px', marginTop: '10px' }}
                      className="grid grid-cols-12 gap-4"
                    >
                      <div className="col-span-6 ">
                        <img
                          src={`${API_URL}/images/images_campaign/${donasi.foto_campaign}`}
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
                        <p className="text-left line-clamp-2 font-normal text-base">
                          {donasi.judul_campaign}
                        </p>
                        <div
                          className="grid grid-cols-6 text-[#717171] text-[10px]"
                          style={{ marginTop: '5px' }}
                        >
                          <p className="col-span-3 font-normal text-[#717171] line-clamp-2">
                            {moment(donasi.created_at).fromNow()}
                          </p>
                          <p className="col-span-3 font-normal text-[#717171] truncate">
                            • Rp {IdrFormat(donasi.donasi)}
                          </p>
                        </div>
                        <div className="mt-[10px] ml-[5px]">
                          {donasi.status_donasi === 'Approved' && (
                            <span className="bg-[#34A853] text-white font-semibold text-[10px] leading-4 py-[8px] px-[10px] rounded-[30px]">
                              Berhasil
                            </span>
                          )}
                          {(donasi.status_donasi === 'Rejected' ||
                            donasi.status_donasi === 'Refund') && (
                            <span className="bg-[#E7513B] text-white font-semibold text-[10px] leading-4 py-[8px] px-[10px] rounded-[30px]">
                              Dibatalkan
                            </span>
                          )}
                          {donasi.status_donasi === 'Pending' && (
                            <span className="bg-[#FCAE03] text-white font-semibold text-[10px] leading-4 py-[8px] px-[10px] rounded-[30px]">
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))
        ) : sekeltonLoading ? (
          <div className="mt-[94px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <SkeletonRiwayatDonasi />
              </div>
            ))}
            <span className="opacity-0 cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              consequuntur!
            </span>
          </div>
        ) : (
          <NullRiwayatLogin />
        )
      ) : (
        <NullRiwayat />
      )}
    </div>
  )
}
