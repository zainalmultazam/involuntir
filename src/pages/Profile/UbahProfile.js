import axios from 'axios'
import BackButton from 'components/BackButton'
import Spinner from 'components/loaders/Spinner'
import { API_URL } from 'config/api'
import { fetcher } from 'config/axiosHooks'
import { UserContext } from 'context/UserContext'
import { useContext } from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Select from 'react-select'
import { getToken, setUbahProfileBerhasil } from 'utils/cookiesHooks'

function UbahProfile() {
  const user = useContext(UserContext)

  const [fotoProfileUrl, setFotoProfileUrl] = useState(
    user.user?.photo
      ? user?.user?.photo.slice(0, 4) === 'http'
        ? `${user?.user?.photo}`
        : user?.user?.photo.slice(0, 7) === '/images'
        ? `${API_URL}${user?.user?.photo}`
        : `${API_URL}/images/images_profile/${user?.user?.photo}`
      : ''
  )
  const [fotoProfile, setFotoProfile] = useState('')
  const [namaLengkap, setNamaLengkap] = useState(
    user?.user?.name ? user?.user?.name : ''
  )
  const [username, setUsername] = useState(
    user?.user?.name ? user?.user?.name : ''
  )
  const [jenisAkun, setJenisAkun] = useState('')
  const [email, setEmail] = useState('')
  const [noHp, setNoHp] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('')
  const [pekerjaan, setPekerjaan] = useState('')
  const [jenisOrganisasi, setJenisOrganisasi] = useState('')
  const [emailOrganisasi, setEmailOrganisasi] = useState('')
  const [noHpOrganisasi, setNoHpOrganisasi] = useState('')
  const [tanggalBerdiri, setTanggalBerdiri] = useState('')
  const [provinsi, setProvinsi] = useState('')
  const [kota, setKota] = useState('')
  const [kecamatan, setKecamatan] = useState('')
  const [alamatLengkap, setAlamatLengkap] = useState('')
  const [pekerjaanList, setPekerjaanList] = useState([])
  const [jenisOrganisasiList, setJenisOrganisasiList] = useState([])
  const [provinsiList, setProvinsiList] = useState([])
  const [kotaList, setKotaList] = useState([])
  const [kotaId, setKotaId] = useState('')
  const [kecamatanList, setKecamatanList] = useState([])
  const [kecamatanId, setKecamatanId] = useState('')

  const [loading, setLoading] = useState(false)
  const profile = useRef(null)
  const history = useHistory()

  console.log(user)

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFotoProfile(event.target.files[0])
      setFotoProfileUrl(URL.createObjectURL(event.target.files[0]))
    }
  }

  const getListPekejaan = async () => {
    await fetcher(`${API_URL}/api/pekerjaan`, {
      method: 'GET',
    })
      .then((res) => {
        setPekerjaanList(res.data)
      })
      .catch((err) => {})
  }

  const optionsPekerjaan = pekerjaanList.map((c) => ({
    value: c.id,
    label: c.pekerjaan,
  }))

  const getListJenisOrganisasi = async () => {
    await fetcher(`${API_URL}/api/organisasi`, {
      method: 'GET',
    })
      .then((res) => {
        setJenisOrganisasiList(res.data)
      })
      .catch((err) => {})
  }

  const optionsJenisOrganisasi = jenisOrganisasiList.map((c) => ({
    value: c.id,
    label: c.jenis_lembaga,
  }))

  const getListProvinsi = async () => {
    await fetcher(`${API_URL}/api/prov`, {
      method: 'GET',
    })
      .then((res) => {
        setProvinsiList(res.data)
      })
      .catch((err) => {})
  }

  const optionsProvinsi = provinsiList.map((c) => ({
    value: c.id,
    label: c.name,
  }))

  useEffect(() => {
    getListPekejaan()
    getListJenisOrganisasi()
    getListProvinsi()
  }, [])

  const getListKota = async (id) => {
    await fetcher(`${API_URL}/api/kab?provinceId=${id}`, {
      method: 'GET',
    })
      .then((res) => {
        setKotaList(res.data)
      })
      .catch((err) => {})
  }

  const optionsKota = kotaList.map((c) => ({
    value: c.id,
    label: c.name,
  }))

  useEffect(() => {
    if (kotaId) {
      getListKota(kotaId)
    }
  }, [kotaId])

  const getListKecamatan = async (id) => {
    await fetcher(`${API_URL}/api/kec?regencyId=${id}`, {
      method: 'GET',
    })
      .then((res) => {
        setKecamatanList(res.data)
      })
      .catch((err) => {})
  }

  const optionsKecamatan = kecamatanList.map((c) => ({
    value: c.id,
    label: c.name,
  }))

  useEffect(() => {
    if (kecamatanId) {
      getListKecamatan(kecamatanId)
    }
  }, [kecamatanId])

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const dataUserHalf = new FormData()
    dataUserHalf.append('photo', fotoProfile)
    dataUserHalf.append('name', namaLengkap)
    dataUserHalf.append('username', username)

    const dataUserFull = new FormData()
    dataUserFull.append('photo', fotoProfile)
    dataUserFull.append('name', namaLengkap)
    dataUserFull.append('username', username)
    if (jenisAkun === 'pribadi') {
      dataUserFull.append('tipe', jenisAkun)
      dataUserFull.append('pekerjaan', pekerjaan)
      dataUserFull.append('tanggal_lahir', tanggalLahir)
      dataUserFull.append('jenis_kelamin', jenisKelamin)
      dataUserFull.append('no_telp', noHp)
    } else if (jenisAkun === 'organisasi') {
      dataUserFull.append('tipe', jenisAkun)
      dataUserFull.append('jenis_organisasi', jenisOrganisasi)
      dataUserFull.append('tanggal_berdiri', tanggalBerdiri)
      dataUserFull.append('no_telp', noHpOrganisasi)
    }
    dataUserFull.append('provinsi', provinsi)
    dataUserFull.append('kabupaten', kota)
    dataUserFull.append('kecamatan', kecamatan)
    dataUserFull.append('alamat', alamatLengkap)

    await axios
      .post(`${API_URL}/api/user`, !jenisAkun ? dataUserHalf : dataUserFull, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((res) => {
        setUbahProfileBerhasil()
        history.push({
          pathname: `/ubah-profile/berhasil`,
          state: {
            H1: 'Selamat!',
            P1: 'Perubahan Berhasi ^,^',
            hrf: 'profile',
            Button: 'Kembali',
          },
        })
      })
      .catch((err) => {})
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #BEBEBE',
      color: state.isSelected ? 'white' : 'black',
      padding: 10,

      backgroundColor: state.isSelected ? '#E7513B' : 'white',
    }),
    control: (provided) => ({
      ...provided,
      height: '60px',
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 9999,
      borderColor: 'rgba(0, 0, 0, 0.3)',
      color: 'rgba(0, 0, 0, 0.3)',
      font: 'root.font.regular',
      marginTop: 10,
      boxShadow: '0 !important',
      '&:hover': {
        outline: 'none !important',
        borderColor: 'rgba(0, 0, 0, 0.3)',
      },
      '&:focus': {
        outline: 'auto 2px Highlight !important',
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    },
  }

  function validator() {
    if (
      !jenisAkun &&
      namaLengkap !== user?.user?.name &&
      username !== user?.user?.username
    ) {
      return true
    } else if (
      jenisAkun === 'pribadi' &&
      jenisKelamin &&
      tanggalLahir &&
      pekerjaan &&
      noHp &&
      provinsi &&
      kota &&
      kecamatan &&
      alamatLengkap.length > 10
    ) {
      return true
    } else if (
      jenisAkun === 'organisasi' &&
      jenisOrganisasi &&
      tanggalBerdiri &&
      noHp &&
      provinsi &&
      kota &&
      kecamatan &&
      alamatLengkap.length > 10
    ) {
      return true
    }
    return false
  }

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
      <BackButton hrf={'1'} txt="Ubah Profil" />
      <form onSubmit={onSubmit}>
        <div className={`mt-[108px] space-y-5 mx-[20px]`}>
          <span
            onClick={() => profile.current.click()}
            className="flex justify-center cursor-pointer"
          >
            <input
              style={{ display: 'none' }}
              multiple={false}
              ref={profile}
              type="file"
              accept="image/png, image/gif, image/jpeg"
              onChange={onImageChange}
            />
            {fotoProfileUrl ? (
              <img
                src={fotoProfileUrl}
                alt=""
                className={`rounded-full object-cover w-[86px] h-[86px] ${
                  user?.user?.photo && !fotoProfile ? 'opacity-75' : ''
                }`}
              />
            ) : (
              <svg
                width={86}
                height={86}
                viewBox="0 0 86 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M43 86C66.7482 86 86 66.7482 86 43C86 19.2518 66.7482 0 43 0C19.2518 0 0 19.2518 0 43C0 66.7482 19.2518 86 43 86Z"
                  fill="#E7513B"
                />
                <path
                  d="M46.1791 59.182C46.9302 59.182 47.5351 59.7926 47.5351 60.5408C47.5351 61.2919 46.9302 61.8996 46.1791 61.8996H23.3089C22.5607 61.8996 21.9501 61.2919 21.9501 60.5408C21.9501 51.1697 28.8702 42.2917 38.5223 42.2917C39.2733 42.2917 39.8811 42.8994 39.8811 43.6505C39.8811 44.3987 39.2733 45.0093 38.5223 45.0093C30.9915 45.0093 25.3385 51.7144 24.7221 59.182H46.1791ZM43.4472 39.6687C38.4965 39.6687 34.4831 35.6783 34.4831 30.7533C34.4831 25.8284 38.4993 21.838 43.4472 21.838C48.3951 21.838 52.4113 25.8284 52.4113 30.7533C52.4113 35.6783 48.3979 39.6687 43.4472 39.6687ZM43.4472 36.9539C46.9015 36.9539 49.6965 34.1761 49.6965 30.7533C49.6965 27.3306 46.9015 24.5528 43.4472 24.5528C39.9929 24.5528 37.1979 27.3306 37.1979 30.7533C37.1979 34.1761 39.9929 36.9539 43.4472 36.9539ZM56.6224 42.3289C58.6147 42.1139 60.6042 42.779 62.0519 44.1464L62.0633 44.1579C63.3304 45.3848 64.0471 47.0646 64.0471 48.8162C64.0471 50.5734 63.3304 52.2533 62.0662 53.4802L53.793 61.5126C53.2627 62.0257 52.4256 62.0257 51.901 61.5126L43.6307 53.4831C42.3607 52.2533 41.6441 50.5734 41.6441 48.819C41.6441 47.0646 42.3607 45.3848 43.6421 44.1464C45.0898 42.779 47.0793 42.1139 49.0716 42.3289C50.4877 42.4837 51.8035 43.0685 52.847 43.9887C53.8905 43.0685 55.2063 42.4809 56.6224 42.3289ZM56.9148 45.0265C55.7137 45.1583 54.6358 45.8033 53.9736 46.7837C53.4347 47.5835 52.2593 47.5835 51.7233 46.7837C51.0611 45.8033 49.9832 45.1583 48.7821 45.0265C47.5781 44.8975 46.3769 45.3016 45.5198 46.1072C44.7773 46.8267 44.3617 47.8042 44.3617 48.819C44.3617 49.8338 44.7802 50.8114 45.5227 51.5309L52.8499 58.6431L60.1771 51.528C60.9224 50.8085 61.3352 49.8338 61.3352 48.8162C61.3352 47.8014 60.9195 46.8324 60.1828 46.1129C59.3085 45.2988 58.1131 44.8975 56.9148 45.0265Z"
                  fill="#E7513B"
                />
                <circle
                  cx={43}
                  cy={43}
                  r={43}
                  fill="#717171"
                  fillOpacity="0.5"
                />
                <path
                  d="M40.75 41.5C41.5784 41.5 42.25 40.8284 42.25 40C42.25 39.1716 41.5784 38.5 40.75 38.5C39.9216 38.5 39.25 39.1716 39.25 40C39.25 40.8284 39.9216 41.5 40.75 41.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.75 35.5H40.75C37 35.5 35.5 37 35.5 40.75V45.25C35.5 49 37 50.5 40.75 50.5H45.25C49 50.5 50.5 49 50.5 45.25V41.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.8125 37.75H49.9375"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M47.875 39.8125V35.6875"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M36.0024 48.2125L39.6999 45.73C40.2924 45.3325 41.1474 45.3775 41.6799 45.835L41.9274 46.0525C42.5124 46.555 43.4574 46.555 44.0424 46.0525L47.1624 43.375C47.7474 42.8725 48.6924 42.8725 49.2774 43.375L50.4999 44.425"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          <div className="pt-[20px]">
            <label
              htmlFor="namaLengkap"
              className="text-base font-normal ml-[10px]"
            >
              Nama Lengkap
            </label>
            <div
              className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[10px] "
              style={{
                borderColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <input
                id="namaLengkap"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                type="text"
                placeholder="Nama Lengkap"
                maxLength="50"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="namaLengkap"
              className="text-base font-normal ml-[10px]"
            >
              Username
            </label>
            <div
              className="w-full border-[1px] h-[60px] pr-[20px] flex items-center rounded-full mt-[10px]"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <span
                className="h-[60px] text-lg flex items-center px-[20px]"
                style={{ borderRight: '1px solid rgba(0, 0, 0, 0.3)' }}
              >
                <p className="ml-1 mb-1">@</p>
              </span>
              <input
                id="namaLengkap"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                type="text"
                placeholder="username"
                maxLength="50"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          {/* JENIS AKUN */}
          {user.user?.tipe === 'Individu' && namaLengkap && username && (
            <div>
              <h3 className="text-base font-normal ml-[10px]">Jenis Akun</h3>
              <div
                className="flex items-center ml-[10px] mt-[17px]"
                style={{
                  borderColor: 'rgba(0, 0, 0, 0.3)',
                }}
              >
                <input
                  id="pribadi"
                  className="rounded-full h-[16px] w-[16px]  bg-white border-gray-500 text-peduly-primary focus:ring-transparent cursor-pointer"
                  type="checkbox"
                  checked={jenisAkun === 'pribadi'}
                  onChange={() => setJenisAkun('pribadi')}
                />
                <label
                  htmlFor="pribadi"
                  className="ml-[10px] cursor-pointer"
                  onClick={() => setJenisAkun('pribadi')}
                >
                  Pribadi
                </label>
                <input
                  id="organisasi"
                  className="rounded-full ml-[28px] h-[16px] w-[16px]  bg-white border-gray-500 text-peduly-primary focus:ring-transparent cursor-pointer"
                  type="checkbox"
                  checked={jenisAkun === 'organisasi'}
                  onChange={() => setJenisAkun('organisasi')}
                />
                <label
                  htmlFor="organisasi"
                  className="ml-[10px] cursor-pointer"
                  onClick={() => setJenisAkun('organisasi')}
                >
                  Organisasi
                </label>
              </div>
            </div>
          )}
        </div>
        {(jenisAkun === 'organisasi' || jenisAkun === 'pribadi') && (
          <>
            <div
              className={`mt-[20px] space-y-5 mx-[20px] ${
                validator() && ' mb-[90px]'
              }`}
            >
              {jenisAkun === 'pribadi' && (
                <>
                  <div>
                    <label
                      htmlFor="perkerjaan"
                      className="text-base font-normal ml-[10px]"
                    >
                      Pekerjaan
                    </label>
                    <Select
                      id="perkerjaan"
                      placeholder="Pilih Pekerjaan"
                      value={
                        optionsPekerjaan.value === null
                          ? ''
                          : optionsPekerjaan.value
                      }
                      styles={customStyles}
                      noOptionsMessage={() => 'Pekerjaan Tidak Ditemukan :('}
                      options={optionsPekerjaan}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      isSearchable={false}
                      onChange={(e) => setPekerjaan(e.label)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tanggalLahir"
                      className="text-base font-normal ml-[10px]"
                    >
                      Tanggal Lahir
                    </label>
                    <div
                      className="w-[200px] border-[1px] h-[60px] flex items-center rounded-full mt-[10px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <span className="h-[60px] text-lg flex items-center pl-[20px]">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 2V5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 2V5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 9.08997H20.5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.6947 13.7H15.7037"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.6947 16.7H15.7037"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 13.7H12.0045"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 16.7H12.0045"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.29431 13.7H8.30329"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.29431 16.7H8.30329"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <input
                        id="tanggalLahir"
                        className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal date-input"
                        type="date"
                        value={tanggalLahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-normal ml-[10px]">
                      Jenis Kelamin
                    </h3>
                    <div
                      className="flex items-center ml-[10px] mt-[17px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <input
                        id="lakilaki"
                        className="rounded-full h-[16px] w-[16px]  bg-white border-gray-500 text-peduly-primary focus:ring-transparent cursor-pointer"
                        type="checkbox"
                        checked={jenisKelamin === 'lakilaki'}
                        onChange={() => setJenisKelamin('lakilaki')}
                      />
                      <label
                        htmlFor="lakilaki"
                        className="ml-[10px] cursor-pointer"
                        onClick={() => setJenisKelamin('lakilaki')}
                      >
                        Laki laki
                      </label>
                      <input
                        id="perempuan"
                        className="rounded-full ml-[28px] h-[16px] w-[16px]  bg-white border-gray-500 text-peduly-primary focus:ring-transparent cursor-pointer"
                        type="checkbox"
                        checked={jenisKelamin === 'perempuan'}
                        onChange={() => setJenisKelamin('perempuan')}
                      />
                      <label
                        htmlFor="perempuan"
                        className="ml-[10px] cursor-pointer"
                        onClick={() => setJenisKelamin('perempuan')}
                      >
                        Perempuan
                      </label>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-normal ml-[10px]"
                    >
                      Email
                    </label>
                    <div
                      className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[10px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <input
                        id="email"
                        className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                        type="email"
                        placeholder="zainalmultazam@gmail.com"
                        maxLength="40"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <p className="text-peduly-secondary text-xs ml-[10px]">
                      Alamat email tidak bisa diubah
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="noTelepon"
                      className="text-base font-normal ml-[10px]"
                    >
                      No. Telepon
                    </label>
                    <div
                      className="w-full border-[1px] h-[60px] pr-[20px] flex items-center rounded-full mt-[10px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <span
                        className="h-[60px] text-lg flex items-center px-[14px]"
                        style={{ borderRight: '1px solid rgba(0, 0, 0, 0.3)' }}
                      >
                        <p className="ml-1 mb-1">+62</p>
                      </span>
                      <input
                        id="noTelepon"
                        className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                        type="tel"
                        placeholder="85X-XXXX-XXXX"
                        maxLength="14"
                        value={noHp}
                        onChange={(e) =>
                          setNoHp(e.target.value.replace(/\D/g, ''))
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              {jenisAkun === 'organisasi' && (
                <>
                  <div>
                    <label
                      htmlFor="jenisOrganisasi"
                      className="text-base font-normal ml-[10px]"
                    >
                      Jenis Organisasi
                    </label>
                    <Select
                      id="jenisOrganisasi"
                      placeholder="Pilih Jenis Organisasi"
                      value={
                        optionsJenisOrganisasi.value === null
                          ? ''
                          : optionsJenisOrganisasi.value
                      }
                      styles={customStyles}
                      noOptionsMessage={() => 'Jenis Bank Tidak Ditemukan :('}
                      options={optionsJenisOrganisasi}
                      components={{
                        IndicatorSeparator: () => null,
                      }}
                      isSearchable={false}
                      onChange={(e) => setJenisOrganisasi(e.label)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="taggalBerdiri"
                      className="text-base font-normal ml-[10px]"
                    >
                      Tanggal Berdiri
                    </label>
                    <div
                      className="w-[200px] border-[1px] h-[60px] flex items-center rounded-full mt-[10px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <span className="h-[60px] text-lg flex items-center pl-[20px]">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 2V5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16 2V5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M3.5 9.08997H20.5"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                            stroke="#292D32"
                            strokeWidth="1.5"
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.6947 13.7H15.7037"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.6947 16.7H15.7037"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 13.7H12.0045"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9955 16.7H12.0045"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.29431 13.7H8.30329"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.29431 16.7H8.30329"
                            stroke="#292D32"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <input
                        id="taggalBerdiri"
                        className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal date-input"
                        type="date"
                        value={tanggalBerdiri}
                        onChange={(e) => setTanggalBerdiri(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="emailOrganisasi"
                      className="text-base font-normal ml-[10px]"
                    >
                      Email
                    </label>
                    <div
                      className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[10px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <input
                        id="emailOrganisasi"
                        className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                        type="email"
                        placeholder="yayasanpedulilindungi@gmail.com"
                        maxLength="40"
                        value={emailOrganisasi}
                        onChange={(e) => setEmailOrganisasi(e.target.value)}
                      />
                    </div>
                    <p className="text-peduly-secondary text-xs ml-[10px]">
                      Alamat email tidak bisa diubah
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="noTeleponOrganisasi"
                      className="text-base font-normal ml-[10px]"
                    >
                      No. Telepon
                    </label>
                    <div
                      className="w-full border-[1px] h-[60px] pr-[20px] flex items-center rounded-full mt-[10px]"
                      style={{
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      <span
                        className="h-[60px] text-lg flex items-center px-[14px]"
                        style={{ borderRight: '1px solid rgba(0, 0, 0, 0.3)' }}
                      >
                        <p className="ml-1 mb-1">+62</p>
                      </span>
                      <input
                        id="noTeleponOrganisasi"
                        className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                        type="tel"
                        placeholder="85X-XXXX-XXXX"
                        maxLength="14"
                        value={noHpOrganisasi}
                        onChange={(e) =>
                          setNoHpOrganisasi(e.target.value.replace(/\D/g, ''))
                        }
                      />
                    </div>
                  </div>
                </>
              )}

              <h1>Alamat Lengkap</h1>
              <div>
                <label
                  htmlFor="provinsiAlamat"
                  className="text-base font-normal ml-[10px]"
                >
                  Provinsi
                </label>
                <Select
                  id="provinsiAlamat"
                  placeholder="Pilih Provinsi"
                  value={
                    optionsProvinsi.value === null ? '' : optionsProvinsi.value
                  }
                  styles={customStyles}
                  noOptionsMessage={() => 'Provinsi Tidak Ditemukan :('}
                  options={optionsProvinsi}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                  onChange={(e) => {
                    setProvinsi(e.label)
                    setKotaId(e.value)
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="kotaKabubatenAlamat"
                  className="text-base font-normal ml-[10px]"
                >
                  Kota/Kabupaten
                </label>
                <Select
                  id="kotaKabubatenAlamat"
                  placeholder="Pilih Kota/kabupaten"
                  value={optionsKota.value === null ? '' : optionsKota.value}
                  styles={customStyles}
                  noOptionsMessage={() => 'Kota/Kabupatan tidak Ditemukan :('}
                  options={optionsKota}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                  onChange={(e) => {
                    setKota(e.label)
                    setKecamatanId(e.value)
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="kecamatanAlamat"
                  className="text-base font-normal ml-[10px]"
                >
                  Kecamatan
                </label>
                <Select
                  id="kecamatanAlamat"
                  placeholder="Pilih Kecamatan"
                  value={
                    optionsKecamatan.value === null
                      ? ''
                      : optionsKecamatan.value
                  }
                  styles={customStyles}
                  noOptionsMessage={() => 'Jenis Bank Tidak Ditemukan :('}
                  options={optionsKecamatan}
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  isSearchable={false}
                  onChange={(e) => setKecamatan(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="namaLengkap"
                  className="text-base font-normal ml-[10px]"
                >
                  Alamat
                </label>
                <div
                  className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[10px]"
                  style={{
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <input
                    id="namaLengkap"
                    className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                    type="text"
                    placeholder="Tulis Alamat Lengkap"
                    maxLength="50"
                    value={alamatLengkap}
                    onChange={(e) => setAlamatLengkap(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div
          className={`mt-[10px] h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40  ${
            (validator() || !jenisAkun) && 'fixed bottom-0 w-full'
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

export default UbahProfile
