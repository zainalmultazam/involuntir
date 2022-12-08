import React from 'react'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import FormZakatProfesi from './FormZakat/FormZakatProfesi'
import FormZakatMaal from './FormZakat/FormZakatMaal'

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

const TabDetailsZakat = ({
  ModalOn,
  setModalOn,
  NominalZakat,
  setHasilZakat,
  HasilZakat,
  setJenisZakat,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className=" text-lg font-medium">
      <nav
        style={{ boxShadow: '0px 17px 20px -20px rgba(0, 0, 0, 0.06)' }}
        className="px-0 pb-[6px] text-[#C4C4C4] fixed bg-white z-20 w-full max-w-[430px]"
      >
        <ul className="w-full max-h-[72px] grid grid-cols-2">
          <li
            onClick={() => setActiveIndex(0)}
            className={`py-[24px] inline-block cursor-pointer text-center  ${
              activeIndex === 0
                ? 'border-b-2 border-peduly-primary text-peduly-primary'
                : 'text-[#212121]'
            }`}
          >
            Zakat Profesi
          </li>
          <li
            onClick={() => setActiveIndex(1)}
            className={`py-[24px] cursor-pointer inline-block text-center ${
              activeIndex === 1
                ? ' border-b-2 border-peduly-primary text-peduly-primary'
                : 'text-[#212121]'
            }`}
          >
            Zakat Maal
          </li>
        </ul>
      </nav>
      <TabCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <TabItem>
          <div className={` ${activeIndex === 0 ? '' : 'hidden'} `}>
            <FormZakatProfesi
              setModalOn={setModalOn}
              NominalZakat={NominalZakat}
              setHasilZakat={setHasilZakat}
              HasilZakat={HasilZakat}
              setJenisZakat={setJenisZakat}
            />
          </div>
        </TabItem>
        <TabItem>
          <div className={` ${activeIndex === 1 ? '' : 'hidden'} `}>
            <FormZakatMaal
              setModalOn={setModalOn}
              NominalZakat={NominalZakat}
              setHasilZakat={setHasilZakat}
              HasilZakat={HasilZakat}
              setJenisZakat={setJenisZakat}
            />
          </div>
        </TabItem>
      </TabCarousel>
    </div>
  )
}

export default TabDetailsZakat
