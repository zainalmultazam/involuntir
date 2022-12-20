import React from 'react'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

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
    <div {...handlers} className="tab-details-wrapper py-0 relative">
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
      className="tab-item text-peduly-dark leading-[22px]"
      style={{ marginTop: '-25px' }}
      width={width}
    >
      {children}
    </div>
  )
}

const TabProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="font-medium text-lg">
      <nav className="px-[20px] py-0 text-peduly-subtitle border-b-[1px] border-solid border-involuntir-light-1/2">
        <ul className=" whitespace-nowrap space-x-[24px] overflow-x-scroll max-w-full mx-h-[72px] no-scrollbar">
          <li
            onClick={() => setActiveIndex(0)}
            className={`py-5 inline-block cursor-pointer ${
              activeIndex === 0
                ? ' border-b-2 border-peduly-primary text-peduly-dark'
                : 'text-peduly-subtitle'
            }`}
          >
            Komunitas
          </li>
          <li
            onClick={() => setActiveIndex(1)}
            className={`py-5 inline-block cursor-pointer ${
              activeIndex === 1
                ? ' border-b-2 border-peduly-primary text-peduly-dark'
                : 'text-peduly-subtitle'
            }`}
          >
            Acara
          </li>
          <li
            onClick={() => setActiveIndex(2)}
            className={`py-5 inline-block cursor-pointer ${
              activeIndex === 2
                ? ' border-b-2 border-peduly-primary text-peduly-dark'
                : 'text-peduly-subtitle'
            }`}
          >
            Sertifikat
          </li>
        </ul>
      </nav>
      <TabCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
        <TabItem>
          <div className={` ${activeIndex === 0 ? '' : 'hidden'}`}>
            <></>
          </div>
        </TabItem>
        <TabItem>
          <div className={` ${activeIndex === 1 ? '' : 'hidden'}`}>
            <></>
          </div>
        </TabItem>
        <TabItem>
          <div className={` ${activeIndex === 2 ? '' : 'hidden'}`}>
            <></>
          </div>
        </TabItem>
      </TabCarousel>
    </div>
  )
}

export default TabProfile
