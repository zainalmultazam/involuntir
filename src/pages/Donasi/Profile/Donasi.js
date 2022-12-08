import React from 'react'
import BackButton from 'components/BackButton'

const Donasi = () => {
  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf={'1'} txt="Donasi" />
      <div className="px-5 mt-[72px] pt-6">
        <p className="text-sm text-peduly-dark">
          Layanan Involuntir 100% gratis. Kami bekerja dengan bantuan donasi
          dari para donatur. Setiap rupiah yang kamu berikan digunakan untuk
          biaya operasional sehingga kami bisa memastikan layanan kami secara
          gratis untuk menjalankan misi sosial ini.
        </p>
      </div>
    </div>
  )
}

export default Donasi
