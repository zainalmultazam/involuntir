import { Link } from 'react-router-dom'
import { getToken } from 'utils/cookiesHooks'

const Header = () => {
  return (
    <div className="px-4 mb-normal-space mt-7 flex justify-between">
      <div className="block">
        <svg
          width="23"
          height="48"
          viewBox="0 0 23 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              opacity="0.9"
              d="M11.3898 25.2203L22.7796 48H0L11.3898 25.2203Z"
              fill="#212121"
            />
            <path
              d="M11.3898 22.7796C17.6802 22.7796 22.7796 17.6802 22.7796 11.3898C22.7796 5.0994 17.6802 0 11.3898 0C5.0994 0 0 5.0994 0 11.3898C0 17.6802 5.0994 22.7796 11.3898 22.7796Z"
              fill="#0288D1"
            />
          </g>
        </svg>
      </div>
      <div className="flex">
        {/* SEARCH */}
        <Link to="/search">
          <div className="ml-3">
            <div className="w-[48px] h-[48px] bg-involuntir-bgicon rounded-full flex justify-center items-center">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                  stroke="#0288D1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L17.2 17.2"
                  stroke="#0288D1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
        {/* NOTIFIKASI */}
        {/* <div className="ml-3">
          <Link to="/notifikasi">
            <div className="w-[48px] h-[48px] bg-involuntir-bgicon rounded-full flex justify-center items-center">
              <img
                src="/icon/landing-page/bell.svg"
                className="rounded-full mx-w-[45px] mx-h-[48px]"
                alt=""
              />
            </div>
          </Link>
        </div> */}
        {/* SIMPAN */}
        <div className="ml-3">
          <Link to={getToken() ? '/simpan' : '/login'}>
            <div className="w-[48px] h-[48px] bg-involuntir-bgicon rounded-full flex justify-center items-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.7393 20.909C12.3955 21.0303 11.8292 21.0303 11.4854 20.909C8.55281 19.9079 2 15.7315 2 8.65281C2 5.52809 4.51798 3 7.62247 3C9.46292 3 11.091 3.88989 12.1124 5.26517C13.1337 3.88989 14.7719 3 16.6022 3C19.7067 3 22.2247 5.52809 22.2247 8.65281C22.2247 15.7315 15.6719 19.9079 12.7393 20.909Z"
                  fill="#0288D1"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
