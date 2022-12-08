import React from 'react'
import { useState } from 'react'
import BackButton from 'components/BackButton'
import IdrFormat from 'utils/IdrFormat'
import ProgressBar from 'components/ProgressBar'
import { Link } from 'react-router-dom'
import ModalZakat from 'components/Zakat/ModalZakat'

const items = [
  {
    id: 1,
    slug: 'rumahzakat',
    judul_campaign: 'Rumah Zakat',
    foto: '',
    total_donasi: 9000000,
    current_donasi: 9000000,
    nominal_campaign: 10200654,
    batas_waktu_campaign: 56,
  },
  {
    id: 1,
    slug: 'yayasanmuamalatindonesia',
    judul_campaign: 'Yayasan Muamalat Indonesia',
    foto: '',
    total_donasi: 9000000,
    current_donasi: 9000000,
    nominal_campaign: 10200654,
    batas_waktu_campaign: 56,
  },
  {
    id: 1,
    slug: 'dompetduafa',
    judul_campaign: 'Dompet Duafa',
    foto: '',
    total_donasi: 9000000,
    current_donasi: 9000000,
    nominal_campaign: 10200654,
    batas_waktu_campaign: 56,
  },
]

const Zakat = () => {
  function dayToGo(TargetDay) {
    const firstDate = new Date(TargetDay)
    if (!isNaN(firstDate.getTime())) {
      const oneDay = 24 * 60 * 60 * 1000
      const secondDate = new Date()
      const diffDays = Math.round((firstDate - secondDate) / oneDay)
      if (diffDays <= 0) {
        return 'Berakhir'
      }
      return diffDays + ' Hari'
    }
    return 'Tanpa batas'
  }
  const [Penghasilan, setPenghasilan] = useState('')
  const [ModalOn, setModalOn] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf={'1'} txt="Zakat" />
      <div
        className={`flex flex-col mt-[72px] px-5 ${
          ModalOn ? 'fixed max-w-[430px]' : ''
        }`}
      >
        <div className="grid grid-cols-2 gap-3 py-6">
          <button
            className="py-[13px] flex justify-center content-center border border-solid border-peduly-primary rounded-full"
            onClick={clicked}
          >
            <svg
              className="self-center"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00004 14.6666H10C13.3334 14.6666 14.6667 13.3333 14.6667 9.99998V5.99998C14.6667 2.66665 13.3334 1.33331 10 1.33331H6.00004C2.66671 1.33331 1.33337 2.66665 1.33337 5.99998V9.99998C1.33337 13.3333 2.66671 14.6666 6.00004 14.6666Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 6H5.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 10H5.5"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-peduly-primary text-sm text-semibold ml-3">
              Salurkan
            </p>
          </button>
          <a
            href="/zakat/kalkulator"
            className="py-[13px] flex justify-center content-center border border-solid border-peduly-primary rounded-full"
          >
            <svg
              className="self-center"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.61377 3.75977H14.4671"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.53296 3.76007H6.38629"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.61377 10.22H14.4671"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.61377 14.2598H14.4671"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0596 6.17998V1.33331"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.53296 14.6667L6.38629 9.82001"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.38629 14.6667L1.53296 9.82001"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-peduly-primary text-sm text-semibold ml-3">
              Kalkulator Zakat
            </p>
          </a>
        </div>
        <hr className="border-t-[0.5px] border-solid border-peduly-light" />

        <p className="px-[10px] mt-6 mb-[11px] text-lg font-semibold text-peduly-dark">
          Bayar zakat pada program amil zakat resmi Indonesia
        </p>

        {items.map((item) => (
          <div key={item.id}>
            <Link
              to={{
                pathname: `/donasi-sekali/${item.slug}`,
              }}
            >
              <div
                style={{ marginBottom: '17px', marginTop: '13px' }}
                className="grid grid-cols-12 gap-4"
              >
                <div className="col-span-6">
                  <img
                    src={`images/images_campaign/${item.foto_campaign}`}
                    alt=""
                    className="w-full h-full"
                    style={{
                      height: '121px',
                      width: '4/6',
                      objectFit: 'cover',
                      borderRadius: '15px',
                    }}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/images/no-picture.png'
                    }}
                  />
                </div>

                <div className="col-span-6">
                  <p className="line-clamp-2 text-left font-medium text-base">
                    {item.judul_campaign}
                  </p>
                  <div className="rounded-full progress mt-[10px]">
                    <ProgressBar
                      current={item.total_donasi || item.currentDonasi}
                      target={
                        item
                          ? item.nominal_campaign || item.nominal_campaign
                          : 0
                      }
                      waktu={item.batas_waktu_campaign}
                    />
                  </div>
                  <div
                    className="grid grid-cols-8 font-medium text-xs"
                    style={{ marginTop: '11px' }}
                  >
                    <div className="col-span-5">
                      <p style={{ fontSize: '11px' }}>Target</p>
                      <p
                        style={{
                          fontSize: '12px',
                        }}
                        className="truncate"
                      >
                        Rp {IdrFormat(item.nominal_campaign)}
                      </p>
                    </div>
                    <div className="col-span-3 text-right">
                      <p style={{ fontSize: '11px' }}>Sisa Hari</p>
                      <p
                        style={{
                          fontSize: '12px',
                        }}
                        className="truncate"
                      >
                        {dayToGo(item.batas_waktu_campaign)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {ModalOn && (
        <ModalZakat
          ModalOn={ModalOn}
          setModalOn={setModalOn}
          onClickOutside={() => (ModalOn ? setModalOn(!ModalOn) : null)}
        />
      )}
    </div>
  )
}

export default Zakat
