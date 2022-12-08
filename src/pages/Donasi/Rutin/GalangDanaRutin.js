import NavGalangDana from 'components/GalangDana/NavGalangDana'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import TabDetails from 'components/GalangDana/TabDetails'
import { API_URL } from 'config/api'
import Spinner from 'components/loaders/Spinner'
import IdrFormat from 'utils/IdrFormat'
import ClickReport from 'components/GalangDana/ClickReport'
import NavEditGalangDana from 'components/GalangDana/NavEditGalangDana'
import { Link } from 'react-router-dom'
import { setReferal } from 'utils/cookiesHooks'
import { TitleNameContext } from 'context/TitleNameContext'
import RencanaPenggunaanDana from 'components/GalangDana/RencanaPenggunaanDana'

import '../../../App.css'

function GalangDanaRutin() {
  const [dataGalangDana, setDataGalangDana] = useState({})
  const [like, setLike] = useState(true)
  const [loading, setLoading] = useState(true)
  const [expired, setExpired] = useState(false)
  const [click, setClick] = useState(false)
  const [popUp, setPopUp] = useState(false)
  const [donasi, setDonasi] = useState('rutin')

  const [ownerGalangDana, setOwnerGalangDana] = useState(false)
  const [penggunaanDana, setPenggunaanDana] = useState(false)

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

  // const checkOwnerGalangDana = async () => {
  //   await axios
  //     .get(`${API_URL}/api/galangdanasaya`)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.status === 200) {
  //         setOwnerGalangDana(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // function dayToGo(TargetDay) {
  //   const firstDate = new Date(TargetDay)
  //   if (!isNaN(firstDate.getTime())) {
  //     const oneDay = 24 * 60 * 60 * 1000
  //     const secondDate = new Date()
  //     const diffDays = Math.round((firstDate - secondDate) / oneDay)
  //     if (diffDays <= 0) {
  //       if (!expired) {
  //         setExpired(true)
  //       }
  //       return 'Berakhir'
  //     }
  //     return diffDays + ' Hari'
  //   }
  //   return 'Tanpa batas'
  // }

  function handlePenggunaanDana() {
    if (penggunaanDana === false) {
      setPenggunaanDana(true)
    } else {
      setPenggunaanDana(false)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return !loading ? (
    <div>
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
            <NavGalangDana
              slug={slug}
              donasi={donasi}
              expired={expired}
              clk={setClick}
            />
          )}
        </div>
      )}

      {penggunaanDana ? (
        <RencanaPenggunaanDana handlePenggunaanDana={handlePenggunaanDana} />
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

                    {like ? (
                      <div className="absolute w-full top-[31px]">
                        <div className="flex justify-center items-center">
                          <svg
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="cursor-pointer"
                            onClick={() => setLike(false)}
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
                            onClick={() => setLike(true)}
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
                  <div className="  py-[3px] px-[10px] border border-peduly-primary rounded-full mr-[10px]">
                    <p className=" text-peduly-primary text-xs">Donasi Rutin</p>
                  </div>
                  <div className="  py-[3px] px-[10px] border border-peduly-primary rounded-full">
                    <p className=" text-peduly-primary text-xs">
                      {dataGalangDana.data.campaign[0].kategori_campaign}
                    </p>
                  </div>
                </div>
                <p className="text-peduly-dark font-medium mt-3 text-lg">
                  {dataGalangDana.data.campaign[0].judul_campaign}
                </p>

                <div className="my-[30px] flex flex-row justify-center">
                  <div className="text-center font-semibold w-[200px]">
                    <p className="text-peduly-primary">
                      {IdrFormat(
                        parseInt(
                          dataGalangDana.data.current_donation[0]
                            .current_donation > 0
                            ? dataGalangDana.data.current_donation[0]
                                .current_donation
                            : 0
                        )
                      )}
                    </p>
                    <p>Jumlah Donasi Terkumpul</p>
                  </div>
                  <div className="mx-[45px]">
                    <div
                      style={{ height: '60px', borderLeft: '1px solid black' }}
                    ></div>
                  </div>
                  <div className="text-center font-semibold w-[200px]">
                    <p className="text-peduly-primary">
                      {dataGalangDana.data.jumlah_donatur.jumlah_donatur}
                    </p>
                    <p>Donatur Rutin Terkumpul</p>
                  </div>
                </div>

                <hr className="hr-bold" />
                <div className="flex flex-col my-[24px]">
                  <h1 className="mb-[18px] text-sm font-normal">
                    Penggalang dana
                  </h1>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                      <img
                        className="object-cover w-[40px] h-[40px] rounded-full"
                        src="/icon/peduly.png"
                        alt="icon"
                      />
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
                    onClick={() => handlePenggunaanDana()}
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
              {/* <TabDetailsAtas
                details={dataGalangDana.data.campaign[0].detail_campaign}
                doaDonatur={dataGalangDana.data.doa_donatur}
                jumlahDonatur={
                  dataGalangDana.data.jumlah_donatur.jumlah_donatur
                }
                donatur={dataGalangDana.data.donatur}
              />
              <TabDetailsBawah
                kabarTerbaru={dataGalangDana.data.kabar_terbaru}
              /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
      <Spinner color="#e7513b" />
    </div>
  )
}

export default GalangDanaRutin
