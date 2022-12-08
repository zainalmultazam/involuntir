import { API_URL } from 'config/api'

function GoogleLogin() {
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`
  }

  return (
    <button
      className="bg-white text-peduly-primary w-full font-medium rounded-full text-[16px] py-[18px] my-[24px] h-[60px] border-[1px] border-peduly-primary flex items-center"
      onClick={handleGoogleLogin}
    >
      <div className="w-full flex flex-row justify-center items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.9842 15.2806C29.9842 14.0515 29.8821 13.1546 29.6613 12.2245H15.2988V17.772H23.7292C23.5593 19.1506 22.6415 21.2268 20.6018 22.6219L20.5732 22.8076L25.1144 26.2453L25.429 26.276C28.3184 23.6683 29.9842 19.8315 29.9842 15.2806Z"
            fill="#4285F4"
          />
          <path
            d="M15.2989 29.8969C19.4291 29.8969 22.8964 28.5681 25.429 26.2761L20.6019 22.6219C19.3101 23.5022 17.5764 24.1168 15.2989 24.1168C11.2536 24.1168 7.82028 21.5092 6.59638 17.9049L6.41698 17.9198L1.69505 21.4908L1.6333 21.6586C4.14882 26.5417 9.3159 29.8969 15.2989 29.8969Z"
            fill="#34A853"
          />
          <path
            d="M6.59621 17.905C6.27328 16.9749 6.08638 15.9782 6.08638 14.9485C6.08638 13.9187 6.27328 12.9221 6.57922 11.992L6.57067 11.7939L1.78956 8.16553L1.63313 8.23824C0.596365 10.2646 0.00146484 12.5401 0.00146484 14.9485C0.00146484 17.3569 0.596365 19.6323 1.63313 21.6587L6.59621 17.905Z"
            fill="#FBBC05"
          />
          <path
            d="M15.2989 5.78004C18.1713 5.78004 20.1089 6.99252 21.2138 8.00576L25.531 3.8866C22.8796 1.47824 19.4291 0 15.2989 0C9.31591 0 4.14882 3.35507 1.6333 8.2382L6.5794 11.992C7.82028 8.38774 11.2536 5.78004 15.2989 5.78004Z"
            fill="#EB4335"
          />
        </svg>
        <p className="ml-[16px]">Google</p>
      </div>
    </button>
  )
}

export default GoogleLogin
