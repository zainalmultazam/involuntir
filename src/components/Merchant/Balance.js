import React from "react";

const Balance = () => {
  return (
    <div className="px-4 mb-[17px]">
      <div className="flex box-balance rounded-2xl h-[80px] items-center px-3 justify-between bg-merchant-balance">
        <div className="flex flex-row">
          <div className="flex">
            <div className="w-[48px] h-[48px] px-3 background-icon rounded-full flex justify-center items-center">
              <img
                src="/images/icon/percent-balance.svg"
                className="rounded-full w-[48px] h-[48px]"
                alt=""
              />
            </div>
          </div>
          {/* Status Akun */}
          <div className="px-4 flex flex-col text-white">
            <small className="p-0 m-0">Status:</small>
            <h1 className="text-[20px] mb-0">Orang Baik</h1>
          </div>
        </div>
        <div className="flex mr-0">
          {/* Jumlah koin */}
          <div className="flex-col text-right text-white">
            <small className="p-0 m-0">Coin:</small>
            <h1 className="text-[20px] mb-0">129</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
