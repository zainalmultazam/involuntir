import { useState } from 'react'
import data from '../../json/landing.json'

const NavKategori = () => {
  const [click, setClick] = useState(false)
  const [tipeFilter, setTipeFilter] = useState('')

  const kategori = data.kategori

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
              {kategori.map((value) => (
                <div key={value.id}>
                  <div className="flex items-center py-[18px]">
                    <span className="ml-[10px]">
                      <img className="w-6 h-6" src={value.imgurl} alt="" />
                    </span>
                    <p className="ml-[18px] font-normal text-base">
                      {value.title}
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
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

export default NavKategori
