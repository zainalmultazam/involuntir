const NotifIcon = (props) => (
  <svg
    width='24'
    height='26'
    viewBox='0 0 24 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 13.2399H15.4'
      stroke={props.active ? '#E7513B' : '#717171'}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 18.0399H12.256'
      stroke={props.active ? '#E7513B' : '#717171'}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.4 5.8H14.2C16.6 5.8 16.6 4.6 16.6 3.4C16.6 1 15.4 1 14.2 1H9.4C8.2 1 7 1 7 3.4C7 5.8 8.2 5.8 9.4 5.8Z'
      stroke={props.active ? '#E7513B' : '#717171'}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.6 3.42403C20.596 3.64003 22.6 5.11603 22.6 10.6V17.8C22.6 22.6 21.4 25 15.4 25H8.2C2.2 25 1 22.6 1 17.8V10.6C1 5.12803 3.004 3.64003 7 3.42403'
      stroke={props.active ? '#E7513B' : '#717171'}
      strokeWidth='2'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default NotifIcon;
