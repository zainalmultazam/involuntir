import { useState } from 'react'
import { Header } from 'components/Merchant/Header'

const DetailMerchant = () => {
  const [hidden1, setHidden1] = useState(false)
  const [hidden2, setHidden2] = useState(false)

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="sticky top-0">
        <div className="relative h-[276.77px]">
          <img
            src={`https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
            alt=""
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/images/no-picture.png'
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0  w-full">
            <Header href={`/donasi-sekali`} />
          </div>
        </div>
      </div>
      <div className="rounded-t-[30px] mb-[84px] bg-white w-full relative -top-11 px-5 flex flex-col">
        <div className="m-5 self-center">
          <svg
            width="40"
            height="4"
            viewBox="0 0 40 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="2"
              x2="38"
              y2="2"
              stroke="#E4E4E4"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* <div className="grid grid-cols-6">
          <div className="flex flex-col col-span-5">
            <p className="text-semi-large font-semibold">
              Eatlah - Royal Plaza nama pajang tempat yang panjang sekali yeay
            </p>
            <p className="mt-[4px] font-normal text-small text-[#717171]">
              Fast Food, Fried Chicken
            </p>
            <p className="mt-4 font-normal text-small">
              Mall Royal Plaza - Jl.Ketintang No.1, Surabaya
            </p>
          </div>
          <div className="col-end-1 col-span-1">
            <div className="flex flex-col items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.35 9.05001L15.01 16.59C14.45 18.38 11.94 18.41 11.35 16.63L10.65 14.56C10.46 13.99 10.01 13.53 9.43997 13.35L7.35997 12.65C5.58997 12.06 5.61997 9.53001 7.40997 8.99001L14.95 6.64C16.43 6.19 17.82 7.58001 17.35 9.05001Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="mt-[4px] font-normal text-small text-peduly-primary">
                523 m
              </p>
            </div>
          </div>
        </div> */}

        <p className="text-semi-large font-semibold">Voucher Diskon 5%</p>

        <div className="flex flex-row justify-between mt-[14px]">
          <div className="flex flex-row">
            <img
              src={'/images/icon/percent-balance.svg'}
              style={{ height: 24 }}
              alt=""
            />
            <p className="ml-[10px] font-semibold text-basic text-peduly-primary">
              5 Koin
            </p>
          </div>
          <p className="font-normal text-basic text-[#717171]">123 Terpakai</p>
        </div>

        <p className="mt-[48px] text-large font-semibold">Lokasi Penukaran</p>

        <div className="mt-[16px] flex flex-row justify-between">
          <div className="flex flex-row col-span-5 items-start">
            <img src="/images/icon/merchant/shop.svg" alt="" />
            <div className="flex flex-col ml-[10px]">
              <p className="text-semi-large font-semibold">
                Eatlah - Royal Plaza
              </p>
              <p className="mt-[6px] font-normal text-small">
                Mall Royal Plaza - Jl.Ketintang No.1, Surabaya
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.35 9.05001L15.01 16.59C14.45 18.38 11.94 18.41 11.35 16.63L10.65 14.56C10.46 13.99 10.01 13.53 9.43997 13.35L7.35997 12.65C5.58997 12.06 5.61997 9.53001 7.40997 8.99001L14.95 6.64C16.43 6.19 17.82 7.58001 17.35 9.05001Z"
                stroke="#E7513B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#E7513B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-[4px] font-normal text-small text-peduly-primary">
              523 m
            </p>
          </div>
        </div>

        <p className="mt-[48px] text-large font-semibold">Keuntungan</p>

        <p className="mt-[6px] text-basic font-normal">
          Voucher diskon 60% maks.7.000 Coin.
        </p>

        {/* <hr className='mt-[24px]' style={{border: '1px solid #E4E4E4'}}></hr> */}
        <hr className="mt-[24px]" />

        <div
          className="flex items-center justify-between py-[27px] cursor-pointer"
          onClick={() => setHidden1(!hidden1)}
        >
          <h1 className="font-semibold">Cara Menukarkan PedulyCoin</h1>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={hidden1 ? `rotate-180` : ``}
          >
            <path
              d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995"
              stroke="#212121"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {hidden1 && (
          <div className="mb-[20px] text-sm font-normal leading-6">
            <ol className="list-disc ml-4">
              <li>Hubungi Merchant terlebih dahulu terkait jam operasional.</li>
              <li>
                Kunjung lokasi Merchant terdekat untuk menukarkan Voucher.
              </li>
              <li>
                Pastikan Voucher masih berlaku saat berkunjung ke Merchant.
              </li>
              <li>
                Di lokasi, buka aplikasi Peduly dan klik “Coin” pada halaman
                utama.
              </li>
              <li>
                Klik “Voucher” dikanan bawah, lalu pulih Coin Peduly yang
                sesuai.
              </li>
              <li>Klik “pakai” dan scan Kode QR di kasir.</li>
            </ol>
          </div>
        )}

        <hr />

        <div
          className="flex items-center justify-between py-[27px] cursor-pointer"
          onClick={() => setHidden2(!hidden2)}
        >
          <h1 className="font-semibold">Syarat & Ketentuan</h1>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={hidden2 ? `rotate-180` : ``}
          >
            <path
              d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995"
              stroke="#212121"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {hidden2 && (
          <div className="text-sm font-normal leading-6">
            <ol className="list-disc ml-4">
              <li>Metode penukaran harus menggunakan PedulyCoin.</li>
              <li>
                Voucher harus digunakan di depan kasir saat melakukan
                pembayaran.
              </li>
              <li>
                Voucher langsung bisa di claim pada saat transaksi berhasil.
              </li>
            </ol>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 w-full h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40">
        <span className="w-[90%]">
          <button
            className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
            onClick={''}
          >
            Pakai Voucher
          </button>
        </span>
      </div>
    </div>
  )
}

export default DetailMerchant
