import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import DropdownMenu from '../../components/Dropdown/dropdown'
import BackButton from 'components/BackButton'

export default function PengingatDonasi() {
  const [checked, setChecked] = useState(false)
  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <div className="container top-y-10  mx-auto max-w-[430px]  h-screen  bg-white">
        <BackButton hrf={'1'} txt="Pengingat Donasi" />
        <div className="">
          <div className="grid grid-cols-6 pb-[15px]  mt-[25px]  w-full  align-middle">
            <div className="flex col-span-3 ml-nominal-kiri ">
              <span className="mr-[165px]">Email</span>
              <div className="col-span-2">
                <DropdownMenu />
              </div>
            </div>
            <div className="col-span-3 grid justify-self-stretch  w-full">
              <div className="justify-self-end relative  right-2">
                <Switch
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked)
                  }}
                  className={`mt-1 mr-[20px] ${
                    checked ? 'bg-peduly-primary' : 'bg-gray-200'
                  }
                  inline-flex  ${
                    checked ? '' : ''
                  } flex-shrink-0 h-toggle-button w-toggle-button border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use Coupon</span>
                  <span
                    aria-hidden="true"
                    className={`${checked ? 'translate-x-5' : 'translate-x-0'}
                    pointer-events-none inline-block h-toggle-button2 w-toggle-button2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
            </div>
          </div>
          <div className="w-[335px] h-[38px] ml-nominal-kiri">
            <span className="text-small text-peduly-secondary">
              *kami akan mengingatkan melalui email setiap pukul 14.30 sesuai
              yang telah dijadwalkan
            </span>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-6 pb-[15px]  mt-[30px]  w-full  align-middle">
            <div className="flex col-span-3 ml-nominal-kiri ">
              <span className="">Notifikasi Push</span>
            </div>
            <div className="col-span-3 grid justify-self-stretch  w-full">
              <div className="justify-self-end relative  right-2">
                <Switch
                  checked={checked}
                  onChange={() => {
                    setChecked(!checked)
                  }}
                  className={`mt-1 mr-[20px] ${
                    checked ? 'bg-peduly-primary' : 'bg-gray-200'
                  }
                  inline-flex  ${
                    checked ? '' : ''
                  } flex-shrink-0 h-toggle-button w-toggle-button border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span className="sr-only">Use Coupon</span>
                  <span
                    aria-hidden="true"
                    className={`${checked ? 'translate-x-5' : 'translate-x-0'}
                    pointer-events-none inline-block h-toggle-button2 w-toggle-button2 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
