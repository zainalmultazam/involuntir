import BackButton from 'components/BackButton'

function Bantuan() {
  return (
    <div style={{ maxWidth: '430px' }} className="mx-auto">
      <BackButton hrf={'1'} txt="Bantuan" />
      <div style={{ marginTop: '102px', marginBottom: '60px' }}>
        <h1 className="text-center font-medium text-xl">
          Ada yang bisa kami bantu?
        </h1>
        <div className="mx-[20px] space-y-5 mt-[30px]">
          {/* PUSAT BANTUAN */}
          <a href="https://help.peduly.com/" target="_blank" rel="noreferrer">
            <div
              className="flex items-center py-[24px] rounded-[15px]"
              style={{
                backgroundColor: 'rgba(231, 81, 59, 0.12)',
                boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <span className="w-[72px] flex justify-center items-center">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3333 9.90666V17.9067C29.3333 19.9067 28.6666 21.5733 27.4933 22.7467C26.3333 23.9067 24.6667 24.5733 22.6667 24.5733V27.4133C22.6667 28.48 21.48 29.12 20.6 28.5334L14.6667 24.5733H11.84C11.9467 24.1733 12 23.76 12 23.3333C12 21.9733 11.48 20.72 10.6267 19.7734C9.66666 18.68 8.23999 18 6.66666 18C5.17332 18 3.81333 18.6134 2.84 19.6134C2.72 19.08 2.66666 18.5067 2.66666 17.9067V9.90666C2.66666 5.90666 5.33332 3.23999 9.33332 3.23999H22.6667C26.6667 3.23999 29.3333 5.90666 29.3333 9.90666Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 23.3333C12 24.3333 11.72 25.28 11.2267 26.08C10.9467 26.56 10.5867 26.9867 10.1734 27.3333C9.24002 28.1733 8.01334 28.6667 6.66668 28.6667C4.72001 28.6667 3.02666 27.6267 2.10666 26.08C1.61333 25.28 1.33334 24.3333 1.33334 23.3333C1.33334 21.6533 2.10668 20.1467 3.33334 19.1733C4.25334 18.44 5.41334 18 6.66668 18C9.61334 18 12 20.3867 12 23.3333Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.58667 23.3333L5.90666 24.6533L8.74666 22.0267"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3333 14H20.6667"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm pr-[15px]">
                <h3 className="font-medium">Pusat Bantuan</h3>
                <p className="font-normal">FAQ yang sering diajukan pengguna</p>
              </span>
            </div>
          </a>
          {/* PERTANYAAN PERS */}
          <a href="mailto:support@peduly.com" target="_blank" rel="noreferrer">
            <div
              className="flex items-center py-[24px] rounded-[15px]"
              style={{
                boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <span className="w-[72px] flex justify-center items-center">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3333 20V12C29.3333 5.33333 26.6667 2.66666 20 2.66666H12C5.33332 2.66666 2.66666 5.33333 2.66666 12V20C2.66666 26.6667 5.33332 29.3333 12 29.3333H20C26.6667 29.3333 29.3333 26.6667 29.3333 20Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.35999 9.48H28.64"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.36 2.81333V9.29333"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.64 2.81333V8.69333"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 19.2667V17.6667C13 15.6133 14.4533 14.7733 16.2267 15.8L17.6133 16.6L19 17.4C20.7733 18.4267 20.7733 20.1067 19 21.1333L17.6133 21.9333L16.2267 22.7333C14.4533 23.76 13 22.92 13 20.8667V19.2667V19.2667Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm pr-[15px]">
                <h3 className="font-medium">Pertanyaan Pers</h3>
                <p className="font-normal">
                  Untuk pertanyaan atau keperluan media
                </p>
              </span>
            </div>
          </a>
          {/* PERMINTAAN PEMBICARA */}
          <a href="mailto:support@peduly.com" target="_blank" rel="noreferrer">
            <div
              to={{ pathname: 'mailto:support@peduly.com' }}
              className="flex items-center py-[24px] rounded-[15px]"
              style={{
                boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <span className="w-[72px] flex justify-center items-center">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2533 25.4L21.28 27.4267L25.3333 23.3733"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2133 14.4933C16.08 14.48 15.92 14.48 15.7733 14.4933C12.6 14.3867 10.08 11.7867 10.08 8.58667C10.0667 5.32 12.72 2.66667 15.9867 2.66667C19.2533 2.66667 21.9067 5.32 21.9067 8.58667C21.9067 11.7867 19.3733 14.3867 16.2133 14.4933Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9867 29.08C13.56 29.08 11.1467 28.4667 9.30669 27.24C6.08002 25.08 6.08002 21.56 9.30669 19.4133C12.9734 16.96 18.9867 16.96 22.6534 19.4133"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm pr-[15px]">
                <h3 className="font-medium">Permintaan Pembicara</h3>
                <p className="font-normal">Permintaan pembicara untuk acara</p>
              </span>
            </div>
          </a>
          {/* KARIR */}
          <a
            href="https://www.linkedin.com/company/peduly/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="flex items-center py-[24px] rounded-[15px]"
              style={{
                boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <span className="w-[72px] flex justify-center items-center">
                <svg
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.275 3.55L4.5375 8.8C3.4125 9.675 2.5 11.5375 2.5 12.95V22.2125C2.5 25.1125 4.8625 27.4875 7.7625 27.4875H22.2375C25.1375 27.4875 27.5 25.1125 27.5 22.225V13.125C27.5 11.6125 26.4875 9.67501 25.25 8.81251L17.525 3.4C15.775 2.175 12.9625 2.2375 11.275 3.55Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.625 14.375L15.375 19.625L13.375 16.625L9.375 20.625"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.125 14.375H20.625V16.875"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm pr-[15px]">
                <h3 className="font-medium">Karir</h3>
                <p className="font-normal">
                  Punya misi untuk berdampak? klik disini
                </p>
              </span>
            </div>
          </a>
          {/* LIVE CHAT */}
          <a
            href="https://wa.me/6285706611112"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="flex items-center py-[24px] rounded-[15px]"
              style={{
                boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)',
              }}
            >
              <span className="w-[72px] flex justify-center items-center">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.58 19.4246C26.1362 21.6019 24.8267 24.0605 25.1467 26.6533V26.6533C25.28 27.76 24.0933 28.5333 23.1467 27.96L17.7628 24.7605C17.6301 24.6816 17.4746 24.6406 17.3202 24.6379V24.6379C16.6416 24.6263 16.3218 23.8228 16.6303 23.2183C17.0815 22.3342 17.3333 21.3462 17.3333 20.3066C17.3333 16.52 14.0533 13.4534 9.99999 13.4534C8.82132 13.4534 7.71235 13.7089 6.72618 14.1727C6.30281 14.3718 5.78665 14.1212 5.78665 13.6533V13.6533C5.78665 7.58666 11.0533 2.66667 17.56 2.66667C24.0667 2.66667 29.3333 7.58666 29.3333 13.6533C29.3333 15.773 28.6908 17.7494 27.58 19.4246Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.3333 20.3066C17.3333 21.8933 16.7467 23.36 15.76 24.52C15.2388 25.1518 14.597 25.6941 13.8667 26.1192C11.5771 27.4519 8.79784 27.8606 6.51999 29.2133V29.2133C5.93332 29.5733 5.18665 29.08 5.26665 28.4V28.4C5.47151 26.7857 4.6533 25.2533 3.75431 23.8969C3.06361 22.8549 2.66666 21.6246 2.66666 20.3066C2.66666 17.96 3.92 15.8933 5.84 14.6667C7.02666 13.8933 8.45332 13.4534 9.99999 13.4534C14.0533 13.4534 17.3333 16.52 17.3333 20.3066Z"
                    stroke="#E7513B"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-sm pr-[15px]">
                <h3 className="font-medium">Live Chat</h3>
                <p className="font-normal">
                  Kirim pesan langsung melalui whatsapp
                </p>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bantuan
