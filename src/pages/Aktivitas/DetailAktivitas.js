import ProgressBar from 'components/ProgressBar'
import NavGalangDana from 'components/GalangDana/NavGalangDana'
import RencanaPenggunaanDana from 'components/Donasi/RencanaPenggunaanDana'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import TimePause from 'assets/icons/TimePause'
import TabDetails from 'components/GalangDana/TabDetails'
import { API_URL } from 'config/api'
import Spinner from 'components/loaders/Spinner'
import People from 'assets/icons/People'
import IdrFormat from 'utils/IdrFormat'
import ClickReport from 'components/GalangDana/ClickReport'
import NavEditGalangDana from 'components/GalangDana/NavEditGalangDana'
import { Link } from 'react-router-dom'
import { setReferal } from 'utils/cookiesHooks'
import { TitleNameContext } from 'context/TitleNameContext'
import MetaDataFacebook from 'components/MetaData/MetaDataFacebook'
import MetaDataTwitter from 'components/MetaData/MetaDataTwitter'

// import '../../app.css'
import { fetcher } from 'config/axiosHooks'

function DetailAktivitas() {
  const [dataGalangDana, setDataGalangDana] = useState({})
  const [like, setLike] = useState(false)
  const [loading, setLoading] = useState(true)
  const [expired, setExpired] = useState(false)
  const [click, setClick] = useState(false)
  const [popUp, setPopUp] = useState(false)
  const [penggunaanDana, setPenggunaanDana] = useState(false)

  const [ownerGalangDana, setOwnerGalangDana] = useState(false)

  const queryParams = new URLSearchParams(window.location.search)
  const referal = queryParams.get('rel')

  const { handleSetTitle } = useContext(TitleNameContext)

  const { slug } = useParams()

  useEffect(() => {
    getData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (dataGalangDana.data) {
      handleSetTitle(dataGalangDana.data.campaign[0].judul_campaign)
    }
    // clean up
    return () => handleSetTitle('Peduly')
  }, [dataGalangDana]) // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    setLoading(true)
    if (referal) {
      checkReferal()
    }
    // checkOwnerGalangDana();
    let gettingData = await axios.get(
      `${API_URL}/api/galangdana/byslug/${slug}`
    )
    let response = await gettingData.data
    setDataGalangDana(response)
    setLoading(false)
  }

  const checkReferal = async () => {
    let getData = await axios.get(
      `${API_URL}/api/donation/checkreferal?referal=${referal}`
    )
    const res = await getData.data.status
    if (res === 201) {
      setReferal(referal)
    }
  }

  const handleLike = async () => {
    await fetcher(`/api/wishlists/create`, {
      method: 'POST',
      data: {
        campaign_id: dataGalangDana.data.campaign[0].id,
      },
    }).then((res) => {
      setLike(true)
      console.log(res)
    })
  }

  const handleUnlike = async () => {
    await fetcher(
      `/api/wishlists/${dataGalangDana.data.campaign[0].id}/delete`
    ).then((res) => {
      setLike(false)
      console.log(res)
    })
  }

  function dayToGo(TargetDay) {
    const firstDate = new Date(TargetDay)
    if (!isNaN(firstDate.getTime())) {
      const oneDay = 24 * 60 * 60 * 1000
      const secondDate = new Date()
      const diffDays = Math.round((firstDate - secondDate) / oneDay)
      if (diffDays <= 0) {
        if (!expired) {
          setExpired(true)
        }
        return 'Berakhir'
      }
      return diffDays + ' Hari'
    }
    return 'Tanpa batas'
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return !loading ? (
    <div>
      {/* <MetaDataFacebook
        judul={dataGalangDana.data.campaign[0].judul_campaign}
        url={`https://peduly.com/${slug}`}
        detail={dataGalangDana.data.campaign[0].detail_campaign}
        foto={`${API_URL}/images/images_campaign/${dataGalangDana.data.campaign[0].foto_campaign}`}
      />
      <MetaDataTwitter
        judul={dataGalangDana.data.campaign[0].judul_campaign}
        detail={dataGalangDana.data.campaign[0].detail_campaign}
        foto={`${API_URL}/images/images_campaign/${dataGalangDana.data.campaign[0].foto_campaign}`}
        UserName={`By ${dataGalangDana.data.user[0].name}`}
      /> */}
      {popUp && (
        <div
          className="mx-auto w-full h-full fixed z-30"
          style={{ background: 'rgb(111, 111, 111, 0.5)' }}
        ></div>
      )}
      {ownerGalangDana ? (
        <NavEditGalangDana />
      ) : (
        <div className={`mx-auto`} style={{ maxWidth: '430px' }}>
          {popUp ? (
            <ClickReport
              status={popUp}
              onClickOutside={() => (popUp ? setPopUp(!popUp) : setPopUp(true))}
            />
          ) : (
            !penggunaanDana && (
              <NavGalangDana
                slug={'aktivitas'}
                judul={'Open recruitment anggota baru volunteer bach #20'}
                details={dataGalangDana.data.campaign[0].detail_campaign}
                donasi={'sekali'}
                expired={expired}
                clk={setClick}
              />
            )
          )}
        </div>
      )}

      {penggunaanDana ? (
        <RencanaPenggunaanDana click={setPenggunaanDana} />
      ) : (
        <div
          className={`mx-auto pb-[30px] ${click && 'hidden'}`}
          style={{ maxWidth: '430px' }}
        >
          <div className="relative">
            <div className="sticky top-0">
              <div className="relative h-[276.77px]">
                <img
                  src={`${API_URL}/images/images_campaign/${dataGalangDana.data.campaign[0].foto_campaign}`}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/images/no-picture.png'
                  }}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0  w-full">
                  <div className="flex justify-between items-center h-[52px] mx-[20px]">
                    <Link
                      to={`/`}
                      className="cursor-pointer w-[24px] h-[24px] bg-transparent flex items-center justify-center"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          fill="white"
                        />
                        <path
                          d="M13.26 15.53L9.73999 12L13.26 8.46997"
                          stroke="#212121"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <div
                      onClick={() => setPopUp(true)}
                      className="cursor-pointer w-[24px] h-[24px] bg-transparent flex items-center justify-center"
                    >
                      {!ownerGalangDana && (
                        <svg
                          width={4}
                          height={20}
                          viewBox="0 0 4 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 3.018V2.982Z"
                            fill="white"
                          />
                          <path
                            d="M2 3.018V2.982"
                            stroke="white"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 10.1307V10.0947Z"
                            fill="white"
                          />
                          <path
                            d="M2 10.1307V10.0947"
                            stroke="white"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 17.2437V17.2077Z"
                            fill="white"
                          />
                          <path
                            d="M2 17.2437V17.2077"
                            stroke="white"
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-white">
              <div
                style={{ marginTop: '-22px' }}
                className="absolute -mt-[20px] bg-white z-10 inset-x-0 rounded-t-full w-[100%] h-[27px]"
              >
                <div className="absolute bg-white z-10 inset-x-0 bottom-0 rounded-t-full w-[100%] h-[27px]">
                  <div className="absolute z-20 inset-x-0 mx-auto mb-2 bottom-0.5 h-[2px] bg-[#E4E4E4] w-[28px]" />
                  <div className="absolute top-[-35px] right-[25px]">
                    <svg
                      width={80}
                      height={80}
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_3840_21820)">
                        <rect
                          x={16}
                          y={15}
                          width={48}
                          height={48}
                          rx={24}
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_3840_21820"
                          x={0}
                          y={0}
                          width={80}
                          height={80}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={1} />
                          <feGaussianBlur stdDeviation={8} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3840_21820"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3840_21820"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    {!like ? (
                      <div className="absolute w-full top-[31px]">
                        <div className="flex justify-center items-center">
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                            onClick={handleLike}
                          >
                            <path
                              d="M10.62 17.71C10.28 17.83 9.72 17.83 9.38 17.71C6.48 16.72 0 12.59 0 5.59C0 2.5 2.49 0 5.56 0C7.38 0 8.99 0.88 10 2.24C11.01 0.88 12.63 0 14.44 0C17.51 0 20 2.5 20 5.59C20 12.59 13.52 16.72 10.62 17.71Z"
                              fill="#E4E4E4"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute w-full top-[31px]">
                        <div className="flex justify-center items-center">
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                            onClick={handleUnlike}
                          >
                            <path
                              d="M10.62 17.71C10.28 17.83 9.72 17.83 9.38 17.71C6.48 16.72 0 12.59 0 5.59C0 2.5 2.49 0 5.56 0C7.38 0 8.99 0.88 10 2.24C11.01 0.88 12.63 0 14.44 0C17.51 0 20 2.5 20 5.59C20 12.59 13.52 16.72 10.62 17.71Z"
                              fill="#E7513B"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mx-[20px]">
                <div className="inline-flex" style={{ paddingTop: '10px' }}>
                  <div className="  py-[3px] px-[10px] border border-peduly-primary rounded-full">
                    <p className=" text-peduly-primary text-xs">
                      {dataGalangDana.data.campaign[0].kategori_campaign}
                    </p>
                  </div>
                </div>
                <p className="text-peduly-dark font-medium mt-3 text-lg">
                  {dataGalangDana.data.campaign[0].judul_campaign}
                </p>
                <p className="text-sm font-medium mb-[15px] mt-[14px]">
                  <span className="font-medium text-lg text-peduly-primary">
                    Rp{' '}
                    {IdrFormat(
                      parseInt(
                        dataGalangDana.data.current_donation[0].current_donation
                          ? dataGalangDana.data.current_donation[0]
                              .current_donation
                          : 0
                      )
                    )}{' '}
                  </span>
                  terkumpul dari Rp{' '}
                  {IdrFormat(dataGalangDana.data.campaign[0].nominal_campaign)}
                </p>
                <ProgressBar
                  current={
                    dataGalangDana.data.current_donation[0].current_donation
                  }
                  target={dataGalangDana.data.campaign[0].nominal_campaign}
                  waktu={dataGalangDana.data.campaign[0].batas_waktu_campaign}
                />
                <div className="flex justify-between mb-[23px] mt-[13px]">
                  <div className="flex items-center">
                    <People />
                    <p className="font-medium ml-2 text-sm">
                      {dataGalangDana.data.jumlah_donatur.jumlah_donatur}
                      <span className="text-peduly-primary">+</span>
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <TimePause />
                      <p className="text-basic ml-[4px] font-medium">
                        <span>
                          {dayToGo(
                            dataGalangDana.data.campaign[0].batas_waktu_campaign
                          )}{' '}
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="hr-bold" />
                <div className="flex flex-col my-[24px]">
                  <h1 className="mb-[18px] text-sm font-normal">
                    Penggalang dana
                  </h1>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      {dataGalangDana.data.user[0].photo === null ? (
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.4"
                            d="M20 40.5383C31.0457 40.5383 40 31.584 40 20.5383C40 9.49264 31.0457 0.53833 20 0.53833C8.95431 0.53833 0 9.49264 0 20.5383C0 31.584 8.95431 40.5383 20 40.5383Z"
                            fill="#E7513B"
                          />
                          <path
                            d="M21.4787 28.0649C21.828 28.0649 22.1093 28.3489 22.1093 28.6969C22.1093 29.0462 21.828 29.3289 21.4787 29.3289H10.8413C10.4933 29.3289 10.2094 29.0462 10.2094 28.6969C10.2094 24.3382 13.428 20.2089 17.9173 20.2089C18.2667 20.2089 18.5493 20.4916 18.5493 20.8409C18.5493 21.1889 18.2667 21.4729 17.9173 21.4729C14.4147 21.4729 11.7853 24.5915 11.4987 28.0649H21.4787ZM20.208 18.9889C17.9053 18.9889 16.0387 17.1329 16.0387 14.8422C16.0387 12.5516 17.9067 10.6956 20.208 10.6956C22.5093 10.6956 24.3773 12.5516 24.3773 14.8422C24.3773 17.1329 22.5107 18.9889 20.208 18.9889ZM20.208 17.7262C21.8147 17.7262 23.1147 16.4342 23.1147 14.8422C23.1147 13.2502 21.8147 11.9582 20.208 11.9582C18.6013 11.9582 17.3013 13.2502 17.3013 14.8422C17.3013 16.4342 18.6013 17.7262 20.208 17.7262ZM26.336 20.2262C27.2627 20.1262 28.188 20.4355 28.8613 21.0715L28.8667 21.0769C29.456 21.6475 29.7893 22.4289 29.7893 23.2435C29.7893 24.0609 29.456 24.8422 28.868 25.4129L25.02 29.1489C24.7733 29.3875 24.384 29.3875 24.14 29.1489L20.2933 25.4142C19.7027 24.8422 19.3693 24.0609 19.3693 23.2449C19.3693 22.4289 19.7027 21.6475 20.2987 21.0715C20.972 20.4355 21.8973 20.1262 22.824 20.2262C23.4827 20.2982 24.0947 20.5702 24.58 20.9982C25.0653 20.5702 25.6773 20.2969 26.336 20.2262ZM26.472 21.4809C25.9133 21.5422 25.412 21.8422 25.104 22.2982C24.8533 22.6702 24.3067 22.6702 24.0573 22.2982C23.7493 21.8422 23.248 21.5422 22.6893 21.4809C22.1293 21.4209 21.5707 21.6089 21.172 21.9835C20.8267 22.3182 20.6333 22.7729 20.6333 23.2449C20.6333 23.7169 20.828 24.1715 21.1733 24.5062L24.5813 27.8142L27.9893 24.5049C28.336 24.1702 28.528 23.7169 28.528 23.2435C28.528 22.7715 28.3347 22.3209 27.992 21.9862C27.5853 21.6075 27.0293 21.4209 26.472 21.4809Z"
                            fill="#E7513B"
                          />
                        </svg>
                      ) : (
                        <img
                          className="object-cover w-[40px] h-[40px] rounded-full"
                          src={
                            dataGalangDana.data.user[0].photo.slice(0, 4) ===
                            'http'
                              ? dataGalangDana.data.user[0].photo
                              : dataGalangDana.data.user[0].photo.slice(
                                  0,
                                  7
                                ) === '/images'
                              ? `${API_URL}${dataGalangDana.data.user[0].photo}`
                              : `${API_URL}/images/images_profile/${dataGalangDana.data.user[0].photo}`
                          }
                          alt=""
                          onError={() => (
                            <svg
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.4"
                                d="M20 40.5383C31.0457 40.5383 40 31.584 40 20.5383C40 9.49264 31.0457 0.53833 20 0.53833C8.95431 0.53833 0 9.49264 0 20.5383C0 31.584 8.95431 40.5383 20 40.5383Z"
                                fill="#E7513B"
                              />
                              <path
                                d="M21.4787 28.0649C21.828 28.0649 22.1093 28.3489 22.1093 28.6969C22.1093 29.0462 21.828 29.3289 21.4787 29.3289H10.8413C10.4933 29.3289 10.2094 29.0462 10.2094 28.6969C10.2094 24.3382 13.428 20.2089 17.9173 20.2089C18.2667 20.2089 18.5493 20.4916 18.5493 20.8409C18.5493 21.1889 18.2667 21.4729 17.9173 21.4729C14.4147 21.4729 11.7853 24.5915 11.4987 28.0649H21.4787ZM20.208 18.9889C17.9053 18.9889 16.0387 17.1329 16.0387 14.8422C16.0387 12.5516 17.9067 10.6956 20.208 10.6956C22.5093 10.6956 24.3773 12.5516 24.3773 14.8422C24.3773 17.1329 22.5107 18.9889 20.208 18.9889ZM20.208 17.7262C21.8147 17.7262 23.1147 16.4342 23.1147 14.8422C23.1147 13.2502 21.8147 11.9582 20.208 11.9582C18.6013 11.9582 17.3013 13.2502 17.3013 14.8422C17.3013 16.4342 18.6013 17.7262 20.208 17.7262ZM26.336 20.2262C27.2627 20.1262 28.188 20.4355 28.8613 21.0715L28.8667 21.0769C29.456 21.6475 29.7893 22.4289 29.7893 23.2435C29.7893 24.0609 29.456 24.8422 28.868 25.4129L25.02 29.1489C24.7733 29.3875 24.384 29.3875 24.14 29.1489L20.2933 25.4142C19.7027 24.8422 19.3693 24.0609 19.3693 23.2449C19.3693 22.4289 19.7027 21.6475 20.2987 21.0715C20.972 20.4355 21.8973 20.1262 22.824 20.2262C23.4827 20.2982 24.0947 20.5702 24.58 20.9982C25.0653 20.5702 25.6773 20.2969 26.336 20.2262ZM26.472 21.4809C25.9133 21.5422 25.412 21.8422 25.104 22.2982C24.8533 22.6702 24.3067 22.6702 24.0573 22.2982C23.7493 21.8422 23.248 21.5422 22.6893 21.4809C22.1293 21.4209 21.5707 21.6089 21.172 21.9835C20.8267 22.3182 20.6333 22.7729 20.6333 23.2449C20.6333 23.7169 20.828 24.1715 21.1733 24.5062L24.5813 27.8142L27.9893 24.5049C28.336 24.1702 28.528 23.7169 28.528 23.2435C28.528 22.7715 28.3347 22.3209 27.992 21.9862C27.5853 21.6075 27.0293 21.4209 26.472 21.4809Z"
                                fill="#E7513B"
                              />
                            </svg>
                          )}
                        />
                      )}
                      <div className="flex flex-col ml-[11px]">
                        <p className="font-medium text-sm">
                          {dataGalangDana.data.user[0].name}
                        </p>
                        <div className="flex flex-row font-medium text-xs items-center leading-[16px]">
                          <img src="/icon/star.svg" alt="star" />
                          <small className="ml-1">4.5</small>
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-sm leading-[19px]">
                      <button className="border border-peduly-primary rounded-full px-[25px] py-[6px]">
                        Ikuti
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="hr-bold" />
                <div className="my-[24px] font-medium text-sm">
                  <button
                    className="w-full border border-peduly-primary rounded-full py-[12px] text-peduly-primary"
                    onClick={() => setPenggunaanDana(true)}
                  >
                    Rencana Penggunaan Dana
                  </button>
                </div>
              </div>

              <hr className="border-b-[2px] border-[#E4E4E4]" />
              <TabDetails
                details={dataGalangDana.data.campaign[0].detail_campaign}
                doaDonatur={dataGalangDana.data.doa_donatur}
                jumlahDonatur={
                  dataGalangDana.data.jumlah_donatur.jumlah_donatur
                }
                kabarTerbaru={dataGalangDana.data.kabar_terbaru}
                donatur={dataGalangDana.data.donatur}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
      <Spinner color="#0288D1" />
    </div>
  )
}

export default DetailAktivitas
