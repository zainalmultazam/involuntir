import React from 'react'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import DonasiInvolunter from 'components/DonasiInvolunter/Donasi'
import DonaturInvolunter from 'components/DonasiInvolunter/Donatur'

import './index.css'

const TabCarousel = ({ children, activeIndex, setActiveIndex }) => {
  const updateIndex = (newIndex) => {
    if (newIndex >= 0 && newIndex < React.Children.count(children)) {
      setActiveIndex(newIndex)
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div {...handlers} className="mt-[72px] py-0 tab-details-wrapper">
      <div
        className="whitespace-nowrap tab-inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: 'transform 300ms',
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' })
        })}
      </div>
    </div>
  )
}

export const TabItem = ({ children, width }) => {
  return (
    <div
      className={`inline-block w-full py-6 text-peduly-dark leading-[22px] `}
      style={{ marginTop: '-25px' }}
      width={width}
    >
      {children}
    </div>
  )
}

const Donasi = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [pilihMetodeActive, setPilihMetodeActive] = useState(false)
  const history = useHistory()

  return (
    <div
      className={`max-w-[430px] mx-auto px-5`}
      style={{ marginTop: pilihMetodeActive ? '-78px' : '0' }}
    >
      <div className=" text-lg font-medium">
        <nav
          style={{ boxShadow: '0px 17px 20px -20px rgba(0, 0, 0, 0.06)' }}
          className={`px-0 pb-[6px] text-[#C4C4C4] bg-white z-20 w-full max-w-[430px] ${
            pilihMetodeActive ? 'hidden' : 'fixed top-0'
          }`}
        >
          <ul className="w-full max-h-[72px] grid grid-cols-2">
            <div onClick={history.goBack} className="fixed">
              <svg
                className="cursor-pointer mt-6 ml-5"
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
            <li
              onClick={() => setActiveIndex(0)}
              className={`py-[24px] inline-block cursor-pointer text-center text-peduly-dark  ${
                activeIndex === 0 ? 'border-b-2 border-peduly-primary' : ''
              }`}
            >
              Donasi
            </li>
            <li
              onClick={() => setActiveIndex(1)}
              className={`py-[24px] cursor-pointer inline-block text-center text-peduly-dark  ${
                activeIndex === 1 ? ' border-b-2 border-peduly-primary' : ''
              }`}
            >
              Donatur (232)
            </li>
          </ul>
        </nav>
        <TabCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
          <TabItem>
            <div className={` ${activeIndex === 0 ? '' : 'hidden'} `}>
              <DonasiInvolunter setPilihMetodeActive={setPilihMetodeActive} />
            </div>
          </TabItem>
          <TabItem>
            <div className={` ${activeIndex === 1 ? '' : 'hidden'} `}>
              <DonaturInvolunter />
            </div>
          </TabItem>
        </TabCarousel>
      </div>
    </div>
  )
}

export default Donasi
