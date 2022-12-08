import { Link } from 'react-router-dom'
import '../styles/landing.css'
const ButtonLanjut = ({ toggle, id, location, value }) => {
  if (!toggle) {
    return (
      <div className="navbar flex justify-center max-w-[430px] mb-2 ">
        <div className=" w-full block  ">
          <button className="bg-peduly-light  text-white font-bold w-full max-w-[312px]  text-[16px] rounded-base py-[15px]">
            Lanjut Donasi
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="navbar flex justify-center max-w-[430px] mb-2 ">
      <Link
        to={{
          pathname: `/${location}`,
          state: {
            id: id,
            value: value,
          },
        }}
        className="block  w-full"
      >
        <button className="bg-peduly-primary  text-white font-bold w-full max-w-[312px]  text-[16px] rounded-base py-[15px]">
          Lanjut Donasi
        </button>
      </Link>
    </div>
  )
}

export default ButtonLanjut
