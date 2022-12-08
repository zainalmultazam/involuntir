import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import IdrFormat from 'utils/IdrFormat'
import CopyToClipboard from 'react-copy-to-clipboard'
import { fetcher } from 'config/axiosHooks'
import NotFound from 'pages/NotFound'
import Spinner from 'components/loaders/Spinner'

const InstruksiPembayaranTopUp = () => {
  const [copy, setCopy] = useState(false)
  const [copy2, setCopy2] = useState(false)
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [dataTransaksi, setDataTransaksi] = useState({})
  const [imagePayment, setImagePayment] = useState('')
  const [tipePage, setTipePage] = useState('')
  const [error, setError] = useState(false)

  const history = useHistory()

  const queryParams = new URLSearchParams(window.location.search)
  const idTransaksi = queryParams.get('ir')

  const getDetailTopUp = async () => {
    await fetcher(`/api/topup/${idTransaksi}/details`)
      .then((res) => {
        setDataTransaksi(res.data.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(true)
      })
  }

  useEffect(() => {
    getDetailTopUp()
  }, []) // eslint-disable-line

  useEffect(() => {
    // Uang Tunai //
    if (dataTransaksi.payment_method === 'cod') {
      setTipePage('Uang Tunai')
      setImagePayment('/images/icon/metode-pembayaran/uang-tunai.svg')
      // Transfer Bank //
    } else if (dataTransaksi.payment_method === 'transfer_manual') {
      setTipePage('Transfer BRI')
      setImagePayment('/images/icon/metode-pembayaran/bank-bri.svg')
      // Virtual Account //
    } else if (dataTransaksi.payment_method === 'bank_payment') {
      if (dataTransaksi.payment_name === 'bca') {
        setTipePage('BCA Virtual Account')
        setImagePayment(
          '/images/icon/metode-pembayaran/bca-bank-central-asia.svg'
        )
      } else if (dataTransaksi.payment_name === 'bni') {
        setTipePage('BNI Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-bni.svg')
      } else if (dataTransaksi.payment_name === 'mandiri') {
        setTipePage('Mandiri Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-mandiri.svg')
      } else if (dataTransaksi.payment_name === 'bri') {
        setTipePage('BRI Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-bri.svg')
      } else if (dataTransaksi.payment_name === 'permata') {
        setTipePage('Permata Bank Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-permata.svg')
      }
      // E-Money //
    } else if (dataTransaksi.payment_method === 'emoney') {
      if (dataTransaksi.payment_name === 'gopay') {
        setTipePage('Go-Pay')
        setImagePayment('/images/icon/metode-pembayaran/gopay.svg')
      } else if (dataTransaksi.payment_name === 'shopeepay') {
        setTipePage('Shopee Pay')
        setImagePayment('/images/icon/metode-pembayaran/shopee.svg')
      } else if (dataTransaksi.payment_name === 'dana') {
        setTipePage('Dana')
        setImagePayment('/images/icon/metode-pembayaran/dana.svg')
      }
    }
  }, [dataTransaksi])

  const handleCopy = () => {
    setCopy(!copy)
    setTimeout(() => {
      setCopy(false)
    }, 3000)
  }

  const handleCopy2 = () => {
    setCopy2(!copy2)
    setTimeout(() => {
      setCopy2(false)
    }, 3000)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

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
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div
        className="fixed z-20 top-0 bg-white"
        style={{
          boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
        }}
      >
        <div className="w-[430px]">
          <div className="mx-[20px] inline-flex items-center h-[72px]">
            <div
              onClick={() => {
                history.goBack()
              }}
            >
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
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4999 12H3.66992"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className=" relative ml-[16px] text-[16px] leading-[21.79px] font-normal mt-1">
              Cara Pembayaran
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[72px]">
        <div
          className={`flex justify-between pt-[20px] items-center mx-[40px] ${
            dataTransaksi.payment_method === 'emoney' ? '' : 'mb-[30px]'
          }`}
        >
          <h3 className="text-sm font-normal">{tipePage}</h3>
          <img src={imagePayment} className="h-[15px]" alt="logo" />
        </div>
        {dataTransaksi.payment_method !== 'emoney' && (
          <div
            className="rounded-[15px] mx-[20px] h-[72px] flex flex-col justify-center"
            style={{ backgroundColor: 'rgba(228, 228, 228, 0.3)' }}
          >
            {dataTransaksi.payment_method === 'cod' && (
              <div className="px-[20px]">
                <p className="text-xs font-light text-[#717171]">
                  Bayar Ditempat
                </p>
                <h3 className="text-lg font-medium">Cash on Donation (COD)</h3>
              </div>
            )}

            {(dataTransaksi.payment_method === 'bank_payment' ||
              dataTransaksi.payment_method === 'transfer_manual') && (
              <div className="flex justify-between items-center mr-[20px]">
                <div className="px-[20px]">
                  <p className="text-xs font-light text-[#717171]">
                    Yayasan Peduly Gotong Royong
                  </p>
                  <h3 className="text-lg font-medium">
                    {dataTransaksi.nomor_va
                      ? dataTransaksi.nomor_va
                      : '1156 01 000641 301'}
                  </h3>
                </div>
                <div className="cursor-pointer">
                  <CopyToClipboard
                    text={IdrFormat(Number(dataTransaksi.amount))}
                    onCopy={handleCopy}
                  >
                    <button className="rounded-full h-[32px] px-[24px] border-[1px] border-peduly-primary text-peduly-primary text-sm font-normal">
                      Salin
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            )}
          </div>
        )}
        {copy && (
          <div className="text-center text-peduly-primary my-2">
            <p className="text-sm">Copied to cliboard!</p>
          </div>
        )}
        <div className="flex justify-between items-center mx-[40px] py-[22px]">
          <span>
            <p className="text-xs font-light text-[#717171]">Jumlah Donasi</p>
            <h3 className="text-lg font-medium">{`Rp ${IdrFormat(
              Number(dataTransaksi.amount)
            )}`}</h3>
          </span>
          <div className="cursor-pointer">
            <CopyToClipboard
              text={IdrFormat(Number(dataTransaksi.amount))}
              onCopy={handleCopy2}
            >
              <button className="rounded-full h-[32px] px-[24px] border-[1px] border-peduly-primary text-peduly-primary text-sm font-normal">
                Salin
              </button>
            </CopyToClipboard>
          </div>
        </div>
        {copy2 && (
          <div className="text-center text-peduly-primary mb-3">
            <p className="text-sm">Copied to cliboard!</p>
          </div>
        )}
        <hr className="h-[2px]" />
        <h3 className="text-base font-medium text-center mt-[24px]">
          Panduang Pembayaran
        </h3>
        <div
          className="flex items-center justify-between ml-[25px] mr-[24px] py-[25px] cursor-pointer"
          onClick={() => setClick(!click)}
        >
          <p className="text-sm font-medium">
            {(dataTransaksi.payment_method === 'bank_payment' ||
              dataTransaksi.payment_method === 'transfer_manual') &&
              'BRI Mobile'}
            {dataTransaksi.payment_method === 'cod' && 'Uang Tunai'}
            {dataTransaksi.payment_method === 'emoney' &&
              'Pembayaran QRIS via Gopay'}
          </p>
          <span>
            {click ? (
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                  stroke="#212121"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                  stroke="#212121"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>
        <div
          className={`text-sm font-light mr-[20px] ml-[30px] ${
            click && 'mb-[24px]'
          }`}
        >
          {click && (
            <>
              {dataTransaksi.payment_method === 'cod' && (
                <ol className="list-decimal">
                  <li>
                    Lakukan pembayaran donasi dengan uang tunai kepada Tim
                    Peduly
                  </li>
                  <li>
                    Kemudian cek pemberitahuan email bahwa transaksi berhasil
                    dilakukan (pastikan email aktif).
                  </li>
                  <li>
                    Jika uang tunai sudah diberikan kepada Tim Pedulynamun belum
                    ada email status pembayaran berhasil, silakan hubungi{' '}
                    <span className="text-peduly-primary">kontak kami</span>.
                  </li>
                </ol>
              )}
              {(dataTransaksi.payment_method === 'bank_payment' ||
                dataTransaksi.payment_method === 'transfer_manual') && (
                <ol className="list-decimal">
                  <li>
                    Lakukan pembayaran melalui ATM / mobile banking / internet
                    banking / SMS banking / kantor bank terdekat.
                  </li>
                  <li>
                    Isi nomor rekening tujuan sesuai yang ada di halaman
                    pembayaran (a.n{' '}
                    <strong>Yayasan Peduly Gotong Royong</strong>
                    ).
                  </li>
                  <li>
                    Masukan nominal donasi sesuai jumlah donasimu, termasuk 3
                    digit terakhir.
                  </li>
                  <li>
                    Pembayaran akan diverifikasi oleh Peduly. Waktu verikasi
                    paling lambat 1x24 jam untuk sesama bank, dan 2x24 jam
                    dihari kerja jika antar bank yang berbeda.
                  </li>
                </ol>
              )}
              {dataTransaksi.payment_method === 'emoney' && (
                <ol className="list-decimal">
                  <li>Buka aplikasi Gojek</li>
                  <li>Klik “bayar”</li>
                  <li>Scan QRIS pembayaran</li>
                  <li>Masukkan pin kamu</li>
                  <li>Transaksi berhasil</li>
                </ol>
              )}
            </>
          )}
        </div>
        <hr className="mx-[20px]" />
        {(dataTransaksi.payment_method === 'bank_payment' ||
          dataTransaksi.payment_method === 'transfer_manual') && (
          <>
            <div
              className="flex items-center justify-between ml-[25px] mr-[24px] py-[25px] cursor-pointer"
              onClick={() => setClick2(!click2)}
            >
              <p className="text-sm font-medium">ATM BRI</p>
              <span>
                {click2 ? (
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                      stroke="#212121"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                      stroke="#212121"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div className="text-sm font-light mr-[20px] ml-[30px] mb-[24px]">
              {click2 && (
                <ol className="list-decimal">
                  <li>
                    Lakukan pembayaran melalui ATM / mobile banking / internet
                    banking / SMS banking / kantor bank terdekat.
                  </li>
                  <li>
                    Isi nomor rekening tujuan sesuai yang ada di halaman
                    pembayaran (a.n{' '}
                    <strong>Yayasan Peduly Gotong Royong</strong>
                    ).
                  </li>
                  <li>
                    Masukan nominal donasi sesuai jumlah donasimu, termasuk 3
                    digit terakhir.
                  </li>
                  <li>
                    Pembayaran akan diverifikasi oleh Peduly. Waktu verikasi
                    paling lambat 1x24 jam untuk sesama bank, dan 2x24 jam
                    dihari kerja jika antar bank yang berbeda.
                  </li>
                </ol>
              )}
            </div>
          </>
        )}
        {dataTransaksi.payment_method === 'emoney' && (
          <>
            <div
              className="flex items-center justify-between ml-[25px] mr-[24px] py-[25px]"
              onClick={() => setClick2(!click2)}
            >
              <p className="text-sm font-medium">
                Pembayaran QRIS via aplikasi lain
              </p>
              <span>
                {click2 ? (
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                      stroke="#212121"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                      stroke="#212121"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            <div className="text-sm font-light mr-[20px] ml-[30px] mb-[24px]">
              {click2 && (
                <ol className="list-decimal">
                  <li>
                    Buka aplikasi Shopee / Dana / LinkAja / Mobile Banking /
                    aplikasi yang mendukung pembayaran dengan QRIS
                  </li>
                  <li>
                    Scan QRIS pembayaran / tekan icon upload gambar dan masukkan
                    QRIS yang sudah kamu download
                  </li>
                  <li>Masukkan pin kamu</li>
                  <li>Transaksi berhasil</li>
                </ol>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default InstruksiPembayaranTopUp
