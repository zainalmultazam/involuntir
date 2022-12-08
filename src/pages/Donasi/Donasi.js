import NavLink from '../../components/Navbar/index'
import { Rutin } from '../../components/Donasi/Rutin'
import { Barang } from '../../components/Donasi/Barang'
import { Sekali } from '../../components/Donasi/Sekali'
import { Redirect, useParams } from 'react-router-dom'
// import NavDonasiMenu from 'components/Donasi/NavDonasiMenu'
import NavFilter from 'components/GalangDana/NavFilter'
import { useState } from 'react'

function Donasi() {
  const [hidden, setHidden] = useState(false)

  const { slug } = useParams()

  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto overflow-hidden">
      {slug === 'sekali' ? (
        <div>
          {/* <NavDonasiMenu /> */}
          <NavLink />
          <NavFilter clk={setHidden} />
          <div className={`mt-2 flex mb-11 ${hidden && 'hidden'}`}>
            <div className={` ${slug === 'sekali' ? '' : 'hidden'}`}>
              <Sekali />
            </div>
            <div
              className={`font-semibold ${slug === 'rutin' ? '' : 'hidden'}`}
            >
              <Rutin />
            </div>
            <div
              className={`font-semibold ${slug === 'barang' ? '' : 'hidden'}`}
            >
              <Barang />
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  )
}

export default Donasi
