import BackButton from '../../components/BackButton'
import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import IdrFormat from 'utils/IdrFormat'
import moment from 'moment'
import { fetcher } from 'config/axiosHooks'
import { API_URL } from 'config/api'
import SkeletonTransaksiDetail from 'components/SkeletonLoading/SkeletonTransaksiDetail'

import 'moment/locale/id'

function TransaksiFundraiserDetail() {
  const [detail, setDetail] = useState({})
  const [tanggal, setTanggal] = useState('')
  const [loading, setLoading] = useState(false)

  const { slug } = useParams()

  const history = useHistory()

  useEffect(() => {
    getDetail()
  }, []) // eslint-disable-line

  const getDetail = async () => {
    try {
      const data = await fetcher(`api/fundraiser/donations/${slug}/details`)
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
      <BackButton hrf="/dashboard/transaksi" txt="Detail Donatur" />
      {loading ? (
        <div style={{ marginTop: '70px' }}>
          {detail.status_donasi === 'Approved' && (
            <h1 className="text-center mt-[94px] font-medium text-lg text-[#34A853]">
              Donasi Berhasil
            </h1>
          )}
          {(detail.status_donasi === 'Rejected' ||
            detail.status_donasi === 'Rejected') && (
            <h1 className="text-center mt-[94px] font-medium text-lg text-[#E7513B]">
              Donasi Ditolak
            </h1>
          )}
          {detail.status_donasi === 'Pending' && (
            <h1 className="text-center mt-[94px] font-medium text-lg text-[#FCAE03]">
              Donasi Pending
            </h1>
          )}

          <div className="text-[12px] leading-[19.2px] font-semibold mx-[20px]">
            <div
              style={{ marginBottom: '24px', marginTop: '24px' }}
              className="grid grid-cols-12"
            >
              <div className="col-span-4 ">
                <img
                  src={`${API_URL}/images/images_campaign/${detail.foto_campaign}`}
                  alt=""
                  style={{
                    height: '80px',
                    width: '119px',
                    objectFit: 'cover',
                    borderRadius: '15px',
                  }}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/images/no-picture.png'
                  }}
                />
              </div>

              <div className="col-span-8" style={{ marginLeft: '15px' }}>
                <p className="line-clamp-3 text-base font-medium">
                  {detail.judul_campaign}
                </p>
              </div>
            </div>
          </div>
          <hr className="border-b-[2px] border-[#E4E4E4]" />
          <div className="mx-[20px] text-sm font-normal">
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">Nama</p>
              <p className="col-span-7">{detail.nama}</p>
            </div>
            <hr />
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">No. Ponsel</p>
              <p className="col-span-7 text-[#E7513B]">
                {detail.nomor_telp ? detail.nomor_telp : '-'}
              </p>
            </div>
            <hr />
            <div className="grid grid-cols-12  h-[61px] items-center mx-[7px]">
              <p className="col-span-5">Email</p>
              <p className="col-span-7 text-[#E7513B]">{detail.email}</p>
            </div>
            <hr />
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
              <p className="col-span-7 truncate">
                Rp {IdrFormat(parseInt(detail.donasi))}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '70px' }}>
          <SkeletonTransaksiDetail />
        </div>
      )}
    </div>
  )
}

export default TransaksiFundraiserDetail
