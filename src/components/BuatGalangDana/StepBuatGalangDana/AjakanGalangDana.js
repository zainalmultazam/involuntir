import { useState } from 'react'

function AjakanGalangDana({ setStep, data, state }) {
  const [ajakan, setAjakan] = useState(
    state.ajakan.text ? state.ajakan.text : ''
  )

  const handleOnSimpan = () => {
    data({
      text: ajakan,
    })
  }

  const handleOnNext = () => {
    setStep('ringkasan')
    data({
      text: ajakan,
    })
  }

  function validator() {
    if (ajakan.length > 0) {
      return true
    }
    return false
  }

  return (
    <div className="py-[20px]">
      {/* AJAKAN */}
      <div className="mx-[20px] mt-[14px]">
        <h1 className="text-large font-medium">Tulis ajakan singkat</h1>
        <p className="text-sm font-normal text-[#717171] mt-[4px]">
          Ini akan menjadi ajakan seingkat setiap kamu membagikan halaman galang
          dana ini di media sosial
        </p>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Contoh: Penghasilan saya  hanya Rp 50 ribu per-hari. padahal andi, anak saya, butuh Rp 50 juta untuk pengobatan kanker hati. Bantu saya mengobati andi."
          value={ajakan}
          onChange={(e) => {
            setAjakan(e.target.value)
          }}
        >
          ajakan
        </textarea>
        {/* NOTE AJAKAN */}
        <div
          className="p-[20px] mt-[16px] rounded-[15px] drop-shadow"
          style={{ backgroundColor: 'rgba(228, 228, 228, 0.16)' }}
        >
          <h1 className="text-large font-medium">Ini untuk apa?</h1>
          <p className="text-basic text-[#717171] mt-[4px]">
            ajakan singkat akan digunakan saat kamu membagikan penggalangan kamu
            ke media sosial
          </p>
        </div>
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => setStep('previewCerita')}
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

export default AjakanGalangDana
