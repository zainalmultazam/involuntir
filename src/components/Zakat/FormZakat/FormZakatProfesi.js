import { useState, useEffect } from 'react'
import { getDataDonasi } from 'utils/cookiesHooks'
import splitInDots from 'utils/splitDots'
import IdrFormat from 'utils/IdrFormat'

import './index.css'

const FormZakatProfesi = ({
  setModalOn,
  NominalZakat,
  setHasilZakat,
  HasilZakat,
  setJenisZakat,
}) => {
  const [PendapatanLain, setPendapatanLain] = useState('')
  const [Cicilan, setCicilan] = useState('')
  const [Zakat, setZakat] = useState(0)
  const [Pendapatan, setPendapatan] = useState('')

  const temp = getDataDonasi() ? JSON.parse(getDataDonasi()) : ''

  const handleChangePendapatan = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setPendapatan(splitInDots(result))
    } else {
      setPendapatan(e.target.validity.valid ? IdrFormat(result) : '')
    }
  }

  const handleChangePendapatanLain = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setPendapatanLain(splitInDots(result))
    } else {
      setPendapatanLain(e.target.validity.valid ? IdrFormat(result) : '')
    }
  }

  const handleChangeCicilan = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setCicilan(splitInDots(result))
    } else {
      setCicilan(e.target.validity.valid ? IdrFormat(result) : '')
    }
  }

  const HitungZakat = () => {
    let convertPendapatan = parseInt(Pendapatan.replaceAll('.', ''))
    let convertPendapatanLain = parseInt(PendapatanLain.replaceAll('.', ''))
    let convertCicilan = parseInt(Cicilan.replaceAll('.', ''))

    if (convertPendapatan && convertPendapatanLain && convertCicilan) {
      let hasil =
        ((convertPendapatan + convertPendapatanLain) * 2.5) / 100 -
        (convertCicilan * 2.5) / 100
      setZakat(hasil)
      console.log(hasil)
    } else if (convertPendapatan && convertPendapatanLain) {
      let hasil = ((convertPendapatan + convertPendapatanLain) * 2.5) / 100
      setZakat(hasil)
      console.log(hasil)
    } else if (convertPendapatan && convertCicilan) {
      let hasil = (convertPendapatan * 2.5) / 100 - (convertCicilan * 2.5) / 100
      setZakat(hasil)
      console.log(hasil)
    } else if (convertPendapatan) {
      let hasil = (convertPendapatan * 2.5) / 100
      setZakat(hasil)
      console.log(hasil)
    }
  }

  const HandleZakat = () => {
    let convertPendapatan, convertPendapatanLain, convertCicilan

    if (Pendapatan !== '') {
      convertPendapatan = parseInt(Pendapatan.replaceAll('.', ''))
    } else {
      convertPendapatan = 0
    }

    if (PendapatanLain !== '') {
      convertPendapatanLain = parseInt(PendapatanLain.replaceAll('.', ''))
    } else {
      convertPendapatanLain = 0
    }

    if (Cicilan !== '') {
      convertCicilan = parseInt(Cicilan.replaceAll('.', ''))
    } else {
      convertCicilan = 0
    }

    if (convertCicilan !== 0) {
      let hasil =
        ((convertPendapatan + convertPendapatanLain) * 2.5) / 100 -
        (convertCicilan * 2.5) / 100
      setHasilZakat(hasil)
      console.log(hasil)
    } else {
      let hasil = ((convertPendapatan + convertPendapatanLain) * 2.5) / 100
      setHasilZakat(hasil)
      console.log(hasil)
    }
  }

  const HandleSubmit = () => {
    setModalOn(true)
    setHasilZakat('150.000')
    setJenisZakat('Profesi')
  }

  function validator() {
    if (Pendapatan === '') {
      return false
    } else {
      return true
    }
  }

  return (
    <div className="px-5">
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Penghasilan per-bulan <span className="text-peduly-primary">*</span>
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
            placeholder="Masukan Total Penghasilan"
            type="text"
            value={Pendapatan}
            onChange={handleChangePendapatan}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
            required
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Pendapatan lain per-bulan (opsional)
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
            placeholder="Masukkan total pendapatan lain jika ada"
            value={PendapatanLain}
            type="text"
            onChange={handleChangePendapatanLain}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Utang/cicilan per-bulan (opsional)
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
            placeholder="Masukkan total utang/cicilan jika ada"
            value={Cicilan}
            type="text"
            onChange={handleChangeCicilan}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      {validator() ? (
        <button
          className="bg-peduly-primary text-white w-full text-center font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]"
          onClick={() => {
            HandleZakat()
            // HandleSubmit()
          }}
        >
          Hitung Zakat
        </button>
      ) : (
        <button className="bg-peduly-light text-white w-full text-center font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]">
          Hitung Zakat
        </button>
      )}
    </div>
  )
}

export default FormZakatProfesi
