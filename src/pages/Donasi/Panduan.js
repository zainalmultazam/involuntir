import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'

function Panduan() {
  const [click, setClick] = useState(false)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)

  const history = useHistory()

  const handleOnClick = () => {
    if (!getToken()) {
      history.push('/login')
    }
    history.push('/galangdana')
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="sticky top-0">
        <div className="relative">
          <img
            src="/images/panduan.png"
            alt=""
            className="object-cover h-[331px]"
          />
          <div className="absolute bottom-0 w-full text-center mb-[59px] text-white">
            <h1 className="text-lg font-semibold">
              Mulai Ubah Dunia Mulai Galang Dana
            </h1>
            <p className="text-sm font-normal">
              Ada banyak orang baik yang siap membantumu
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-t-[30px] bg-white  w-full relative -top-10 shadow-sm">
        <div className="mx-[20px]">
          <div className="pt-[30px] flex justify-center items-center ">
            <hr className="w-[40px]  h-[4px] rounded-full bg-[#E4E4E4] " />
          </div>
          <h1 className="text-lg font-medium mt-[12px]">Tips Galang Dana</h1>
          <div
            className="flex rounded-[15px] py-[20px] px-[15px] mt-[24px]"
            style={{ backgroundColor: 'rgba(231, 81, 59, 0.12)' }}
          >
            <span>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8799 14.8266C27.8799 21.3466 23.1466 27.4533 16.6799 29.24C16.2399 29.36 15.7599 29.36 15.3199 29.24C8.8532 27.4533 4.11987 21.3466 4.11987 14.8266V8.9733C4.11987 7.87996 4.94656 6.63997 5.97323 6.22663L13.3999 3.18668C15.0665 2.50668 16.9465 2.50668 18.6132 3.18668L26.0399 6.22663C27.0532 6.63997 27.8932 7.87996 27.8932 8.9733L27.8799 14.8266Z"
                  stroke="#E7513B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9999 16.6667C17.4727 16.6667 18.6666 15.4728 18.6666 14C18.6666 12.5272 17.4727 11.3333 15.9999 11.3333C14.5272 11.3333 13.3333 12.5272 13.3333 14C13.3333 15.4728 14.5272 16.6667 15.9999 16.6667Z"
                  stroke="#E7513B"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9998 16.6667V20.6667"
                  stroke="#E7513B"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="ml-[10px] text-sm">
              <h3 className="font-semibold">
                Bagikan galang dana sesering mungkin
              </h3>
              <p className="font-normal">
                Beritahu orang disekitarmu, sebarkan ke sosial media agar galang
                dana jadi viral dan mendapatkan banyak donasi
              </p>
            </span>
          </div>
          <div
            className="flex rounded-[15px] py-[20px] px-[15px] mt-[20px]"
            style={{ backgroundColor: 'rgba(231, 81, 59, 0.12)' }}
          >
            <span>
              <svg
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.8799 14.8266C27.8799 21.3466 23.1466 27.4533 16.6799 29.24C16.2399 29.36 15.7599 29.36 15.3199 29.24C8.8532 27.4533 4.11987 21.3466 4.11987 14.8266V8.9733C4.11987 7.87996 4.94656 6.63997 5.97323 6.22663L13.3999 3.18668C15.0665 2.50668 16.9465 2.50668 18.6132 3.18668L26.0399 6.22663C27.0532 6.63997 27.8932 7.87996 27.8932 8.9733L27.8799 14.8266Z"
                  stroke="#E7513B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9999 16.6667C17.4727 16.6667 18.6666 15.4728 18.6666 14C18.6666 12.5272 17.4727 11.3333 15.9999 11.3333C14.5272 11.3333 13.3333 12.5272 13.3333 14C13.3333 15.4728 14.5272 16.6667 15.9999 16.6667Z"
                  stroke="#E7513B"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.9998 16.6667V20.6667"
                  stroke="#E7513B"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="ml-[10px] text-sm">
              <h3 className="font-semibold">Berikan ucapan terimakasih</h3>
              <p className="font-normal">
                Beritahu donatur bahwa kamu merasa senang dan berikan ucapan
                terimakasih atas bantuan yang telah mereka berikan
              </p>
            </span>
          </div>
          <div className="mt-[32px]">
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
                Apakah Peduly memberikan dana langsung?
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
            <div className={`text-sm font-light ${click && 'mb-[24px]'}`}>
              {click && (
                <span>
                  <p>Maaf, tidak.</p>
                  <p className="mt-[10px]">
                    Peduly.com hanya menyediakan sarana untuk membantu
                    menggalang dana secara online.
                  </p>
                  <p className="mt-[10px]">
                    Keberhasilan menggalang dana di Peduly bergantung pada
                    beragam faktor seperti kualitas konten, luas jaringan, dan
                    upaya dari Pahlawan Peduly (pihak yang menggalang dana).
                  </p>
                </span>
              )}
            </div>
            <hr />
            <div
              className="flex items-center justify-between  mr-[4px] py-[25px] cursor-pointer"
              onClick={() => setClick2(!click2)}
            >
              <p className="text-sm font-medium">
                Apakah galang dana di Peduly gratis?
              </p>
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
            <div className={`text-sm font-light ${click2 && 'mb-[24px]'}`}>
              {click2 && (
                <span>
                  <p>Iya, gratis.</p>
                  <p className="mt-[10px]">Tapi perlu diketahui bahwa:</p>
                  <ul className="list-disc ml-[20px]">
                    <li>
                      Peduly tidak mengenakan biaya administrasi ketika kamu
                      membuat halaman galang dana.
                    </li>
                    <li>
                      Peduly hanya mengenakan biaya administrasi dari donasi
                      online yang terkumpul.
                    </li>
                    <li>
                      Perolehan donasi yang ditampilkan pada halaman galang dana
                      merupakan total dari donasi sebelum dikenakan biaya
                      administrasi.
                    </li>
                    <li>
                      Biaya administrasi yang dikenakan Peduly dapat dilihat
                      dihalaman{' '}
                      <Link
                        to="/biaya"
                        className="text-peduly-primary cursor-pointer"
                      >
                        biaya.
                      </Link>
                    </li>
                  </ul>
                </span>
              )}
            </div>
            <hr />
            <div
              className="flex items-center justify-between  mr-[4px] py-[25px] cursor-pointer"
              onClick={() => setClick3(!click3)}
            >
              <p className="text-sm font-medium">
                Bagaimana jika donasi saya tidak mencapai target?
              </p>
              <span>
                {click3 ? (
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
            <div className={`text-sm font-light ${click3 && 'mb-[24px]'}`}>
              {click3 && (
                <span>
                  <p>
                    Kamu bisa tarik uang donasi kapan saja meskipun belum bisa
                    mencapai target.
                  </p>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-[37px] h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40 ">
          <span className="w-[90%]">
            <button
              onClick={handleOnClick}
              className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] "
            >
              Buat Galang Dana
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Panduan
