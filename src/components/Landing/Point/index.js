import React from 'react';

function Point() {
  return (
    <div
      className='grid grid-cols-6 max-w-[374px] rounded-[15px] mx-[20px] p-[20px] mt-[24px] items-center'
      style={{boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)'}}
    >
      <div className='col-span-1 inline-block'>
        <svg
          width={48}
          height={48}
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle opacity='0.12' cx={24} cy={24} r={24} fill='#E7513B' />
          <path
            d='M20.5701 27.27L27.11 20.73'
            stroke='#E7513B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M20.98 22.3699C21.6593 22.3699 22.21 21.8192 22.21 21.1399C22.21 20.4606 21.6593 19.9099 20.98 19.9099C20.3007 19.9099 19.75 20.4606 19.75 21.1399C19.75 21.8192 20.3007 22.3699 20.98 22.3699Z'
            stroke='#E7513B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M27.52 28.0899C28.1993 28.0899 28.75 27.5392 28.75 26.8599C28.75 26.1806 28.1993 25.6299 27.52 25.6299C26.8407 25.6299 26.29 26.1806 26.29 26.8599C26.29 27.5392 26.8407 28.0899 27.52 28.0899Z'
            stroke='#E7513B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z'
            stroke='#E7513B'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
      <div className='col-span-4 inline-block ml-[15px]'>
        <p className='text-lg font-medium'>
          <span className='text-xs text-[#717171]'>
            Status: <br></br>
          </span>
          Warga Baik
        </p>
      </div>
      <div className='col-span-1 inline-block '>
        <p className='text-right text-lg font-medium'>
          <span className='text-xs text-[#717171]'>
            Coin: <br></br>
          </span>
          0
        </p>
      </div>
    </div>
  );
}

export default Point;
