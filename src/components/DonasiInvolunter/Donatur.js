import React from 'react'
import IdrFormat from 'utils/IdrFormat'

const donaturList = [
  {
    id: 1,
    nama: 'Antoni felix M.',
    foto: '',
    jumlah_donasi: 50000,
    tanggal_donasi: '3 hari yang lalu',
  },
  {
    id: 2,
    nama: 'M. Felix Antoni',
    foto: '',
    jumlah_donasi: 30000,
    tanggal_donasi: 'sehari yang lalu',
  },
]

const Donatur = () => {
  return (
    <div className="whitespace-normal relative mt-[42px] mx-[20px]">
      {donaturList.map((donatur) => (
        <div
          key={donatur.id}
          className="grid grid-cols-12 items-start h-[65px] mb-[15px]"
        >
          <div className="w-[40px]">
            <img
              src={donatur.foto}
              // src={
              //   donatur.photo.slice(0, 4) === 'http'
              //     ? `${donatur.photo}`
              //     : donatur.photo.slice(0, 7) === '/images'
              //     ? `${API_URL}${donatur.photo}`
              //     : `${API_URL}/images/images_profile/${donatur.photo}`
              // }
              alt=""
              onError={(e) =>
                (e.target.src = '/images/involunter/no-profille.svg')
              }
              className="object-cover w-[40px] h-[40px] rounded-full"
            />
          </div>
          <div className="col-span-11 ml-[20px]">
            <h1 className="text-base font-bold">
              {donatur.nama}
              {/* {donatur.id === 1 ? 'Anonim' : donatur.nama} */}
            </h1>
            <h3 className="text-sm font-medium">
              Donasi {IdrFormat(donatur.jumlah_donasi)}
            </h3>
            <p className="text-xs font-light text-[#717171]">
              {donatur.tanggal_donasi}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Donatur
