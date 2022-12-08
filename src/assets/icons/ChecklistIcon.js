const ChecklistIcon = (props) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.444 9.256H19.744"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25598 9.25601L7.15598 10.156L9.85598 7.45601"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.444 17.656H19.744"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25598 17.656L7.15598 18.556L9.85598 15.856"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.4 25H16.6C22.6 25 25 22.6 25 16.6V9.4C25 3.4 22.6 1 16.6 1H9.4C3.4 1 1 3.4 1 9.4V16.6C1 22.6 3.4 25 9.4 25Z"
      stroke={props.active ? '#0288D1' : '#717171'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChecklistIcon
