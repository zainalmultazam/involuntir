import { useState } from 'react'

const NavFilter = () => {
  const [click, setClick] = useState(false)
  const [tipeFilter, setTipeFilter] = useState('')

  return (
    <div>
      <div className="mt-6 h-[30px] text-base font-normal text-center border-gray-200 max-w-[430px] w-full">
        <ul className="flex justify-between">
          <li
            onClick={() => {
              setClick(!click)
              setTipeFilter('Kategori')
            }}
            className={
              'w-[100%] flex justify-center cursor-pointer items-center'
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6.5H2"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 17.5H18"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 17.5H2"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="ml-2 text-[12px] leading-4">Kategori</span>
          </li>
          <li
            onClick={() => {
              setClick(!click)
              setTipeFilter('Urutkan')
            }}
            className={
              'w-[100%] flex border-l-2 border-r-2 justify-center cursor-pointer items-center'
            }
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.11428 20C4.25714 20 4.37143 19.9405 4.45714 19.8214L8.05714 16.0714C8.17143 15.9524 8.22857 15.8259 8.22857 15.692C8.22857 15.558 8.17143 15.4315 8.05714 15.3125L7.75714 15C7.67143 14.881 7.55714 14.8214 7.41428 14.8214C7.27143 14.8214 7.14286 14.881 7.02857 15L4.84286 17.3214V0.535714C4.84286 0.386905 4.79286 0.260416 4.69286 0.15625C4.59286 0.0520836 4.47143 0 4.32857 0H3.9C3.75714 0 3.63571 0.0520836 3.53571 0.15625C3.43571 0.260416 3.38571 0.386905 3.38571 0.535714V17.3214L1.2 15C1.08571 14.881 0.957143 14.8214 0.814286 14.8214C0.671429 14.8214 0.557143 14.881 0.471428 15L0.171429 15.3125C0.0571426 15.4315 0 15.558 0 15.692C0 15.8259 0.0571426 15.9524 0.171429 16.0714L3.77143 19.8214C3.85714 19.9405 3.97143 20 4.11428 20ZM20.7429 4.28572C20.8857 4.28572 21.0071 4.23363 21.1071 4.12947C21.2071 4.0253 21.2571 3.89881 21.2571 3.75V3.39286C21.2571 3.24405 21.2071 3.11756 21.1071 3.01339C21.0071 2.90923 20.8857 2.85714 20.7429 2.85714H10.8C10.6571 2.85714 10.5357 2.90923 10.4357 3.01339C10.3357 3.11756 10.2857 3.24405 10.2857 3.39286V3.75C10.2857 3.89881 10.3357 4.0253 10.4357 4.12947C10.5357 4.23363 10.6571 4.28572 10.8 4.28572H20.7429ZM18 8.57143C18.1429 8.57143 18.2643 8.51935 18.3643 8.41518C18.4643 8.31101 18.5143 8.18452 18.5143 8.03572V7.67857C18.5143 7.52976 18.4643 7.40327 18.3643 7.29911C18.2643 7.19494 18.1429 7.14286 18 7.14286H10.8C10.6571 7.14286 10.5357 7.19494 10.4357 7.29911C10.3357 7.40327 10.2857 7.52976 10.2857 7.67857V8.03572C10.2857 8.18452 10.3357 8.31101 10.4357 8.41518C10.5357 8.51935 10.6571 8.57143 10.8 8.57143H18ZM15.2571 12.8571C15.4 12.8571 15.5214 12.8051 15.6214 12.7009C15.7214 12.5967 15.7714 12.4702 15.7714 12.3214V11.9643C15.7714 11.8155 15.7214 11.689 15.6214 11.5848C15.5214 11.4807 15.4 11.4286 15.2571 11.4286H10.8C10.6571 11.4286 10.5357 11.4807 10.4357 11.5848C10.3357 11.689 10.2857 11.8155 10.2857 11.9643V12.3214C10.2857 12.4702 10.3357 12.5967 10.4357 12.7009C10.5357 12.8051 10.6571 12.8571 10.8 12.8571H15.2571ZM12.5143 17.1429C12.6571 17.1429 12.7786 17.0908 12.8786 16.9866C12.9786 16.8824 13.0286 16.756 13.0286 16.6071V16.25C13.0286 16.1012 12.9786 15.9747 12.8786 15.8705C12.7786 15.7664 12.6571 15.7143 12.5143 15.7143H10.8C10.6571 15.7143 10.5357 15.7664 10.4357 15.8705C10.3357 15.9747 10.2857 16.1012 10.2857 16.25V16.6071C10.2857 16.756 10.3357 16.8824 10.4357 16.9866C10.5357 17.0908 10.6571 17.1429 10.8 17.1429H12.5143Z"
                fill="#0288D1"
              />
            </svg>

            <span className="ml-2 text-[12px] leading-4">Urutan</span>
          </li>
          <li
            onClick={() => {
              setClick(!click)
              setTipeFilter('Filter')
            }}
            className={
              'w-[100%] flex justify-center cursor-pointer items-center'
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16 6.64999H15.83C16.47 6.64999 16.99 7.16999 16.99 7.80999V9.08999C16.99 9.55999 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.54999 7 9.19999V7.86999C7 7.16999 7.52 6.64999 8.16 6.64999Z"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#0288D1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="ml-2 text-[12px] leading-4">Filter</span>
          </li>
        </ul>
      </div>
      {click && (
        <div className="w-full h-full fixed top-0 bg-white z-50 max-w-[430px] overflow-x-hidden overflow-y-auto">
          <div
            onClick={() => {
              setClick(!click)
            }}
            style={{
              boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
            }}
            className="h-[72px] flex items-center mx-[20px]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              className="cursor-pointer"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L15 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15 1L1 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-base font-medium ml-[20px]">{tipeFilter}</p>
          </div>
          {tipeFilter === 'Kategori' && (
            <div className="mx-[20px]">
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 22H22"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V11"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 8.5H14.5"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">Kesehatan</p>
              </div>
              <hr />
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">Kemanusiaan</p>
              </div>
              <hr />
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.05 2.53001L4.03002 6.46001C2.10002 7.72001 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73001 19.98 6.47001L13.99 2.54001C12.91 1.82001 11.13 1.82001 10.05 2.53001Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.3999 15V9"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">Pendidikan</p>
              </div>
              <hr />
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 21.6091H22"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.9502 21.6092L3.00019 9.79287C3.00019 9.19371 3.2902 8.62406 3.7702 8.25081L10.7702 2.89763C11.4902 2.34758 12.5002 2.34758 13.2302 2.89763L20.2302 8.24098C20.7202 8.61423 21.0002 9.18388 21.0002 9.79287V21.6092"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 16.698H11C10.17 16.698 9.5 17.356 9.5 18.1713V21.6091H14.5V18.1713C14.5 17.356 13.83 16.698 13 16.698Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.5 13.5057H7.5C6.95 13.5057 6.5 13.0637 6.5 12.5235V11.0501C6.5 10.5099 6.95 10.0679 7.5 10.0679H9.5C10.05 10.0679 10.5 10.5099 10.5 11.0501V12.5235C10.5 13.0637 10.05 13.5057 9.5 13.5057Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.4998 13.5057H14.4998C13.9498 13.5057 13.4998 13.0637 13.4998 12.5235V11.0501C13.4998 10.5099 13.9498 10.0679 14.4998 10.0679H16.4998C17.0498 10.0679 17.4998 10.5099 17.4998 11.0501V12.5235C17.4998 13.0637 17.0498 13.5057 16.4998 13.5057Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0001 6.87564L18.9701 3.92894H14.5701"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">Panti Asuhan</p>
              </div>
              <hr />
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.97 10H3.96997V18C3.96997 21 4.96997 22 7.96997 22H15.97C18.97 22 19.97 21 19.97 18V10Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.5 6.99998V7.99998C21.5 9.09998 20.97 9.99998 19.5 9.99998H4.5C2.97 9.99998 2.5 9.09998 2.5 7.99998V6.99998C2.5 5.89998 2.97 4.99998 4.5 4.99998H19.5C20.97 4.99998 21.5 5.89998 21.5 6.99998Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.64 5.00002H6.12003C5.78003 4.63002 5.79003 4.06002 6.15003 3.70002L7.57003 2.28002C7.94003 1.91002 8.55003 1.91002 8.92003 2.28002L11.64 5.00002Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.8699 5.00002H12.3499L15.0699 2.28002C15.4399 1.91002 16.0499 1.91002 16.4199 2.28002L17.8399 3.70002C18.1999 4.06002 18.2099 4.63002 17.8699 5.00002Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.93994 10V15.14C8.93994 15.94 9.81994 16.41 10.4899 15.98L11.4299 15.36C11.7699 15.14 12.1999 15.14 12.5299 15.36L13.4199 15.96C14.0799 16.4 14.9699 15.93 14.9699 15.13V10H8.93994Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">
                  Kegiatan Sosial
                </p>
              </div>
              <hr />
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 22.0001H4.07997C2.91997 22.0001 1.96997 21.0701 1.96997 19.9301V5.09011C1.96997 2.47011 3.91997 1.2801 6.30997 2.4501L10.75 4.63011C11.71 5.10011 12.5 6.3501 12.5 7.4101V22.0001Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.97 15.0601V18.8401C21.97 21.0001 20.97 22.0001 18.81 22.0001H12.5V10.4201L12.97 10.5201L17.47 11.5301L19.5 11.9801C20.82 12.2701 21.9 12.9501 21.96 14.8701C21.97 14.9301 21.97 14.9901 21.97 15.0601Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 9.00009H8.97"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 13.0001H8.97"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.47 11.5301V14.7501C17.47 15.9901 16.46 17.0001 15.22 17.0001C13.98 17.0001 12.97 15.9901 12.97 14.7501V10.5201L17.47 11.5301Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.96 14.8701C21.9 16.0501 20.92 17.0001 19.72 17.0001C18.48 17.0001 17.47 15.9901 17.47 14.7501V11.5301L19.5 11.9801C20.82 12.2701 21.9 12.9501 21.96 14.8701Z"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">Rumah Ibadah</p>
              </div>
              <hr />
              <div className="flex items-center py-[18px]">
                <span className="ml-[10px]">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 13.1L4.5 11.6C6.04 10.68 7.96 10.68 9.5 11.6C11.04 12.52 12.96 12.52 14.5 11.6C16.04 10.68 17.96 10.68 19.5 11.6L22 13.1"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 3.89999L4.5 5.39999C6.04 6.31999 7.96 6.31999 9.5 5.39999C11.04 4.47999 12.96 4.47999 14.5 5.39999C16.04 6.31999 17.96 6.31999 19.5 5.39999L22 3.89999"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 20.1L4.5 18.6C6.04 17.68 7.96 17.68 9.5 18.6C11.04 19.52 12.96 19.52 14.5 18.6C16.04 17.68 17.96 17.68 19.5 18.6L22 20.1"
                      stroke="#E7513B"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="ml-[18px] font-normal text-base">Bencana Alam</p>
              </div>
              <hr />
            </div>
          )}
          {tipeFilter === 'Urutkan' && (
            <div className="mx-[20px] font-normal text-base">
              <div className="py-[18px] ml-[4px]">
                <p>Paling Mendesak</p>
              </div>
              <hr />
              <div className="py-[18px] ml-[4px]">
                <p>Paling Populer</p>
              </div>
              <hr />
              <div className="py-[18px] ml-[4px]">
                <p>Paling Populer</p>
              </div>
              <hr />
            </div>
          )}
          {tipeFilter === 'Filter' && (
            <div className="mx-[20px] font-normal text-base">
              <div className="py-[18px] ml-[4px]">
                <p>Oleh Akun Peduly</p>
              </div>
              <hr />
              <div className="py-[18px] ml-[4px]">
                <p>Oleh Akun Organisasi</p>
              </div>
              <hr />
              <div className="py-[18px] ml-[4px]">
                <p>Oleh Akun Pribadi</p>
              </div>
              <hr />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NavFilter
