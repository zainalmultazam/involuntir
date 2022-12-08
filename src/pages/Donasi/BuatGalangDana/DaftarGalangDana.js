import { useEffect, useState, useContext } from 'react'
import { UserContext } from 'context/UserContext'
import { API_URL } from 'config/api'
import { Link, useHistory } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'
import IdrFormat from 'utils/IdrFormat'
import BackButton from 'components/BackButton'
import ProgressBar from 'components/ProgressBar'
import ImageGalangDana from 'components/ImageGalangDana'
import SkeletonDonasi from 'components/SkeletonLoading/SkeletonDonasi'
import { fetcher } from 'config/axiosHooks'

const DaftarGalangDana = () => {
  const { user } = useContext(UserContext)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  useEffect(() => {
    getData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    await fetcher(`${API_URL}/api/galangdanasaya`)
      .then((res) => {
        setData(res.data.data)
        setLoading(true)
      })
      .catch((err) => {})
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div style={{ maxWidth: '430px' }} className={`relative mx-auto`}>
      <BackButton hrf={`/profile/${user.id}`} txt="Galang Dana Saya" />
      <div className="mt-[87px]">
        {data.length === 0 ? (
          <div
            className="w-full flex flex-col items-center justify-between"
            style={{ height: `calc(100vh - 87px)` }}
          >
            <div className="w-full flex flex-col items-center text-center mt-[50px]">
              <ImageGalangDana />
              <p className="font-semibold text-large mt-[49px]">
                Belum ada penggalangan dana
              </p>
              <p className="text-basic mt-[18px] w-[250px]">
                Buat galang dana untuk saudara, teman, atau untuk diri kamu
                sendiri disini
              </p>
              <p className="font-semibold text-large mt-[50px]">
                Siap mulai cerita jadi orang baik?
              </p>
            </div>

            <div className="mt-[10px] h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40 fixed bottom-0 w-full">
              <span className="w-[90%]">
                <button
                  className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
                  onClick={() => history.push('/galangdana/create')}
                >
                  Buat Galang Dana
                </button>
              </span>
            </div>
          </div>
        ) : loading ? (
          <div>
            {data.map((data) => (
              <div key={data.id}>
                <Link to={{ pathname: `/donasi-sekali/${data.judul_slug}` }}>
                  <div className="grid grid-cols-12 gap-4 my-[15px] px-[20px]">
                    <div className="col-span-6">
                      <img
                        src={`${API_URL}/images/images_campaign/${data.foto_campaign}`}
                        alt={data.judul_slug}
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

                    <div className="col-span-6 flex flex-col justify-between">
                      <div>
                        <p className="line-clamp-2 text-left font-semibold text-large">
                          {data.judul_campaign}
                        </p>
                      </div>

                      <div>
                        <div className="rounded-full progress mt-[10px]">
                          <ProgressBar
                            current={data.total_donasi}
                            target={
                              data
                                ? data.nominal_campaign || data.nominal_campaign
                                : 0
                            }
                            waktu={data.batas_waktu_campaign}
                          />
                        </div>
                        <div
                          className="grid grid-cols-8 font-semibold text-small"
                          style={{ marginTop: '11px' }}
                        >
                          <div className="col-span-5">
                            <p>Target</p>
                            <p>Rp {IdrFormat(data.nominal_campaign)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <hr className="h-[1px]" />
              </div>
            ))}
            <div className="fixed bottom-[20px] right-[20px]  w-[414px] z-10 flex justify-end">
              <div
                className="h-[56px] w-[56px] bg-peduly-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                onClick={() => {
                  history.push('/galangdana/create')
                }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 12H22"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0001 22V2"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="mx-[20px]">
                <SkeletonDonasi />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DaftarGalangDana
