import { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../components/arrow-white'
import SearchBar from 'components/Merchant/SearchBar'
import Balance from 'components/Merchant/Balance'
import CardMerchant from 'components/Merchant/CardMerchant'
import CardMerchant2 from 'components/Merchant/CardMerchant2'

const Dashboard = () => {
  const [click, setClick] = useState(false)

  function handleSearch() {
    if (click === false) {
      setClick(true)
    } else {
      setClick(false)
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="container top-y-10  mx-auto max-w-[430px]  h-screen  bg-peduly-primary text-white">
        <div className="sticky top-0">
          <div className="inline-flex w-full mb-[17px] h-metode-bayar text-justify align-middle justify-between">
            <div className="flex">
              <Link to={`/`}>
                <Arrow />
              </Link>
              <div className="flex-column">
                <p className="ml-nominal-atas relative top-arrow-space font-semibold">
                  Halo, Viera Putri!
                </p>
                <p className="ml-nominal-atas relative top-arrow-space text-sm font-normal">
                  Tukar Coin dengan produk perusahaan baik
                </p>
              </div>
            </div>
            <div
              className="flex px-4 justify-center items-center cursor-pointer"
              onClick={handleSearch}
            >
              <img
                src="/images/icon/search-white.svg"
                className="w-5 h-5"
                alt=""
              />
            </div>
          </div>

          <div
            className={
              click === false
                ? `hidden w-full flex-center`
                : `w-full flex-center`
            }
          >
            <SearchBar />
          </div>

          <div className="w-full flex-center"></div>
          <Balance />
          <div />
        </div>

        {/* Daftar merchant */}
        <div className="rounded-t-base bg-white flex flex-col relative h-full">
          <div className="m-5 self-center">
            <svg
              width="40"
              height="4"
              viewBox="0 0 40 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="2"
                x2="38"
                y2="2"
                stroke="#E4E4E4"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <CardMerchant />
          <CardMerchant2 />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
