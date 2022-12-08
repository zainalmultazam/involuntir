import { useState } from 'react'
import NavLink from '../../components/Navbar'
import { Donasi } from '../../components/Riwayat'

function Riwayat() {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto">
      <NavLink />
      <div className="text-base font-normal text-center  border-gray-200 fixed top-0 bg-white max-w-[430px] w-full">
        <ul
          className={'flex justify-between items-center w-[100%]'}
          style={{
            boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
          }}
        >
          <li className={'w-[100%] flex items-center'}>
            <span
              onClick={() => setTabIndex(0)}
              className={
                'w-[100%] px-4 h-[70px] rounded-t-lg border-b-2 border-transparent flex items-center cursor-default text-[16px] text-[#212121] font-semibold justify-center'
              }
            >
              Riwayat Donasi
            </span>
          </li>
        </ul>
      </div>

      <div>
        <div className={` ${tabIndex === 0 ? '' : 'hidden'}`}>
          <Donasi />
        </div>
      </div>
    </div>
  )
}

export default Riwayat
