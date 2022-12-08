import { useState, useEffect } from 'react'
import splitInDots from 'utils/splitDots'

const options = [
  { value: '1', label: '30 hari' },
  { value: '2', label: '60 hari' },
  { value: '3', label: '120 hari' },
  { value: '4', label: 'Kustom' },
]

function TargetGalangDana({ setStep, data, state }) {
  const option = options.find((option) => option.label === state.target.waktu)

  const [checklist, setChecklist] = useState(option ? option.value : '')
  const [biaya, setBiaya] = useState(
    state.target.biaya ? state.target.biaya : ''
  )
  const [rincian, setRincian] = useState(
    state.target.rincian ? state.target.rincian : ''
  )

  const handleBiaya = (e) => {
    const result = e.target.value.replace(/\D/g, '')
    setBiaya(e.target.validity.valid ? splitInDots(result) : '')
  }

  const handleOnSimpan = () => {
    data({
      waktu: options[checklist - 1].label,
      biaya,
      rincian,
    })
  }

  const handleOnNext = () => {
    setStep('judul')
    data({
      waktu: options[checklist - 1].label,
      biaya,
      rincian,
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  function validator() {
    if (checklist && biaya && rincian) {
      return true
    }
    return false
  }

  return (
    <div className="py-[20px]">
      {/* PERKIRAAN BIAYA */}
      <div className="mx-[20px] mt-[14px]">
        <h1 className="text-large font-medium">
          Perkiraan biaya yang dibutuhkan
        </h1>
        <div className="px-[20px] h-[65px] rounded-[30px] border-[1px] flex items-center overflow-hidden mt-[14px]">
          <label forhtml="biaya">Rp</label>
          <input
            id="biaya"
            className="focus:ring-transparent border-none bg-transparent text-large font-normal placeholder-[#C4C4C4]"
            placeholder="Masukkan jumlah kebutuhan biaya"
            type="text"
            value={biaya}
            onChange={handleBiaya}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
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
                30 Hari
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-1"
                checked={checklist === options[0].value}
                className="rounded-full text-peduly-primary focus:ring-transparent "
                onChange={() => setChecklist(options[0].value)}
              />
            </div>
          </label>
          <label forhtml="durasi-2">
            <div
              className={`rounded-[30px] p-[20px] cursor-pointer  mr-[20px] w-full flex flex-row justify-between items-center drop-shadow ${
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
                60 Hari
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-2"
                checked={checklist === options[1].value}
                className="rounded-full text-peduly-primary focus:ring-transparent "
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
                120 Hari
              </p>
              <input
                type="checkbox"
                name="durasi"
                id="durasi-3"
                checked={checklist === options[2].value}
                className="rounded-full text-peduly-primary focus:ring-transparent "
                onChange={() => setChecklist(options[2].value)}
              />
            </div>
          </label>
          <label forhtml="durasi-4">
            <div
              className={`rounded-[30px] p-[20px] cursor-pointer  mr-[20px] w-full flex flex-row justify-between items-center drop-shadow ${
                checklist === options[3].value
                  ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
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
                className="rounded-full text-peduly-primary focus:ring-transparent "
                onChange={() => setChecklist(options[3].value)}
              />
            </div>
          </label>
        </div>
      </div>
      {/* RINCIAN */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Tulis rincian penggunaan dana
        </h1>
        <p className="text-sm font-normal text-[#717171] mt-[4px]">
          Ceritakan secara detail rencana penggunaan dana yang didapat dari
          galang dana ini
        </p>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Contoh: biaya bangunan Rp2.00.000, biaya tukang Rp10.300.000"
          value={rincian}
          onChange={(e) => {
            setRincian(e.target.value)
          }}
        >
          rincian
        </textarea>
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => setStep('penerima')}
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

export default TargetGalangDana
