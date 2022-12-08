import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const options = [
  { value: '1', label: 'Acara/gerakan/kegiatan/program' },
  { value: '2', label: 'Bantuan/santunan' },
  { value: '3', label: 'Biaya operasional organisasi/yayasan' },
  { value: '4', label: 'Pembangunan/perbaikan/pembelian' },
]

function TujuanGalangDana({ setStep, data, state }) {
  const option = options.find((option) => option.label === state.tujuan.label)

  const [checklist, setChecklist] = useState(option ? option.value : '')
  const [setuju1, setSetuju1] = useState(state.tujuan.aggrement1 ? true : false)
  const [setuju2, setSetuju2] = useState(state.tujuan.aggrement2 ? true : false)

  const history = useHistory()

  const handleOnSimpan = () => {
    data({
      label: options[checklist - 1]?.label,
      aggrement1: setuju1,
      aggrement2: setuju2,
    })
  }

  const handleOnNext = () => {
    setStep('penerima')
    data({
      label: options[checklist - 1]?.label,
      aggrement1: setuju1,
      aggrement2: setuju2,
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  function validator() {
    if (checklist && setuju1 && setuju2) {
      return true
    }
    return false
  }

  return (
    <div className="py-[20px]">
      {/* TUJUAN DONASI */}
      <div className="mx-[20px] mt-[14px]">
        <h1 className="text-large font-medium">
          Donasi akan ditujukan untuk...
        </h1>
        <label forhtml="galang-1">
          <div
            className={`rounded-[15px] cursor-pointer flex justify-center items-center p-[20px] drop-shadow mt-[24px] ${
              checklist === options[0].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
                : `bg-white border-[1px]`
            }`}
          >
            <div>
              <p className="text-large font-medium">
                Acara/gerakan/kegiatan/program
              </p>
              <p className="text-basic font-normal text-[#717171] mt-[4px]">
                Contoh: kegiatan sosial himpunan mahasiswa, gerakan sosial
                komunitas, dsb.
              </p>
            </div>
            <input
              type="checkbox"
              name="acara"
              id="galang-1"
              checked={checklist === options[0].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[0].value)}
            />
          </div>
        </label>
        <label forhtml="galang-2">
          <div
            className={`rounded-[15px] cursor-pointer flex justify-center items-center p-[20px] drop-shadow mt-[24px] ${
              checklist === options[1].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
                : `bg-white border-[1px]`
            }`}
          >
            <div className="mr-[24px]">
              <p className="text-large font-medium">Bantuan/santunan</p>
              <p className="text-basic font-normal text-[#717171] mt-[4px]">
                Contoh: bantuan untuk dhuafa, tunawisma, ojek online, dsb.
              </p>
            </div>
            <input
              type="checkbox"
              name="acara"
              id="galang-2"
              checked={checklist === options[1].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[1].value)}
            />
          </div>
        </label>
        <label forhtml="galang-3">
          <div
            className={`rounded-[15px] cursor-pointer flex justify-center items-center p-[20px] drop-shadow mt-[24px] ${
              checklist === options[2].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
                : `bg-white border-[1px]`
            }`}
          >
            <div className="mr-[24px]">
              <p className="text-large font-medium">
                Biaya operasional organisasi/yayasan
              </p>

              <p className="text-basic font-normal text-[#717171] mt-[4px]">
                Contoh: biaya sewa tempat, pemeliharaan tempat, pembelian
                barang, dsb.
              </p>
            </div>
            <input
              type="checkbox"
              name="acara"
              id="galang-3"
              checked={checklist === options[2].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[2].value)}
            />
          </div>
        </label>
        <label forhtml="galang-4">
          <div
            className={`rounded-[15px] cursor-pointer flex justify-center items-center p-[20px] drop-shadow mt-[24px] ${
              checklist === options[3].value
                ? `bg-[#E7513B1F] border-[1px] border-peduly-primary`
                : `bg-white border-[1px]`
            }`}
          >
            <div className="mr-[24px]">
              <p className="text-large font-medium">
                Pembangunan/perbaikan/pembelian{' '}
              </p>

              <p className="text-basic font-normal text-[#717171] mt-[4px]">
                Contoh: pembangunan rumah masyarkat pra-sejahtera, perbaikan
                tempat, dsb.
              </p>
            </div>
            <input
              type="checkbox"
              name="acara"
              id="galang-4"
              checked={checklist === options[3].value}
              className="rounded-full text-peduly-primary focus:ring-transparent "
              onChange={() => setChecklist(options[3].value)}
            />
          </div>
        </label>
      </div>
      <hr className="mt-[24px]" />
      {/* PERSERUJUAN */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">Baca dan beri tanda setuju</h1>
        <div className="flex flex-row items-start mt-[15px]">
          <div>
            <input
              type="checkbox"
              className="cursor-pointer text-peduly-primary border-[1px] border-peduly-primary focus:ring-transparent rounded"
              checked={setuju1}
              onChange={() => setSetuju1(!setuju1)}
            />
          </div>
          <p className="ml-[14px] mr-2 text-base font-normal">
            Pemilik rekening bertanggung jawab atas penggunaan dana yang
            diterima dari galang dana ini.
          </p>
        </div>
        <hr className="mt-[24px]" />
        <div className="flex flex-row items-start mt-[24px]">
          <div>
            <input
              type="checkbox"
              className="cursor-pointer text-peduly-primary border-[1px] border-peduly-primary focus:ring-transparent rounded"
              checked={setuju2}
              onChange={() => setSetuju2(!setuju2)}
            />
          </div>
          <p className="ml-[14px] mr-2 text-base font-normal">
            Sebagai penggalang dana, kamu bertangung jawab atas permintaan
            pencairan dan pelaporan penggunaan dana.
          </p>
        </div>
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => history.push('/galangdana/create')}
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

export default TujuanGalangDana
