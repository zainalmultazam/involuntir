import { fetcher } from 'config/axiosHooks'
import moment from 'moment'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from 'components/BackButton'
import splitInDots from 'utils/splitDots'
import NotFound from 'pages/NotFound'
import Spinner from 'components/loaders/Spinner'
import SkeletonRiwayatTopUp from 'components/SkeletonLoading/SkeletonRiwayatTopUp'

import 'moment/locale/id'

function DetailTopUp() {
  const [dataTransaksi, setDataTransaksi] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const { idn } = useParams()

  const getDetailTopUp = async () => {
    await fetcher(`/api/topup/${idn}/details`)
      .then((res) => {
        setDataTransaksi(res.data.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(true)
      })
  }

  // Mendapatkan Jam dari Created At
  const getHourMinute = (date) => {
    const hour = moment(date).format('HH')
    const minute = moment(date).format('mm')
    return `${hour}:${minute}`
  }

  // Mendapatkan Tanggal dari Created At
  const getDayMonthYear = (date) => {
    const day = moment(date).format('DD')
    const month = moment(date).format('MM')
    const year = moment(date).format('YYYY')

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

    return `${day} ${bulan[month - 1]} ${year}`
  }

  // Make UpperCase
  const UpperCase = (str) => {
    // First letter to UpperCase
    if (dataTransaksi.payment_method === 'emoney') {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return str
  }

  // Total
  const totalAmout = (idr) => {
    if (dataTransaksi.payment_method === 'emoney') {
      return Number(idr) + 1500
    } else if (dataTransaksi.payment_method === 'bank_payment') {
      return Number(idr) + 4000
    }
    return Number(idr)
  }

  useEffect(() => {
    getDetailTopUp()
  }, []) // eslint-disable-line

  if (error) {
    return <NotFound />
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
        <Spinner color="#e7513b" />
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto">
      <BackButton hrf={'1'} txt="Status Pembayaran" />
      {!isLoading ? (
        <>
          <div className="flex justify-center items-center mt-[102px]">
            <div>
              <span className="flex justify-center">
                {dataTransaksi.status === 'approved' && (
                  <svg
                    width={98}
                    height={98}
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M49 88C71 88 89 70 89 48C89 26 71 8 49 8C27 8 9 26 9 48C9 70 27 88 49 88Z"
                      fill="#34A853"
                    />
                    <g filter="url(#filter0_d_8044_21438)">
                      <path
                        d="M49 81C67.15 81 82 66.15 82 48C82 29.85 67.15 15 49 15C30.85 15 16 29.85 16 48C16 66.15 30.85 81 49 81Z"
                        fill="#34A853"
                      />
                    </g>
                    <path
                      d="M34.9748 47.9996L44.3138 57.3386L63.0248 38.6606"
                      fill="#34A853"
                    />
                    <path
                      d="M34.9748 47.9996L44.3138 57.3386L63.0248 38.6606"
                      stroke="white"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_8044_21438"
                        x={0}
                        y={0}
                        width={98}
                        height={98}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={1} />
                        <feGaussianBlur stdDeviation={8} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_8044_21438"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_8044_21438"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
                {dataTransaksi.status === 'pending' && (
                  <svg
                    width={98}
                    height={98}
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M49 88C71 88 89 70 89 48C89 26 71 8 49 8C27 8 9 26 9 48C9 70 27 88 49 88Z"
                      fill="#FCAE03"
                    />
                    <g filter="url(#filter0_d_8044_21576)">
                      <path
                        d="M49 81C67.15 81 82 66.15 82 48C82 29.85 67.15 15 49 15C30.85 15 16 29.85 16 48C16 66.15 30.85 81 49 81Z"
                        fill="#FCAE03"
                      />
                    </g>
                    <path
                      d="M49.0181 33V49.5"
                      stroke="white"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M49 59.4004H49.0296"
                      stroke="white"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_8044_21576"
                        x={0}
                        y={0}
                        width={98}
                        height={98}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={1} />
                        <feGaussianBlur stdDeviation={8} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_8044_21576"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_8044_21576"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
                {dataTransaksi.status === 'rejected' && (
                  <svg
                    width={98}
                    height={98}
                    viewBox="0 0 98 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M49 88C71 88 89 70 89 48C89 26 71 8 49 8C27 8 9 26 9 48C9 70 27 88 49 88Z"
                      fill="#E7513B"
                    />
                    <g filter="url(#filter0_d_8044_21506)">
                      <path
                        d="M49 81C67.15 81 82 66.15 82 48C82 29.85 67.15 15 49 15C30.85 15 16 29.85 16 48C16 66.15 30.85 81 49 81Z"
                        fill="#E7513B"
                      />
                    </g>
                    <path
                      d="M40 57.678L58.678 39"
                      stroke="white"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M58.678 57.678L40 39"
                      stroke="white"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_8044_21506"
                        x={0}
                        y={0}
                        width={98}
                        height={98}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={1} />
                        <feGaussianBlur stdDeviation={8} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_8044_21506"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_8044_21506"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                )}
              </span>
              <h1 className="text-center mt-[14px] text-3xl font-bold">
                Rp{splitInDots(dataTransaksi.amount)}
              </h1>
              <p className="mt-[6px] text-sm font-normal">
                Top up Dompet Peduly
              </p>
            </div>
          </div>
          <hr className="border-dashed mt-[24px]" />
          <div className="mx-[20px]">
            <h2 className="mt-[24px] font-medium text-base">
              Rincian Transaksi
            </h2>
            <div className="mt-[14px] font-normal text-base space-y-3">
              <span className="flex justify-between">
                <p>Ditambahkan ke</p>
                <p>Dompet Peduly</p>
              </span>
              <span className="flex justify-between">
                <p>Status</p>
                <p>{dataTransaksi.status}</p>
              </span>
              <span className="flex justify-between">
                <p>Waktu</p>
                <p>{getHourMinute(dataTransaksi.created_at)}</p>
              </span>
              <span className="flex justify-between">
                <p>Tanggal</p>
                <p>{getDayMonthYear(dataTransaksi.created_at)}</p>
              </span>
              <span className="flex justify-between">
                <p>ID Transaksi</p>
                <p>{dataTransaksi.invoice_id}</p>
              </span>
            </div>
          </div>
          <hr className="border-dashed mt-[24px]" />
          <div className="mt-[14px] font-normal text-base space-y-3 mx-[20px]">
            <span className="flex justify-between">
              <p>Metode pebayaran</p>
              <p>{UpperCase(dataTransaksi.payment_name)}</p>
            </span>
            <span className="flex justify-between">
              <p>Jumlah</p>
              <p>Rp{splitInDots(dataTransaksi.amount)}</p>
            </span>
            <span className="flex justify-between">
              <p>Biaya transaksi</p>
              <p>
                {dataTransaksi.payment_method === 'emoney'
                  ? 'Rp1.500'
                  : 'Rp4.000'}
              </p>
            </span>
          </div>
          <hr className="border-dashed mt-[24px]" />
          <div className="mt-[14px] font-semibold text-base mx-[20px]">
            <span className="flex justify-between">
              <p>Total</p>
              <p>Rp{splitInDots(String(totalAmout(dataTransaksi.amount)))}</p>
            </span>
          </div>
        </>
      ) : (
        <div style={{ marginTop: '70px' }}>
          <SkeletonRiwayatTopUp />
        </div>
      )}
    </div>
  )
}

export default DetailTopUp
