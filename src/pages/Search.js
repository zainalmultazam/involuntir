import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import SkeletonDonasi from 'components/SkeletonLoading/SkeletonDonasi'
import CardDonasi from 'components/Landing/search/CardDonasi'
import { API_URL } from 'config/api'
import CardUser from 'components/Landing/search/CardUser'

function Search() {
  const [input, setInput] = useState('')
  const [searchInput] = useDebounce(input, 500)
  const [searchStatus, setSearchStatus] = useState('idle')
  const [searchResultUsers, setSearchResultUsers] = useState([])
  const [searchResultGalangdana, setSearchResultGalangdana] = useState([])

  function handleInputChange(e) {
    setSearchResultGalangdana([])
    setSearchResultUsers([])
    setSearchStatus('pending')
    setInput(e.target.value)
  }

  const doSearch = async (str) => {
    await axios
      .get(`${API_URL}/api/search?keyword=${str}`)
      .then((res) => {
        setSearchStatus('got')
        setSearchResultUsers(res.data.data.users)
        setSearchResultGalangdana(res.data.data.galangdana)
        if (
          res.data.data.users.length === 0 &&
          res.data.data.galangdana.length === 0
        ) {
          setSearchStatus('notfound')
        }
      })
      .catch((err) => {
        setSearchResultGalangdana([])
        setSearchResultUsers([])
        setSearchStatus('failed')
      })
  }

  useEffect(() => {
    if (searchInput) {
      doSearch(searchInput)
    }
    if (!input) {
      setSearchStatus('idle')
    }
  }, [searchInput]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div
        className="fixed z-20 h-[72px] max-w-[430px] w-full flex items-center top-0 bg-white px-[20px]"
        style={{
          boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)',
        }}
      >
        <Link to="/">
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
        </Link>
        <input
          type="text"
          autoFocus
          id="slug"
          className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
          placeholder="cari"
          value={input}
          onChange={handleInputChange}
        />
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setInput('')}
          className="cursor-pointer"
        >
          <path
            d="M1 15L15 1"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 15L1 1"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="mt-[96px] mx-[20px]">
        {searchStatus === 'got' ? (
          <div>
            {searchResultGalangdana.length > 0 && (
              <>
                <h1 className="text-base font-medium">Galang Dana</h1>
                {searchResultGalangdana
                  .filter((item, index) => index <= 2)
                  .map((value, i) => (
                    <div key={i}>
                      <CardDonasi value={value} />
                    </div>
                  ))}
              </>
            )}
            {searchResultUsers.length > 0 && (
              <>
                <h1 className="text-base font-medium">
                  Akun Organisasi atau Pribadi
                </h1>
                {searchResultUsers
                  .filter((item, index) => index <= 2)
                  .map((value, i) => (
                    <div key={i}>
                      <CardUser value={value} />
                    </div>
                  ))}
              </>
            )}
          </div>
        ) : searchStatus === 'idle' ? (
          <p className="text-center text-[16px] text-slate-100">
            Silahkan masukkan kata kunci
          </p>
        ) : searchStatus === 'pending' ? (
          <div>
            {[1, 2, 3].map((i) => (
              <div key={i}>
                <SkeletonDonasi />
              </div>
            ))}
          </div>
        ) : searchStatus === 'notfound' ? (
          <p className="text-center text-[16px] text-slate-100">
            Tidak ada hasil pencarian
          </p>
        ) : (
          <p className="text-center text-[16px] text-slate-100">
            Maaf, terjadi kesalahan saat melakukan pencarian
          </p>
        )}
      </div>
    </div>
  )
}

export default Search
