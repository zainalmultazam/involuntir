import { useEffect } from 'react'

function PreviewCeritaGalangDana({ setStep, deskripsi, data, state }) {
  const handleOnSimpan = () => {
    data({
      ...state,
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="py-[20px]">
      {/* UBAH CERITA */}
      <div className="mx-[20px] mt-[14px] flex items-center justify-between">
        <h1 className="text-large font-medium">Cerita galang dana ini</h1>
        <button
          className="px-[20px] py-[10px] text-peduly-primary text-basic font-medium border-[1px] border-peduly-primary rounded-full"
          onClick={() => setStep('deskripsi')}
        >
          Ubah cerita
        </button>
      </div>
      <hr className="mt-[14px]" />
      {/* PREVIEW */}
      <div className="mt-[24px] mx-[20px]">
        <div
          className="text text-base font-normal"
          dangerouslySetInnerHTML={{ __html: `${deskripsi}` }}
        />
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => setStep('deskripsi')}
          >
            Kembali
          </button>
          {deskripsi ? (
            <button
              className="bg-peduly-primary text-white rounded-full w-full h-[60px]"
              onClick={() => setStep('ajakan')}
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

export default PreviewCeritaGalangDana
