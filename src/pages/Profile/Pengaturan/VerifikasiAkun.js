import BackButton from 'components/BackButton'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/UserContext'
import { getToken, setVerifikasiAkunBerhasil } from 'utils/cookiesHooks'
import { Redirect, useHistory } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import { API_URL } from 'config/api'
import Spinner from 'components/loaders/Spinner'

function VerifikasiAkun() {
  const [fotoKtp, setFotoKtp] = useState('')
  const [fotoSelfieKtp, setFotoSelfieKtp] = useState('')
  const [noTlpPenaggungJawab, setNoTlpPenaggungJawab] = useState('')
  const [fotoNPWP, setFotoNPWP] = useState('')
  const [fotoSelfieNPWP, setFotoSelfieNPWP] = useState('')
  const [loading, setLoading] = useState(false)

  const ktp = useRef(null)
  const selfieKtp = useRef(null)
  const npwp = useRef(null)
  const selfieNPWP = useRef(null)

  const user = useContext(UserContext)
  const history = useHistory()

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('foto_ktp', fotoKtp)
    formData.append('foto_diri_ktp', fotoSelfieKtp)
    if (!user?.user?.tipe === 'pribadi' || !user?.user?.tipe === 'Individu') {
      formData.append('telp_pj', noTlpPenaggungJawab)
      formData.append('foto_npwp', fotoNPWP)
      formData.append('foto_diri_npwp', fotoSelfieNPWP)
    }

    await axios
      .post(
        `${API_URL}/api/verification/${
          user?.user?.tipe === 'pribadi' || user?.user?.tipe === 'Individu'
            ? 'pribadi'
            : 'organisasi'
        }`,
        formData,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      )
      .then((res) => {
        setVerifikasiAkunBerhasil()
        history.push({
          pathname: `/pengaturan/verifikasi-akun/berhasil`,
          state: {
            H1: 'Terkirim',
            P1: 'Proses verifikasi membutuhkan waktu paling lambat 2x24 jam',
            hrf: 'profile',
            Button: 'Kembali',
          },
        })
      })
      .catch((err) => {})
  }

  function validator() {
    if (
      (user?.user?.tipe === 'pribadi' || user?.user?.tipe === 'Individu') &&
      fotoKtp &&
      fotoSelfieKtp
    ) {
      return true
    } else if (
      user?.user?.tipe === 'Organisasi' &&
      fotoKtp &&
      fotoSelfieKtp &&
      noTlpPenaggungJawab &&
      fotoNPWP &&
      fotoSelfieNPWP
    ) {
      return true
    }

    return false
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  if (!getToken()) {
    return <Redirect to="/" />
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
        <Spinner color="#e7513b" />
      </div>
    )
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton
        hrf={'1'}
        txt={`Verifikasi Akun ${
          user?.user?.tipe === 'pribadi' || user?.user?.tipe === 'Individu'
            ? 'Pribadi'
            : 'Organisasi'
        }`}
      />
      <form onSubmit={onSubmit}>
        <div className="mt-[96px] mx-[20px] space-y-6 mb-[87px]">
          {user?.user?.tipe === 'Organisasi' && (
            <div>
              <h3 className="font-normal text-base">
                No. Telpon Penanggung Jawab
              </h3>
              <div
                className="w-full border-[1px] h-[60px] flex items-center rounded-full mt-[16px]"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <span
                  className="p-[16px]"
                  style={{ borderRight: '1px solid #BEBEBE' }}
                >
                  +62
                </span>
                <input
                  className="bg-transparent outline-none text-base font-normal w-full ml-[10px]"
                  type="tel"
                  placeholder="85X-XXXX-XXXX"
                  maxLength="14"
                  value={noTlpPenaggungJawab}
                  onChange={(e) =>
                    setNoTlpPenaggungJawab(e.target.value.replace(/\D/g, ''))
                  }
                />
              </div>
            </div>
          )}
          <div>
            <h3 className="font-normal text-base">Foto KTP</h3>
            <div className="grid grid-cols-4 space-x-1 mt-[16px]">
              <div className="relative col-span-2">
                <img
                  src="https://i.postimg.cc/zfQP9xn4/5.png"
                  className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                  alt=""
                />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <svg
                    width={25}
                    height={26}
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.3128"
                      cy="12.9074"
                      r="11.655"
                      fill="#34A853"
                      stroke="white"
                    />
                    <path
                      d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                      fill="#34A853"
                    />
                    <path
                      d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative col-span-2">
                <img
                  src="https://i.postimg.cc/zfQP9xn4/5.png"
                  className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                  alt=""
                />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="13.3213"
                      cy="13.4359"
                      r="12.1835"
                      fill="#E7513B"
                      stroke="white"
                    />
                    <path
                      d="M17.549 9.2085L9.09338 17.6641"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.09338 9.2085L17.549 17.6641"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mt-[24px]">
              <h5 className="text-base font-normal ml-[5px]">Ketentuan</h5>
              <ul className="text-sm font-light list-disc ml-[20px]">
                <li>Gunakan foto asli, bukan fotokopi KTP.</li>
                <li>Pastikan foto KTP dalam kondisi terang dan jelas.</li>
                <li>
                  Pastikan foto KTP tidak terpotong atau terhalang objek lain.
                </li>
              </ul>
            </div>
            <div
              onClick={() => ktp.current.click()}
              className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] cursor-pointer"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <input
                style={{ display: 'none' }}
                ref={ktp}
                type="file"
                accept="image/*"
                onChange={() => setFotoKtp(ktp.current.files[0])}
              />
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 8V2L20 4"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 2L16 4"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className={`ml-[12px] text-sm font-normal truncate  ${
                  !fotoKtp ? 'text-[#717171]' : 'text-black'
                }`}
              >
                {!fotoKtp ? 'Upload foto' : fotoKtp.name}
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-normal text-base">Foto Diri & KTP</h3>
            <div className="grid grid-cols-4 space-x-1 mt-[16px]">
              <div className="relative col-span-2">
                <img
                  src="https://i.postimg.cc/zfQP9xn4/5.png"
                  className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                  alt=""
                />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <svg
                    width={25}
                    height={26}
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.3128"
                      cy="12.9074"
                      r="11.655"
                      fill="#34A853"
                      stroke="white"
                    />
                    <path
                      d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                      fill="#34A853"
                    />
                    <path
                      d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="relative col-span-2">
                <img
                  src="https://i.postimg.cc/zfQP9xn4/5.png"
                  className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                  alt=""
                />
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="13.3213"
                      cy="13.4359"
                      r="12.1835"
                      fill="#E7513B"
                      stroke="white"
                    />
                    <path
                      d="M17.549 9.2085L9.09338 17.6641"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.09338 9.2085L17.549 17.6641"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mt-[24px]">
              <h4 className="text-sm font-light">
                Tunjukkan bagian depan KTP dengan posisi di bawah dagu tanpa
                menutupi wajah.
              </h4>
            </div>
            <div
              onClick={() => selfieKtp.current.click()}
              className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] cursor-pointer"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <input
                style={{ display: 'none' }}
                ref={selfieKtp}
                type="file"
                accept="image/*"
                onChange={() => setFotoSelfieKtp(selfieKtp.current.files[0])}
              />
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 8V2L20 4"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 2L16 4"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                  stroke="#717171"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                className={`ml-[12px] text-sm font-normal truncate  ${
                  !fotoSelfieKtp ? 'text-[#717171]' : 'text-black'
                }`}
              >
                {!fotoSelfieKtp ? 'Upload foto' : fotoSelfieKtp.name}
              </p>
            </div>
          </div>
          {user?.user?.tipe === 'Organisasi' && (
            <>
              <div>
                <h3 className="font-normal text-base">Foto NPWP</h3>
                <div className="grid grid-cols-4 space-x-1 mt-[16px]">
                  <div className="relative col-span-2">
                    <img
                      src="https://i.postimg.cc/zfQP9xn4/5.png"
                      className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                      alt=""
                    />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <svg
                        width={25}
                        height={26}
                        viewBox="0 0 25 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12.3128"
                          cy="12.9074"
                          r="11.655"
                          fill="#34A853"
                          stroke="white"
                        />
                        <path
                          d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                          fill="#34A853"
                        />
                        <path
                          d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="relative col-span-2">
                    <img
                      src="https://i.postimg.cc/zfQP9xn4/5.png"
                      className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                      alt=""
                    />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <svg
                        width={27}
                        height={27}
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="13.3213"
                          cy="13.4359"
                          r="12.1835"
                          fill="#E7513B"
                          stroke="white"
                        />
                        <path
                          d="M17.549 9.2085L9.09338 17.6641"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.09338 9.2085L17.549 17.6641"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-[24px]">
                  <h4 className="text-sm font-light">
                    Tunjukkan bagian depan KTP dengan posisi di bawah dagu tanpa
                    menutupi wajah.
                  </h4>
                </div>
                <div
                  onClick={() => npwp.current.click()}
                  className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] cursor-pointer"
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <input
                    style={{ display: 'none' }}
                    ref={npwp}
                    type="file"
                    accept="image/*"
                    onChange={() => setFotoNPWP(npwp.current.files[0])}
                  />
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 8V2L20 4"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 2L16 4"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    className={`ml-[12px] text-sm font-normal truncate  ${
                      !fotoNPWP ? 'text-[#717171]' : 'text-black'
                    }`}
                  >
                    {!fotoNPWP ? 'Upload foto' : fotoNPWP.name}
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-normal text-base">Foto Diri & NPWP</h3>
                <div className="grid grid-cols-4 space-x-1 mt-[16px]">
                  <div className="relative col-span-2">
                    <img
                      src="https://i.postimg.cc/zfQP9xn4/5.png"
                      className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                      alt=""
                    />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <svg
                        width={25}
                        height={26}
                        viewBox="0 0 25 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12.3128"
                          cy="12.9074"
                          r="11.655"
                          fill="#34A853"
                          stroke="white"
                        />
                        <path
                          d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                          fill="#34A853"
                        />
                        <path
                          d="M17.7151 9.53125L10.287 16.9593L6.91064 13.5829"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="relative col-span-2">
                    <img
                      src="https://i.postimg.cc/zfQP9xn4/5.png"
                      className="w-[179px] h-[120px] rounded-[15px] object-cover bg-gray-500"
                      alt=""
                    />
                    <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                      <svg
                        width={27}
                        height={27}
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="13.3213"
                          cy="13.4359"
                          r="12.1835"
                          fill="#E7513B"
                          stroke="white"
                        />
                        <path
                          d="M17.549 9.2085L9.09338 17.6641"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9.09338 9.2085L17.549 17.6641"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-[24px]">
                  <h4 className="text-sm font-light">
                    Tunjukkan bagian depan KTP dengan posisi di bawah dagu tanpa
                    menutupi wajah.
                  </h4>
                </div>
                <div
                  onClick={() => selfieNPWP.current.click()}
                  className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px] cursor-pointer"
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <input
                    style={{ display: 'none' }}
                    ref={selfieNPWP}
                    type="file"
                    accept="image/*"
                    onChange={() =>
                      setFotoSelfieNPWP(selfieNPWP.current.files[0])
                    }
                  />
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 8V2L20 4"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 2L16 4"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                      stroke="#717171"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p
                    className={`ml-[12px] text-sm font-normal truncate  ${
                      !fotoSelfieNPWP ? 'text-[#717171]' : 'text-black'
                    }`}
                  >
                    {!fotoSelfieNPWP ? 'Upload foto' : fotoSelfieNPWP.name}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div
          className={`mt-[10px] h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40 ${
            validator() && 'fixed bottom-0 w-full'
          }`}
        >
          <span className="w-[90%]">
            {validator() ? (
              <button
                className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
                type="submit"
              >
                Simpan
              </button>
            ) : (
              <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
                Simpan
              </button>
            )}
          </span>
        </div>
      </form>
    </div>
  )
}

export default VerifikasiAkun
