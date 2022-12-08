import { fetcher } from 'config/axiosHooks'
import moment from 'moment'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import BackButton from 'components/BackButton'
import { API_URL } from 'config/api'
import IdrFormat from 'utils/IdrFormat'

import 'moment/locale/id'
import SkeletonRiwayat from 'components/SkeletonLoading/SkeletonRiwayat'

function DetailDonasi() {
  const [detail, setDetail] = useState({})
  const [tanggal, setTanggal] = useState('')
  const [loading, setLoading] = useState(false)

  const { id, slug } = useParams()

  const history = useHistory()

  useEffect(() => {
    getDetail()
  }, []) // eslint-disable-line

  const getDetail = async () => {
    try {
      const data = await fetcher(`api/donation/histories/${id}/details`)
      const response = await data.data
      setDetail(response.data)
      setTanggal(
        moment(response.data.created_at).format('DD-MM-YYYY HH:mm') + ' WIB'
      )
      setLoading(true)
    } catch (err) {
      if (err.response.status === 401) {
        history.push('/login')
      }
    }
  }

  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto">
      <BackButton hrf={'1'} txt="Pembayaran" />
      {loading ? (
        <div style={{ marginTop: '70px' }}>
          {detail.status_donasi === 'Approved' && (
            <div className="text-center mt-[94px]">
              <h1 className="text-[18px] leading-[24.51px] font-medium">
                Donasi Berhasil
              </h1>
              <p className="font-medium text-[12px] leading-[19.2px] text-[#717171] mt-[12px]">
                Transaksi donasi berhasil dilakukan dan tercatat dalam sistem
              </p>
            </div>
          )}
          {(detail.status_donasi === 'Rejected' ||
            detail.status_donasi === 'Rejected') && (
            <div className="text-center mt-[94px]">
              <h1 className="text-[18px] leading-[24.51px] font-medium">
                Donasi Dibatalkan
              </h1>
              <p className="font-medium text-[12px] leading-[19.2px] text-[#717171] mt-[12px]">
                Transaksi donasi dibatalkan karena batas waktu telah berakhir
              </p>
            </div>
          )}
          {detail.status_donasi === 'Pending' && (
            <div className="text-center ">
              <h3 className="text-[18px] font-medium leading-[24.51px] mt-[94px]">
                Menunggu pembayaran
              </h3>
              <p className="text-[12px] font-medium leading-[19.2px] text-[#717171] mt-[12px]">
                Segera lakukan pembayaran sebelum
              </p>
              <p className="text-[12px] font-medium leading-[19.2px] mt-[4px]">
                {detail.deadline &&
                  moment(detail.deadline).format('DD-MM-YYYY HH:mm') + ' WIB'}
              </p>
              <hr className="hr-bold  mx-[20px] mt-[18px]" />
              {detail.status_donasi && detail.status_donasi !== 'Approved' && (
                <Link
                  to={`/donasi-sekali/${slug}/jumlah-donasi/pembayaran/instruksi?idn=${detail.kode_donasi}`}
                  className="flex items-center justify-center my-[18px]"
                >
                  <p className="text-[12px] font-medium leading-[19.2px] text-[#E7513B]">
                    Lihat intruksi pembayaran
                  </p>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.19751 11.62L9.00084 7.81667C9.45001 7.3675 9.45001 6.6325 9.00084 6.18334L5.19751 2.38"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
              <hr className="border-b-[2px] border-[#E4E4E4]" />
            </div>
          )}

          <div className="mx-[20px] py-[20px]">
            <div
              style={{ marginBottom: '5px', marginTop: '10px' }}
              className="grid grid-cols-12 gap-4"
            >
              <div className="col-span-6 ">
                <img
                  src={`${API_URL}/images/images_campaign/${detail.foto_campaign}`}
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
                  {detail.judul_campaign}
                </p>
                <div
                  className="grid grid-cols-6 text-[#717171] text-[10px]"
                  style={{ marginTop: '5px' }}
                >
                  <p className="col-span-3 font-normal text-[#717171] line-clamp-2">
                    {moment(detail.created_at).fromNow()}
                  </p>
                  <p className="col-span-3 font-normal text-[#717171] truncate">
                    • Rp {IdrFormat(detail.donasi)}
                  </p>
                </div>
                <div className="mt-[10px] ml-[5px]">
                  {detail.status_donasi === 'Approved' && (
                    <span className="bg-[#34A853] text-white font-semibold text-[10px] leading-4 py-[8px] px-[10px] rounded-[30px]">
                      Berhasil
                    </span>
                  )}
                  {(detail.status_donasi === 'Rejected' ||
                    detail.status_donasi === 'Refund') && (
                    <span className="bg-[#E7513B] text-white font-semibold text-[10px] leading-4 py-[8px] px-[10px] rounded-[30px]">
                      Dibatalkan
                    </span>
                  )}
                  {detail.status_donasi === 'Pending' && (
                    <span className="bg-[#FCAE03] text-white font-semibold text-[10px] leading-4 py-[8px] px-[10px] rounded-[30px]">
                      Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-b-[2px] border-[#E4E4E4]" />
          <div className="mx-[20px] text-[14px] font-normal leading-[19.07px]">
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">Tanggal</p>
              <p className="col-span-7">{tanggal}</p>
            </div>
            <hr />
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">Metode Pembayaran</p>
              <p className="col-span-7">{detail.metode_pembayaran}</p>
            </div>
            <hr />
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">ID donasi</p>
              <p className="col-span-7">#{detail.kode_donasi}</p>
            </div>
            <hr />
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">Status</p>
              <p className="col-span-7">{detail.status_donasi}</p>
            </div>
            <hr />
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">Jumlah donasi</p>
              <p className="col-span-7">
                Rp {IdrFormat(parseInt(detail.donasi))}
              </p>
            </div>
          </div>
          <hr className="border-b-[2px] border-[#E4E4E4]" />
          <div className="flex justify-center mx-[20px] mt-[24px] mb-[88px]">
            <button
              className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] h-[60px]"
              onClick={() => {
                window.location.href = '/donasi/sekali'
              }}
            >
              Donasi Lagi
            </button>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '70px' }}>
          <SkeletonRiwayat />
        </div>
      )}
    </div>
  )
}

export default DetailDonasi
