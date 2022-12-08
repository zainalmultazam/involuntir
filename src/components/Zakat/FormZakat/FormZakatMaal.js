import { useState } from 'react'
import { getDataDonasi } from 'utils/cookiesHooks'
import splitInDots from 'utils/splitDots'
import IdrFormat from 'utils/IdrFormat'

const FormZakatMaal = ({
  setModalOn,
  NominalZakat,
  setHasilZakat,
  HasilZakat,
  setJenisZakat,
}) => {
  const [Deposito, setDeposito] = useState('')
  const [Property, setProperty] = useState('')
  const [Perhiasan, setPerhiasan] = useState('')
  const [Saham, setSaham] = useState('')
  const [Hutang, setHutang] = useState('')
  // const [Zakat, setHasilZakat] = useState(0)

  const temp = getDataDonasi() ? JSON.parse(getDataDonasi()) : ''

  const handleChangeDeposito = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setDeposito(splitInDots(result))
    } else {
      setDeposito(e.target.validity.valid ? IdrFormat(result) : '')
    }

    HandleZakat()
  }

  const handleChangeProperty = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setProperty(splitInDots(result))
    } else {
      setProperty(e.target.validity.valid ? IdrFormat(result) : '')
    }

    HandleZakat()
  }

  const handleChangePerhiasan = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setPerhiasan(splitInDots(result))
    } else {
      setPerhiasan(e.target.validity.valid ? IdrFormat(result) : '')
    }

    HandleZakat()
  }

  const handleChangeSaham = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setSaham(splitInDots(result))
    } else {
      setSaham(e.target.validity.valid ? IdrFormat(result) : '')
    }

    HandleZakat()
  }

  const handleChangeHutang = (e) => {
    const result = temp.value
      ? temp.value.replace(/\D/g, '')
      : e.target.value.replace(/\D/g, '')
      ? e.target.value.replace(/\D/g, '')
      : ''

    if (temp.value) {
      setHutang(splitInDots(result))
    } else {
      setHutang(e.target.validity.valid ? IdrFormat(result) : '')
    }

    HandleZakat()
  }

  const HandleZakat = () => {
    let convertDeposito,
      convertProperty,
      convertPerhiasan,
      convertSaham,
      convertHutang

    if (Deposito !== '') {
      convertDeposito = parseInt(Deposito.replaceAll('.', ''))
    } else {
      convertDeposito = 0
    }

    if (Property !== '') {
      convertProperty = parseInt(Property.replaceAll('.', ''))
    } else {
      convertProperty = 0
    }

    if (Perhiasan !== '') {
      convertPerhiasan = parseInt(Perhiasan.replaceAll('.', ''))
    } else {
      convertPerhiasan = 0
    }

    if (Saham !== '') {
      convertSaham = parseInt(Saham.replaceAll('.', ''))
    } else {
      convertSaham = 0
    }

    if (Hutang !== '') {
      convertHutang = parseInt(Hutang.replaceAll('.', ''))
    } else {
      convertHutang = 0
    }

    if (convertHutang !== 0) {
      let hasil =
        ((convertDeposito + convertProperty + convertPerhiasan + convertSaham) *
          2.5) /
          100 -
        (convertHutang * 2.5) / 100
      setHasilZakat(hasil)
      console.log(HasilZakat)
    } else {
      let hasil =
        ((convertDeposito + convertProperty + convertPerhiasan + convertSaham) *
          2.5) /
        100
      setHasilZakat(hasil)
      console.log(HasilZakat)
    }
  }

  const HandleSubmit = () => {
    // HandleZakat()
    setModalOn(true)
    setJenisZakat('Maal')
    // setHasilZakat('10.000.000')
  }

  function validator() {
    // eslint-disable-next-line eqeqeq
    if (Deposito || Property || Perhiasan || Saham != '') {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="px-5">
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Nilai Deposito/Tabungan/Giro
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="w-full text-sm font-normal placeholder-gray-400 bg-transparent border-none outline-none focus:ring-transparent"
            placeholder="Optional"
            type="text"
            value={Deposito}
            onChange={handleChangeDeposito}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Nilai Property dan kendaraan
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="w-full text-sm font-normal placeholder-gray-400 bg-transparent border-none outline-none focus:ring-transparent"
            placeholder="Optional"
            type="text"
            value={Property}
            onChange={handleChangeProperty}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Emas, perak, permata atau sejenisnya
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="w-full text-sm font-normal placeholder-gray-400 bg-transparent border-none outline-none focus:ring-transparent"
            placeholder="Optional"
            type="text"
            value={Perhiasan}
            onChange={handleChangePerhiasan}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Saham, piutang, dan surat-surat berharga lainnya
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="w-full text-sm font-normal placeholder-gray-400 bg-transparent border-none outline-none focus:ring-transparent"
            placeholder="Optional"
            type="text"
            value={Saham}
            onChange={handleChangeSaham}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <label className="font-semibold text-[14px]">
          Hutang pribadi yang jatuh tempo tahun ini
        </label>
        <div className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[16px] border-[#CACACA]">
          <input
            className="w-full text-sm font-normal placeholder-gray-400 bg-transparent border-none outline-none text- focus:ring-transparent"
            placeholder="Optional"
            type="text"
            value={Hutang}
            onChange={handleChangeHutang}
            pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      {validator() ? (
        <button
          className="bg-peduly-primary text-white w-full text-center font-bold rounded-full text-[18px] py-[18px] mt-[24px] h-[60px]"
          onClick={HandleSubmit}
          // onClick={() => {
          //   HitungZakat()
          //   HandleSubmit()
          // }}
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

export default FormZakatMaal
