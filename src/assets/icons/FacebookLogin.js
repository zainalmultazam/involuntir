import React from 'react';

function FacebookLogin() {
  return (
    <div className='relative'>
      <svg
        width='52'
        height='52'
        viewBox='0 0 52 52'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='26' cy='26' r='25.5' fill='white' stroke='#E4E4E4' />
      </svg>
      <div className='flex justify-center'>
        <div className='absolute top-0 mt-3'>
          <svg
            width='30'
            height='30'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15 30C23.2842 30 30 23.2842 30 15C30 6.71572 23.2842 0 15 0C6.71572 0 0 6.71572 0 15C0 23.2842 6.71572 30 15 30Z'
              fill='#1977F3'
            />
            <path
              d='M20.8389 19.3369L21.5033 15H17.3436V12.186C17.3436 11.0005 17.9237 9.84246 19.7884 9.84246H21.6805V6.151C21.6805 6.151 19.9635 5.85779 18.3224 5.85779C14.8967 5.85779 12.6565 7.93344 12.6565 11.6945V15H8.84692V19.3369H12.6565V29.8185C13.4201 29.9388 14.2027 29.9999 15.0001 29.9999C15.7974 29.9999 16.58 29.9367 17.3436 29.8185V19.3369H20.8389Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FacebookLogin;
