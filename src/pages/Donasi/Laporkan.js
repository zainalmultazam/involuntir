import BackButton from 'components/BackButton'
import { useEffect } from 'react'
import { useRef, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const Nav = ({ step, txt, page }) => {
  return (
    <div
      className="fixed z-50 top-0 bg-white"
      style={{
        boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
      }}
    >
      <div className="w-[430px]">
        <div className="mx-[20px] inline-flex items-center h-[72px]">
          <span onClick={() => step(page)}>
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
          </span>
          <span className=" relative ml-[16px] text-[16px] leading-[21.79px] font-medium mt-1">
            {txt}
          </span>
        </div>
      </div>
    </div>
  )
}

const LaporkanPage = ({ step }) => {
  const { slug } = useParams()

  return (
    <>
      <BackButton hrf={`/donasi-sekali/${slug}`} txt="Laporkan Masalah" />
      <div className="mt-[102px]">
        <div className="flex justify-center">
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
              d="M140.49 16.9278C140.491 19.1813 140.574 21.4389 140.467 23.6877C140.359 25.969 139.982 28.2007 138.153 29.8817C136.934 31.0027 135.439 31.4376 133.875 31.736C131.056 32.2735 128.357 32.0675 125.928 30.3795C125.1 29.8039 124.484 29.0511 124.75 27.9485C125.057 26.6789 126.139 26.1816 127.6 26.6228C128.883 27.0103 130.113 27.5809 131.521 27.4422C132.375 27.3579 133.189 27.1633 133.972 26.8446C134.477 26.6391 134.878 26.2771 135.148 25.7872C135.334 25.4496 135.565 25.0477 135.353 24.725C135.128 24.382 134.798 24.7859 134.522 24.8473C131.055 25.6145 127.36 24.4096 125.771 21.6436C125.121 20.5134 124.828 19.2845 124.777 18.0025C124.658 15.0225 124.498 12.0363 124.871 9.06565C125.043 7.69343 126.057 6.94619 127.348 7.05367C128.65 7.16206 129.415 8.05875 129.535 9.44055C129.764 12.0765 129.533 14.7184 129.682 17.3514C129.815 19.6853 132.034 20.8655 134.108 19.7687C135.186 19.1984 135.59 18.2457 135.599 17.1002C135.618 14.6525 135.598 12.2044 135.613 9.75655C135.619 8.78677 135.935 7.96113 136.785 7.37686C138.131 6.45115 140.448 7.15243 140.483 9.81727C140.514 12.187 140.49 14.5575 140.49 16.9278Z"
              fill="#222121"
              fillOpacity="0.9"
            />
            <path
              d="M113.403 16.1896C113.404 18.248 113.391 20.3063 113.409 22.3645C113.418 23.406 113.103 24.2554 112.148 24.7732C111.19 25.2926 110.253 25.1529 109.468 24.4702C109.104 24.1526 108.874 24.2893 108.573 24.4145C105.758 25.5848 103.051 25.2355 100.56 23.6167C98.6418 22.3704 97.8483 20.3732 97.7773 18.1624C97.6876 15.3689 97.7413 12.5706 97.7538 9.77442C97.761 8.13421 98.7064 6.95403 100.076 7.03887C101.698 7.13923 102.335 7.68268 102.602 9.6138C102.723 10.4907 102.629 11.3975 102.63 12.2906C102.632 13.883 102.622 15.4753 102.634 17.0675C102.647 18.9069 103.874 20.1765 105.633 20.194C107.244 20.2098 108.52 18.8763 108.529 17.1348C108.541 14.8046 108.51 12.4742 108.543 10.1444C108.557 9.08996 108.788 8.06288 109.718 7.40089C110.461 6.87209 111.329 6.82437 112.115 7.24545C112.994 7.71615 113.402 8.54155 113.402 9.54851C113.402 11.7622 113.402 13.9759 113.403 16.1896Z"
              fill="#222121"
              fillOpacity="0.9"
            />
            <path
              d="M116.687 12.4249C116.688 9.2441 116.661 6.06307 116.698 2.88277C116.721 0.899707 117.848 -0.141917 119.561 0.118546C120.777 0.303459 121.484 1.22996 121.542 2.84503C121.589 4.16222 121.556 5.48233 121.556 6.80118C121.557 11.6886 121.551 16.576 121.563 21.4635C121.565 22.0907 121.509 22.7027 121.324 23.2956C121.019 24.278 120.188 24.8422 119.137 24.8586C118.023 24.876 117.308 24.3286 116.924 23.3267C116.716 22.7823 116.676 22.2054 116.679 21.6179C116.692 18.5535 116.685 15.4893 116.687 12.4249Z"
              fill="#222121"
              fillOpacity="0.9"
            />
            <path
              d="M9.54858 15.8943C9.54858 14.846 9.5398 13.7977 9.55206 12.7497C9.55907 12.1501 9.58444 11.4824 10.4207 11.5243C11.2245 11.5646 11.2298 12.225 11.2308 12.8245C11.2339 14.6493 11.2199 16.4742 11.2349 18.2988C11.2592 21.2566 13.1751 23.2773 15.9251 23.2676C18.661 23.258 20.5983 21.1949 20.6163 18.2681C20.6218 17.3752 20.6221 16.4822 20.6184 15.5893C20.6161 15.0438 20.856 14.6486 21.4136 14.6433C21.9627 14.638 22.2608 15.0294 22.2508 15.5629C22.2224 17.0722 22.398 18.5896 22.0527 20.0876C21.3521 23.127 18.5434 25.111 15.2582 24.8713C12.3565 24.6596 9.87068 22.2099 9.65127 19.2669C9.56791 18.1485 9.6377 17.0187 9.6377 15.8942C9.60805 15.8943 9.57828 15.8943 9.54858 15.8943Z"
              fill="#FFFDFD"
            />
            <path
              d="M19.4648 13.9519C19.4648 15.3869 19.4769 16.8221 19.462 18.2569C19.44 20.372 17.9678 21.9466 15.9718 22.0142C14.0164 22.0806 12.3425 20.519 12.2995 18.432C12.238 15.4468 12.2817 12.4594 12.2828 9.47303C12.283 8.8867 12.4022 8.33265 13.1236 8.31668C13.8868 8.29986 13.9376 8.88864 13.9381 9.46014C13.9406 11.9811 13.9396 14.502 13.9398 17.023C13.9398 17.2946 13.936 17.5661 13.9406 17.8375C13.968 19.4565 14.6698 20.3736 15.8803 20.3759C17.0869 20.3781 17.8132 19.4369 17.8169 17.8485C17.8232 15.1335 17.8179 12.4186 17.8299 9.70373C17.8326 9.10719 17.6659 8.31554 18.6028 8.30864C19.5899 8.30134 19.4588 9.11455 19.4625 9.76314C19.4704 11.1594 19.4649 12.5556 19.4648 13.9519Z"
              fill="white"
            />
            <path
              d="M15.0446 13.0807C15.0446 11.4893 15.0482 9.89796 15.0427 8.30655C15.0408 7.7314 15.0722 7.14878 15.8202 7.11674C16.6609 7.08059 16.6838 7.70215 16.6827 8.32292C16.6774 11.4668 16.672 14.6109 16.6873 17.7548C16.6902 18.3729 16.5505 18.9112 15.8593 18.9039C15.1726 18.8968 15.0308 18.3517 15.0384 17.7384C15.0575 16.1858 15.0447 14.6333 15.0446 13.0807Z"
              fill="#FFFDFD"
            />
            <path
              d="M53.745 13.3377C52.314 8.51219 47.0118 5.77722 42.1297 7.39006C41.1418 7.71638 40.2149 8.3766 39.3105 7.26718C39.2321 7.17116 39.0289 7.16591 38.8798 7.13923C37.1194 6.82357 35.865 7.96492 35.8535 9.95722C35.8321 13.6479 35.8465 17.3388 35.8464 21.0296C35.8464 23.7103 35.8312 26.391 35.8533 29.0716C35.8681 30.8712 36.6483 31.8126 38.0778 31.848C39.7689 31.8899 40.675 31.0719 40.7186 29.3593C40.7624 27.6527 40.7283 25.9441 40.7283 24.1349C44.5285 25.1941 45.4931 25.2802 47.3887 24.7541C52.3512 23.3766 55.2032 18.2545 53.745 13.3377ZM44.8911 20.2275C42.9497 20.2529 40.7435 18.6783 40.7497 15.9194C40.7552 13.48 42.6374 11.7273 45.1316 11.7526C47.5851 11.7774 49.2441 13.5121 49.223 16.0312C49.202 18.5473 47.453 20.1942 44.8911 20.2275Z"
              fill="#212121"
              fillOpacity="0.9"
            />
            <path
              d="M94.712 11.8365C94.7119 8.6908 94.7333 5.54478 94.7028 2.39932C94.6853 0.612744 93.23 -0.396321 91.5494 0.147127C90.4651 0.497737 89.8779 1.49865 89.8541 3.13088C89.8314 4.6798 89.8492 6.22935 89.8492 7.89168C89.5465 7.80091 89.4357 7.77987 89.3351 7.73573C85.6579 6.12164 82.259 6.74657 79.3955 9.39538C76.615 11.9673 75.8069 15.2713 76.9999 18.9067C78.6652 23.982 84.5251 26.427 89.4491 24.191C89.7911 24.0357 90.1532 23.6446 90.5878 24.1131C91.4002 24.9893 92.4026 25.1229 93.4297 24.606C94.4847 24.0748 94.7257 23.0842 94.7191 21.9728C94.6995 18.594 94.7121 15.2153 94.712 11.8365ZM89.828 15.9299C89.8365 18.4526 88.0994 20.2153 85.6043 20.2152C83.1936 20.215 81.4834 18.4169 81.3537 16.0038C81.2385 13.858 83.3492 11.6549 85.6379 11.7047C88.0188 11.7565 89.9537 13.7147 89.828 15.9299Z"
              fill="#212121"
              fillOpacity="0.9"
            />
            <path
              d="M71.7077 17.6205C73.4346 17.6144 74.6268 16.2542 74.3394 14.5846C73.2223 8.09328 66.309 4.76605 60.5519 8.32666C57.2879 10.3453 55.952 13.4937 56.4401 17.2521C56.9055 20.8348 59.0381 23.2925 62.4041 24.5293C65.8532 25.7968 69.5104 24.8627 71.7639 22.4413C72.5137 21.6355 72.6771 20.5899 72.121 19.8058C71.4929 18.9205 70.6302 18.8841 69.6456 19.1945C68.94 19.4169 68.3248 19.8037 67.6524 20.079C65.268 21.0544 62.5866 20.245 61.7056 17.624C65.1098 17.6241 68.4089 17.6324 71.7077 17.6205ZM65.7945 11.7981C67.178 11.9345 68.3105 12.5298 69.1078 13.9336H61.7155C62.7395 12.3861 64.0406 11.6252 65.7945 11.7981Z"
              fill="#222121"
              fillOpacity="0.9"
            />
          </svg>
        </div>
        <div className="mx-[20px] mt-[32px] space-y-4">
          <h3 className="font-semibold text-lg">Halo Warga Baik</h3>
          <p className="font-normal text-sm">
            Kami akan menanyakan sejumlah pertanyaan agar kami dapat lebih
            memahami situasi pada galang dana ini. Kamu juga dapat memberikan
            info tambahan untuk masalah pada galang dana dalam laporan ini.
          </p>
          <p className="font-normal text-sm">
            Kami menanggapi laporan dengan serius. Jika kami menemukan
            pelanggaran terhadap peraturan, kami akan memintanya untuk menghapus
            galang dana tersebut atau bahkan menghapus secara sepihak atau
            menangguhkan akun tersebut.
          </p>
          <p className="font-normal text-sm">
            Jika ada masalah lainnya bisa{' '}
            <span className="text-peduly-primary">hubungi kami.</span>
          </p>
        </div>
        <div className="mx-[20px] mt-[60px] mb-[40px]">
          <button
            onClick={() => step(1)}
            className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] cursor-pointer"
          >
            Mulai Laporkan
          </button>
        </div>
      </div>
    </>
  )
}

const FormSatu = ({ step, data }) => {
  const [value, setValue] = useState('')

  const options = [
    { label: 'Penyalahgunaan dana', value: '1' },
    { label: 'Sudah di cover pihak lain (BPJS, Asuransi)', value: '2' },
    { label: 'Memberikan informasi palsu', value: '3' },
    { label: 'Beneficiary sudah meninggal', value: '4' },
    { label: 'Tanpa sepengetahuan penerima manfaat', value: '5' },
    { label: 'Tanpa sepengetahuan penerima manfaat', value: '6' },
    { label: 'Spam', value: '7' },
    { label: 'Belum ada kabar terbaru', value: '8' },
    { label: 'Penggalang dana sedang dalam proses hukum', value: '9' },
    { label: 'Target terlalu tinggi atau tidak sesuai ', value: '10' },
    { label: 'Target terus menerus dinaikkan', value: '11' },
    { label: 'Lainnya', value: '12' },
  ]

  useEffect(() => {
    data(value)
  }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

  function validator() {
    if (value) {
      return true
    }
    return false
  }

  return (
    <>
      <Nav step={step} txt="Laporkan Masalah" page={0} />
      <div className="mt-[86px] mx-[20px]">
        <h3 className="text-lg font-semibold">Masalah apa yang terjadi </h3>
        <ul className=" mt-[32px] space-y-6">
          {options.map((option, i) => (
            <li key={i} className="flex justify-between  items-center">
              <label htmlFor={option.label} className="text-base font-normal">
                {option.label}
              </label>
              <input
                id={option.label}
                checked={value === option.value}
                onChange={() => setValue(option.value)}
                type="checkbox"
                className="rounded-full h-[16px] w-[16px]  bg-white border-gray-500 text-peduly-primary focus:ring-transparent cursor-pointer"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-0 w-full h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40">
        <span className="w-[90%]">
          {validator() ? (
            <button
              onClick={() => step(2)}
              className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
            >
              Selanjutnya
            </button>
          ) : (
            <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
              Selanjutnya
            </button>
          )}
        </span>
      </div>
    </>
  )
}

const FormDua = ({ step, data, data2, submit }) => {
  const [screanshot, setScreenshot] = useState('')
  const [laporan, setLaporan] = useState('')

  const foto = useRef(null)

  useEffect(() => {
    data(laporan)
    data2(screanshot)
  }, [laporan, screanshot]) // eslint-disable-line react-hooks/exhaustive-deps

  function validator() {
    if (screanshot && laporan) {
      return true
    }
    return false
  }

  return (
    <>
      <Nav step={step} txt="Laporkan Masalah" page={1} />
      <div className="mt-[92px] mx-[20px]">
        <h1 className="font-semibold text-xl">Ceritakan lebih detail</h1>
        <div className="mt-[32px]">
          <label htmlFor="detailLaporan" className="font-normal text-sm">
            Detail laporan
          </label>
          <textarea
            id="detailLaporan"
            className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-[15px] h-[134px] py-[17px] px-[21px] text-sm font-normal placeholder-[#C4C4C4] resize-none mt-[20px]"
            onChange={(e) => {
              setLaporan(e.target.value)
            }}
            placeholder=""
            maxLength={240}
          ></textarea>
        </div>
        <div className="mt-[24px]">
          <label htmlFor="foto" className="font-normal text-sm">
            foto / screenshot
          </label>
          <input
            style={{ display: 'none' }}
            ref={foto}
            type="file"
            onChange={() => setScreenshot(foto.current.files[0])}
          />
          <span
            onClick={() => foto.current.click()}
            className="cursor-pointer mt-[24px] flex"
          >
            <svg
              width={60}
              height={60}
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 25C25.2614 25 27.5 22.7614 27.5 20C27.5 17.2386 25.2614 15 22.5 15C19.7386 15 17.5 17.2386 17.5 20C17.5 22.7614 19.7386 25 22.5 25Z"
                stroke="#E7513B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32.5 5H22.5C10 5 5 10 5 22.5V37.5C5 50 10 55 22.5 55H37.5C50 55 55 50 55 37.5V25"
                stroke="#E7513B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39.375 12.5H53.125"
                stroke="#E7513B"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M46.25 19.375V5.625"
                stroke="#E7513B"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                d="M6.6748 47.3734L18.9998 39.0984C20.9748 37.7734 23.8248 37.9234 25.5998 39.4484L26.4248 40.1734C28.3748 41.8484 31.5248 41.8484 33.4748 40.1734L43.8748 31.2484C45.8248 29.5734 48.9748 29.5734 50.9248 31.2484L54.9998 34.7484"
                stroke="#E7513B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="ml-[10px] text-sm font-light text-gray-500">
              {screanshot.name}
            </p>
          </span>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40">
        <span className="w-[90%]">
          {validator() ? (
            <button
              onClick={submit}
              className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
            >
              Kirim
            </button>
          ) : (
            <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
              Kirim
            </button>
          )}
        </span>
      </div>
    </>
  )
}

const FormTiga = ({ step }) => {
  const history = useHistory()

  return (
    <>
      <Nav step={step} txt="Laporkan Masalah" page={2} />
      <div className="mt-[96px] mx-[20px]">
        <div
          className="flex items-center px-[20px] py-[18px] rounded-[15px]"
          style={{ backgroundColor: 'rgba(52, 168, 83, 0.12)' }}
        >
          <span>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99992 14.6663C11.6666 14.6663 14.6666 11.6663 14.6666 7.99967C14.6666 4.33301 11.6666 1.33301 7.99992 1.33301C4.33325 1.33301 1.33325 4.33301 1.33325 7.99967C1.33325 11.6663 4.33325 14.6663 7.99992 14.6663Z"
                stroke="#34A853"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.16675 7.99995L7.05341 9.88661L10.8334 6.11328"
                stroke="#34A853"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="ml-[12px] font-normal text-xs">Laporan Terkirim</p>
        </div>
        <div className="mt-[32px]">
          <h1 className="font-semibold text-xl w-[311px]">
            Terimakasih telah membuat Peduly menjadi lebih baik bagi semua orang
          </h1>
          <p className="mt-[14px] font-normal text-sm">
            Kami senang karena kamu meluangkan waktu untuk memberikan laporan
            kepada kami. Itu sangat membantu pekerjaan kami jadi lebih mudah.
          </p>
        </div>
        <div className="mt-[24px]">
          <h1 className="font-semibold text-xl">Selanjutnya</h1>
          <p className="mt-[14px] font-normal text-sm">
            Tim kami membutuhkan waktu untuk meninjau laporan yang telah kamu
            berikan. Kami secepat mungkin memberi tahu kamu jika kami menemukan
            pelanggaran dan akan memberi tindakan sesuai dengan syarat &
            ketentuan di Peduly.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40">
        <span className="w-[90%]">
          <button
            onClick={() => history.goBack(-1)}
            className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
          >
            Selesai
          </button>
        </span>
      </div>
    </>
  )
}

function Laporkan() {
  const [step, setStep] = useState(0)
  const [pilihMasalah, setPilihMasalah] = useState('')
  const [detailLaporan, setDetailLaporan] = useState('')
  const [fotoLaporan, setFotoLaporan] = useState('')

  const onSubmit = () => {
    setStep(3)
    console.group()
    console.log('pilihMasalah', pilihMasalah)
    console.log('detailLaporan', detailLaporan)
    console.log('fotoLaporan', fotoLaporan)
    console.groupEnd()
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      {step === 0 && <LaporkanPage step={setStep} />}
      {step === 1 && <FormSatu step={setStep} data={setPilihMasalah} />}
      {step === 2 && (
        <FormDua
          step={setStep}
          data={setDetailLaporan}
          data2={setFotoLaporan}
          submit={onSubmit}
        />
      )}
      {step === 3 && <FormTiga step={setStep} />}
    </div>
  )
}

export default Laporkan
