import { useState } from 'react'
import BackButton from 'components/BackButton'
import DetailKategori from 'components/BuatGalangDana/DetailKategori'

const data_kategori = [
  {
    kategori: 'Kesehatan dan Medis',
    ikon: '/icon/hospital.svg',
    detail:
      '<p>Galang dana bantuan  kegiatan sosial kepada orang yang membutuhkan. Contoh: bantuan sosial untuk lansia, kegiatan sosial komunitas.</p><br /><p>Contoh penggalangan kegiatan sosial</p>',
  },
]

function BuatGalangDana() {
  const [popUp, setPopUp] = useState(false)
  const [kategori, setKategori] = useState('')
  const [detailKategori, setDetailKategori] = useState('')

  return (
    <>
      {popUp && (
        <div
          className="absolute h-screen w-screen top-0 left-0 z-50"
          style={{ background: 'rgb(111, 111, 111, 0.5)' }}
        ></div>
      )}
      <div style={{ maxWidth: '430px' }} className="mx-auto">
        <BackButton hrf={`/galangdana`} txt="Buat galang dana untuk" />
        <DetailKategori
          status={popUp}
          kategori={kategori}
          detail={detailKategori}
          onClickOutside={() => (popUp ? setPopUp(!popUp) : null)}
        />
        <div className="mt-[72px] px-[20px]">
          {data_kategori.map(({ kategori, ikon, detail }, index) => (
            <div key={index}>
              <div
                className="py-[24px] flex flex-row cursor-pointer"
                onClick={() => {
                  setKategori(kategori)
                  setDetailKategori(detail)
                  setPopUp(true)
                }}
              >
                <div className="flex align-center justify-center ml-[5px]">
                  <img src={ikon} style={{ width: '24px' }} alt="" />
                </div>
                <div className="ml-[17px] flex flex-row justify-between">
                  <p className="font-normal text-lg">{kategori}</p>
                </div>
              </div>
              <hr className="w-full h-[1px]"></hr>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BuatGalangDana
