import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TabDetailsZakat from 'components/Zakat/TabDetailsZakat'
import BackButton from 'components/BackButton'
import ModalKalkulatorZakat from 'components/Zakat/ModalKalkulatorZakat'
import ModalKalkulatorZakatNew from 'components/Zakat/ModalKalkulatorZakatNew'
import './index.css'

const KalkulatorZakat = () => {
  const history = useHistory()

  const [ModalOn, setModalOn] = useState(false)
  const [HasilZakat, setHasilZakat] = useState(0)
  const [NominalZakat, setNominalZakat] = useState('10.000')
  const [JenisZakat, setJenisZakat] = useState('Maal')
  const [nisab, setNisab] = useState(79738415)

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="fixed z-20 top-0 bg-white max-w-[430px] w-full">
        <div className="max-w-[430px] w-full mx-[20px] flex items-center h-[72px]">
          <div onClick={history.goBack}>
            <svg
              className="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.57 5.92999L3.5 12L9.57 18.07"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.4999 12H3.66992"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="relative text-lg leading-[24.5px] flex-grow text-center font-semibold self-center ml-4 mr-[60px]">
            Kalkulator Zakat
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          ModalOn ? 'fixed w-full max-w-[430px] mt-[72px]' : 'mt-[72px]'
        }`}
      >
        <TabDetailsZakat
          ModalOn={ModalOn}
          setModalOn={setModalOn}
          NominalZakat={NominalZakat}
          setHasilZakat={setHasilZakat}
          HasilZakat={HasilZakat}
          setJenisZakat={setJenisZakat}
        />
      </div>
      {ModalOn && (
        <ModalKalkulatorZakatNew
          ModalOn={ModalOn}
          setModalOn={setModalOn}
          onClickOutside={() => (ModalOn ? setModalOn(!ModalOn) : null)}
          value={HasilZakat}
          setValue={setNominalZakat}
          JenisZakat={JenisZakat}
          nisab={nisab}
        />
      )}
    </div>
  )
}

export default KalkulatorZakat
