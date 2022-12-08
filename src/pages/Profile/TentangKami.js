import BackButton from 'components/BackButton'
import { useState } from 'react'
import data from '../../json/tentangkami.json'

function TentangKami() {
  const pesan = data.pesan
  const dampak = data.dampak

  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf={'1'} txt="Tentang Kami" />
      <div style={{ marginTop: '72px' }}>
        <div className="w-full flex justify-center mt-[114px]">
          <svg
            width={141}
            height={32}
            viewBox="0 0 141 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9457 0.116749C24.7697 0.190019 31.8607 7.34859 31.8064 16.1284C31.7527 24.8156 24.5066 31.9416 15.7954 31.8739C7.00963 31.8057 -0.089242 24.5826 0.000848097 15.8031C0.0896838 7.15062 7.3124 0.0450194 15.9457 0.116749Z"
              fill="#E6523B"
            />
            <path
              d="M140.49 16.9282C140.491 19.1818 140.574 21.4394 140.467 23.6881C140.359 25.9695 139.982 28.2012 138.153 29.8822C136.934 31.0032 135.439 31.438 133.875 31.7365C131.056 32.2739 128.357 32.0679 125.928 30.3799C125.1 29.8044 124.484 29.0516 124.75 27.9489C125.057 26.6793 126.139 26.182 127.6 26.6232C128.883 27.0108 130.113 27.5813 131.521 27.4427C132.375 27.3583 133.189 27.1638 133.972 26.8451C134.477 26.6396 134.878 26.2776 135.148 25.7877C135.334 25.45 135.565 25.0482 135.353 24.7255C135.128 24.3824 134.798 24.7864 134.522 24.8478C131.055 25.615 127.36 24.4101 125.771 21.6441C125.121 20.5139 124.828 19.2849 124.777 18.0029C124.658 15.0229 124.498 12.0367 124.871 9.0661C125.043 7.69388 126.057 6.94665 127.348 7.05413C128.65 7.16252 129.415 8.0592 129.535 9.441C129.764 12.077 129.533 14.7189 129.682 17.3519C129.815 19.6858 132.034 20.8659 134.108 19.7692C135.186 19.1989 135.59 18.2462 135.599 17.1007C135.618 14.6529 135.598 12.2048 135.613 9.757C135.619 8.78722 135.935 7.96159 136.785 7.37731C138.131 6.45161 140.448 7.15289 140.483 9.81773C140.514 12.1875 140.49 14.558 140.49 16.9282Z"
              fill="#222121"
              fillOpacity="0.9"
            />
            <path
              d="M113.403 16.1893C113.404 18.2477 113.391 20.306 113.409 22.3642C113.418 23.4057 113.103 24.2552 112.148 24.7729C111.19 25.2923 110.253 25.1526 109.468 24.4699C109.104 24.1523 108.874 24.289 108.573 24.4142C105.758 25.5845 103.051 25.2353 100.56 23.6164C98.6418 22.3701 97.8483 20.373 97.7773 18.1622C97.6876 15.3686 97.7413 12.5703 97.7538 9.77415C97.761 8.13394 98.7064 6.95376 100.076 7.0386C101.698 7.13895 102.335 7.6824 102.602 9.61352C102.723 10.4904 102.629 11.3972 102.63 12.2903C102.632 13.8827 102.622 15.475 102.634 17.0672C102.647 18.9067 103.874 20.1762 105.633 20.1937C107.244 20.2095 108.52 18.876 108.529 17.1345C108.541 14.8044 108.51 12.4739 108.543 10.1441C108.557 9.08969 108.788 8.0626 109.718 7.40061C110.461 6.87182 111.329 6.82409 112.115 7.24518C112.994 7.71587 113.402 8.54128 113.402 9.54824C113.402 11.7619 113.402 13.9756 113.403 16.1893Z"
              fill="#222121"
              fillOpacity="0.9"
            />
            <path
              d="M116.687 12.4253C116.688 9.24456 116.661 6.06353 116.698 2.88323C116.721 0.900165 117.848 -0.141459 119.561 0.119004C120.777 0.303917 121.484 1.23042 121.542 2.84548C121.589 4.16268 121.556 5.48279 121.556 6.80164C121.557 11.689 121.551 16.5765 121.563 21.464C121.565 22.0912 121.509 22.7031 121.324 23.2961C121.019 24.2785 120.188 24.8427 119.137 24.8591C118.023 24.8764 117.308 24.3291 116.924 23.3271C116.716 22.7828 116.676 22.2059 116.679 21.6183C116.692 18.554 116.685 15.4897 116.687 12.4253Z"
              fill="#222121"
              fillOpacity="0.9"
            />
            <path
              d="M9.54858 15.8942C9.54858 14.8459 9.5398 13.7977 9.55206 12.7496C9.55907 12.15 9.58444 11.4823 10.4207 11.5242C11.2245 11.5645 11.2298 12.225 11.2308 12.8244C11.2339 14.6492 11.2199 16.4741 11.2349 18.2987C11.2592 21.2565 13.1751 23.2772 15.9251 23.2675C18.661 23.2579 20.5983 21.1948 20.6163 18.2681C20.6218 17.3751 20.6221 16.4821 20.6184 15.5892C20.6161 15.0437 20.856 14.6485 21.4136 14.6432C21.9627 14.6379 22.2608 15.0293 22.2508 15.5628C22.2224 17.0721 22.398 18.5895 22.0527 20.0875C21.3521 23.1269 18.5434 25.1109 15.2582 24.8712C12.3565 24.6595 9.87068 22.2098 9.65127 19.2669C9.56791 18.1484 9.6377 17.0186 9.6377 15.8941C9.60805 15.8942 9.57828 15.8942 9.54858 15.8942Z"
              fill="#FFFDFD"
            />
            <path
              d="M19.4648 13.9522C19.4648 15.3872 19.4769 16.8223 19.462 18.2572C19.44 20.3722 17.9678 21.9468 15.9718 22.0145C14.0164 22.0809 12.3425 20.5193 12.2995 18.4322C12.238 15.447 12.2817 12.4596 12.2828 9.47327C12.283 8.88694 12.4022 8.33289 13.1236 8.31693C13.8868 8.30011 13.9376 8.88888 13.9381 9.46039C13.9406 11.9814 13.9396 14.5023 13.9398 17.0233C13.9398 17.2948 13.936 17.5664 13.9406 17.8378C13.968 19.4567 14.6698 20.3738 15.8803 20.3762C17.0869 20.3784 17.8132 19.4371 17.8169 17.8487C17.8232 15.1337 17.8179 12.4189 17.8299 9.70397C17.8326 9.10744 17.6659 8.31579 18.6028 8.30889C19.5899 8.30159 19.4588 9.11479 19.4625 9.76338C19.4704 11.1597 19.4649 12.5559 19.4648 13.9522Z"
              fill="white"
            />
            <path
              d="M15.0446 13.0804C15.0446 11.489 15.0482 9.89762 15.0427 8.30622C15.0408 7.73107 15.0722 7.14845 15.8202 7.1164C16.6609 7.08025 16.6838 7.70182 16.6827 8.32258C16.6774 11.4665 16.672 14.6105 16.6873 17.7544C16.6902 18.3725 16.5505 18.9108 15.8593 18.9036C15.1726 18.8965 15.0308 18.3513 15.0384 17.7381C15.0575 16.1855 15.0447 14.6329 15.0446 13.0804Z"
              fill="#FFFDFD"
            />
            <path
              d="M53.745 13.3381C52.314 8.51265 47.0118 5.77767 42.1297 7.39051C41.1418 7.71683 40.2149 8.37706 39.3105 7.26764C39.2321 7.17162 39.0289 7.16637 38.8798 7.13969C37.1194 6.82403 35.865 7.96538 35.8535 9.95768C35.8321 13.6484 35.8465 17.3393 35.8464 21.03C35.8464 23.7107 35.8312 26.3915 35.8533 29.0721C35.8681 30.8716 36.6483 31.8131 38.0778 31.8485C39.7689 31.8903 40.675 31.0724 40.7186 29.3597C40.7624 27.6531 40.7283 25.9446 40.7283 24.1353C44.5285 25.1945 45.4931 25.2806 47.3887 24.7545C52.3512 23.3771 55.2032 18.2549 53.745 13.3381ZM44.8911 20.228C42.9497 20.2534 40.7435 18.6788 40.7497 15.9198C40.7552 13.4804 42.6374 11.7278 45.1316 11.753C47.5851 11.7778 49.2441 13.5126 49.223 16.0316C49.202 18.5477 47.453 20.1947 44.8911 20.228Z"
              fill="#212121"
              fillOpacity="0.9"
            />
            <path
              d="M94.712 11.8365C94.7119 8.6908 94.7333 5.54478 94.7028 2.39932C94.6853 0.612744 93.23 -0.396321 91.5494 0.147127C90.4651 0.497737 89.8779 1.49865 89.8541 3.13088C89.8314 4.6798 89.8492 6.22935 89.8492 7.89168C89.5465 7.80091 89.4357 7.77987 89.3351 7.73573C85.6579 6.12164 82.259 6.74657 79.3955 9.39538C76.615 11.9673 75.8069 15.2713 76.9999 18.9067C78.6652 23.982 84.5251 26.427 89.4491 24.191C89.7911 24.0357 90.1532 23.6446 90.5878 24.1131C91.4002 24.9893 92.4026 25.1229 93.4297 24.606C94.4847 24.0748 94.7257 23.0842 94.7191 21.9728C94.6995 18.594 94.7121 15.2153 94.712 11.8365ZM89.828 15.9299C89.8365 18.4526 88.0994 20.2153 85.6043 20.2152C83.1936 20.215 81.4834 18.4169 81.3537 16.0038C81.2385 13.858 83.3492 11.6549 85.6379 11.7047C88.0188 11.7565 89.9537 13.7147 89.828 15.9299Z"
              fill="#212121"
              fillOpacity="0.9"
            />
            <path
              d="M71.7077 17.6202C73.4346 17.6141 74.6268 16.254 74.3394 14.5843C73.2223 8.09301 66.309 4.76578 60.5519 8.32639C57.2879 10.345 55.952 13.4935 56.4401 17.2518C56.9055 20.8345 59.0381 23.2922 62.4041 24.529C65.8532 25.7965 69.5104 24.8624 71.7639 22.441C72.5137 21.6353 72.6771 20.5896 72.121 19.8055C71.4929 18.9202 70.6302 18.8839 69.6456 19.1942C68.94 19.4166 68.3248 19.8034 67.6524 20.0787C65.268 21.0541 62.5866 20.2447 61.7056 17.6237C65.1098 17.6238 68.4089 17.6321 71.7077 17.6202ZM65.7945 11.7978C67.178 11.9342 68.3105 12.5295 69.1078 13.9334H61.7155C62.7395 12.3859 64.0406 11.6249 65.7945 11.7978Z"
              fill="#222121"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <div className="mt-[42px] mx-[20px] text-base font-normal">
          <p>
            Berdiri sejak tahun 2018, Peduly telah menghubungkan banyak kebaikan
            masyarakat Indonesia dan mengubah rasa peduli menjadi sebuah
            tindakan. Di Peduly kami percaya, kepedulian harus disebar luaskan,
            karena begitulah perubahan bisa terjadi.
          </p>
          <p className="mt-[10px]">
            Oleh karena itu, kami membuat niat baik menjadi aksi baik lebih
            mudah dengan melibatkan teknologi. Agar setiap individu atau
            organisasi bisa menyebar luaskan kisah baiknya sehingga
            menginspirasi banyak orang.
          </p>
          <p className="mt-[10px]">
            Kami mengawali Peduly dari langkah kecil dan mengubahnya menjadi
            gerakan yang jauh lebih besar. Dengan gotong royong #WargaBaik kami
            yakin kita bersama bisa bantu masyarakat lebih banyak lagi.
          </p>
        </div>
        <div className="flex flex-col items-center mt-[22px]">
          <img
            src="/images/tentang-kami/kazain.png"
            width={120}
            height={120}
            className="rounded-full w-[120px] h-[120px]"
            alt=""
          />
          <h2 className="mt-[16px] text-base font-semibold">
            Zain Al Multazam
          </h2>
          <p className="text-sm font-normal">Founder & CEO Peduly</p>
        </div>
        <div
          style={{ backgroundColor: 'rgba(228, 228, 228, 0.3)' }}
          className="mt-[42px]"
        >
          <div className="mx-[20px]">
            <h1 className="pt-[32px] text-lg font-medium">Dampak Baik</h1>
            <p className="pt-[5px] text-sm font-normal">
              Aplikasi Peduly setiap harinya dikunjungi oleh ribuah{' '}
              <span className="font-bold italic">#WargaBaik</span> untuk saling
              memberikan dampak baik
            </p>
          </div>
          <div className="overflow-x-scroll flex flex-row space-x-7 no-scrollbar pb-[20px]">
            {dampak.map((e, i, r) => (
              <div
                className={
                  'inline-block py-6 ' +
                  (i + 1 === r.length ? 'pr-[35px] ' : i === 0 && ' ml-[22px]')
                }
                key={e.id}
              >
                <div
                  className="flex flex-col w-[160px] h-[120px]  rounded-[15px] text-center items-center justify-center"
                  style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
                >
                  <h3 className="text-[#E7513B] text-2xl font-semibold">
                    {e.jumlah}
                  </h3>
                  <p className="text-base font-normal">{e.judul}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-[20px] ">
          <h1 className="text-lg font-medium mt-[42px]">
            Dibalik layar keluarga Peduly
          </h1>
          <img
            className="mt-[24px] rounded-[15px]"
            src="/images/tentang-kami/di-balik-layar.jpeg"
            alt=""
          />
          <p className="mt-[16px] text-base font-normal">
            Setiap orang yang bekerja di Peduly kami sebut sebagai Rekan Baik.
            Setiap #RekanBaik bekerja sebagai satu tim yang kuat untuk mencapai
            tujuan bersama: yaitu menghubungkan niat #WargaBaik dengan proyek
            sosial yang mereka percayai dengan semangat gotong royong.
          </p>
          <hr className="mt-[50px]" />
          <h1 className="text-lg font-medium mt-[24px]">
            Bekerja secara profesional
          </h1>
          <p className="mt-[11px] text-sm font-normal">
            Peduly memiliki izin dan legalitas untuk menjalankan galang dana dan
            aktivitas sosial sesuai dengan hukum yang berlaku.
          </p>
          <div className="w-[120px] h-[142px] rounded-[15px] bg-white flex flex-col items-center justify-center mt-[24px] shadow-sm">
            <img
              src="/images/tentang-kami/Logo_HAM.png"
              width={68}
              height={81}
              alt=""
            />
            <a
              href="https://doc.peduly.com/legal/sk-pendirian-yayasan-peduly-gotong-royong.pdf"
              className="flex items-center text-xs font-normal mt-[12px] text-[#E7513B]"
            >
              Lihat Izin
              <svg
                width={10}
                height={11}
                viewBox="0 0 10 11"
                fill="none"
                className="ml-[4px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.4165 5.30593L8.83317 1.84045"
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16663 3.53089V1.50232H7.16663"
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.5835 1.50232H3.75016C1.66683 1.50232 0.833496 2.34756 0.833496 4.46065V6.99637C0.833496 9.10946 1.66683 9.9547 3.75016 9.9547H6.25016C8.33349 9.9547 9.16683 9.10946 9.16683 6.99637V6.15113"
                  stroke="#E7513B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="mt-[42px] "
          style={{ backgroundColor: 'rgba(228, 228, 228, 0.3)' }}
        >
          <h1 className="text-lg font-medium mx-[20px] pt-[42px]">
            Mengapa bersama Peduly
          </h1>
          <div className="overflow-x-scroll flex flex-row space-x-7 no-scrollbar pb-[20px]">
            {pesan.map((e, i, r) => (
              <div
                className={
                  'inline-block py-6 ' +
                  (i + 1 === r.length ? 'pr-[35px] ' : i === 0 && ' ml-[22px]')
                }
                key={e.id}
              >
                <div
                  className="flex flex-col p-[26px]  w-[280px] h-[170px]  rounded-[15px] text-sm font-normal"
                  style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
                >
                  <h3 className="text-[#E7513B]">{e.title}</h3>
                  <p className="mt-[8px]">{e.isi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[32px] mx-[20px]">
          <span className="flex justify-center">
            <svg
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.9595 21.58V29.58C35.9595 30.1 35.9395 30.6 35.8795 31.08C35.4195 36.48 32.2395 39.16 26.3795 39.16H25.5795C25.0795 39.16 24.5995 39.4 24.2995 39.8L21.8995 43C20.8395 44.42 19.1195 44.42 18.0595 43L15.6595 39.8C15.3995 39.46 14.8195 39.16 14.3795 39.16H13.5795C7.19953 39.16 3.99951 37.58 3.99951 29.58V21.58C3.99951 15.72 6.69953 12.54 12.0795 12.08C12.5595 12.02 13.0595 12 13.5795 12H26.3795C32.7595 12 35.9595 15.2 35.9595 21.58Z"
                stroke="#E7513B"
                strokeWidth="2.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M43.9596 13.5802V21.5802C43.9596 27.4602 41.2596 30.6202 35.8796 31.0802C35.9396 30.6002 35.9596 30.1002 35.9596 29.5802V21.5802C35.9596 15.2002 32.7596 12.0002 26.3796 12.0002H13.5796C13.0596 12.0002 12.5596 12.0202 12.0796 12.0802C12.5396 6.70022 15.7196 4.0002 21.5796 4.0002H34.3796C40.7596 4.0002 43.9596 7.20022 43.9596 13.5802Z"
                stroke="#E7513B"
                strokeWidth="2.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.9915 26.5H27.0095"
                stroke="#E7513B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.9905 26.5H20.0085"
                stroke="#E7513B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.991 26.5H13.009"
                stroke="#E7513B"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h1 className="font-semibold text-lg text-center mt-[24px]">
            Pertanyaan yang sering diajukan
          </h1>
          <hr className="mt-[32px]" />
          <div
            className="flex items-center justify-between  mr-[4px] py-[25px] cursor-pointer"
            onClick={() => setClick(!click)}
          >
            <p className="text-sm font-medium">
              Dari mana biaya operasioanal Peduly?
            </p>
            <span>
              {click ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className={`text-sm font-normal ${click && 'mb-[24px]'}`}>
            {click && (
              <span>
                <p className="mt-[10px]">
                  Peduly merupakan social enterprise yaitu perusahaan yang
                  memiliki misi sosial. Peduly mengenakan biaya operasional 5%
                  untuk kebutuhan biaya tim, biaya pemasaran, pengembangan
                  teknologi dan overhead lainnya.
                </p>
                <p className="mt-[10px]">
                  Potongan 5% tersebut kami pastikan sesuai dengan aturan
                  Republik Indonesia (Undang-Undang Pengumpulan Uang dan Barang
                  1961) maupun ketentuan ujrah dalam syariat islam.
                </p>
              </span>
            )}
          </div>
          <hr />
          <div
            className="flex items-center justify-between  mr-[4px] py-[25px] cursor-pointer"
            onClick={() => setClick2(!click2)}
          >
            <p className="text-sm font-medium">Apakah data saya aman?</p>
            <span>
              {click2 ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          <div className={`text-sm font-normal ${click2 && 'mb-[24px]'}`}>
            {click2 && (
              <span>
                <p>
                  Kami menganggap keamaan data adalah hal serius. Kami tidak
                  memberikan data donatur kepada penggalang dana atau
                  sebaliknya. Kami juga tidak memberikan atau menjual data
                  pengguna kami ke pihak manapun.
                </p>
                <p className="mt-[10px]">
                  Jika kamu ingin melakukan pengaduan atau laporan terkait data
                  kamu di paltform Peduly. silahkan hubungi kami melalui alamat
                  email{' '}
                  <span className="text-[#E7513B]">support@peduly.com</span>
                </p>
              </span>
            )}
          </div>
        </div>
        <div
          className="max-w-[430px] h-[430px] mt-[36px] mb-[24px] text-white"
          style={{
            backgroundImage:
              ' linear-gradient(to bottom right, #F29A48, #E6523B)',
          }}
        >
          <h1 className="text-center text-lg font-semibold pt-[32px]">
            Download Aplikasi Peduly
          </h1>
          <ul className="text-base font-medium pt-[33px] space-y-5 mx-[20px]">
            <li className="flex">
              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    fill="white"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="#E7513B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Donasi mulai dari 100 rupiah
            </li>
            <li className="flex">
              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    fill="white"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="#E7513B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Bisa atur pengingat donasi kapan saja
            </li>
            <li className="flex">
              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    fill="white"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="#E7513B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Dapatkan voucher diskon belanja
            </li>
            <li className="flex">
              <span>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mr-[22px]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    fill="white"
                  />
                  <path
                    d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                    stroke="#E7513B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Dapatkan kabar terbaru otomatis dari galang dana yang dibantu
            </li>
          </ul>
          <div className="flex justify-center space-x-4 pt-[42px]">
            <a
              href="https://play.google.com/store/apps/details?id=com.peduly.pedulywebview"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={152}
                height={45}
                viewBox="0 0 152 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M146.25 45H5.625C2.475 45 0 42.525 0 39.375V5.625C0 2.475 2.475 0 5.625 0H146.25C149.4 0 151.875 2.475 151.875 5.625V39.375C151.875 42.525 149.4 45 146.25 45Z"
                  fill="black"
                />
                <path
                  d="M146.25 0.9C148.837 0.9 150.975 3.0375 150.975 5.625V39.375C150.975 41.9625 148.837 44.1 146.25 44.1H5.625C3.0375 44.1 0.9 41.9625 0.9 39.375V5.625C0.9 3.0375 3.0375 0.9 5.625 0.9H146.25ZM146.25 0H5.625C2.475 0 0 2.5875 0 5.625V39.375C0 42.525 2.475 45 5.625 45H146.25C149.4 45 151.875 42.525 151.875 39.375V5.625C151.875 2.5875 149.4 0 146.25 0Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M53.3252 11.475C53.3252 12.375 53.1002 13.1625 52.5377 13.725C51.8627 14.4 51.0752 14.7375 50.0627 14.7375C49.0502 14.7375 48.2627 14.4 47.5877 13.725C46.9127 13.05 46.5752 12.2625 46.5752 11.25C46.5752 10.2375 46.9127 9.44995 47.5877 8.77495C48.2627 8.09995 49.0502 7.76245 50.0627 7.76245C50.5127 7.76245 50.9627 7.87495 51.4127 8.09995C51.8627 8.32495 52.2002 8.54995 52.4252 8.88745L51.8627 9.44995C51.4127 8.88745 50.8502 8.66245 50.0627 8.66245C49.3877 8.66245 48.7127 8.88745 48.2627 9.44995C47.7002 9.89995 47.4752 10.575 47.4752 11.3625C47.4752 12.15 47.7002 12.825 48.2627 13.275C48.8252 13.725 49.3877 14.0625 50.0627 14.0625C50.8502 14.0625 51.4127 13.8375 51.9752 13.275C52.3127 12.9375 52.5377 12.4875 52.5377 11.925H50.0627V11.025H53.3252V11.475V11.475ZM58.5002 8.66245H55.4627V10.8H58.2752V11.5875H55.4627V13.725H58.5002V14.625H54.5627V7.87495H58.5002V8.66245ZM62.2127 14.625H61.3127V8.66245H59.4002V7.87495H64.1252V8.66245H62.2127V14.625ZM67.3877 14.625V7.87495H68.2877V14.625H67.3877ZM72.1127 14.625H71.2127V8.66245H69.3002V7.87495H73.9127V8.66245H72.0002V14.625H72.1127ZM82.8002 13.725C82.1252 14.4 81.3377 14.7375 80.3252 14.7375C79.3127 14.7375 78.5252 14.4 77.8502 13.725C77.1752 13.05 76.8377 12.2625 76.8377 11.25C76.8377 10.2375 77.1752 9.44995 77.8502 8.77495C78.5252 8.09995 79.3127 7.76245 80.3252 7.76245C81.3377 7.76245 82.1252 8.09995 82.8002 8.77495C83.4752 9.44995 83.8127 10.2375 83.8127 11.25C83.8127 12.2625 83.4752 13.05 82.8002 13.725ZM78.5252 13.1625C78.9752 13.6125 79.6502 13.9499 80.3252 13.9499C81.0002 13.9499 81.6752 13.725 82.1252 13.1625C82.5752 12.7125 82.9127 12.0375 82.9127 11.25C82.9127 10.4625 82.6877 9.78745 82.1252 9.33745C81.6752 8.88745 81.0002 8.54995 80.3252 8.54995C79.6502 8.54995 78.9752 8.77495 78.5252 9.33745C78.0752 9.78745 77.7377 10.4625 77.7377 11.25C77.7377 12.0375 77.9627 12.7125 78.5252 13.1625ZM85.0502 14.625V7.87495H86.0627L89.3252 13.1625V7.87495H90.2252V14.625H89.3252L85.8377 9.11245V14.625H85.0502V14.625Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit={10}
                />
                <path
                  d="M76.6125 24.5248C73.9125 24.5248 71.775 26.5498 71.775 29.3623C71.775 32.0623 73.9125 34.1998 76.6125 34.1998C79.3125 34.1998 81.45 32.1748 81.45 29.3623C81.45 26.4373 79.3125 24.5248 76.6125 24.5248ZM76.6125 32.1748C75.15 32.1748 73.9125 30.9373 73.9125 29.2498C73.9125 27.5623 75.15 26.3248 76.6125 26.3248C78.075 26.3248 79.3125 27.4498 79.3125 29.2498C79.3125 30.9373 78.075 32.1748 76.6125 32.1748ZM66.15 24.5248C63.45 24.5248 61.3125 26.5498 61.3125 29.3623C61.3125 32.0623 63.45 34.1998 66.15 34.1998C68.85 34.1998 70.9875 32.1748 70.9875 29.3623C70.9875 26.4373 68.85 24.5248 66.15 24.5248ZM66.15 32.1748C64.6875 32.1748 63.4501 30.9373 63.4501 29.2498C63.4501 27.5623 64.6875 26.3248 66.15 26.3248C67.6125 26.3248 68.85 27.4498 68.85 29.2498C68.85 30.9373 67.6125 32.1748 66.15 32.1748ZM53.6626 25.9873V28.0123H58.5C58.3875 29.1373 57.9375 30.0373 57.375 30.5998C56.7 31.2748 55.5751 32.0623 53.6626 32.0623C50.6251 32.0623 48.3751 29.6998 48.3751 26.6623C48.3751 23.6248 50.7376 21.2623 53.6626 21.2623C55.2376 21.2623 56.475 21.9373 57.375 22.7248L58.8375 21.2623C57.6 20.1373 56.025 19.2373 53.775 19.2373C49.725 19.2373 46.2375 22.6123 46.2375 26.6623C46.2375 30.7123 49.725 34.0873 53.775 34.0873C56.025 34.0873 57.6001 33.4123 58.9501 31.9498C60.3001 30.5998 60.75 28.6873 60.75 27.2248C60.75 26.7748 60.7501 26.3248 60.6376 25.9873H53.6626V25.9873ZM104.738 27.5623C104.288 26.4373 103.163 24.5248 100.688 24.5248C98.2125 24.5248 96.1875 26.4373 96.1875 29.3623C96.1875 32.0623 98.2125 34.1998 100.913 34.1998C103.05 34.1998 104.4 32.8498 104.85 32.0623L103.275 30.9373C102.713 31.7248 102.038 32.2873 100.913 32.2873C99.7875 32.2873 99.1125 31.8373 98.55 30.8248L104.963 28.1248L104.738 27.5623V27.5623ZM98.2125 29.1373C98.2125 27.3373 99.675 26.3248 100.688 26.3248C101.475 26.3248 102.263 26.7748 102.488 27.3373L98.2125 29.1373ZM92.925 33.7498H95.0625V19.6873H92.925V33.7498ZM89.55 25.5373C88.9875 24.9748 88.0875 24.4123 86.9625 24.4123C84.6001 24.4123 82.35 26.5498 82.35 29.2498C82.35 31.9498 84.4875 33.9748 86.9625 33.9748C88.0875 33.9748 88.9875 33.4123 89.4375 32.8498H89.55V33.5248C89.55 35.3248 88.5375 36.3373 86.9625 36.3373C85.725 36.3373 84.825 35.4373 84.6 34.6498L82.8 35.4373C83.3625 36.6748 84.7125 38.2498 87.075 38.2498C89.55 38.2498 91.575 36.7873 91.575 33.2998V24.7498H89.55V25.5373V25.5373ZM87.075 32.1748C85.6125 32.1748 84.375 30.9373 84.375 29.2498C84.375 27.5623 85.6125 26.3248 87.075 26.3248C88.5375 26.3248 89.6625 27.5623 89.6625 29.2498C89.6625 30.9373 88.5375 32.1748 87.075 32.1748ZM114.525 19.6873H109.463V33.7498H111.6V28.4623H114.525C116.888 28.4623 119.138 26.7748 119.138 24.0748C119.138 21.3748 116.888 19.6873 114.525 19.6873V19.6873ZM114.638 26.4373H111.6V21.5998H114.638C116.213 21.5998 117.113 22.9498 117.113 23.9623C117 25.1998 116.1 26.4373 114.638 26.4373ZM127.575 24.4123C126 24.4123 124.425 25.0873 123.863 26.5498L125.775 27.3373C126.225 26.5498 126.9 26.3248 127.688 26.3248C128.813 26.3248 129.825 26.9998 129.938 28.1248V28.2373C129.6 28.0123 128.7 27.6748 127.8 27.6748C125.775 27.6748 123.75 28.7998 123.75 30.8248C123.75 32.7373 125.438 33.9748 127.238 33.9748C128.7 33.9748 129.375 33.2998 129.938 32.6248H130.05V33.7498H132.075V28.3498C131.85 25.8748 129.938 24.4123 127.575 24.4123V24.4123ZM127.35 32.1748C126.675 32.1748 125.663 31.8373 125.663 30.9373C125.663 29.8123 126.9 29.4748 127.913 29.4748C128.813 29.4748 129.263 29.6998 129.825 29.9248C129.6 31.2748 128.475 32.1748 127.35 32.1748V32.1748ZM139.163 24.7498L136.8 30.8248H136.688L134.213 24.7498H131.963L135.675 33.2998L133.538 38.0248H135.675L141.413 24.7498H139.163V24.7498ZM120.263 33.7498H122.4V19.6873H120.263V33.7498Z"
                  fill="white"
                />
                <path
                  d="M11.7 8.43726C11.3625 8.77476 11.25 9.33726 11.25 10.0123V34.8748C11.25 35.5498 11.475 36.1123 11.8125 36.4498L11.925 36.5623L25.875 22.6123V22.3873L11.7 8.43726Z"
                  fill="url(#paint0_linear_7187_20979)"
                />
                <path
                  d="M30.375 27.3374L25.7625 22.7249V22.3874L30.375 17.7749L30.4875 17.8874L36 21.0374C37.575 21.9374 37.575 23.3999 36 24.2999L30.375 27.3374Z"
                  fill="url(#paint1_linear_7187_20979)"
                />
                <path
                  d="M30.4875 27.225L25.7625 22.5L11.7 36.5625C12.2625 37.125 13.05 37.125 14.0625 36.675L30.4875 27.225Z"
                  fill="url(#paint2_linear_7187_20979)"
                />
                <path
                  d="M30.4875 17.7752L14.0625 8.43769C13.05 7.87519 12.2625 7.98769 11.7 8.55019L25.7625 22.5002L30.4875 17.7752Z"
                  fill="url(#paint3_linear_7187_20979)"
                />
                <path
                  opacity="0.2"
                  d="M30.375 27.1123L14.0625 36.3373C13.1625 36.8998 12.375 36.7873 11.8125 36.3373L11.7 36.4498L11.8125 36.5623C12.375 37.0123 13.1625 37.1248 14.0625 36.5623L30.375 27.1123Z"
                  fill="black"
                />
                <path
                  opacity="0.12"
                  d="M11.7 36.3375C11.3625 36 11.25 35.4375 11.25 34.7625V34.875C11.25 35.55 11.475 36.1125 11.8125 36.45V36.3375H11.7ZM36 23.9625L30.375 27.1125L30.4875 27.225L36 24.075C36.7875 23.625 37.125 23.0625 37.125 22.5C37.125 23.0625 36.675 23.5125 36 23.9625Z"
                  fill="black"
                />
                <path
                  opacity="0.25"
                  d="M14.0625 8.54969L36 21.0372C36.675 21.4872 37.125 21.9372 37.125 22.4997C37.125 21.9372 36.7875 21.3747 36 20.9247L14.0625 8.43719C12.4875 7.53719 11.25 8.21219 11.25 10.0122V10.1247C11.25 8.43719 12.4875 7.64969 14.0625 8.54969Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7187_20979"
                    x1="24.525"
                    y1="9.79851"
                    x2="5.64412"
                    y2="28.6783"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00A0FF" />
                    <stop offset="0.007" stopColor="#00A1FF" />
                    <stop offset="0.26" stopColor="#00BEFF" />
                    <stop offset="0.512" stopColor="#00D2FF" />
                    <stop offset="0.76" stopColor="#00DFFF" />
                    <stop offset={1} stopColor="#00E3FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_7187_20979"
                    x1="38.0632"
                    y1="22.501"
                    x2="10.8416"
                    y2="22.501"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFE000" />
                    <stop offset="0.409" stopColor="#FFBD00" />
                    <stop offset="0.775" stopColor="#FFA500" />
                    <stop offset={1} stopColor="#FF9C00" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_7187_20979"
                    x1="27.9303"
                    y1="25.083"
                    x2="2.32758"
                    y2="50.6857"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF3A44" />
                    <stop offset={1} stopColor="#C31162" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_7187_20979"
                    x1="8.20908"
                    y1="0.198187"
                    x2="19.6425"
                    y2="11.6316"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#32A071" />
                    <stop offset="0.069" stopColor="#2DA771" />
                    <stop offset="0.476" stopColor="#15CF74" />
                    <stop offset="0.801" stopColor="#06E775" />
                    <stop offset={1} stopColor="#00F076" />
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <span>
              <svg
                width={135}
                height={45}
                viewBox="0 0 135 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M124.187 0.0001125H11.0122C10.5996 0.0001125 10.192 0.0001125 9.78051 0.00236249C9.43615 0.00461249 9.09449 0.0111375 8.74675 0.01665C7.99133 0.0255359 7.23769 0.0919908 6.49237 0.215437C5.74809 0.341571 5.02712 0.579376 4.35386 0.92081C3.68144 1.26515 3.06704 1.71257 2.53294 2.24684C1.99603 2.77958 1.54847 3.39534 1.20747 4.07047C0.865516 4.74431 0.628412 5.4664 0.504344 6.21178C0.379088 6.9562 0.311686 7.7092 0.302744 8.46403C0.292282 8.80895 0.291157 9.155 0.285645 9.50004V35.5035C0.291157 35.8528 0.292282 36.1912 0.302744 36.5407C0.311695 37.2955 0.379096 38.0484 0.504344 38.7927C0.628079 39.5385 0.865197 40.261 1.20747 40.935C1.54831 41.608 1.99593 42.2213 2.53294 42.7511C3.06502 43.2878 3.67982 43.7355 4.35386 44.0772C5.02712 44.4195 5.74801 44.6587 6.49237 44.7868C7.23781 44.9093 7.99138 44.9758 8.74675 44.9857C9.09437 44.9934 9.43615 44.9978 9.78062 44.9978C10.192 45 10.5996 45 11.0122 45H124.187C124.591 45 125.002 45 125.406 44.9978C125.749 44.9978 126.101 44.9934 126.444 44.9857C127.198 44.9763 127.95 44.9098 128.694 44.7868C129.44 44.6578 130.164 44.4187 130.84 44.0772C131.514 43.7353 132.128 43.2876 132.66 42.7511C133.195 42.2193 133.644 41.6064 133.989 40.935C134.329 40.2605 134.563 39.5381 134.685 38.7927C134.811 38.0482 134.881 37.2954 134.894 36.5406C134.899 36.1912 134.899 35.8528 134.899 35.5035C134.908 35.0947 134.908 34.6883 134.908 34.2729V10.7283C134.908 10.3162 134.908 9.90763 134.899 9.50004C134.899 9.155 134.899 8.80895 134.894 8.46392C134.881 7.70902 134.811 6.95619 134.685 6.21167C134.563 5.46679 134.328 4.74484 133.989 4.07058C133.295 2.71725 132.193 1.61564 130.84 0.920698C130.164 0.580101 129.44 0.342359 128.694 0.215324C127.95 0.0913533 127.198 0.0248941 126.444 0.0165375C126.101 0.011025 125.749 0.00438749 125.406 0.00224999C125.002 0 124.591 0 124.187 0L124.187 0.0001125Z"
                  fill="#A6A6A6"
                />
                <path
                  d="M9.78595 44.0156C9.44317 44.0156 9.10871 44.0112 8.76862 44.0036C8.06414 43.9944 7.36131 43.9332 6.66589 43.8202C6.01744 43.7085 5.38927 43.5007 4.8021 43.2037C4.2203 42.9092 3.68965 42.5231 3.23048 42.06C2.76463 41.6025 2.37678 41.0718 2.08231 40.489C1.78462 39.9024 1.57861 39.2736 1.47144 38.6246C1.35574 37.9273 1.29316 37.2221 1.28424 36.5153C1.27704 36.278 1.2677 35.4881 1.2677 35.4881V9.49993C1.2677 9.49993 1.2776 8.7221 1.28424 8.49351C1.29281 7.7878 1.35505 7.08377 1.47042 6.38751C1.57781 5.73672 1.784 5.10616 2.08186 4.51765C2.3752 3.93524 2.76085 3.40413 3.22385 2.94491C3.68635 2.48132 4.21872 2.09317 4.80154 1.7946C5.38737 1.49861 6.01436 1.29234 6.6615 1.18271C7.35922 1.06866 8.0645 1.00703 8.77143 0.998325L9.78652 0.984375H125.401L126.428 0.998662C127.129 1.00698 127.828 1.06813 128.519 1.18159C129.173 1.29262 129.806 1.50036 130.399 1.79797C131.566 2.39966 132.516 3.3516 133.116 4.52035C133.409 5.10483 133.612 5.73028 133.718 6.37547C133.834 7.07743 133.9 7.78698 133.913 8.49846C133.917 8.81705 133.917 9.15928 133.917 9.49993C133.926 9.9218 133.926 10.3233 133.926 10.7282V34.2728C133.926 34.6815 133.926 35.0803 133.917 35.4824C133.917 35.8483 133.917 36.1834 133.912 36.5283C133.899 37.2271 133.835 37.9241 133.72 38.6135C133.615 39.2672 133.41 39.9008 133.112 40.4922C132.816 41.0687 132.43 41.5948 131.97 42.0512C131.51 42.5167 130.979 42.9051 130.395 43.2015C129.805 43.5007 129.172 43.7092 128.519 43.82C127.824 43.9336 127.121 43.9949 126.416 44.0035C126.08 44.0113 125.743 44.0154 125.407 44.0155L124.187 44.0178L9.78595 44.0156Z"
                  fill="black"
                />
                <path
                  d="M28.1507 22.8384C28.1628 21.8995 28.4122 20.9788 28.8757 20.1621C29.3392 19.3454 30.0018 18.6593 30.8017 18.1675C30.2935 17.4417 29.6231 16.8444 28.8437 16.423C28.0643 16.0016 27.1974 15.7678 26.3118 15.74C24.4226 15.5417 22.5912 16.8704 21.6284 16.8704C20.6472 16.8704 19.165 15.7597 17.569 15.7926C16.5366 15.8259 15.5304 16.1261 14.6485 16.6639C13.7667 17.2017 13.0391 17.9588 12.5368 18.8614C10.3611 22.6284 11.984 28.1645 14.0683 31.2094C15.1111 32.7005 16.3297 34.366 17.9243 34.3069C19.4847 34.2422 20.0675 33.3118 21.9512 33.3118C23.8173 33.3118 24.3641 34.3069 25.991 34.2693C27.6655 34.2422 28.7204 32.7717 29.7266 31.2666C30.4758 30.2042 31.0523 29.03 31.4348 27.7875C30.462 27.3761 29.6318 26.6874 29.0478 25.8073C28.4638 24.9272 28.1518 23.8947 28.1507 22.8384ZM25.0776 13.7374C25.9906 12.6415 26.4404 11.2328 26.3314 9.81052C24.9366 9.95702 23.6482 10.6236 22.7229 11.6776C22.2705 12.1924 21.924 12.7914 21.7032 13.4403C21.4825 14.0892 21.3917 14.7752 21.4362 15.4591C22.1339 15.4663 22.8241 15.3151 23.4549 15.0169C24.0856 14.7187 24.6405 14.2812 25.0776 13.7374ZM47.8757 30.5323H42.5506L41.2719 34.3082H39.0162L44.0602 20.338H46.4035L51.4474 34.3082H49.1534L47.8757 30.5323ZM43.1021 28.7898H47.3231L45.2423 22.6617H45.184L43.1021 28.7898ZM62.3402 29.2162C62.3402 32.3812 60.6461 34.4148 58.0897 34.4148C57.4421 34.4487 56.798 34.2995 56.2312 33.9843C55.6644 33.6692 55.1978 33.2008 54.8849 32.6328H54.8365V37.6777H52.7458V24.1228H54.7696V25.817H54.8081C55.1354 25.2517 55.6098 24.7857 56.1809 24.4687C56.752 24.1516 57.3983 23.9953 58.0512 24.0163C60.6362 24.0163 62.3402 26.0598 62.3402 29.2161V29.2162ZM60.1913 29.2162C60.1913 27.154 59.1257 25.7983 57.4997 25.7983C55.9022 25.7983 54.8279 27.1825 54.8279 29.2161C54.8279 31.2684 55.9022 32.6428 57.4997 32.6428C59.1257 32.6428 60.1913 31.297 60.1913 29.2161V29.2162ZM73.5506 29.2162C73.5506 32.3812 71.8566 34.4148 69.3 34.4148C68.6524 34.4486 68.0084 34.2995 67.4416 33.9843C66.8749 33.6692 66.4083 33.2008 66.0954 32.6328H66.047V37.6777H63.9563V24.1228H65.98V25.817H66.0184C66.3457 25.2517 66.8202 24.7857 67.3913 24.4687C67.9623 24.1516 68.6087 23.9953 69.2616 24.0163C71.8467 24.0163 73.5506 26.0598 73.5506 29.2161V29.2162ZM71.4018 29.2162C71.4018 27.154 70.3361 25.7983 68.7101 25.7983C67.1126 25.7983 66.0382 27.1825 66.0382 29.2161C66.0382 31.2684 67.1126 32.6428 68.7101 32.6428C70.3361 32.6428 71.4018 31.297 71.4018 29.2161V29.2162ZM80.9599 30.4159C81.1148 31.8012 82.4606 32.7109 84.2996 32.7109C86.0618 32.7109 87.3297 31.8012 87.3297 30.552C87.3297 29.4676 86.565 28.8184 84.7546 28.3734L82.9439 27.9373C80.3787 27.3176 79.1878 26.1179 79.1878 24.1711C79.1878 21.7607 81.2884 20.1051 84.2711 20.1051C87.2231 20.1051 89.2468 21.7607 89.3149 24.1711H87.2044C87.078 22.777 85.9256 21.9354 84.2414 21.9354C82.5572 21.9354 81.4048 22.7869 81.4048 24.0261C81.4048 25.0138 82.1409 25.595 83.9414 26.0398L85.4807 26.4178C88.3469 27.0957 89.538 28.2471 89.538 30.2904C89.538 32.9041 87.456 34.5411 84.1447 34.5411C81.0465 34.5411 78.9548 32.9425 78.8197 30.4157L80.9599 30.4159ZM94.05 21.7125V24.1228H95.9869V25.7785H94.05V31.3936C94.05 32.2659 94.4378 32.6724 95.2893 32.6724C95.5192 32.6684 95.7488 32.6522 95.977 32.624V34.2699C95.5942 34.3413 95.2051 34.3737 94.8158 34.3664C92.7537 34.3664 91.9494 33.592 91.9494 31.6166V25.7785H90.4684V24.1228H91.9494V21.7125H94.05ZM97.1086 29.2162C97.1086 26.0114 98.996 23.9976 101.939 23.9976C104.892 23.9976 106.771 26.0114 106.771 29.2162C106.771 32.4296 104.902 34.4346 101.939 34.4346C98.9774 34.4346 97.1086 32.4296 97.1086 29.2162ZM104.641 29.2162C104.641 27.0178 103.633 25.7202 101.939 25.7202C100.245 25.7202 99.2388 27.0276 99.2388 29.2162C99.2388 31.4233 100.245 32.7109 101.939 32.7109C103.633 32.7109 104.641 31.4233 104.641 29.2162ZM108.495 24.1228H110.489V25.8565H110.537C110.672 25.315 110.989 24.8365 111.435 24.5014C111.882 24.1663 112.43 23.995 112.987 24.0163C113.228 24.0155 113.468 24.0416 113.703 24.0943V26.0499C113.399 25.9569 113.082 25.9142 112.764 25.9235C112.46 25.9112 112.158 25.9647 111.876 26.0805C111.595 26.1962 111.343 26.3714 111.136 26.5941C110.929 26.8167 110.772 27.0815 110.677 27.3702C110.582 27.659 110.551 27.9649 110.586 28.2669V34.3082H108.495V24.1228ZM123.343 31.3166C123.062 33.1657 121.261 34.4346 118.957 34.4346C115.994 34.4346 114.155 32.4494 114.155 29.2644C114.155 26.0697 116.004 23.9976 118.869 23.9976C121.687 23.9976 123.459 25.9334 123.459 29.0217V29.7379H116.265V29.8643C116.232 30.2391 116.279 30.6167 116.403 30.9721C116.527 31.3274 116.725 31.6523 116.984 31.9251C117.243 32.198 117.558 32.4126 117.906 32.5547C118.255 32.6968 118.629 32.7632 119.005 32.7493C119.499 32.7956 119.995 32.6812 120.419 32.4231C120.843 32.165 121.172 31.7769 121.358 31.3166H123.343ZM116.275 28.2768H121.367C121.386 27.9397 121.335 27.6024 121.217 27.2861C121.1 26.9697 120.918 26.6811 120.683 26.4384C120.449 26.1956 120.166 26.004 119.854 25.8755C119.542 25.747 119.207 25.6844 118.869 25.6917C118.529 25.6896 118.191 25.7551 117.876 25.8842C117.561 26.0132 117.275 26.2034 117.034 26.4438C116.792 26.6841 116.601 26.9698 116.471 27.2845C116.341 27.5991 116.274 27.9363 116.275 28.2768ZM42.8401 9.82256C43.2784 9.7911 43.7183 9.85732 44.1279 10.0164C44.5375 10.1755 44.9067 10.4236 45.2089 10.7427C45.5111 11.0618 45.7386 11.4439 45.8752 11.8616C46.0118 12.2793 46.0539 12.7221 45.9986 13.1581C45.9986 15.3025 44.8396 16.5353 42.8401 16.5353H40.4154V9.82245L42.8401 9.82256ZM41.458 15.5859H42.7237C43.0369 15.6046 43.3503 15.5533 43.6411 15.4356C43.932 15.3179 44.1929 15.1368 44.405 14.9055C44.617 14.6743 44.7748 14.3987 44.8669 14.0987C44.959 13.7988 44.9831 13.4821 44.9373 13.1717C44.9797 12.8625 44.9533 12.5478 44.8598 12.25C44.7663 11.9523 44.6081 11.6789 44.3965 11.4495C44.1849 11.2201 43.9252 11.0403 43.636 10.923C43.3468 10.8057 43.0353 10.7539 42.7237 10.7712H41.458V15.5859ZM47.1764 14.0001C47.1446 13.6672 47.1826 13.3313 47.2882 13.014C47.3938 12.6967 47.5645 12.4049 47.7894 12.1574C48.0143 11.9099 48.2885 11.7122 48.5944 11.5769C48.9002 11.4416 49.2309 11.3717 49.5653 11.3717C49.8998 11.3717 50.2305 11.4416 50.5363 11.5769C50.8422 11.7122 51.1163 11.9099 51.3413 12.1574C51.5662 12.4049 51.7369 12.6967 51.8425 13.014C51.9481 13.3313 51.9861 13.6672 51.9543 14.0001C51.9868 14.3334 51.9493 14.6698 51.844 14.9878C51.7388 15.3057 51.5682 15.598 51.3432 15.8461C51.1182 16.0941 50.8438 16.2923 50.5376 16.428C50.2314 16.5636 49.9002 16.6337 49.5653 16.6337C49.2305 16.6337 48.8993 16.5636 48.5931 16.428C48.2869 16.2923 48.0125 16.0941 47.7875 15.8461C47.5625 15.598 47.3919 15.3057 47.2867 14.9878C47.1814 14.6698 47.1439 14.3334 47.1764 14.0001ZM50.926 14.0001C50.926 12.902 50.4327 12.2599 49.567 12.2599C48.698 12.2599 48.2092 12.902 48.2092 14.0001C48.2092 15.107 48.6981 15.7442 49.567 15.7442C50.4327 15.7442 50.926 15.1026 50.926 14.0001ZM58.3056 16.5352H57.2683L56.2214 12.8043H56.1423L55.0998 16.5352H54.0725L52.6762 11.4693H53.6901L54.5977 15.3348H54.6724L55.7139 11.4693H56.673L57.7145 15.3348H57.7936L58.6966 11.4693H59.6964L58.3056 16.5352ZM60.8708 11.4694H61.8332V12.2742H61.9079C62.0346 11.9851 62.2484 11.7428 62.5194 11.581C62.7904 11.4192 63.1051 11.346 63.4197 11.3716C63.6662 11.353 63.9137 11.3902 64.1438 11.4803C64.374 11.5704 64.581 11.7112 64.7493 11.8921C64.9177 12.0731 65.0433 12.2896 65.1166 12.5256C65.19 12.7617 65.2093 13.0112 65.1731 13.2557V16.5351H64.1733V13.5068C64.1733 12.6928 63.8195 12.2879 63.0802 12.2879C62.9128 12.2801 62.7458 12.3086 62.5905 12.3714C62.4351 12.4342 62.2953 12.5299 62.1804 12.6518C62.0655 12.7737 61.9783 12.919 61.9248 13.0778C61.8714 13.2366 61.8529 13.405 61.8706 13.5716V16.5352H60.8708V11.4694ZM66.7661 9.49181H67.7658V16.5352H66.7661V9.49181ZM69.1556 14.0001C69.1237 13.6672 69.1618 13.3312 69.2674 13.0139C69.373 12.6965 69.5437 12.4047 69.7687 12.1572C69.9937 11.9097 70.2679 11.7119 70.5737 11.5766C70.8796 11.4412 71.2104 11.3713 71.5449 11.3713C71.8793 11.3713 72.2101 11.4412 72.516 11.5766C72.8219 11.7119 73.0961 11.9097 73.321 12.1572C73.546 12.4047 73.7168 12.6965 73.8223 13.0139C73.9279 13.3312 73.966 13.6672 73.9341 14.0001C73.9665 14.3334 73.9288 14.6697 73.8235 14.9875C73.7181 15.3053 73.5475 15.5976 73.3225 15.8455C73.0975 16.0935 72.8231 16.2916 72.5169 16.4272C72.2108 16.5627 71.8797 16.6328 71.5449 16.6328C71.21 16.6328 70.8789 16.5627 70.5728 16.4272C70.2667 16.2916 69.9923 16.0935 69.7673 15.8455C69.5423 15.5976 69.3716 15.3053 69.2663 14.9875C69.1609 14.6697 69.1232 14.3334 69.1556 14.0001ZM72.9052 14.0001C72.9052 12.902 72.4119 12.2599 71.5462 12.2599C70.6772 12.2599 70.1883 12.902 70.1883 14.0001C70.1883 15.107 70.6773 15.7442 71.5462 15.7442C72.4119 15.7442 72.9052 15.1026 72.9052 14.0001ZM74.9866 15.1026C74.9866 14.1907 75.6655 13.665 76.8707 13.5903L78.2429 13.5112V13.0739C78.2429 12.5389 77.8892 12.2368 77.2058 12.2368C76.6477 12.2368 76.261 12.4417 76.15 12.7999H75.1821C75.2842 11.9297 76.1028 11.3717 77.252 11.3717C78.522 11.3717 79.2383 12.0039 79.2383 13.0739V16.5352H78.2758V15.8233H78.1968C78.0362 16.0787 77.8108 16.2868 77.5434 16.4266C77.2761 16.5663 76.9765 16.6326 76.6752 16.6187C76.4625 16.6408 76.2476 16.6181 76.0442 16.5521C75.8409 16.486 75.6536 16.3781 75.4945 16.2353C75.3354 16.0924 75.208 15.9179 75.1206 15.7228C75.0331 15.5277 74.9874 15.3164 74.9866 15.1026ZM78.2429 14.6697V14.2462L77.0058 14.3252C76.3082 14.3719 75.9918 14.6093 75.9918 15.0558C75.9918 15.5118 76.3873 15.7772 76.9311 15.7772C77.0905 15.7933 77.2515 15.7772 77.4045 15.7299C77.5575 15.6825 77.6994 15.6049 77.8218 15.5015C77.9442 15.3982 78.0445 15.2713 78.1169 15.1284C78.1892 14.9855 78.2321 14.8295 78.2429 14.6697ZM80.5523 14.0001C80.5523 12.3994 81.3751 11.3854 82.655 11.3854C82.9716 11.3708 83.2858 11.4466 83.5609 11.604C83.836 11.7614 84.0606 11.9938 84.2085 12.2742H84.2832V9.4917H85.2829V16.5351H84.3249V15.7346H84.2459C84.0866 16.0131 83.8541 16.2426 83.5737 16.3984C83.2934 16.5542 82.9757 16.6304 82.6551 16.6186C81.3663 16.6186 80.5523 15.6045 80.5523 14V14.0001ZM81.585 14.0001C81.585 15.0745 82.0915 15.7211 82.9384 15.7211C83.781 15.7211 84.3019 15.0653 84.3019 14.0044C84.3019 12.9487 83.7756 12.2835 82.9384 12.2835C82.0969 12.2835 81.585 12.9344 81.585 14.0001ZM89.4193 14.0001C89.3874 13.6672 89.4255 13.3313 89.5311 13.014C89.6366 12.6967 89.8073 12.4049 90.0323 12.1574C90.2572 11.9099 90.5314 11.7122 90.8372 11.5769C91.143 11.4416 91.4738 11.3717 91.8082 11.3717C92.1426 11.3717 92.4734 11.4416 92.7792 11.5769C93.085 11.7122 93.3592 11.9099 93.5841 12.1574C93.8091 12.4049 93.9798 12.6967 94.0854 13.014C94.1909 13.3313 94.229 13.6672 94.1971 14.0001C94.2297 14.3334 94.1921 14.6698 94.0869 14.9878C93.9816 15.3057 93.811 15.598 93.586 15.8461C93.361 16.0941 93.0866 16.2923 92.7804 16.428C92.4743 16.5636 92.1431 16.6337 91.8082 16.6337C91.4733 16.6337 91.1421 16.5636 90.836 16.428C90.5298 16.2923 90.2554 16.0941 90.0304 15.8461C89.8054 15.598 89.6348 15.3057 89.5295 14.9878C89.4243 14.6698 89.3867 14.3334 89.4193 14.0001ZM93.1689 14.0001C93.1689 12.902 92.6756 12.2599 91.8099 12.2599C90.9408 12.2599 90.452 12.902 90.452 14.0001C90.452 15.107 90.9409 15.7442 91.8099 15.7442C92.6756 15.7442 93.1689 15.1026 93.1689 14.0001ZM95.5386 11.4694H96.501V12.2742H96.5757C96.7024 11.9851 96.9162 11.7428 97.1872 11.581C97.4582 11.4192 97.7729 11.346 98.0875 11.3716C98.334 11.353 98.5815 11.3902 98.8116 11.4803C99.0418 11.5704 99.2487 11.7112 99.4171 11.8921C99.5855 12.0731 99.7111 12.2896 99.7844 12.5256C99.8578 12.7617 99.8771 13.0112 99.8409 13.2557V16.5351H98.8411V13.5068C98.8411 12.6928 98.4873 12.2879 97.748 12.2879C97.5806 12.2801 97.4136 12.3086 97.2583 12.3714C97.103 12.4342 96.9631 12.5299 96.8482 12.6518C96.7333 12.7737 96.6461 12.919 96.5926 13.0778C96.5392 13.2366 96.5207 13.405 96.5384 13.5716V16.5352H95.5387L95.5386 11.4694ZM105.49 10.2082V11.4925H106.588V12.3346H105.49V14.9394C105.49 15.47 105.709 15.7025 106.206 15.7025C106.334 15.702 106.461 15.6943 106.588 15.6793V16.5121C106.408 16.5442 106.226 16.5613 106.044 16.5632C104.932 16.5632 104.489 16.172 104.489 15.1954V12.3346H103.685V11.4924H104.489V10.2083L105.49 10.2082ZM107.953 9.49181H108.944V12.2835H109.023C109.156 11.9917 109.376 11.7481 109.652 11.5857C109.929 11.4233 110.248 11.35 110.568 11.376C110.813 11.3626 111.058 11.4035 111.286 11.4959C111.513 11.5882 111.718 11.7295 111.884 11.9099C112.051 12.0903 112.176 12.3053 112.25 12.5394C112.324 12.7736 112.345 13.0212 112.313 13.2646V16.5352H111.312V13.5112C111.312 12.702 110.935 12.2923 110.228 12.2923C110.057 12.2782 109.884 12.3018 109.722 12.3615C109.56 12.4212 109.414 12.5155 109.292 12.6378C109.171 12.7602 109.077 12.9075 109.019 13.0697C108.96 13.2318 108.938 13.4048 108.953 13.5766V16.5352H107.953V9.49181ZM118.142 15.1673C118.006 15.6303 117.712 16.0308 117.311 16.2987C116.909 16.5667 116.427 16.685 115.947 16.633C115.613 16.6418 115.281 16.5779 114.975 16.4456C114.668 16.3134 114.394 16.1161 114.172 15.8673C113.949 15.6185 113.783 15.3243 113.685 15.005C113.588 14.6857 113.561 14.349 113.607 14.0182C113.562 13.6865 113.59 13.349 113.687 13.0288C113.784 12.7085 113.949 12.4129 114.171 12.1619C114.392 11.9109 114.665 11.7105 114.971 11.5741C115.276 11.4378 115.608 11.3687 115.942 11.3716C117.352 11.3716 118.202 12.3346 118.202 13.9253V14.2742H114.625V14.3302C114.61 14.5161 114.633 14.7032 114.694 14.8796C114.755 15.0559 114.852 15.2176 114.979 15.3542C115.106 15.4908 115.26 15.5994 115.431 15.673C115.603 15.7466 115.788 15.7835 115.974 15.7814C116.213 15.8102 116.456 15.7671 116.67 15.6577C116.885 15.5484 117.062 15.3777 117.179 15.1673H118.142ZM114.625 13.5348H117.184C117.196 13.3648 117.173 13.194 117.116 13.0335C117.059 12.8729 116.968 12.7261 116.851 12.6026C116.734 12.479 116.592 12.3813 116.434 12.3159C116.277 12.2504 116.107 12.2186 115.937 12.2225C115.764 12.2203 115.592 12.2528 115.432 12.318C115.272 12.3832 115.127 12.4798 115.004 12.6021C114.882 12.7244 114.786 12.8699 114.72 13.0301C114.655 13.1903 114.623 13.3619 114.625 13.5348Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
        <div
          className="flex flex-col justify-center text-center"
          style={{ marginBottom: '24px' }}
        >
          <p
            style={{
              fontSize: '18px',
              marginBottom: '15px',
            }}
          >
            Temukan Kami
          </p>
          <div className="flex flex-row justify-center space-x-5">
            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/pedulyindonesia"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z"
                  fill="#717171"
                />
              </svg>
            </a>
            {/* TWITTER */}
            <a
              href="https://twitter.com/peduly_id"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.1 11.5C22.8 11.4 23.4 11.3 24 11C23.6 11.7 23 12.3 22.3 12.7C22.5 17.4 19.1 22.5 13 22.5C11.2 22.5 9.5 21.9 8 21C9.7 21.2 11.5 20.7 12.7 19.8C11.2 19.8 10 18.8 9.6 17.5C10.1 17.6 10.6 17.5 11.1 17.4C9.6 17 8.5 15.6 8.5 14.1C9 14.3 9.5 14.5 10 14.5C8.6 13.5 8.1 11.6 9 10.1C10.7 12.1 13.1 13.4 15.8 13.5C15.3 11.5 16.9 9.5 19 9.5C19.9 9.5 20.8 9.9 21.4 10.5C22.2 10.3 22.9 10.1 23.5 9.7C23.3 10.5 22.8 11.1 22.1 11.5Z"
                  fill="#717171"
                />
              </svg>
            </a>
            {/* WHATSAPP */}
            <a
              href="https://wa.me/6285706611112"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.6 21.7C13.6 22.3 14.8 22.6 16 22.6C19.7 22.6 22.6 19.6 22.6 16.1C22.6 14.3 22 12.7 20.7 11.4C19.4 10.2 17.8 9.5 16 9.5C12.4 9.5 9.39999 12.5 9.39999 16.1C9.39999 17.3 9.7 18.5 10.4 19.6L10.6 19.9L9.89999 22.3L12.4 21.6L12.6 21.7ZM18.2 17C18.4 17 19.4 17.5 19.6 17.6C19.6311 17.6156 19.6623 17.6287 19.6931 17.6417C19.8599 17.7121 20.0156 17.7779 20.1 18.2C20.2 18.2 20.2 18.6 20 19.1C19.9 19.5 19.1 20 18.7 20C18.6322 20 18.5673 20.0057 18.498 20.0119C18.1582 20.0419 17.712 20.0814 16.3 19.5C14.5475 18.799 13.3325 17.0999 12.9913 16.6228C12.9431 16.5554 12.9124 16.5124 12.9 16.5C12.883 16.466 12.8485 16.4116 12.8031 16.3399C12.5819 15.9906 12.1 15.2297 12.1 14.4C12.1 13.4 12.6 12.9 12.8 12.7C13 12.5 13.2 12.5 13.3 12.5H13.7C13.8 12.5 14 12.5 14.1 12.8C14.3 13.2 14.7 14.2 14.7 14.3C14.7 14.3333 14.7111 14.3667 14.7222 14.4C14.7445 14.4667 14.7667 14.5333 14.7 14.6C14.65 14.65 14.625 14.7 14.6 14.75C14.575 14.8 14.55 14.85 14.5 14.9L14.2 15.2C14.1 15.3 14 15.4 14.1 15.6C14.2 15.8 14.6 16.5 15.2 17C15.8751 17.5907 16.4078 17.8254 16.6778 17.9443C16.7278 17.9663 16.7688 17.9844 16.8 18C17 18 17.1 18 17.2 17.9C17.25 17.8 17.375 17.65 17.5 17.5C17.625 17.35 17.75 17.2 17.8 17.1C17.9 16.9 18 16.9 18.2 17Z"
                  fill="#717171"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C18.1 8 20.1 8.8 21.6 10.3C23.1 11.8 24 13.8 24 15.9C24 20.3 20.4 23.9 16 23.9C14.7 23.9 13.4 23.5 12.2 22.9L8 24L9.10001 20C8.40001 18.8 8 17.4 8 16C8 11.6 11.6 8 16 8Z"
                  fill="#717171"
                />
              </svg>
            </a>
            {/* YOUTUBE */}
            <a
              href="https://www.youtube.com/channel/UCSf0CrRkqjkKT0SuHjha87Q"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.6 16L14.4 13.6V18.4L18.6 16Z" fill="#717171" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM22.2 10.7C22.9 10.9 23.4 11.4 23.6 12.1C24 13.4 24 16 24 16C24 16 24 18.6 23.7 19.9C23.5 20.6 23 21.1 22.3 21.3C21 21.6 16 21.6 16 21.6C16 21.6 10.9 21.6 9.7 21.3C9 21.1 8.5 20.6 8.3 19.9C8 18.6 8 16 8 16C8 16 8 13.4 8.2 12.1C8.4 11.4 8.90001 10.9 9.60001 10.7C10.9 10.4 15.9 10.4 15.9 10.4C15.9 10.4 21 10.4 22.2 10.7Z"
                  fill="#717171"
                />
              </svg>
            </a>
            {/* TIKTOK */}
            <a
              href="https://www.tiktok.com/@peduly_id"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="surface1">
                  <path
                    style={{
                      stroke: 'none',
                      fillRule: 'nonzero',
                      fill: 'rgb(44.313725%,44.313725%,44.313725%)',
                      fillOpacity: 1,
                    }}
                    d="M 14.480469 0.0390625 C 9.472656 0.558594 5.085938 3.285156 2.421875 7.527344 C -1.359375 13.546875 -0.652344 21.492188 4.125 26.726562 C 6.769531 29.625 10.078125 31.355469 14.042969 31.921875 C 14.78125 32.027344 17.242188 32.027344 18.015625 31.917969 C 21.636719 31.421875 24.882812 29.816406 27.347656 27.296875 C 28.160156 26.472656 28.332031 26.273438 28.867188 25.558594 C 30.46875 23.421875 31.515625 20.820312 31.921875 17.976562 C 32.027344 17.238281 32.027344 14.769531 31.921875 14.03125 C 31.652344 12.136719 31.160156 10.519531 30.375 8.9375 C 29.539062 7.257812 28.683594 6.058594 27.355469 4.710938 C 24.882812 2.207031 21.789062 0.648438 18.234375 0.121094 C 17.46875 0.0078125 15.246094 -0.0390625 14.480469 0.0390625 Z M 19.421875 7.160156 C 19.5625 8.222656 19.898438 9.050781 20.488281 9.761719 C 21.253906 10.683594 22.390625 11.28125 23.628906 11.410156 L 24.023438 11.449219 L 24.023438 14.410156 L 23.433594 14.367188 C 23.109375 14.34375 22.683594 14.289062 22.492188 14.25 C 21.636719 14.074219 20.550781 13.609375 19.820312 13.113281 C 19.621094 12.980469 19.449219 12.871094 19.433594 12.871094 C 19.414062 12.871094 19.40625 14.527344 19.414062 16.550781 C 19.425781 20.195312 19.421875 20.238281 19.28125 20.792969 C 18.761719 22.839844 17.195312 24.429688 15.167969 24.964844 C 14.417969 25.164062 13.328125 25.191406 12.570312 25.035156 C 10.3125 24.566406 8.5625 22.84375 8.097656 20.632812 C 7.976562 20.058594 7.976562 18.941406 8.101562 18.332031 C 8.210938 17.800781 8.507812 17.058594 8.828125 16.523438 C 9.101562 16.0625 9.867188 15.25 10.34375 14.910156 C 11.433594 14.136719 12.914062 13.71875 14.136719 13.84375 L 14.574219 13.886719 L 14.574219 16.933594 L 14.339844 16.867188 C 14.210938 16.832031 13.855469 16.816406 13.542969 16.832031 C 12.828125 16.863281 12.289062 17.101562 11.800781 17.597656 C 10.242188 19.183594 11.128906 21.816406 13.335938 22.160156 C 14.777344 22.382812 16.179688 21.324219 16.386719 19.855469 C 16.425781 19.589844 16.449219 16.941406 16.449219 13.140625 L 16.453125 6.859375 L 19.386719 6.859375 Z M 19.421875 7.160156 "
                  />
                </g>
              </svg>
            </a>
            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/peduly_id"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z"
                  fill="#717171"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z"
                  fill="#717171"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z"
                  fill="#717171"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TentangKami
