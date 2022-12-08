import BackButton from 'components/BackButton'
import { useState } from 'react'

// make array of objects
const data = [
  {
    tanggal: '17 Juli 2022',
    title: 'Riwayat Donasi',
    isi: 'Lihat aktivitas donasi untuk mempermudah keberlangsungan donasi yang telah kamu lakukan.',
    more: 'Lihat semua pembaruan produk Peduly sebelumnya untuk mengetahui lebih lanjut ',
  },
  {
    tanggal: '17 Juli 2022',
    title: 'Riwayat Donasi',
    isi: 'Nikmati kemudahan donasi barang mulai dari pakaian anak atau tupperwar yang masih layak pakai untuk diberikan kepada orang lain',
  },
  {
    tanggal: '17 Juli 2022',
    title: 'Riwayat Donasi',
    isi: 'Lihat aktivitas donasi untuk mempermudah keberlangsungan donasi yang telah kamu lakukan.',
    more: 'Lihat semua pembaruan produk Peduly sebelumnya untuk mengetahui lebih lanjut ',
  },
  {
    tanggal: '17 Juli 2022',
    title: 'Riwayat Donasi',
    isi: 'Nikmati kemudahan donasi barang mulai dari pakaian anak atau tupperwar yang masih layak pakai untuk diberikan kepada orang lain',
  },
  {
    tanggal: '17 Juli 2022',
    title: 'Riwayat Donasi',
    isi: 'Lihat aktivitas donasi untuk mempermudah keberlangsungan donasi yang telah kamu lakukan.',
    more: 'Lihat semua pembaruan produk Peduly sebelumnya untuk mengetahui lebih lanjut ',
  },
  {
    tanggal: '17 Juli 2022',
    title: 'Riwayat Donasi',
    isi: 'Nikmati kemudahan donasi barang mulai dari pakaian anak atau tupperwar yang masih layak pakai untuk diberikan kepada orang lain',
  },
]

function AdaYangBaru() {
  const [show, setShow] = useState(false)

  const dataWithShow = data.map((item) => ({ ...item, show: false }))

  const toggleShow = (index) => {
    const newData = dataWithShow.map((item, i) => {
      if (i === index) {
        return { ...item, show: !item.show }
      }
      return item
    })
    setShow(newData)
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf={'1'} txt="Ada yang baru" />
      <div className="text-center mt-[72px]">
        <h1 className="relative w-full bg-[#C4C4C4] py-[20px] text-white">
          Lihat semua pembaruan produk Peduly
        </h1>
      </div>
      <div className="space-y-5 mr-[20px] mt-[20px] mb-[40px]">
        {data.map(({ tanggal, title, isi, more }, i) => (
          <div key={i}>
            <div className="grid grid-cols-12">
              <div className="items-end justify-end mt-[8px] mx-auto col-span-2">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={7} cy={7} r={7} fill="#E7513B" />
                </svg>
              </div>
              <div className="col-span-10">
                <p className="font-normal text-sm pt-[5px]">{tanggal}</p>
              </div>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-2 mx-auto ">
                <hr
                  className={`-mt-[20px] border-[1px] ${
                    i + 1 === data.length ? 'h-[100%]' : ' h-[150%]'
                  }`}
                />
              </div>
              <div className="col-span-10">
                <h1 className="font-medium text-lg pt-[5px]">{title}</h1>
                <p className="font-normal text-sm pt-[5px]">{isi}</p>

                {more && !show[i]?.show ? (
                  <button
                    onClick={() => toggleShow(i)}
                    className="font-normal text-sm pt-[5px] text-[#E7513B]"
                  >
                    {show[i]?.show ? 'Tutup' : 'Baca selengkapnya'}
                  </button>
                ) : (
                  <p className="font-normal text-sm pt-[5px]">{more}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdaYangBaru
