import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from 'axios'
import ProgressBar from '../../../components/ProgressBar'
import data from '../../../json/landing.json'
import IdrFormat from 'utils/IdrFormat'
import { API_URL } from 'config/api'
import SkeletonDonasi from '../../SkeletonLoading/SkeletonDonasi'

export const Category = () => {
  const kategori = data.kategori
  const [itemKategori, setItemKategori] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await instance.get('/api/galangdana?limit=4')

    const response = await data.data
    setLoading(false)

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

  async function ChangeCategory(item) {
    setLoading(true)
    const data = await instance.get(`api/galangdana?limit=4&kategori=${item}`)

    const response = await data.data
    setLoading(false)

    setItemKategori(response.data)
  }

  return (
    <div className="mt-[24px]">
      <div className="flex justify-between mr-5">
        <div>
          <p
            style={{
              fontSize: '18px',
            }}
            className="p-main"
          >
            Kategori Galang Dana
          </p>
        </div>
        <div className="flex items-center">
          <Link to="/donasi/sekali">
            <p className="text-peduly-primary text-basic">Lihat semua</p>
          </Link>
        </div>
      </div>

      <div className="overflow-mini-card p-main mx-0 py-[16px] pr-[20px]">
        {kategori.map((value) => (
          <button
            key={value.object}
            type="button"
            className="btn-kategori hover:shadow-md inline-block"
            onClick={() => ChangeCategory(value.object)}
          >
            <div className="flex flex-row content-center">
              <img
                style={{
                  marginRight: '10px',
                  width: '20px',
                }}
                src={`${API_URL}/${value.imgurl}`}
                alt=""
              />
              {value.title}
            </div>
          </button>
        ))}
      </div>

      <div
        style={{ marginTop: '10px', maxWidth: '430px' }}
        className="mx-[20px]"
      >
        {!loading ? (
          itemKategori.length <= 0 ? (
            <div className="h-[40px] text-center text-base">
              tidak ditemukan
            </div>
          ) : (
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
          )
        ) : (
          <div className="pb-[24px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <SkeletonDonasi />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
