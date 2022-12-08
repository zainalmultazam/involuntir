function RencanaPenggunaanDana({ clk, popUp }) {
  return (
    <div className={`mx-auto`} style={{ maxWidth: '430px' }}>
      <div
        className="fixed z-20 top-0 bg-white"
        style={{
          boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
        }}
      >
        <div className="w-[430px]">
          <div className="mx-[20px] inline-flex items-center h-[72px]">
            <div
              onClick={() => {
                clk(!clk)
                popUp(!popUp)
              }}
            >
              <svg
                className="cursor-pointer"
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
            <span className=" relative ml-[16px] text-[16px] leading-[21.79px] font-normal mt-1">
              Rencana Penggunaan Dana
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RencanaPenggunaanDana
