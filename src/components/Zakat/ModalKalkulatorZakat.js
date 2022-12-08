import React from 'react'

const ModalKalkulatorZakat = ({ setModalOn, setChoice }) => {
  const handleSimpanClick = () => {
    setChoice(true)
    setModalOn(false)
  }
  const handleBatalClick = () => {
    setChoice(false)
    setModalOn(false)
  }
  return (
    <div className="absolute inset-x-0 bottom-0 z-20 min-h-screen mx-auto mt-0 max-w-[430px] bg-black-transparent">
      <div className="flex items-end justify-center min-h-screen max-w-[430px] mx-auto">
        <div className="relative top-80 flex-col justify-center bg-white w-full px-5 pt-10 pb-5 rounded-t-[30px]">
          <p className="text-lg font-semibold text-center">
            Hasil Perhitungan Zakat Profesi
          </p>
          <div className="relative flex content-center my-6">
            <p className="self-center w-full text-2xl font-bold text-center text-black">
              Rp150.000
            </p>
            <button
              type="button"
              class="absolute right-0 text-sm font-semibold text-peduly-primary px-6 py-[6px] rounded-full border border-solid border-peduly-primary"
            >
              Salin
            </button>
          </div>
          <div className="w-full py-5 px-11 bg-peduly-primary-smtransparent rounded-[15px] mb-6">
            <p className="w-full text-sm font-normal text-center text-peduly-dark">
              Salurkan ke Lembaga Amil Zakat resmi atau program zakat lainnya
            </p>
          </div>
          <hr className="border-[0.5px] border-[#e4e4e4]" />
          <div className="flex justify-between py-7 ">
            <p className="text-base font-semibold text-peduly-dark">
              Lembaga Amil Zakat
            </p>
            <button
              type="button"
              className="px-6 py-[6px] bg-[#e4e4e4] rounded-full text-sm text-white font-semibold"
            >
              Pilih
            </button>
          </div>
          <hr className="border-[0.5px] border-[#e4e4e4]" />
          <div className="flex justify-between py-7 ">
            <p className="text-base font-semibold text-peduly-dark">
              Metode Pembayaran
            </p>
            <button
              type="button"
              className="px-6 py-[6px] bg-[#e4e4e4] rounded-full text-sm text-white font-semibold"
            >
              Pilih
            </button>
          </div>
          <hr className="border-[0.5px] border-[#e4e4e4]" />
          <div className="flex justify-between py-7 ">
            <p className="text-sm text-peduly-subtitle">
              Sembunyikan nama saya (anonim)
            </p>
            <label class="inline-flex relative items-center cursor-pointer self-center mr-3">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <hr className="border-[0.5px] border-[#e4e4e4]" />
          <button
            className="bg-peduly-primary text-white w-full font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]"
            type="submit"
          >
            Hitung Zakat
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalKalkulatorZakat
