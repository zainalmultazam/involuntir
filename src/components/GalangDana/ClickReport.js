import React from 'react'
import { Link, useParams } from 'react-router-dom'

const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

const ClickReport = ({ onClickOutside, status }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)

  const { slug } = useParams()

  return (
    <div className={(!status && 'hidden') + ''}>
      <div
        className="fixed bottom-0 z-50 bg-white w-full h-[169px] rounded-t-[15px] overflow-hidden"
        ref={clickRef}
        style={{ maxWidth: '430px' }}
      >
        <div className="flex justify-center items-center pt-[20px]">
          <hr
            className="w-[40px] rounded-full"
            style={{ border: '2px solid #E4E4E4' }}
          />
        </div>
        <div className="mx-[20px]">
          <div className="flex py-[24px]">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#212121"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 8.75C8 7.75 9.63 7.75 10.64 8.75"
                stroke="#212121"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.36 8.75C14.36 7.75 15.99 7.75 17 8.75"
                stroke="#212121"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.4 17.6998H15.6C16.1 17.6998 16.5 17.2998 16.5 16.7998C16.5 14.3098 14.49 12.2998 12 12.2998C9.51 12.2998 7.5 14.3098 7.5 16.7998C7.5 17.2998 7.9 17.6998 8.4 17.6998Z"
                stroke="#212121"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-normal text-base ml-[14px]">
              Tidak tertarik dengan galang dana ini
            </p>
          </div>
          <hr />
          <Link to={`${slug}/laporkan`}>
            <div className="flex py-[24px]">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.15002 2V22"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002"
                  stroke="#212121"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-normal text-base ml-[14px]">
                Laporkan galang dana
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClickReport
