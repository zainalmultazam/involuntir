import { Link } from 'react-router-dom'

const dampak = [
  {
    id: 1,
    slug: 'volunteer-sukses',
    judul: 'Aksi Volunter di cianjur mendapat banyak apresiasi dari warga',
    foto: '',
  },
  {
    id: 2,
    slug: 'kisah-sukses',
    judul: 'Kisah sukses Galang dana surabaya dan sekitarnya',
    foto: '',
  },
  {
    id: 3,
    slug: 'kisah-tsunami-lombok',
    judul: 'kisah relawan tsunami lombok',
    foto: '',
  },
  {
    id: 4,
    slug: 'relawan-cianjur',
    judul: 'relawan gempa cianjur menyelamatkan banyak orang',
    foto: '',
  },
]

export const DampakBaik = () => {
  return (
    <div className="mb-[54px] pb-6">
      <div className="flex justify-between mx-5 mb-6">
        <p className="text-xl font-semibold text-peduly-dark">
          Lihat Dampak Baikmu
        </p>
        <div className="flex items-center">
          <Link to="/">
            <p className="text-peduly-primary text-basic font-semibold">
              Lihat semua
            </p>
          </Link>
        </div>
      </div>
      <div className="mx-5 flex overflow-x-scroll whitespace-nowrap mr-4 max-h-[230px]">
        {dampak.map((value) => (
          <div key={value.slug}>
            <div className="mr-4 relative w-[170px] h-[230px] cursor-pointer">
              <img
                src={value.foto}
                alt=""
                className="absolute z-10"
                style={{
                  height: '230px',
                  width: '170px',
                  objectFit: 'cover',
                  borderRadius: '30px',
                }}
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = '/images/involunter/defaultImage.png'
                }}
              />
              <div className="absolute z-20 w-full h-full backdrop-brightness-50 rounded-[30px]">
                <div className="flex items-center justify-center h-full">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9475 38.5C30.6125 38.5 38.4475 30.665 38.4475 21C38.4475 11.335 30.6125 3.49998 20.9475 3.49998C11.2825 3.49998 3.44749 11.335 3.44749 21C3.44749 30.665 11.2825 38.5 20.9475 38.5Z"
                      stroke="#0288D1"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.295 21.4025V18.48C15.295 14.84 17.8675 13.3525 21.0175 15.1725L23.555 16.6425L26.0925 18.1125C29.2425 19.9325 29.2425 22.9075 26.0925 24.7275L23.555 26.1975L21.0175 27.6675C17.8675 29.4875 15.295 28 15.295 24.36V21.4025Z"
                      fill="#0288D1"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute z-30 bottom-5 max-w-[170px]">
                <p className="px-5 text-base font-semibold text-white overflow-hidden overflow-ellipsis whitespace-normal line-clamp-2">
                  {value.judul}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="absolute w-full h-full "></div> */}
      </div>
    </div>
  )
}
