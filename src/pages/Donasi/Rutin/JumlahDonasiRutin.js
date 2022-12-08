import axios from 'axios'
import { API_URL } from 'config/api'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import splitInDots from 'utils/splitDots'
import Switch from 'react-switch'
import Spinner from 'components/loaders/Spinner'
import { useContext } from 'react'
import { UserContext } from 'context/UserContext'
import {
  getDataDonasi,
  getReferal,
  getToken,
  removeDataDonasi,
  removeReferal,
  setDataDonasi,
  setSlug,
} from 'utils/cookiesHooks'
import MetodePembayaran from 'components/Donasi/MetodePembayaran'
import { METODE_PEMBAYARAN } from 'config/metodePembayaran'
import { dateTimeFormat } from 'utils/dateFormat'
import PilihTanggal from 'components/Donasi/Rutin/PilihTanggal'

function JumlahDonasiRutin() {
  const [data, setData] = useState([])
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [active, setActive] = useState(0)
  const [referalStatus, setReferalStatus] = useState('pending')
  const [pilihanMetode, setPilihanMetode] = useState(false)
  const [click, setClick] = useState(false)
  const [namaLengkap, setNamaLengkap] = useState('')
  const [email, setEmail] = useState('')
  const [noHp, setNoHp] = useState('')
  const [referal, setReferal] = useState('')
  const [pesan, setPesan] = useState('')
  const [value, setValue] = useState('')
  const [tanggal, setTanggal] = useState('')
  const [popUp, setPopUp] = useState(false)
  const [method, setMethod] = useState('')

  const user = useContext(UserContext)
  const { slug } = useParams()
  const history = useHistory()
  const temp = getDataDonasi() ? JSON.parse(getDataDonasi()) : ''

  useEffect(() => {
    getData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    let gettingData = await axios.get(
      `${API_URL}/api/galangdana/byslug/${slug}`
    )
    let response = await gettingData.data

    setData(response.data.campaign[0])
  }

  useEffect(() => {
    setReferalStatus('pending')
    const delayDebounceFn = setTimeout(
      async () => {
        let getData = await axios.get(
          `${API_URL}/api/donation/checkreferal?referal=${referal}`
        )
        let response = await getData.data.status
        if (response === 202) {
          setReferalStatus('invalid')
        } else if (response === 201) {
          setReferalStatus('success')
        } else {
          setReferalStatus('invalid')
        }
      },
      referal ? 0 : 500
    )
    return () => clearTimeout(delayDebounceFn)
  }, [referal]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')

    if (result === '10000') {
      setActive(1)
    } else if (result === '20000') {
      setActive(2)
    } else if (result === '50000') {
      setActive(3)
    } else {
      setActive(444)
    }

    if (temp.value) {
      setValue(splitInDots(result))
    } else {
      setValue(
        e.target.validity.valid ? splitInDots(temp.value ? value : result) : ''
      )
    }
  }

  function pilihMetode(pilih) {
    let select =
      !temp.method &&
      METODE_PEMBAYARAN.find(
        (pembayaran) =>
          pembayaran.metode === pilih.metode && pembayaran.nama === pilih.nama
      )
    if (temp.method) {
      setMethod(temp.method)
    } else {
      setMethod(select)
      handlePilihanMetode()
    }
  }

  if (active === 0) {
    if (temp.value) {
      handleChange()
    }
    if (temp.method) {
      pilihMetode()
    }
  }

  setTimeout(() => {
    removeDataDonasi()
  }, 100)

  const pilihTanggal = (tanggalDipilih) => {
    setTanggal(tanggalDipilih)
    setPopUp(false)
  }

  const handleChangeReferal = (e) => {
    const result = e.target.value.toUpperCase()
    setReferal(result)
  }

  const handleChangePhoneNumber = (e) => {
    const result = e.target.value.replace(/\D/g, '')
    setNoHp(result)
  }

  function handlePilihanMetode() {
    if (pilihanMetode === false) {
      setPilihanMetode(true)
    } else {
      setPilihanMetode(false)
    }
  }

  function nominal() {
    if (method.metode === 'transfer_manual') {
      return (
        parseInt(value.replaceAll('.', '')) +
        Math.floor(Math.random() * 200) +
        1
      )
    } else {
      return parseInt(value.replaceAll('.', ''))
    }
  }

  const handleOnSubmit = async (e) => {
    setClick(true)
    let postData

    postData = await axios.post(
      `${API_URL}/api/donation${
        method.metode === 'cod' || method.metode === 'transfer_manual'
          ? ''
          : `/${method.metode}`
      }?nominal=${nominal()}&metode=${
        method.metode === 'transfer_manual' ? 'manual' : method.metode
      }&nama_lengkap=${
        user.user.name ? user.user.name : namaLengkap
      }&alamat_email=${
        user.user.email ? user.user.email : email
      }&nomor_ponsel=${
        user.user.phone ? user.user.phone : noHp
      }&kode_referensi=${getReferal() || referal}&pesan_baik=${pesan}&user_id=${
        user.user.id && !checked ? user.user.id : 1
      }&campaign_id=${data.id}${
        method.metode === 'bank_transfer'
          ? `&bank_name=${method.nama}`
          : method.metode === 'emoney'
          ? `&emoney_name=${method.nama}`
          : ''
      }`
    )

    let response = postData

    if (response.status === 200 || response.status === 201) {
      // set deadline
      let deadline

      let date = new Date()
      deadline = dateTimeFormat(new Date(date.getTime() + 60 * 60 * 24 * 1000))

      // set virtual number
      let va_number
      if (
        response.data?.data?.midtrans_response &&
        method.metode === 'bank_transfer'
      ) {
        if (method.nama === 'bni' || method.nama === 'bri') {
          va_number =
            response.data?.data?.midtrans_response?.va_numbers[0]?.va_number
        } else if (method.nama === 'mandiri') {
          va_number = response.data?.data?.midtrans_response?.bill_key
        } else if (method.nama === 'permata') {
          va_number = response.data?.data?.midtrans_response?.permata_va_number
        }
      }

      let detail = {
        id: response.data?.data?.id || response.data?.data?.donasi?.id,
        method: method.metode,
        name: method.nama,
        label: method.label,
        image: method.image,
        va_number: va_number,
        deadline: deadline,
        nominal: nominal(),
        qr_code: response.data?.data?.qr_code,
        tanggal_donasi: response.data?.data?.tanggal_donasi,
        'saved-to-database': true,
      }

      removeReferal()

      history.push({
        pathname: `/donasi-rutin/${slug}/jumlah-donasi/pembayaran`,
        state: { detail: detail },
      })
    } else {
      window.alert('Input tidak berhasil')
    }
  }

  const handleOnLogin = (e) => {
    const data = {
      value: value,
      method: method,
    }
    setSlug(slug)
    setDataDonasi(data)
    history.push(`/login`)
  }

  function validator() {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!getToken()) {
      if (
        method.metode === 'emoney' ||
        method.metode === 'shopeepay' ||
        method.metode === 'dana'
      ) {
        return (
          (value ? parseInt(value.replaceAll('.', '')) : 0) >= 100 &&
          method &&
          namaLengkap &&
          re.test(String(email).toLowerCase())
        )
      } else if (method.nama === 'tunai') {
        return (
          (value ? parseInt(value.replaceAll('.', '')) : 0) >= 5000 &&
          method &&
          namaLengkap &&
          re.test(String(email).toLowerCase()) &&
          (referalStatus === 'success' || getReferal())
        )
      } else {
        return (
          (value ? parseInt(value.replaceAll('.', '')) : 0) >= 10000 &&
          method &&
          namaLengkap &&
          re.test(String(email).toLowerCase())
        )
      }
    } else {
      if (
        method.metode === 'emoney' ||
        method.metode === 'shopeepay' ||
        method.metode === 'dana'
      ) {
        return (
          (value ? parseInt(value.replaceAll('.', '')) : 0) >= 100 && method
        )
      } else if (method.nama === 'tunai') {
        return (
          (value ? parseInt(value.replaceAll('.', '')) : 0) >= 100 &&
          method &&
          (referalStatus === 'success' || getReferal())
        )
      }
      return (
        (value ? parseInt(value.replaceAll('.', '')) : 0) >= 10000 && method
      )
    }
  }

  if (method.nama === 'tunai') {
    if (!checked2) {
      setChecked2(true)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      {pilihanMetode ? (
        <MetodePembayaran
          handlePilihanMetode={handlePilihanMetode}
          pilihMetode={pilihMetode}
          value={value}
        />
      ) : (
        <>
          {popUp && (
            <div
              className="mx-auto w-full h-full fixed z-50"
              style={{ background: 'rgb(111, 111, 111, 0.5)' }}
            ></div>
          )}
          <div className="mx-auto" style={{ maxWidth: '430px' }}>
            <PilihTanggal
              status={popUp}
              pilihTanggal={pilihTanggal}
              onClickOutside={() => (popUp ? setPopUp(!popUp) : null)}
            />
            <div className="relative">
              <div className="sticky top-0">
                <div className="relative h-[276.77px]">
                  {data.foto_campaign ? (
                    <img
                      src={`${API_URL}/images/images_campaign/${data.foto_campaign}`}
                      alt=""
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = '/images/no-picture.png'
                      }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="/images/no-picture.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-0  w-full">
                    <div className="flex justify-between items-center h-[52px] mx-[20px]">
                      <Link
                        to={`/donasi/rutin/${slug}`}
                        className="cursor-pointer w-[24px] h-[24px] bg-transparent flex items-center justify-center"
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            fill="white"
                          />
                          <path
                            d="M13.26 15.53L9.73999 12L13.26 8.46997"
                            stroke="#212121"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-white">
                <div
                  style={{ marginTop: '-22px' }}
                  className="absolute -mt-[20px] bg-white z-10 inset-x-0 rounded-t-full w-[100%] h-[27px]"
                >
                  <h1 className="pt-[30px] text-lg font-medium text-center justify-center flex">
                    Masukkan nominal donasi rutin
                  </h1>
                </div>
                <div className="mx-[20px] pt-[20px]">
                  <div
                    className="flex rounded-full h-[72px] items-center text-2xl font-medium px-[23px] mt-[20px]"
                    style={{ backgroundColor: 'rgba(228, 228, 228, 0.3)' }}
                  >
                    <p>Rp</p>
                    <input
                      className="text-right w-full text-[#E7513B] text-2xl outline-none focus:ring-transparent border-none bg-transparent placeholder-[#E7513B] pl-[10px] font-medium"
                      type="text"
                      value={value}
                      onChange={handleChange}
                      placeholder="0"
                      pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
                      min={0}
                      inputMode="numeric"
                    />
                  </div>
                  <p className="text-[#C4C4C4] text-xs font-medium mt-[12px]">
                    Minimal nominal donasi Rp100
                  </p>
                  <div className="grid grid-cols-6 gap-4 mt-[24px] text-sm font-medium text-center">
                    <span
                      className={`col-span-2 cursor-pointer h-[40px] px-[15px] border-[1px] rounded-full flex  items-center justify-center ${
                        active === 1
                          ? 'text-peduly-primary border-peduly-primary'
                          : ' text-[#DEDEDE]'
                      }`}
                      onClick={() => {
                        setValue('10.000')
                        setActive(1)
                      }}
                    >
                      Rp. 10.000
                    </span>
                    <span
                      className={`col-span-2 cursor-pointer h-[40px] px-[15px] border-[1px] rounded-full flex  items-center justify-center ${
                        active === 2
                          ? 'text-peduly-primary border-peduly-primary'
                          : ' text-[#DEDEDE]'
                      }`}
                      onClick={() => {
                        setValue('20.000')
                        setActive(2)
                      }}
                    >
                      Rp. 20.000
                    </span>
                    <span
                      className={`col-span-2 cursor-pointer h-[40px] px-[15px] border-[1px] rounded-full flex  items-center justify-center ${
                        active === 3
                          ? 'text-peduly-primary border-peduly-primary'
                          : ' text-[#DEDEDE]'
                      }`}
                      onClick={() => {
                        setValue('50.000')
                        setActive(3)
                      }}
                    >
                      Rp. 50.000
                    </span>
                  </div>
                  <hr className="mt-[24px]" />

                  <div className="mt-[16px] font-normal">
                    <h1 className="text-base font-medium">
                      Pilih tanggal donasi rutin
                    </h1>
                    <p className="text-basic mt-[6px]">
                      Pada tanggal ini, kamu akan menerima tagihan untuk
                      melakukan pembayaran donasi.
                    </p>
                    <div
                      className="relative my-[24px] cursor-pointer"
                      onClick={() => {
                        setPopUp(true)
                      }}
                    >
                      <p className="absolute text-basic top-[20px] left-[27px] font-semibold">
                        Tanggal
                      </p>
                      <input
                        className="text-right outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-full py-[20px] px-[27px] text-sm font-normal placeholder-[#C4C4C4] resize-none cursor-pointer"
                        pattern="[0-9]{2}"
                        placeholder="1"
                        min={0}
                        max={30}
                        value={tanggal}
                        readOnly
                      ></input>
                    </div>
                  </div>
                  <hr />

                  <div
                    className="flex justify-between h-[80px] items-center font-normal cursor-pointer"
                    onClick={() => handlePilihanMetode()}
                  >
                    {method ? (
                      <>
                        <div className="flex flex-row items-center">
                          <div className="w-[60px] flex justify-center ml-[8px]">
                            <img src={method.image} alt="" />
                          </div>
                          <h1 className="ml-[30px] text-sm font-normal">
                            {method.label}
                          </h1>
                        </div>
                        <button className="text-sm h-[32px] px-[24px] bg-peduly-primary rounded-full text-white">
                          Pilih
                        </button>
                      </>
                    ) : (
                      <>
                        <h1 className="text-base font-medium">
                          Pilih Metode pembayaran
                        </h1>
                        <button className="text-sm h-[32px] px-[24px] bg-[#E4E4E4] rounded-full text-white">
                          Pilih
                        </button>
                      </>
                    )}
                  </div>
                  <hr />

                  {!getToken() && (
                    <div>
                      <div className="text-center my-[24px]">
                        <p className="text-sm font-normal">
                          <span
                            className="text-peduly-primary cursor-pointer"
                            onClick={handleOnLogin}
                          >
                            Masuk
                          </span>{' '}
                          atau isi data di bawah ini
                        </p>
                      </div>
                      <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full">
                        <input
                          className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                          type="text"
                          placeholder="Nama Lengkap"
                          maxLength="50"
                          value={namaLengkap}
                          onChange={(e) => setNamaLengkap(e.target.value)}
                        />
                      </div>
                      <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px]">
                        <input
                          className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                          type="email"
                          placeholder="Alamat Email"
                          maxLength="40"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[24px]">
                        <input
                          className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                          type="tel"
                          placeholder="Nomor Ponsel"
                          maxLength="14"
                          value={noHp}
                          onChange={handleChangePhoneNumber}
                        />
                      </div>
                    </div>
                  )}

                  {!getReferal() && (
                    <>
                      <div className="flex justify-between py-[24px] items-center text-sm font-normal text-[#717171]">
                        {checked2 ? (
                          <div className="flex items-center h-[60px] px-[17px] w-full rounded-[15px] border-[1px] mr-[31px]">
                            <input
                              className=" text-black bg-transparent  focus:ring-transparent border-none outline-none w-full text-sm font-medium"
                              type="text"
                              value={referal}
                              onChange={handleChangeReferal}
                            />
                            {referalStatus === 'pending' ? (
                              <div className="w-[42px]">
                                <Spinner color={'#E7513B'} />
                              </div>
                            ) : referalStatus === 'success' ? (
                              <svg
                                width={24}
                                height={25}
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[42px]"
                              >
                                <path
                                  d="M12 22.7036C17.5 22.7036 22 18.2036 22 12.7036C22 7.20361 17.5 2.70361 12 2.70361C6.5 2.70361 2 7.20361 2 12.7036C2 18.2036 6.5 22.7036 12 22.7036Z"
                                  fill="#34A853"
                                />
                                <path
                                  d="M7.75 12.7036L10.58 15.5336L16.25 9.87366"
                                  stroke="white"
                                  strokeWidth="1.5"
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
                                className="w-[42px]"
                              >
                                <path
                                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                  fill="#E7513B"
                                />
                                <path
                                  d="M9.16992 14.83L14.8299 9.17004"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.8299 14.83L9.16992 9.17004"
                                  stroke="white"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                        ) : (
                          <h2>Masukkan kode referensi (opsional)</h2>
                        )}
                        <Switch
                          onChange={() => {
                            setChecked2(!checked2)
                          }}
                          checked={method.nama === 'tunai' ? true : checked2}
                          offColor="#E4E4E4"
                          onColor="#E7513B"
                          checkedIcon={false}
                          uncheckedIcon={false}
                          height={20}
                          width={40}
                          borderRadius={40}
                          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.4)"
                          activeBoxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.4)"
                          className={
                            method.nama === 'tunai' ? 'pointer-events-none' : ''
                          }
                        />
                      </div>
                      {method.nama === 'tunai' && (
                        <div
                          className="flex py-[18px] items-center rounded-[15px] px-[20px] mb-[24px]"
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
                                d="M7.99992 14.6667C11.6666 14.6667 14.6666 11.6667 14.6666 8.00001C14.6666 4.33334 11.6666 1.33334 7.99992 1.33334C4.33325 1.33334 1.33325 4.33334 1.33325 8.00001C1.33325 11.6667 4.33325 14.6667 7.99992 14.6667Z"
                                stroke="#E7513B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 5.33334V8.66668"
                                stroke="#E7513B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7.99634 10.6667H8.00233"
                                stroke="#E7513B"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <h3 className="text-xs font-normal ml-[12px]">
                            Pembayaran ini harus masukkan kode referensi
                          </h3>
                        </div>
                      )}
                    </>
                  )}
                  <hr className="mb-[100px]" />
                </div>
                <div className="fixed bottom-0 w-full h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40">
                  <span className="w-[90%]">
                    {validator() ? (
                      !click ? (
                        <button
                          className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
                          onClick={handleOnSubmit}
                        >
                          Donasi Sekarang
                        </button>
                      ) : (
                        <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
                          <Spinner color={'#E7513B'} />
                        </button>
                      )
                    ) : (
                      <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
                        Donasi Sekarang
                      </button>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default JumlahDonasiRutin
