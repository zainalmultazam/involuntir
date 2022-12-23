import { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useCountdown } from '../../../hooks/useCountdown'
import IdrFormat from 'utils/IdrFormat'
import Spinner from 'components/loaders/Spinner'
import CopyToClipboard from 'react-copy-to-clipboard'
import { saveAs } from 'file-saver'
import { fetcher } from 'config/axiosHooks'
import { getIdTransaksi, getToken, removeIdTransaksi } from 'utils/cookiesHooks'
import NotFound from 'pages/NotFound'

const DetailPembayaran = () => {
  const [tipePage, setTipePage] = useState('')
  const [imagePayment, setImagePayment] = useState('')
  const [jumlahDonasi, setJumlahDonasi] = useState(0)
  const [bayarKe, setBayarKe] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [dataTransaksi, setDataTransaksi] = useState({})
  const [copy, setCopy] = useState(false)
  const [copy2, setCopy2] = useState(false)
  const [error, setError] = useState(false)

  const { slug } = useParams()
  const history = useHistory()

  const [hours, minutes, seconds] = useCountdown(
    new Date(dataTransaksi.deadline).getTime()
  )

  const getDetailTransaksi = async () => {
    await fetcher(`api/donation/transaction/${getIdTransaksi()}`)
      .then(
        (res) =>
          setDataTransaksi(
            res.data.data.metode_pembayaran
              ? res.data.data
              : res.data.data.donasi
          ) & setIsLoading(false)
      )
      .catch(() => setError(true))
  }

  useEffect(() => {
    getDetailTransaksi()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // Uang Tunai //
    if (dataTransaksi.metode_pembayaran === 'cod') {
      setTipePage('Uang Tunai')
      setImagePayment('/images/icon/metode-pembayaran/uang-tunai.svg')
      setBayarKe({
        tujuan: 'Bayar di Tempat',
        nomor: 'Cash On Donation (COD)',
      })
      // Transfer Bank //
    } else if (dataTransaksi.metode_pembayaran === 'transfer_manual') {
      setTipePage('Transfer BRI')
      setImagePayment('/images/icon/metode-pembayaran/bank-bri.svg')
      setBayarKe({
        tujuan: 'Yayasan Peduly Gotong Royong',
        nomor: '1156 001089 308',
      })
      // Virtual Account //
    } else if (dataTransaksi.metode_pembayaran === 'bank_transfer') {
      if (dataTransaksi.bank_name === 'bca') {
        setTipePage('BCA Virtual Account')
        setImagePayment(
          '/images/icon/metode-pembayaran/bca-bank-central-asia.svg'
        )
      } else if (dataTransaksi.bank_name === 'bni') {
        setTipePage('BNI Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-bni.svg')
      } else if (dataTransaksi.bank_name === 'mandiri') {
        setTipePage('Mandiri Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-mandiri.svg')
      } else if (dataTransaksi.bank_name === 'bri') {
        setTipePage('BRI Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-bri.svg')
      } else if (dataTransaksi.bank_name === 'permata') {
        setTipePage('Permata Bank Virtual Account')
        setImagePayment('/images/icon/metode-pembayaran/bank-permata.svg')
      }
      setBayarKe({
        tujuan: 'Nomor Virtual Account',
        nomor: dataTransaksi.nomor_va,
      })
      // E-Money //
    } else if (dataTransaksi.metode_pembayaran === 'emoney') {
      if (dataTransaksi.emoney_name === 'gopay') {
        setTipePage('Go-Pay')
        setImagePayment('/images/icon/metode-pembayaran/gopay.svg')
      } else if (dataTransaksi.emoney_name === 'shopeepay') {
        setTipePage('Shopee Pay')
        setImagePayment('/images/icon/metode-pembayaran/shopee.svg')
      } else if (dataTransaksi.emoney_name === 'dana') {
        setTipePage('Dana')
        setImagePayment('/images/icon/metode-pembayaran/dana.svg')
      }
      setBayarKe({
        tujuan: 'Nomor E-Money',
        nomor: 0,
      })
    }

    setJumlahDonasi(Number(dataTransaksi.donasi))
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

  function nominal() {
    if (dataTransaksi.metode_pembayaran === 'transfer_manual') {
      let jumlah = IdrFormat(jumlahDonasi)
      let tigaTerakhir = jumlah.slice(-3)
      jumlah = jumlah.substring(0, jumlah.length - 3)

      return (
        <h3 className="text-lg font-medium">
          {`Rp ${jumlah}`}
          <span className="text-peduly-primary">{tigaTerakhir}</span>
        </h3>
      )
    } else {
      return (
        <h3 className="text-lg font-medium">{`Rp ${IdrFormat(
          jumlahDonasi
        )}`}</h3>
      )
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [slug])

  const downloadImage = () => {
    saveAs(dataTransaksi?.qr_code, dataTransaksi.tanggal_donasi + '.png')
  }

  if (error) {
    return <NotFound />
  }

  if (isLoading) {
    return (
      <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
        <Spinner color="#0288D1" />
      </div>
    )
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="relative">
        <div className="sticky flex items-start top-0 bg-peduly-primary h-[120px] pt-[30px] text-white">
          <Link
            to={`/donasi-sekali/${slug}/jumlah-donasi`}
            onClick={() => removeIdTransaksi()}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[20px]"
            >
              <path
                d="M9.57 5.93005L3.5 12.0001L9.57 18.0701"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.4999 12H3.66992"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <div className="w-full mr-[20px] ml-[13px]">
            <p className="text-sm font-normal">Batas waktu pembayaran</p>
            <div className="flex justify-between text-sm font-semibold">
              <h3>
                {dataTransaksi.deadline
                  ? new Date(dataTransaksi.deadline).toLocaleString('id-ID', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })
                  : ''}
              </h3>
              <span className="flex items-center">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99984 14.6667C4.77984 14.6667 2.1665 12.0533 2.1665 8.83333C2.1665 5.61333 4.77984 3 7.99984 3C11.2198 3 13.8332 5.61333 13.8332 8.83333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.33337V8.66671"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 1.33337H10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.6665 11.3334V14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6665 11.3334V14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  {hours + minutes + seconds >= 0 ? (
                    <p className="text-basic font-bold ml-1">
                      {hours}:{minutes}:{seconds}
                    </p>
                  ) : (
                    <p className="text-basic font-bold ml-1">00:00:00</p>
                  )}
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-t-[30px] bg-white  w-full relative -top-7 shadow-sm">
          {/* method payment unused */}
          {/* <div className="flex justify-between pt-[30px] pb-[15px] items-center mx-[40px]">
            <h3 className="text-sm font-normal">{tipePage ? tipePage : ''}</h3>
            <img src={imagePayment} className="h-[15px]" alt="logo" />
          </div> */}
          {dataTransaksi.metode_pembayaran === 'emoney' ? (
            <div className="flex flex-col justify-center items-center pt-8">
              <span>
                <svg
                  width={79}
                  height={31}
                  viewBox="0 0 79 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.477485 0.692883C0.0993609 1.24114 0 2.31242 0 5.83574V10.2857H0.758089H1.51618L1.60143 6L1.68669 1.71429L5.87396 1.62764C9.33473 1.55626 10.0928 1.45683 10.2449 1.05413C10.3461 0.78639 10.351 0.43948 10.2563 0.283636C10.1615 0.12748 8.02985 0 5.51945 0C1.15001 0 0.934424 0.0296102 0.477485 0.692883ZM3.85515 5.47668C3.439 5.89995 3.37337 7.21777 3.37337 15.1596C3.37337 20.9006 3.49267 24.5791 3.69077 24.9556C3.98855 25.5207 4.39152 25.5584 10.1437 25.5584H16.2793L16.1897 23.1429L16.1002 20.7273L12.4201 20.5714L8.7401 20.4156L8.65822 12.7013L8.57603 4.98701H6.45663C4.93862 4.98701 4.20046 5.12603 3.85515 5.47668ZM11.0401 7.63636V10.2857H14.8735H18.7069V14.1818V18.0779H21.1348C22.8021 18.0779 23.6038 17.9561 23.6943 17.6883C23.7669 17.4742 23.7639 14.7039 23.6875 11.5325C23.5728 6.75553 23.4655 5.69953 23.0625 5.37662C22.7126 5.09642 20.9591 4.98701 16.8083 4.98701H11.0401V7.63636ZM25.7603 7.47616V9.97403H33.1204H40.4805V11.3766V12.7792H33.1204H25.7603V19.1819V25.5846L28.137 25.4936L30.5137 25.4026L30.667 21.7365L30.8203 18.0704L34.7378 21.8472C37.6867 24.6901 38.8622 25.6314 39.4911 25.6535C39.9511 25.6697 41.5691 25.6501 43.0872 25.6102L45.8472 25.5372L41.8605 21.6708L37.8738 17.8043L41.8605 17.7073L45.8472 17.6104V11.3766V5.14286L35.8037 5.06057L25.7603 4.9786V7.47616ZM48.0567 5.18275C47.9378 5.30369 47.8405 9.93756 47.8405 15.4806V25.5584H50.4515H53.0622L52.9816 15.3506L52.9006 5.14286L50.5868 5.05309C49.3141 5.00353 48.1757 5.06213 48.0567 5.18275ZM55.0326 5.38161C54.9488 5.60322 54.9179 8.51564 54.9639 11.8532L55.0473 17.9221L61.564 18.0062L68.0808 18.0904V19.1688V20.2473L61.564 20.3314L55.0473 20.4156V22.9091V25.4026H65.0141H74.9808V19.1688V12.9351L68.3874 12.7792L61.794 12.6234L61.7305 11.4605L61.6671 10.2979L68.324 10.2137L74.9808 10.1299V7.63636V5.14286L65.0828 5.06057C57.2118 4.99512 55.1534 5.06088 55.0326 5.38161ZM11.0401 15.441V18.1032L13.5702 18.0125L16.1002 17.9221L16.1891 15.3506L16.2784 12.7792H13.6591H11.0401V15.441ZM14.4135 15.2727C14.4135 16.104 14.3114 16.2078 13.4935 16.2078C12.7342 16.2078 12.5735 16.0809 12.5735 15.4806C12.5735 14.5661 12.7983 14.3377 13.698 14.3377C14.2887 14.3377 14.4135 14.501 14.4135 15.2727ZM18.7069 25.5584V30.8824L21.2369 30.7917L23.7669 30.7013V25.5584V20.4156L21.2369 20.3252L18.7069 20.2345V25.5584ZM77.1852 20.4611C77.069 20.5789 76.9742 22.4581 76.9742 24.6371C76.9742 27.5305 76.8653 28.6906 76.5709 28.939C76.3388 29.1348 74.4843 29.3165 72.2009 29.367C68.9177 29.4396 68.2341 29.535 68.2341 29.9221C68.2341 30.3182 68.9836 30.3896 73.1408 30.3896H78.0475V25.4285C78.0475 20.7641 77.8733 19.7614 77.1852 20.4611Z"
                    fill="black"
                  />
                </svg>
              </span>
              <img
                src={dataTransaksi.qr_code}
                alt=""
                style={{ width: '200px', height: '200px' }}
                className="my-[16px]"
              />
              <button
                onClick={downloadImage}
                className="text-peduly-primary flex items-center border-[1px] border-peduly-primary rounded-full px-[23px] h-[31px] text-sm font-medium"
              >
                Download QRIS Disini
              </button>
            </div>
          ) : (
            <div
              className="rounded-[15px] mx-[20px] h-[72px] flex flex-col justify-center"
              style={{ backgroundColor: 'rgba(228, 228, 228, 0.3)' }}
            >
              {dataTransaksi.metode_pembayaran === 'cod' && (
                <div className="px-[20px]">
                  <p className="text-xs font-light text-[#717171]">
                    Bayar Ditempat
                  </p>
                  <h3 className="text-lg font-medium">
                    Cash on Donation (COD)
                  </h3>
                </div>
              )}
              {dataTransaksi.metode_pembayaran === 'bank_transfer' && (
                <div className="flex justify-between items-center mr-[20px]">
                  <div className="px-[20px]">
                    <p className="text-xs font-light text-[#717171]">
                      Yayasan Peduly Gotong Royong
                    </p>
                    <h3 className="text-lg font-medium">{bayarKe.nomor}</h3>
                  </div>
                  <div className="cursor-pointer">
                    <CopyToClipboard text={bayarKe.nomor} onCopy={handleCopy2}>
                      <button className="rounded-full h-[32px] px-[24px] border-[1px] border-peduly-primary text-peduly-primary text-sm font-normal">
                        Salin
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              )}
              {dataTransaksi.metode_pembayaran === 'transfer_manual' && (
                <div className="flex justify-between items-center mr-[20px]">
                  <div className="px-[20px]">
                    <p className="text-xs font-light text-[#717171]">
                      Yayasan Peduly Gotong Royong
                    </p>
                    <h3 className="text-lg font-medium">{bayarKe.nomor}</h3>
                  </div>
                  <div className="cursor-pointer">
                    <CopyToClipboard text={bayarKe.nomor} onCopy={handleCopy2}>
                      <button className="rounded-full h-[32px] px-[24px] border-[1px] border-peduly-primary text-peduly-primary text-sm font-normal">
                        Salin
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
              )}
            </div>
          )}
          {copy2 && (
            <div className="text-center text-peduly-primary my-2">
              <p className="text-sm">Copied to cliboard!</p>
            </div>
          )}
          {dataTransaksi.metode_pembayaran !== 'emoney' && (
            <div className="flex justify-between items-center mx-[40px] py-[22px]">
              <span>
                <p className="text-xs font-light text-[#717171]">
                  Jumlah Donasi
                </p>
                {nominal()}
              </span>
              <div className="cursor-pointer">
                <CopyToClipboard
                  text={IdrFormat(jumlahDonasi)}
                  onCopy={handleCopy}
                >
                  <button className="rounded-full h-[32px] px-[24px] border-[1px] border-peduly-primary text-peduly-primary text-sm font-normal">
                    Salin
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          )}
          {copy && (
            <div className="text-center text-peduly-primary mb-3">
              <p className="text-sm">Copied to cliboard!</p>
            </div>
          )}
          {dataTransaksi.metode_pembayaran === 'emoney' ||
          dataTransaksi.metode_pembayaran === 'transfer_manual' ? (
            <>
              {/* segera buka aplikasi (emoney) */}
              {/* {dataTransaksi.metode_pembayaran === 'emoney' && (
                <div
                  className="my-[24px] flex rounded-[15px] px-[20px] py-[19px] mx-[20px]"
                  style={{ backgroundColor: 'rgba(252, 174, 3, 0.12)' }}
                >
                  <span>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99998C14.6668 4.33331 11.6668 1.33331 8.00016 1.33331C4.3335 1.33331 1.3335 4.33331 1.3335 7.99998C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                        stroke="#0288D1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 5.33331V8.66665"
                        stroke="#0288D1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99658 10.6667H8.00257"
                        stroke="#0288D1"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-xs font-normal ml-[16px]">
                    <b>PENTING!</b> Segera buka Aplikasi{' '}
                    {tipePage.replace(' ', '')} di ponsel kamu lalu upload atau
                    scan kode QR di atas.
                  </p>
                </div>
              )} */}
              {dataTransaksi.metode_pembayaran === 'transfer_manual' && (
                <div>
                  <p className="text-xs font-light mb-[12px] mx-[30px]">
                    *Jumlah akan didonasikan hingga 3 digit terakhir
                  </p>
                  <div
                    className="mb-[24px] flex rounded-[15px] px-[20px] py-[19px] mx-[20px]"
                    style={{ backgroundColor: 'rgba(252, 174, 3, 0.12)' }}
                  >
                    <span>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99998C14.6668 4.33331 11.6668 1.33331 8.00016 1.33331C4.3335 1.33331 1.3335 4.33331 1.3335 7.99998C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                          stroke="#0288D1"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 5.33331V8.66665"
                          stroke="#0288D1"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.99658 10.6667H8.00257"
                          stroke="#0288D1"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-xs font-normal ml-[16px]">
                      <b>PENTING!</b> Pastikan transfer tepat sampai 3 digit
                      terakhir supaya mempermudah verifikasi donasi
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="text-xs font-light mb-[12px] mx-[30px]">
              *Disarankan melakukan pembayaran dengan uang pas
            </p>
          )}
          {/* cara pembayaran */}
          {/* <div className="mx-[20px]">
            <Link
              to={`/donasi-sekali/${slug}/jumlah-donasi/pembayaran/instruksi?idn=${getIdTransaksi()}`}
            >
              <button className=" bg-peduly-primary text-white w-full font-semibold rounded-full text-basic py-[16px]">
                Cara Pembayaran
              </button>
            </Link>
          </div> */}
          {/* cek status pembayaran */}
          {/* {getToken() && (
            <>
              <hr className="mt-[24px]" />
              <div
                className="flex justify-center py-[24px] cursor-pointer"
                onClick={() => {
                  history.push({
                    pathname: `/donasi-sekali/${slug}/jumlah-donasi/pembayaran/status/${dataTransaksi.id}`,
                  })
                }}
              >
                <p className="text-peduly-primary text-sm font-medium">
                  Cek Status Pembayaran
                </p>
              </div>
              <hr className="h-[2px]" />
            </>
          )} */}
          {/* donasi terlindungi  */}
          {/* <div className="mx-[20px] space-y-5 mt-[24px]">
            <div
              className="flex px-[24px] py-[22px] rounded-[15px]"
              style={{ backgroundColor: 'rgba(231, 81, 59, 0.12)' }}
            >
              <span>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8796 14.8267C27.8796 21.3467 23.1463 27.4533 16.6796 29.24C16.2396 29.36 15.7596 29.36 15.3196 29.24C8.85295 27.4533 4.11963 21.3467 4.11963 14.8267V8.97332C4.11963 7.87998 4.94632 6.63999 5.97298 6.22665L13.3996 3.1867C15.0663 2.5067 16.9463 2.5067 18.613 3.1867L26.0396 6.22665C27.053 6.63999 27.893 7.87998 27.893 8.97332L27.8796 14.8267Z"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.0002 16.6666C17.4729 16.6666 18.6668 15.4727 18.6668 14C18.6668 12.5272 17.4729 11.3333 16.0002 11.3333C14.5274 11.3333 13.3335 12.5272 13.3335 14C13.3335 15.4727 14.5274 16.6666 16.0002 16.6666Z"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 16.6667V20.6667"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="ml-[15px]">
                <h3 className="text-sm font-semibold">Donasi Terlindungi</h3>
                <p className="text-sm font-normal">
                  Peduly menjamin keamanan dana yang kamu bayar disetiap
                  transaksi.
                </p>
              </span>
            </div>
            <div
              className="flex px-[24px] py-[22px] rounded-[15px]"
              style={{ backgroundColor: 'rgba(231, 81, 59, 0.12)' }}
            >
              <span>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 13.3334V10.6667C8 6.25335 9.33333 2.66669 16 2.66669C22.6667 2.66669 24 6.25335 24 10.6667V13.3334"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.6665 29.3333H9.33317C3.99984 29.3333 2.6665 28 2.6665 22.6666V20C2.6665 14.6666 3.99984 13.3333 9.33317 13.3333H22.6665C27.9998 13.3333 29.3332 14.6666 29.3332 20V22.6666C29.3332 28 27.9998 29.3333 22.6665 29.3333Z"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.3288 21.3334H21.3408"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9938 21.3334H16.0058"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6593 21.3334H10.6713"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="ml-[15px]">
                <h3 className="text-sm font-semibold">Data Pasti Aman</h3>
                <p className="text-sm font-normal">
                  Kami menjaga data dan privasi untuk kepentingan apapun diluar
                  Peduly
                </p>
              </span>
            </div>
            <div
              className="flex px-[24px] py-[22px] rounded-[15px]"
              style={{ backgroundColor: 'rgba(231, 81, 59, 0.12)' }}
            >
              <span>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3332 10.6667V17.3333C29.3332 22.6667 26.6665 25.3333 21.3332 25.3333H20.6665C20.2532 25.3333 19.8532 25.5333 19.5998 25.8667L17.5998 28.5333C16.7198 29.7067 15.2798 29.7067 14.3998 28.5333L12.3998 25.8667C12.1865 25.5733 11.6932 25.3333 11.3332 25.3333H10.6665C5.33317 25.3333 2.6665 24 2.6665 17.3333V10.6667C2.6665 5.33332 5.33317 2.66666 10.6665 2.66666H15.9998"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.267 6.15997C19.827 4.83997 20.347 3.21331 21.787 2.75997C22.5336 2.53331 23.467 2.71997 24.0003 3.42664C24.507 2.69331 25.467 2.53331 26.2136 2.75997C27.6536 3.19997 28.1736 4.83997 27.7336 6.15997C27.0536 8.25331 24.667 9.33331 24.0003 9.33331C23.3336 9.33331 20.9736 8.26664 20.267 6.15997Z"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.3288 14.6667H21.3408"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9938 14.6667H16.0058"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6593 14.6667H10.6713"
                    stroke="#0288D1"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="ml-[15px]">
                <h3 className="text-sm font-semibold">Dukungan Penuh 24/7</h3>
                <p className="text-sm font-normal">
                  Hubungi kami kapanpun kamu butuh <br /> siang atau malam hari
                </p>
              </span>
            </div>
          </div> */}
          {dataTransaksi.metode_pembayaran === 'emoney' && (
            <div className="px-5 flex flex-col w-full">
              <hr className="border-t-[1px] border-solid border-involuntir-light-1/2 mb-6 mt-[34px]" />
              <h1 className="text-base text-peduly-dark font-bold text-center mb-6">
                Panduan Pembayaran
              </h1>
              <ol type="1" className="list-outside list-decimal ml-5">
                <li className="text-sm text-peduly-dark font-normal">
                  Buka Aplikasi Gojek / Shopee / Dana / LinkAja / Mobile Banking
                  / aplikasi yang mendukung pembayaran QRIS
                </li>
                <li className="text-sm text-peduly-dark font-normal">
                  Scan atau upload QRIS yang sudah kamu download / screenshot
                </li>
                <li className="text-sm text-peduly-dark font-normal">
                  Masukkan pin kamu
                </li>
                <li className="text-sm text-peduly-dark font-normal">
                  Transaksi berhasil
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailPembayaran
