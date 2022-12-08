import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import splitInDots from 'utils/splitDots'

const Balance = ({ pop, amount, id }) => {
  const [click, setClick] = useState(false)
  const [clickTwo, setClickTwo] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (click) setClick(false)
    if (clickTwo) setClickTwo(false)

    if (click && !clickTwo) history.push(`/profile/${id}/top-up`)
  }, [click]) // eslint-disable-line

  return (
    <div className="px-4">
      <div
        className={
          'flex box-balance rounded-2xl h-[80px] items-center px-0 xs:px-3 justify-between cursor-pointer  ' +
          (click && !clickTwo && ' border-2 border-[#e7513b] ')
        }
        onClick={() => setClick(true)}
      >
        <div className="flex flex-row">
          <div className="flex">
            <div className="w-[48px] h-[48px] px-3 background-icon rounded-full flex justify-center items-center">
              <svg
                width={22}
                height={21}
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.54 12.5046C16.12 12.9146 15.88 13.5046 15.94 14.1346C16.03 15.2146 17.02 16.0046 18.1 16.0046H20V17.1946C20 19.2646 18.31 20.9546 16.24 20.9546H4.76C2.69 20.9546 1 19.2646 1 17.1946V10.4646C1 8.3946 2.69 6.70459 4.76 6.70459H16.24C18.31 6.70459 20 8.3946 20 10.4646V11.9046H17.98C17.42 11.9046 16.91 12.1246 16.54 12.5046Z"
                  fill="#E7513B"
                />
                <path
                  d="M1 11.3644V6.79445C1 5.60445 1.73 4.54441 2.84 4.12441L10.78 1.12441C12.02 0.654406 13.35 1.57444 13.35 2.90444V6.70442"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0588 12.9247V14.9848C21.0588 15.5348 20.6188 15.9848 20.0588 16.0048H18.0988C17.0188 16.0048 16.0288 15.2148 15.9388 14.1348C15.8788 13.5048 16.1188 12.9148 16.5388 12.5048C16.9088 12.1248 17.4188 11.9048 17.9788 11.9048H20.0588C20.6188 11.9248 21.0588 12.3747 21.0588 12.9247Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 10.9546H12.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="px-4 flex flex-col">
            <h1 className="text-[20px] mb-0 text-black">
              Rp{splitInDots(String(amount))}
            </h1>
            <small className="p-0 m-0 text-[#717171]">Isi saldo dompet</small>
          </div>
        </div>
        <div className="flex mr-0 px-3">
          <button
            type="button"
            className={
              'rounded-full px-6 py-2 border-peduly-primary font-bold border-2 truncate ' +
              (clickTwo
                ? ' bg-peduly-primary text-white '
                : ' text-peduly-primary')
            }
            onClick={() => {
              setClickTwo(true)
              pop(true)
            }}
          >
            Top up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Balance
