import React from 'react'

const Fundraiser = () => {
  return (
    <div className="flex flex-col whitespace-normal justify-center items-center mt-[62px] my-[40px] mx-[20px]">
      <svg
        width={100}
        height={100}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.1665 76.4583L44.0832 86.4583C45.7498 88.125 49.4998 88.9583 51.9998 88.9583H67.8332C72.8332 88.9583 78.2498 85.2083 79.4998 80.2083L89.4998 49.7917C91.5832 43.9583 87.8332 38.9583 81.5832 38.9583H64.9165C62.4165 38.9583 60.3332 36.875 60.7498 33.9583L62.8332 20.625C63.6665 16.875 61.1665 12.7083 57.4165 11.4583C54.0832 10.2083 49.9165 11.875 48.2498 14.375L31.1665 39.7917"
          stroke="#E7513B"
          strokeWidth={4}
          strokeMiterlimit={10}
        />
        <path
          d="M9.91626 76.4583V35.625C9.91626 29.7917 12.4163 27.7083 18.2496 27.7083H22.4163C28.2496 27.7083 30.7496 29.7917 30.7496 35.625V76.4583C30.7496 82.2917 28.2496 84.375 22.4163 84.375H18.2496C12.4163 84.375 9.91626 82.2917 9.91626 76.4583Z"
          stroke="#E7513B"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className="text-black text-lg font-semibold mt-[24px]">
        Cara lain jadi orang baik
      </p>
      <p className="text-center font-normal text-[16px] mt-[12px] text-[#717171]">
        Kamu bisa bantu penggalangan dana ini supaya mendapatkan lebih banyak
        dana dengan menjadi Supporter.
      </p>
      {/* <button className="bg-peduly-primary text-white font-semibold rounded-full w-full h-[60px] mt-[40px]" onClick={()=>{window.location.href = '/supporter';}}>
          Jadi Supporter
      </button> */}
    </div>
  )
}

export default Fundraiser
