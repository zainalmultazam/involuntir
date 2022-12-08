import BackButton from 'components/BackButton'
import ProgressBar from 'components/ProgressBar'
import SkeletonDonasi from 'components/SkeletonLoading/SkeletonDonasi'
import { API_URL } from 'config/api'
import { fetcher } from 'config/axiosHooks'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'
import dayToGo from 'utils/dayToGo'
import IdrFormat from 'utils/IdrFormat'
import NotFound from './NotFound'

function Simpan() {
  const [data, setData] = useState([])

  const getData = async () => {
    await fetcher(`/api/wishlists`).then((res) => {
      setData(res.data.data)
    })
  }

  const sortedData = data.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  })

  useEffect(() => {
    getData()
  }, [])

  if (!getToken()) {
    return <NotFound />
  }

  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto">
      <BackButton hrf="/" txt="Simpan" />
      <div className="mt-[96px] mx-[20px]">
        {data.length > 0 ? (
          sortedData.map(({ campaign }) => (
            <div key={campaign.id}>
              <Link
                to={{
                  pathname: `/donasi-sekali/${campaign.judul_slug}`,
                }}
              >
                <div
                  style={{ marginBottom: '17px', marginTop: '13px' }}
                  className="grid grid-cols-12 gap-4"
                >
                  <div className="col-span-6">
                    <img
                      src={`${API_URL}/images/images_campaign/${campaign.foto_campaign}`}
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
                      {campaign.judul_campaign}
                    </p>
                    <div className="rounded-full progress mt-[10px]">
                      <ProgressBar
                        current={
                          campaign.total_donasi || campaign.currentDonasi
                        }
                        target={
                          campaign
                            ? campaign.nominal_campaign ||
                              campaign.nominal_campaign
                            : 0
                        }
                        waktu={campaign.batas_waktu_campaign}
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
                          Rp {IdrFormat(campaign.nominal_campaign)}
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
                          {dayToGo(campaign.batas_waktu_campaign)}
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
            {[1, 2, 3].map((i) => (
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
    </div>
  )
}

export default Simpan
