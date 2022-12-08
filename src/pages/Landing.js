import CarouselMain from 'components/Landing/Carousel'
import NavLink from '../components/Navbar'
import { FindUs } from 'components/Landing/FindUs'
import { Application } from 'components/Landing/Application'
import { Category } from 'components/Landing/Category'
import Header from 'components/Landing/Header'
import Point from 'components/Landing/Point'
import { useEffect } from 'react'

import '../styles/landing.css'

const Landing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div
      style={{ maxWidth: '430px' }}
      className="mx-auto overflow-hidden overflow-y-auto"
    >
      {/* NAVBAWAH */}
      <NavLink />
      <div>
        {/* HEADER */}
        <Header />
        {/* POINT */}
        <Point />
        {/* CARD */}
        {/* <MiniCard /> */}
        {/* COROUSEL */}
        <div className="mt-[24px] ml-3">
          <CarouselMain />
        </div>
        {/* BANTUAN MENDESAK */}
        {/* <Urgent /> */}
        {/* KATEGORI */}
        <Category />
        {/* <hr
          style={{
            marginBottom: '24px',
          }}
          className='hr-bold'
        /> */}
        {/* DOA */}
        {/* <Doa /> */}
        <hr className="hr-bold" style={{ marginBottom: '37px' }} />
        {/* PLAYSTORE */}
        <Application />
        <hr className="hr-bold" style={{ marginBottom: '37px' }} />
        {/* MEDSOS */}
        <FindUs />
      </div>
    </div>
  )
}

export default Landing
