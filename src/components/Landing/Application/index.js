export const Application = () => {
  return (
    <div className="p-main">
      <div className="flex flex-col justify-center text-center">
        <p style={{ fontSize: '18px', marginBottom: '17px' }}>
          Download Aplikasi Peduly
        </p>
        <p
          style={{
            fontSize: '16px',
            marginBottom: '23px',
            color: '#717171',
          }}
        >
          Satu aplikasi ribuan kebaikan. lebih cepat dan tidak memakan banyak
          memori ponsel.
        </p>
        <div
          className="flex flex-row justify-center"
          style={{ marginBottom: '54px' }}
        >
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.peduly.pedulywebview"
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  width: '135px',
                  marginRight: '8px',
                }}
                src="/icon/landing-page/Google Play.svg"
                alt=""
              />
            </a>
          </div>
          {/* <div>
            <img
              style={{ width: "120px" }}
              src="/icon/landing-page/App Store.svg"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}
