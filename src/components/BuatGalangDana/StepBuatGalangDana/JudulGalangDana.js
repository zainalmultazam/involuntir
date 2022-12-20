import { useState, useEffect } from 'react'
import Select from 'react-select'

import './index.css'

const kota = [
  { value: '1', label: 'Jakarta' },
  { value: '2', label: 'Bandung' },
  { value: '3', label: 'Surabaya' },
]

const options = [
  { value: '1', label: '30 hari' },
  { value: '2', label: '60 hari' },
  { value: '3', label: '120 hari' },
  { value: '4', label: 'Kustom' },
]

function JudulGalangDana({ setStep, data, state }) {
  const option = options.find((option) => option.label === state.target.waktu)
  const optionKota = kota.find(
    (option) => option.label === state.penerima.lokasi
  )

  const [judul, setJudul] = useState(state.judul.judul ? state.judul.judul : '')
  const [detail, setDetail] = useState(
    state.target.detail ? state.target.detail : ''
  )
  const [waktu, setWaktu] = useState(
    state.target.waktu ? state.target.waktu : ''
  )
  const [lokasi, setLokasi] = useState(optionKota ? optionKota.label : '')
  const [lokasi2, setLokasi2] = useState(
    state.target.lokasi2 ? state.target.lokasi2 : ''
  )
  const [slug, setSlug] = useState(state.judul.slug ? state.judul.slug : '')
  const [image1, setImage1] = useState(
    state.judul.image?.image1 ? state.judul.image.image1 : ''
  )
  const [checklist, setChecklist] = useState(option ? option.value : '')
  const [image2, setImage2] = useState(
    state.judul.image?.image2 ? state.judul.image.image2 : ''
  )
  const [image3, setImage3] = useState(
    state.judul.image?.image3 ? state.judul.image.image3 : ''
  )
  const [image4, setImage4] = useState(
    state.judul.image?.image4 ? state.judul.image.image4 : ''
  )

  const handleOnSimpan = () => {
    data({
      judul,
      slug,
      image: {
        image1,
        image2,
        image3,
        image4,
      },
    })
  }

  const handleOnNext = () => {
    setStep('deskripsi')
    data({
      judul,
      slug,
      image: {
        image1,
        image2,
        image3,
        image4,
      },
    })
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #BEBEBE',
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? '#0288D1' : 'white',
    }),
    control: (provided) => ({
      ...provided,
      height: '60px',
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 30,
      marginTop: 14,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      boxShadow: '0 !important',
      '&:hover': {
        outline: 'none !important',
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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  function handleBanner(e, pilihan) {
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      if (pilihan === 1) {
        setImage1(reader.result)
      } else if (pilihan === 2) {
        setImage2(reader.result)
      } else if (pilihan === 3) {
        setImage3(reader.result)
      } else if (pilihan === 4) {
        setImage4(reader.result)
      }
    })

    reader.readAsDataURL(e.target.files[0])
  }

  function validator() {
    if (judul && slug && (image1 || image2 || image3 || image4)) {
      return true
    }
    return false
  }

  return (
    <div className="py-6 bg-white rounded-t-[30px] mt-6">
      {/* JUDUL */}
      <div className="mx-[20px]">
        <h1 className="text-large font-medium">Judul Aktivitas</h1>
        <input
          type="text"
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] mt-[14px]"
          placeholder="Open Recruitment"
          value={judul}
          onChange={(e) => {
            setJudul(e.target.value)
          }}
        />
      </div>
      {/* Detail */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Detail</h1>
        <p className="text-sm font-normal text-[#717171] mt-[4px]">
          Ceritakan secara detail rencana penggunaan dana yang didapat dari
          galang dana ini
        </p>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Contoh: biaya bangunan Rp2.00.000, biaya tukang Rp10.300.000"
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value)
          }}
        >
          detail
        </textarea>
      </div>
      {/* waktu */}
      <div className="mx-[20px] mt-[14px]">
        <h1 className="text-large font-medium">Waktu</h1>
        <input
          type="text"
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] mt-[14px]"
          placeholder="Open Recruitment"
          value={waktu}
          onChange={(e) => {
            setWaktu(e.target.value)
          }}
        />
      </div>
      {/* LOKASI */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Pilih Lokasi</h1>
        <Select
          placeholder="Pilih lokasi"
          value={kota.value === null ? '' : kota.value}
          styles={customStyles}
          defaultValue={kota[Number(optionKota ? optionKota.value : 0) - 1]}
          noOptionsMessage={() => 'Lokasi Tidak Ditemukan :('}
          options={kota}
          components={{
            IndicatorSeparator: () => null,
          }}
          isSearchable={false}
          onChange={(e) => {
            setLokasi(e.label)
          }}
        />
        <input
          type="text"
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] mt-4"
          placeholder="Open Recruitment"
          value={lokasi2}
          onChange={(e) => {
            setLokasi2(e.target.value)
          }}
        />
      </div>
      {/* tugas */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Tugas</h1>
        <Select
          placeholder="Pilih lokasi"
          value={kota.value === null ? '' : kota.value}
          styles={customStyles}
          defaultValue={kota[Number(optionKota ? optionKota.value : 0) - 1]}
          noOptionsMessage={() => 'Lokasi Tidak Ditemukan :('}
          options={kota}
          components={{
            IndicatorSeparator: () => null,
          }}
          isSearchable={false}
          onChange={(e) => {
            setLokasi(e.label)
          }}
        />
      </div>
      {/* kriteria */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Kriteria</h1>
        <Select
          placeholder="Pilih lokasi"
          value={kota.value === null ? '' : kota.value}
          styles={customStyles}
          defaultValue={kota[Number(optionKota ? optionKota.value : 0) - 1]}
          noOptionsMessage={() => 'Lokasi Tidak Ditemukan :('}
          options={kota}
          components={{
            IndicatorSeparator: () => null,
          }}
          isSearchable={false}
          onChange={(e) => {
            setLokasi(e.label)
          }}
        />
      </div>
      {/* LINK SLUG */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Buat Custom Link</h1>
        <p className="text-sm font-normal text-[#717171] mt-[4px]">
          Link harus dimulai dengan huruf, tanpa spasi (opsional)
        </p>
        <div className="px-[20px] h-[65px] rounded-[30px] border-[1px] flex items-center overflow-hidden mt-[14px]">
          <span
            className="h-[60px] text-lg flex items-center pr-[14px]"
            style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)' }}
          >
            <label
              htmlFor="slug"
              className="text-base font-normal text-[#212121]"
            >
              involuntir.com/
            </label>
          </span>
          <input
            type="text"
            id="slug"
            className="outline-none border-0 w-full text-large font-normal placeholder-[#C4C4C4] pl-[10px] focus:ring-transparent focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0"
            placeholder="Contoh: opreckejarmimpi"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value)
            }}
          />
        </div>
      </div>
      {/* DURASI */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Durasi galang dana</h1>
        <div className="grid grid-cols-2 gap-4 mt-[14px]">
          <label forhtml="durasi-1">
            <div
              className={`rounded-[30px] p-[20px] cursor-pointer  mr-[20px] w-full flex flex-row justify-between items-center drop-shadow ${
                checklist === options[0].value
                  ? `bg-involuntir-bgicon border-[1px] border-peduly-primary`
                  : `bg-white border-[1px]`
              }`}
            >
              <p
                className={`text-large font-normal ${
                  checklist === options[0].value
                    ? `text-[#212121]`
                    : `text-[#717171]`
                }`}
              >
                30 Hari
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-1"
                checked={checklist === options[0].value}
                className="rounded-full text-peduly-primary input-custom focus:ring-transparent focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0"
                onChange={() => setChecklist(options[0].value)}
              />
              {/* <input type="checkbox" name="" className="input-custom" checked /> */}
            </div>
          </label>
          <label forhtml="durasi-2">
            <div
              className={`rounded-[30px] p-[20px] cursor-pointer  mr-[20px] w-full flex flex-row justify-between items-center drop-shadow ${
                checklist === options[1].value
                  ? `bg-involuntir-bgicon border-[1px] border-peduly-primary`
                  : `bg-white border-[1px]`
              }`}
            >
              <p
                className={`text-large font-normal ${
                  checklist === options[1].value
                    ? `text-[#212121]`
                    : `text-[#717171]`
                }`}
              >
                60 Hari
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-2"
                checked={checklist === options[1].value}
                className="rounded-full text-peduly-primary input-custom focus:ring-transparent focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0"
                onChange={() => setChecklist(options[1].value)}
              />
            </div>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-[14px]">
          <label forhtml="durasi-3">
            <div
              className={`rounded-[30px] p-[20px] cursor-pointer  mr-[20px] w-full flex flex-row justify-between items-center drop-shadow ${
                checklist === options[2].value
                  ? `bg-involuntir-bgicon border-[1px] border-peduly-primary`
                  : `bg-white border-[1px]`
              }`}
            >
              <p
                className={`text-large font-normal ${
                  checklist === options[2].value
                    ? `text-[#212121]`
                    : `text-[#717171]`
                }`}
              >
                120 Hari
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-3"
                checked={checklist === options[2].value}
                className="rounded-full text-peduly-primary input-custom focus:ring-transparent focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0"
                onChange={() => setChecklist(options[2].value)}
              />
            </div>
          </label>
          <label forhtml="durasi-4">
            <div
              className={`rounded-[30px] p-[20px] cursor-pointer  mr-[20px] w-full flex flex-row justify-between items-center drop-shadow ${
                checklist === options[3].value
                  ? `bg-involuntir-bgicon border-[1px] border-peduly-primary`
                  : `bg-white border-[1px]`
              }`}
            >
              <p
                className={`text-large font-normal ${
                  checklist === options[3].value
                    ? `text-[#212121]`
                    : `text-[#717171]`
                }`}
              >
                Kustom
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-4"
                checked={checklist === options[3].value}
                className="rounded-full text-peduly-primary input-custom focus:ring-transparent focus:ring-0 focus:ring-opacity-0 focus:ring-offset-0"
                onChange={() => setChecklist(options[3].value)}
              />
            </div>
          </label>
        </div>
      </div>
      {/* BANNER */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Banner galang dana</h1>
        <ul className="text-basic text-[#717171] list-disc mt-[4px] ml-4">
          <li>Minimal upload 1 banner</li>
          <li>Resolusi 1080 x 720 px atau rasio 3:2</li>
          <li>Ukuran maksimal 10MB</li>
          <li>Format .jpg/.jpeg/.png</li>
        </ul>
        <div className="flex flex-row mt-[14px]">
          <div className="w-full mr-[7px]">
            <label htmlFor="banner-1" className="w-full cursor-pointer">
              {image1.length > 0 ? (
                <img
                  src={image1}
                  className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                  alt=""
                />
              ) : (
                <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              name="banner-1"
              id="banner-1"
              className="hidden"
              onChange={(e) => handleBanner(e, 1)}
            />
          </div>
          <div className="w-full mr-[7px]">
            <label htmlFor="banner-2" className="w-full cursor-pointer">
              {image2.length > 0 ? (
                <img
                  src={image2}
                  className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                  alt=""
                />
              ) : (
                <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              name="banner-2"
              id="banner-2"
              className="hidden"
              onChange={(e) => handleBanner(e, 2)}
            />
          </div>
          <div className="w-full mr-[7px]">
            <label htmlFor="banner-3" className="w-full cursor-pointer">
              {image3.length > 0 ? (
                <img
                  src={image3}
                  className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                  alt=""
                />
              ) : (
                <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              name="banner-3"
              id="banner-3"
              className="hidden"
              onChange={(e) => handleBanner(e, 3)}
            />
          </div>
          <div className="w-full mr-[7px]">
            <label htmlFor="banner-4" className="w-full cursor-pointer">
              {image4.length > 0 ? (
                <img
                  src={image4}
                  className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                  alt=""
                />
              ) : (
                <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H16"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16V8"
                      stroke="#0288D1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              name="banner-4"
              id="banner-4"
              className="hidden"
              onChange={(e) => handleBanner(e, 4)}
            />
          </div>
        </div>
        {/* TIPS BANNER */}
        <div
          className="p-[20px] mt-[16px] rounded-[15px] drop-shadow"
          style={{ backgroundColor: 'rgba(228, 228, 228, 0.16)' }}
        >
          <h1 className="text-large font-medium">
            Tip banner galang dana yang baik
          </h1>
          <ul className="text-basic text-[#717171] list-disc mt-[4px] ml-4">
            <li>Foto yang diangkat sesuai dengan cerita yang diangkat</li>
            <li>Foto asli tanpa di edit</li>
            <li>Foto tidak buram</li>
            <li>Pencahayaan foto cukup</li>
          </ul>
          <img
            src={'/images/galangdana/tips_banner.jpg'}
            className="h-[150px] w-[230px] rounded-[10px] object-cover mt-3"
            alt=""
          />
        </div>
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => setStep('target')}
          >
            Kembali
          </button>
          {validator() ? (
            <button
              className="bg-peduly-primary text-white rounded-full w-full h-[60px]"
              onClick={handleOnNext}
            >
              Lanjut
            </button>
          ) : (
            <button
              className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px]"
              disabled
            >
              Lanjut
            </button>
          )}
        </div>
        <button
          className="bg-white text-peduly-primary font-semibold rounded-full w-full h-[60px] border-[1px] boder-[#E4E4E4] mt-[12px]"
          onClick={handleOnSimpan}
        >
          Simpan dan lanjutkan nanti
        </button>
      </div>
    </div>
  )
}

export default JudulGalangDana
