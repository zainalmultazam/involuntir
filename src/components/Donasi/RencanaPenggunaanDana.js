import IdrFormat from 'utils/IdrFormat'

const data = [
  {
    nominal: 200000,
    jenis_biaya: 'Biaya Rumah Sakit',
  },
  {
    nominal: 200000,
    jenis_biaya: 'Biaya Operasional Pasien',
  },
  {
    nominal: 200000,
    jenis_biaya: 'Biaya Penunjang Pengobatan',
  },
  {
    nominal: 200000,
    jenis_biaya: 'Biaya Iklan + PPN JLN',
  },
]

const RencanaPenggunaanDana = ({ click }) => {
  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div
        className="fixed z-50 top-0 bg-white"
        style={{
          boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
        }}
      >
        <div className="w-[430px]">
          <div className="mx-[20px] inline-flex items-center h-[72px]">
            <div onClick={() => click(false)} className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57 5.92999L3.5 12L9.57 18.07"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4999 12H3.66992"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className=" relative ml-[16px] text-[16px] leading-[21.79px] font-medium mt-1">
              Rencana Penggunaan Dana
            </span>
          </div>
        </div>
      </div>

      <div className="my-[98px] px-4">
        <div className="text-center py-[16px] mb-[16px] border rounded-[15px]">
          <p className="font-semibold text-large">Target donasi</p>
          <p className="font-bold text-[20px] text-peduly-primary">
            Rp. 400.000.000
          </p>
        </div>

        <div
          className="flex px-[28px] py-[18px] my-[24px] rounded-[15px] text-small"
          style={{ backgroundColor: 'rgba(252, 174, 3, 0.12)' }}
        >
          <span>
            Total target dan alokasi anggaran dapat berubah sesuai dengan
            kondisi dan kebutuhan selama proses penggalangan dana berlangsung
          </span>
        </div>

        <p className="font-semibold font-basic">
          Detail Perkiraan Biaya Pengeluaran
        </p>

        {data.map(({ nominal, jenis_biaya }, i) => (
          <>
            <div className="px-[5px] py-[27px] flex flex-row">
              <div className="rounded-full h-[48px] w-[48px] bg-[#F2F2F2] flex align-center justify-center">
                <img src="/icon/hospital.svg" style={{ width: '24px' }}></img>
              </div>
              <div
                className="ml-[16px] flex flex-row justify-between"
                style={{ width: 'calc(100% - 64px)' }}
              >
                <div>
                  <p className="text-basic mb-[9px] font-semibold">
                    {jenis_biaya}
                  </p>
                  <p className="text-basic text-[#1DA1F2]">Keterangan biaya</p>
                </div>

                <p className="text-basic font-semibold">
                  Rp. {IdrFormat(parseInt(nominal))}
                </p>
              </div>
            </div>
            <hr className="w-full h-[1px]"></hr>
          </>
        ))}
      </div>
    </div>
  )
}

export default RencanaPenggunaanDana
