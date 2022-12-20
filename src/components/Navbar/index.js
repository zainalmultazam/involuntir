import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getToken, removeDataDonasi, removeSlug } from 'utils/cookiesHooks'
import HomeIcon from 'assets/icons/HomeIcon'
import ChecklistIcon from 'assets/icons/ChecklistIcon'
import NotifIcon from 'assets/icons/NotifIcon'
import UserIcon from 'assets/icons/UserIcon'
import { UserContext } from 'context/UserContext'

import './index.css'

export default function NavLink() {
  const location = useLocation()
  const pathName = location.pathname
  const { user } = useContext(UserContext)

  const rmSlug = () => {
    removeSlug()
    removeDataDonasi()
  }

  return (
    <div className="fixed z-50">
      <div
        className="navbar flex justify-around items-center max-w-[430px] py-5 border-t-[1px] border-solid border-peduly-light"
        onClick={rmSlug}
      >
        <Link to={'/'}>
          <HomeIcon active={pathName === '/' ? true : false} />
        </Link>
        <Link to={'/aktivitas'}>
          <ChecklistIcon active={pathName === '/aktivitas' ? true : false} />
        </Link>
        {!getToken() ? (
          <Link to="/login">
            <UserIcon
              active={
                pathName === '/login' || pathName === '/register' ? true : false
              }
            />
          </Link>
        ) : (
          <Link
            to={`/profile/${
              user.id || window.localStorage.getItem('id-user') || '444'
            }`}
          >
            <UserIcon
              active={pathName.substring(0, 8) === '/profile' ? true : false}
            />
          </Link>
        )}
      </div>
    </div>
  )
}
