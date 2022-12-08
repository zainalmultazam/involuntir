const UserIcon = (props) => (
  <svg
    width="25"
    height="26"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6551 13C16.2701 13 19.2006 10.3137 19.2006 7.00001C19.2006 3.6863 16.2701 1 12.6551 1C9.04016 1 6.10965 3.6863 6.10965 7.00001C6.10965 10.3137 9.04016 13 12.6551 13Z"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.9003 25C23.9003 20.356 18.8602 16.6 12.6551 16.6C6.45004 16.6 1.41003 20.356 1.41003 25"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default UserIcon
