import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from 'axios'
import ProgressBar from '../../../components/ProgressBar'
import IdrFormat from 'utils/IdrFormat'
import SkeletonDonasi from 'components/SkeletonLoading/SkeletonDonasi'
import { API_URL } from 'config/api'

export const Sekali = () => {
  const [itemKategori, setItemKategori] = useState([])

  useEffect(() => {
    getKategori()
  }, [])

  const getKategori = async () => {
    const data = await instance.get('api/galangdana')

    const response = await data.data
    setItemKategori(response.data)
  }

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

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div style={{ marginTop: '10px', maxWidth: '430px' }} className="mx-[20px]">
      {itemKategori.length > 0 ? (
        itemKategori.map((value) => (
          <div key={value.id}>
            <Link
              to={{
                pathname: `/donasi-sekali/${value.judul_slug}`,
              }}
            >
              <div
                style={{ marginBottom: '17px', marginTop: '13px' }}
                className="grid grid-cols-12 gap-4"
              >
                <div className="col-span-6">
                  <img
                    src={`${API_URL}/images/images_campaign/${value.foto_campaign}`}
                    alt=""
                    className="w-full h-full bg-gray-400"
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
                    {value.judul_campaign}
                  </p>
                  <div className="rounded-full progress mt-[10px]">
                    <ProgressBar
                      current={value.total_donasi || value.currentDonasi}
                      target={
                        value
                          ? value.nominal_campaign || value.nominal_campaign
                          : 0
                      }
                      waktu={value.batas_waktu_campaign}
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
                        Rp {IdrFormat(value.nominal_campaign)}
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
                        {dayToGo(value.batas_waktu_campaign)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div>
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i}>
              <SkeletonDonasi />
            </div>
          ))}
          <span className="opacity-0 cursor-default">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            consequuntur!
          </span>
        </div>
      )}
    </div>
  )
}
