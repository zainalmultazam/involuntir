import { useEffect } from 'react'
import { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: '1', label: 'Diri saya sendiri' },
  { value: '2', label: 'Keluarga saya' },
  { value: '3', label: 'Orang lain' },
]

const kota = [
  { value: '1', label: 'Jakarta' },
  { value: '2', label: 'Bandung' },
  { value: '3', label: 'Surabaya' },
]

function PenerimaGalangDana({ setStep, data, state }) {
  const option = options.find((option) => option.label === state.penerima.label)
  const optionKota = kota.find(
    (option) => option.label === state.penerima.lokasi
  )

  const [checklist, setChecklist] = useState(option ? option.value : '')
  const [namaPenerima, setNamaPenerima] = useState(
    state.penerima.namaPenerima ? state.penerima.namaPenerima : ''
  )
  const [tujuan, setTujuan] = useState(
    state.penerima.tujuan ? state.penerima.tujuan : ''
  )
  const [lokasi, setLokasi] = useState(optionKota ? optionKota.label : '')
  const [alamat, setAlamat] = useState(
    state.penerima.alamat ? state.penerima.alamat : ''
  )

  const handleOnSimpan = () => {
    data({
      label: options[checklist - 1]?.label,
      namaPenerima: namaPenerima,
      tujuan: tujuan,
      lokasi: lokasi,
      alamat: alamat,
    })
  }

  const handleOnNext = () => {
    setStep('target')
    data({
      label: options[checklist - 1]?.label,
      namaPenerima: namaPenerima,
      tujuan: tujuan,
      lokasi: lokasi,
      alamat: alamat,
    })
  }

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #BEBEBE',
      color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? '#E7513B' : 'white',
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

  function validator() {
    if (checklist && namaPenerima && tujuan && lokasi && alamat) {
      return true
    }
    return false
  }

  return (
    <div className="py-[20px]">
      {/* PENERIMA MANFAAT */}
      <div className="mx-[20px] mt-[14px]">
        <h1 className="text-large font-medium">
          Penerima manfaat ditujukan untuk
        </h1>
        <label forhtml="penerima-1">
          <div
            className={`rounded-[30px] p-[20px] cursor-pointer flex justify-between items-center drop-shadow mt-[24px] ${
              checklist === options[0].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
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
              Diri saya sendiri
            </p>
            <input
              type="checkbox"
              name="penerima"
              id="penerima-1"
              checked={checklist === options[0].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[0].value)}
            />
          </div>
        </label>

        <label forhtml="penerima-2">
          <div
            className={`rounded-[30px] p-[20px] cursor-pointer flex justify-between items-center drop-shadow mt-[24px] ${
              checklist === options[1].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
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
              Keluarga saya
            </p>
            <input
              type="checkbox"
              name="penerima"
              id="penerima-2"
              checked={checklist === options[1].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[1].value)}
            />
          </div>
        </label>

        <label forhtml="penerima-3">
          <div
            className={`rounded-[30px] p-[20px] cursor-pointer flex justify-between items-center drop-shadow mt-[24px] ${
              checklist === options[2].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
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
              Orang lain
            </p>
            <input
              type="checkbox"
              name="penerima"
              id="penerima-3"
              checked={checklist === options[2].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[2].value)}
            />
          </div>
        </label>
      </div>
      {/* NAMA PENERIMA */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Nama Penerima</h1>
        <input
          type="text"
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] mt-[14px]"
          placeholder="Nama Lengkap"
          value={namaPenerima}
          onChange={(e) => {
            setNamaPenerima(e.target.value)
          }}
        />
      </div>
      {/* TUJUAN GALANG DANA */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Tujuan Galang Dana</h1>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Contoh: Membiayai relawan "
          value={tujuan}
          onChange={(e) => {
            setTujuan(e.target.value)
          }}
        >
          tujuan galang dana
        </textarea>
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
      </div>
      {/* ALAMAT */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Alamat</h1>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Contoh: Kertajaya no.23, Kecamatan gubeng, Kota surabaya"
          value={alamat}
          onChange={(e) => {
            setAlamat(e.target.value)
          }}
        >
          alamat
        </textarea>
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => setStep('tujuan')}
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

export default PenerimaGalangDana
