import { useEffect } from 'react'
import { useState } from 'react'
import splitInDots from 'utils/splitDots'

function Biaya() {
  const [biaya, setBiaya] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [hidden2, setHidden2] = useState(false)
  const [hidden3, setHidden3] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <div className="sticky top-0">
        <div className="relative ">
          <img
            src="/images/biaya.png"
            alt=""
            className="object-cover h-[340px]"
          />
          <h1 className="absolute text-xl xs:text-2xl  font-bold text-white bottom-0 mx-[42px] mb-[66px]">
            Transparansi Biaya <br />
            Maksimalkan Galang Dana
          </h1>
        </div>
      </div>
      <div className="rounded-t-[30px] bg-white  w-full relative -top-11 shadow-sm">
        <div className="mx-[20px] relative space-y-5">
          <div className="pt-[30px] flex justify-center items-center ">
            <hr className="w-[40px]  h-[4px] rounded-full bg-[#E4E4E4] " />
          </div>
          <div
            className="flex rounded-[15px] py-[29px] items-center"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <span className="w-[36px] h-[49px] ml-[20px] flex items-center">
              <svg
                width={34}
                height={28}
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.0195 14.1328C33.0195 16.207 32.8555 18.0645 32.5273 19.7051C32.2109 21.334 31.707 22.7168 31.0156 23.8535C30.3242 24.9902 29.4219 25.8574 28.3086 26.4551C27.1953 27.0527 25.8477 27.3516 24.2656 27.3516C22.2852 27.3516 20.6504 26.8301 19.3613 25.7871C18.0723 24.7324 17.1172 23.2207 16.4961 21.252C15.875 19.2715 15.5645 16.8984 15.5645 14.1328C15.5645 11.3672 15.8457 9 16.4082 7.03125C16.9824 5.05078 17.9082 3.5332 19.1855 2.47852C20.4629 1.42383 22.1562 0.896484 24.2656 0.896484C26.2578 0.896484 27.8984 1.42383 29.1875 2.47852C30.4883 3.52148 31.4492 5.0332 32.0703 7.01367C32.7031 8.98242 33.0195 11.3555 33.0195 14.1328ZM19.7305 14.1328C19.7305 16.3008 19.8711 18.1113 20.1523 19.5645C20.4453 21.0176 20.9258 22.1074 21.5938 22.834C22.2617 23.5488 23.1523 23.9062 24.2656 23.9062C25.3789 23.9062 26.2695 23.5488 26.9375 22.834C27.6055 22.1191 28.0859 21.0352 28.3789 19.582C28.6836 18.1289 28.8359 16.3125 28.8359 14.1328C28.8359 11.9766 28.6895 10.1719 28.3965 8.71875C28.1035 7.26562 27.623 6.17578 26.9551 5.44922C26.2871 4.71094 25.3906 4.3418 24.2656 4.3418C23.1406 4.3418 22.2441 4.71094 21.5762 5.44922C20.9199 6.17578 20.4453 7.26562 20.1523 8.71875C19.8711 10.1719 19.7305 11.9766 19.7305 14.1328Z"
                  fill="#E7513B"
                />
                <path
                  d="M2.48633 1.43359C3.18945 1.43359 3.76953 1.52148 4.22656 1.69727C4.6875 1.86914 5.03125 2.13281 5.25781 2.48828C5.48438 2.84375 5.59766 3.29688 5.59766 3.84766C5.59766 4.30078 5.51562 4.67969 5.35156 4.98438C5.1875 5.28516 4.97266 5.5293 4.70703 5.7168C4.44141 5.9043 4.1582 6.04883 3.85742 6.15039L6.20703 10H5.04688L2.94922 6.42578H1.16797V10H0.171875V1.43359H2.48633ZM2.42773 2.29492H1.16797V5.58203H2.52734C3.22656 5.58203 3.74023 5.43945 4.06836 5.1543C4.40039 4.86914 4.56641 4.44922 4.56641 3.89453C4.56641 3.3125 4.39062 2.90039 4.03906 2.6582C3.69141 2.41602 3.1543 2.29492 2.42773 2.29492ZM10.4492 3.46094C11.25 3.46094 11.8887 3.73633 12.3652 4.28711C12.8418 4.83789 13.0801 5.66602 13.0801 6.77148C13.0801 7.50195 12.9707 8.11523 12.752 8.61133C12.5332 9.10742 12.2246 9.48242 11.8262 9.73633C11.4316 9.99023 10.9648 10.1172 10.4258 10.1172C10.0859 10.1172 9.78711 10.0723 9.5293 9.98242C9.27148 9.89258 9.05078 9.77148 8.86719 9.61914C8.68359 9.4668 8.53125 9.30078 8.41016 9.12109H8.33984C8.35156 9.27344 8.36523 9.45703 8.38086 9.67188C8.40039 9.88672 8.41016 10.0742 8.41016 10.2344V12.8711H7.43164V3.57812H8.23438L8.36328 4.52734H8.41016C8.53516 4.33203 8.6875 4.1543 8.86719 3.99414C9.04688 3.83008 9.26562 3.70117 9.52344 3.60742C9.78516 3.50977 10.0938 3.46094 10.4492 3.46094ZM10.2793 4.28125C9.83398 4.28125 9.47461 4.36719 9.20117 4.53906C8.93164 4.71094 8.73438 4.96875 8.60938 5.3125C8.48438 5.65234 8.41797 6.08008 8.41016 6.5957V6.7832C8.41016 7.32617 8.46875 7.78516 8.58594 8.16016C8.70703 8.53516 8.9043 8.82031 9.17773 9.01562C9.45508 9.21094 9.82617 9.30859 10.291 9.30859C10.6895 9.30859 11.0215 9.20117 11.2871 8.98633C11.5527 8.77148 11.75 8.47266 11.8789 8.08984C12.0117 7.70312 12.0781 7.25977 12.0781 6.75977C12.0781 6.00195 11.9297 5.40039 11.6328 4.95508C11.3398 4.50586 10.8887 4.28125 10.2793 4.28125Z"
                  fill="#E7513B"
                />
              </svg>
            </span>
            <span className="ml-[16px] mr-[34px]">
              <h3 className="text-sm font-bold">
                Tidak ada biaya untuk galang dana
              </h3>
              <p className="text-sm font-normal">
                Tidak ada biaya apapun untuk membuat dan mengelola galang dana
              </p>
            </span>
          </div>
          <div
            className="flex rounded-[15px] py-[29px] items-center"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <span className="w-[36px] h-[49px] ml-[20px] flex items-center">
              <svg
                width={34}
                height={28}
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.0195 14.1328C33.0195 16.207 32.8555 18.0645 32.5273 19.7051C32.2109 21.334 31.707 22.7168 31.0156 23.8535C30.3242 24.9902 29.4219 25.8574 28.3086 26.4551C27.1953 27.0527 25.8477 27.3516 24.2656 27.3516C22.2852 27.3516 20.6504 26.8301 19.3613 25.7871C18.0723 24.7324 17.1172 23.2207 16.4961 21.252C15.875 19.2715 15.5645 16.8984 15.5645 14.1328C15.5645 11.3672 15.8457 9 16.4082 7.03125C16.9824 5.05078 17.9082 3.5332 19.1855 2.47852C20.4629 1.42383 22.1562 0.896484 24.2656 0.896484C26.2578 0.896484 27.8984 1.42383 29.1875 2.47852C30.4883 3.52148 31.4492 5.0332 32.0703 7.01367C32.7031 8.98242 33.0195 11.3555 33.0195 14.1328ZM19.7305 14.1328C19.7305 16.3008 19.8711 18.1113 20.1523 19.5645C20.4453 21.0176 20.9258 22.1074 21.5938 22.834C22.2617 23.5488 23.1523 23.9062 24.2656 23.9062C25.3789 23.9062 26.2695 23.5488 26.9375 22.834C27.6055 22.1191 28.0859 21.0352 28.3789 19.582C28.6836 18.1289 28.8359 16.3125 28.8359 14.1328C28.8359 11.9766 28.6895 10.1719 28.3965 8.71875C28.1035 7.26562 27.623 6.17578 26.9551 5.44922C26.2871 4.71094 25.3906 4.3418 24.2656 4.3418C23.1406 4.3418 22.2441 4.71094 21.5762 5.44922C20.9199 6.17578 20.4453 7.26562 20.1523 8.71875C19.8711 10.1719 19.7305 11.9766 19.7305 14.1328Z"
                  fill="#E7513B"
                />
                <path
                  d="M2.48633 1.43359C3.18945 1.43359 3.76953 1.52148 4.22656 1.69727C4.6875 1.86914 5.03125 2.13281 5.25781 2.48828C5.48438 2.84375 5.59766 3.29688 5.59766 3.84766C5.59766 4.30078 5.51562 4.67969 5.35156 4.98438C5.1875 5.28516 4.97266 5.5293 4.70703 5.7168C4.44141 5.9043 4.1582 6.04883 3.85742 6.15039L6.20703 10H5.04688L2.94922 6.42578H1.16797V10H0.171875V1.43359H2.48633ZM2.42773 2.29492H1.16797V5.58203H2.52734C3.22656 5.58203 3.74023 5.43945 4.06836 5.1543C4.40039 4.86914 4.56641 4.44922 4.56641 3.89453C4.56641 3.3125 4.39062 2.90039 4.03906 2.6582C3.69141 2.41602 3.1543 2.29492 2.42773 2.29492ZM10.4492 3.46094C11.25 3.46094 11.8887 3.73633 12.3652 4.28711C12.8418 4.83789 13.0801 5.66602 13.0801 6.77148C13.0801 7.50195 12.9707 8.11523 12.752 8.61133C12.5332 9.10742 12.2246 9.48242 11.8262 9.73633C11.4316 9.99023 10.9648 10.1172 10.4258 10.1172C10.0859 10.1172 9.78711 10.0723 9.5293 9.98242C9.27148 9.89258 9.05078 9.77148 8.86719 9.61914C8.68359 9.4668 8.53125 9.30078 8.41016 9.12109H8.33984C8.35156 9.27344 8.36523 9.45703 8.38086 9.67188C8.40039 9.88672 8.41016 10.0742 8.41016 10.2344V12.8711H7.43164V3.57812H8.23438L8.36328 4.52734H8.41016C8.53516 4.33203 8.6875 4.1543 8.86719 3.99414C9.04688 3.83008 9.26562 3.70117 9.52344 3.60742C9.78516 3.50977 10.0938 3.46094 10.4492 3.46094ZM10.2793 4.28125C9.83398 4.28125 9.47461 4.36719 9.20117 4.53906C8.93164 4.71094 8.73438 4.96875 8.60938 5.3125C8.48438 5.65234 8.41797 6.08008 8.41016 6.5957V6.7832C8.41016 7.32617 8.46875 7.78516 8.58594 8.16016C8.70703 8.53516 8.9043 8.82031 9.17773 9.01562C9.45508 9.21094 9.82617 9.30859 10.291 9.30859C10.6895 9.30859 11.0215 9.20117 11.2871 8.98633C11.5527 8.77148 11.75 8.47266 11.8789 8.08984C12.0117 7.70312 12.0781 7.25977 12.0781 6.75977C12.0781 6.00195 11.9297 5.40039 11.6328 4.95508C11.3398 4.50586 10.8887 4.28125 10.2793 4.28125Z"
                  fill="#E7513B"
                />
              </svg>
            </span>
            <span className="ml-[16px] mr-[34px]">
              <h3 className="text-sm font-bold">
                Dukungan donatur untuk Peduly
              </h3>
              <p className="text-sm font-normal">
                Donatur bisa berikan dukungan berupa tip untuk peduly, tapi itu
                hanya opsional.
              </p>
            </span>
          </div>
          <div
            className="flex rounded-[15px] py-[29px] items-center"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <span className="w-[36px] h-[49px] ml-[20px] flex items-center">
              <svg
                width={35}
                height={26}
                viewBox="0 0 35 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9512 20.3574H16.4707V26H12.3926V20.3574H0.703125V17.2285L12.4453 0.230469H16.4707V16.9297H19.9512V20.3574ZM12.3926 16.9297V10.5488C12.3926 10.0215 12.3984 9.48828 12.4102 8.94922C12.4336 8.39844 12.457 7.87109 12.4805 7.36719C12.5039 6.86328 12.5273 6.40039 12.5508 5.97852C12.5742 5.54492 12.5918 5.1875 12.6035 4.90625H12.4629C12.2402 5.375 11.9941 5.85547 11.7246 6.34766C11.4551 6.82812 11.168 7.29688 10.8633 7.75391L4.53516 16.9297H12.3926Z"
                  fill="#E7513B"
                />
                <path
                  d="M25.1172 0.414062C25.8984 0.414062 26.4896 0.726562 26.8906 1.35156C27.2969 1.97135 27.5 2.84896 27.5 3.98438C27.5 5.11979 27.3047 6.00521 26.9141 6.64062C26.5234 7.27083 25.9245 7.58594 25.1172 7.58594C24.3672 7.58594 23.7917 7.27083 23.3906 6.64062C22.9948 6.00521 22.7969 5.11979 22.7969 3.98438C22.7969 2.84896 22.987 1.97135 23.3672 1.35156C23.7474 0.726562 24.3307 0.414062 25.1172 0.414062ZM25.1172 1.34375C24.6953 1.34375 24.3854 1.5651 24.1875 2.00781C23.9896 2.44531 23.8906 3.10417 23.8906 3.98438C23.8906 4.86458 23.9896 5.52865 24.1875 5.97656C24.3854 6.42448 24.6953 6.64844 25.1172 6.64844C25.5547 6.64844 25.8802 6.42448 26.0938 5.97656C26.3073 5.52865 26.4141 4.86458 26.4141 3.98438C26.4141 3.10938 26.3073 2.45052 26.0938 2.00781C25.8854 1.5651 25.5599 1.34375 25.1172 1.34375ZM32.3516 0.578125L26.0156 12H24.875L31.2109 0.578125H32.3516ZM32.0469 4.99219C32.8229 4.99219 33.4141 5.30469 33.8203 5.92969C34.2266 6.54948 34.4297 7.42708 34.4297 8.5625C34.4297 9.69271 34.2344 10.5755 33.8438 11.2109C33.4531 11.8411 32.8542 12.1562 32.0469 12.1562C31.2917 12.1562 30.7161 11.8411 30.3203 11.2109C29.9245 10.5755 29.7266 9.69271 29.7266 8.5625C29.7266 7.42708 29.9141 6.54948 30.2891 5.92969C30.6693 5.30469 31.2552 4.99219 32.0469 4.99219ZM32.0469 5.92969C31.625 5.92969 31.3151 6.14844 31.1172 6.58594C30.9193 7.02344 30.8203 7.68229 30.8203 8.5625C30.8203 9.44271 30.9193 10.1068 31.1172 10.5547C31.3151 10.9974 31.625 11.2188 32.0469 11.2188C32.4844 11.2188 32.8099 11 33.0234 10.5625C33.237 10.1198 33.3438 9.45312 33.3438 8.5625C33.3438 7.6875 33.237 7.03125 33.0234 6.59375C32.8151 6.15104 32.4896 5.92969 32.0469 5.92969Z"
                  fill="#E7513B"
                />
              </svg>
            </span>
            <span className="ml-[16px] mr-[34px]">
              <h3 className="text-sm font-bold">Biaya operasional</h3>
              <p className="text-sm font-normal">
                Peduly mengenakan biaya donasi yang terkumpul dari galang dana
                online
              </p>
            </span>
          </div>
          <div
            className="flex rounded-[15px] py-[29px] items-center"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <span className="w-[36px] h-[49px] ml-[20px] flex items-center">
              <svg
                width="34"
                height="27"
                viewBox="0 0 34 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0195 27H0.617188V23.8887L7.2793 17.1387C8.56836 15.8262 9.62891 14.6953 10.4609 13.7461C11.293 12.7852 11.9082 11.877 12.3066 11.0215C12.7168 10.166 12.9219 9.23438 12.9219 8.22656C12.9219 6.98438 12.5645 6.04688 11.8496 5.41406C11.1348 4.76953 10.1914 4.44727 9.01953 4.44727C7.90625 4.44727 6.875 4.66992 5.92578 5.11523C4.98828 5.54883 4.01562 6.16992 3.00781 6.97852L0.740234 4.25391C1.45508 3.64453 2.2168 3.08789 3.02539 2.58398C3.8457 2.08008 4.75977 1.68164 5.76758 1.38867C6.77539 1.08398 7.92383 0.931641 9.21289 0.931641C10.8418 0.931641 12.248 1.22461 13.4316 1.81055C14.6152 2.38477 15.5234 3.1875 16.1562 4.21875C16.8008 5.25 17.123 6.45117 17.123 7.82227C17.123 9.20508 16.8477 10.4824 16.2969 11.6543C15.7461 12.8262 14.9609 13.9863 13.9414 15.1348C12.9219 16.2715 11.709 17.5078 10.3027 18.8438L5.85547 23.1855V23.3789H18.0195V27Z"
                  fill="#E7513B"
                />
                <path
                  d="M24.1172 1.41406C24.8984 1.41406 25.4896 1.72656 25.8906 2.35156C26.2969 2.97135 26.5 3.84896 26.5 4.98438C26.5 6.11979 26.3047 7.00521 25.9141 7.64062C25.5234 8.27083 24.9245 8.58594 24.1172 8.58594C23.3672 8.58594 22.7917 8.27083 22.3906 7.64062C21.9948 7.00521 21.7969 6.11979 21.7969 4.98438C21.7969 3.84896 21.987 2.97135 22.3672 2.35156C22.7474 1.72656 23.3307 1.41406 24.1172 1.41406ZM24.1172 2.34375C23.6953 2.34375 23.3854 2.5651 23.1875 3.00781C22.9896 3.44531 22.8906 4.10417 22.8906 4.98438C22.8906 5.86458 22.9896 6.52865 23.1875 6.97656C23.3854 7.42448 23.6953 7.64844 24.1172 7.64844C24.5547 7.64844 24.8802 7.42448 25.0938 6.97656C25.3073 6.52865 25.4141 5.86458 25.4141 4.98438C25.4141 4.10938 25.3073 3.45052 25.0938 3.00781C24.8854 2.5651 24.5599 2.34375 24.1172 2.34375ZM31.3516 1.57812L25.0156 13H23.875L30.2109 1.57812H31.3516ZM31.0469 5.99219C31.8229 5.99219 32.4141 6.30469 32.8203 6.92969C33.2266 7.54948 33.4297 8.42708 33.4297 9.5625C33.4297 10.6927 33.2344 11.5755 32.8438 12.2109C32.4531 12.8411 31.8542 13.1562 31.0469 13.1562C30.2917 13.1562 29.7161 12.8411 29.3203 12.2109C28.9245 11.5755 28.7266 10.6927 28.7266 9.5625C28.7266 8.42708 28.9141 7.54948 29.2891 6.92969C29.6693 6.30469 30.2552 5.99219 31.0469 5.99219ZM31.0469 6.92969C30.625 6.92969 30.3151 7.14844 30.1172 7.58594C29.9193 8.02344 29.8203 8.68229 29.8203 9.5625C29.8203 10.4427 29.9193 11.1068 30.1172 11.5547C30.3151 11.9974 30.625 12.2188 31.0469 12.2188C31.4844 12.2188 31.8099 12 32.0234 11.5625C32.237 11.1198 32.3438 10.4531 32.3438 9.5625C32.3438 8.6875 32.237 8.03125 32.0234 7.59375C31.8151 7.15104 31.4896 6.92969 31.0469 6.92969Z"
                  fill="#E7513B"
                />
              </svg>
            </span>
            <span className="ml-[16px] mr-[34px]">
              <h3 className="text-sm font-bold">Biaya transaksi</h3>
              <p className="text-sm font-normal">
                Biaya yang dikenakan oleh penyelenggara transaksi dengan nominal
                berbeda sesuai ketentuan setiap partner Peduly
              </p>
            </span>
          </div>
          <div
            className="flex rounded-[15px] py-[29px] items-center"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.06)' }}
          >
            <span className="w-[55px] h-[49px] ml-[10px] flex items-center">
              <svg
                width={52}
                height={28}
                viewBox="0 0 52 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7637 27H7.61523V10.459C7.61523 9.9082 7.62109 9.35742 7.63281 8.80664C7.64453 8.25586 7.65625 7.7168 7.66797 7.18945C7.69141 6.66211 7.7207 6.1582 7.75586 5.67773C7.50977 5.94727 7.20508 6.24023 6.8418 6.55664C6.49023 6.87305 6.11523 7.20117 5.7168 7.54102L2.76367 9.89648L0.689453 7.27734L8.31836 1.30078H11.7637V27ZM37.6211 14.1328C37.6211 16.207 37.457 18.0645 37.1289 19.7051C36.8125 21.334 36.3086 22.7168 35.6172 23.8535C34.9258 24.9902 34.0234 25.8574 32.9102 26.4551C31.7969 27.0527 30.4492 27.3516 28.8672 27.3516C26.8867 27.3516 25.252 26.8301 23.9629 25.7871C22.6738 24.7324 21.7188 23.2207 21.0977 21.252C20.4766 19.2715 20.166 16.8984 20.166 14.1328C20.166 11.3672 20.4473 9 21.0098 7.03125C21.584 5.05078 22.5098 3.5332 23.7871 2.47852C25.0645 1.42383 26.7578 0.896484 28.8672 0.896484C30.8594 0.896484 32.5 1.42383 33.7891 2.47852C35.0898 3.52148 36.0508 5.0332 36.6719 7.01367C37.3047 8.98242 37.6211 11.3555 37.6211 14.1328ZM24.332 14.1328C24.332 16.3008 24.4727 18.1113 24.7539 19.5645C25.0469 21.0176 25.5273 22.1074 26.1953 22.834C26.8633 23.5488 27.7539 23.9062 28.8672 23.9062C29.9805 23.9062 30.8711 23.5488 31.5391 22.834C32.207 22.1191 32.6875 21.0352 32.9805 19.582C33.2852 18.1289 33.4375 16.3125 33.4375 14.1328C33.4375 11.9766 33.291 10.1719 32.998 8.71875C32.7051 7.26562 32.2246 6.17578 31.5566 5.44922C30.8887 4.71094 29.9922 4.3418 28.8672 4.3418C27.7422 4.3418 26.8457 4.71094 26.1777 5.44922C25.5215 6.17578 25.0469 7.26562 24.7539 8.71875C24.4727 10.1719 24.332 11.9766 24.332 14.1328Z"
                  fill="#E7513B"
                />
                <path
                  d="M42.1172 1.41406C42.8984 1.41406 43.4896 1.72656 43.8906 2.35156C44.2969 2.97135 44.5 3.84896 44.5 4.98438C44.5 6.11979 44.3047 7.00521 43.9141 7.64062C43.5234 8.27083 42.9245 8.58594 42.1172 8.58594C41.3672 8.58594 40.7917 8.27083 40.3906 7.64062C39.9948 7.00521 39.7969 6.11979 39.7969 4.98438C39.7969 3.84896 39.987 2.97135 40.3672 2.35156C40.7474 1.72656 41.3307 1.41406 42.1172 1.41406ZM42.1172 2.34375C41.6953 2.34375 41.3854 2.5651 41.1875 3.00781C40.9896 3.44531 40.8906 4.10417 40.8906 4.98438C40.8906 5.86458 40.9896 6.52865 41.1875 6.97656C41.3854 7.42448 41.6953 7.64844 42.1172 7.64844C42.5547 7.64844 42.8802 7.42448 43.0938 6.97656C43.3073 6.52865 43.4141 5.86458 43.4141 4.98438C43.4141 4.10938 43.3073 3.45052 43.0938 3.00781C42.8854 2.5651 42.5599 2.34375 42.1172 2.34375ZM49.3516 1.57812L43.0156 13H41.875L48.2109 1.57812H49.3516ZM49.0469 5.99219C49.8229 5.99219 50.4141 6.30469 50.8203 6.92969C51.2266 7.54948 51.4297 8.42708 51.4297 9.5625C51.4297 10.6927 51.2344 11.5755 50.8438 12.2109C50.4531 12.8411 49.8542 13.1562 49.0469 13.1562C48.2917 13.1562 47.7161 12.8411 47.3203 12.2109C46.9245 11.5755 46.7266 10.6927 46.7266 9.5625C46.7266 8.42708 46.9141 7.54948 47.2891 6.92969C47.6693 6.30469 48.2552 5.99219 49.0469 5.99219ZM49.0469 6.92969C48.625 6.92969 48.3151 7.14844 48.1172 7.58594C47.9193 8.02344 47.8203 8.68229 47.8203 9.5625C47.8203 10.4427 47.9193 11.1068 48.1172 11.5547C48.3151 11.9974 48.625 12.2188 49.0469 12.2188C49.4844 12.2188 49.8099 12 50.0234 11.5625C50.237 11.1198 50.3438 10.4531 50.3438 9.5625C50.3438 8.6875 50.237 8.03125 50.0234 7.59375C49.8151 7.15104 49.4896 6.92969 49.0469 6.92969Z"
                  fill="#E7513B"
                />
              </svg>
            </span>
            <span className="ml-[7px] mr-[34px]">
              <h3 className="text-sm font-bold">
                Tidak ada biaya untuk galang dana
              </h3>
              <p className="text-sm font-normal">
                Tidak ada biaya apapun untuk membuat dan mengelola galang dana
              </p>
            </span>
          </div>
        </div>
        <div
          className="h-[381px] relative mt-[30px] "
          style={{ backgroundColor: 'rgba(231, 81, 59, 0.12)' }}
        >
          <div className="absolute top-0 text-center w-full">
            <h3 className="mt-[57px] text-xs font-normal">
              Mari kita hitung bersama
            </h3>
            <h1 className="mt-[7px] text-base font-normal">
              Jika kamu berhasil galang dana sebanyak
            </h1>
            <div className="w-full flex justify-center mt-[14px]">
              <div className="items-center px-[20px] w-full max-w-[240px] rounded-full bg-white flex h-[40px]">
                <select
                  id="select"
                  className="w-full focus:ring-transparent border-none text-[#E7513B] text-2xl font-medium  outline-none bg-transparent"
                  onChange={(e) => setBiaya(e.target.value)}
                >
                  <option value="1000000" selected>
                    Rp 1.000.000
                  </option>
                  <option value="5000000">Rp 5.000.000</option>
                  <option value="10000000">Rp 10.000.000</option>
                  <option value="50000000">Rp 50.000.000</option>
                  <option value="100000000">Rp 100.000.000</option>
                </select>
              </div>
            </div>
            <h1 className="mt-[12px] text-base font-normal">
              Maka kamu akan menerima sejumlah
            </h1>
            <div className="w-full flex justify-center mt-[14px]">
              <div className=" px-[20px] w-full max-w-[240px] rounded-full bg-white flex h-[40px] items-center">
                <h1 className="w-full text-[#E7513B] text-2xl font-medium  bg-transparent">
                  {biaya === 0
                    ? 'Rp 930.000'
                    : 'Rp ' +
                      splitInDots(
                        (
                          biaya -
                          (biaya * 5) / 100 -
                          (biaya * 2) / 100
                        ).toString()
                      )}
                </h1>
              </div>
            </div>
          </div>
          <p className="text-xs font-normal text-left absolute bottom-2 mx-[23px]">
            Biaya operasional 5%: Rp{' '}
            {biaya === 0
              ? '50.000'
              : splitInDots(((biaya * 5) / 100).toString())}
            <br />
            BIaya transaksi 2%: Rp{' '}
            {biaya === 0
              ? '20.000'
              : splitInDots(((biaya * 2) / 100).toString())}{' '}
            (tergantung jenis pembayaran)
          </p>
        </div>
        <div className="flex flex-col justify-center w-full items-center mt-[38px]">
          <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.9597 21.58V29.58C35.9597 30.1 35.9396 30.6 35.8796 31.08C35.4196 36.48 32.2396 39.16 26.3796 39.16H25.5796C25.0796 39.16 24.5996 39.4 24.2996 39.8L21.8997 43C20.8397 44.42 19.1196 44.42 18.0596 43L15.6596 39.8C15.3996 39.46 14.8196 39.16 14.3796 39.16H13.5797C7.19965 39.16 3.99963 37.58 3.99963 29.58V21.58C3.99963 15.72 6.69965 12.54 12.0797 12.08C12.5597 12.02 13.0597 12 13.5797 12H26.3796C32.7596 12 35.9597 15.2 35.9597 21.58Z"
              stroke="#E7513B"
              strokeWidth="2.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.9597 13.5803V21.5803C43.9597 27.4603 41.2597 30.6203 35.8797 31.0803C35.9397 30.6003 35.9597 30.1003 35.9597 29.5803V21.5803C35.9597 15.2003 32.7597 12.0002 26.3797 12.0002H13.5797C13.0597 12.0002 12.5597 12.0203 12.0797 12.0803C12.5397 6.70026 15.7197 4.00024 21.5797 4.00024H34.3797C40.7597 4.00024 43.9597 7.20026 43.9597 13.5803Z"
              stroke="#E7513B"
              strokeWidth="2.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.9914 26.5H27.0094"
              stroke="#E7513B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9906 26.5H20.0086"
              stroke="#E7513B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.991 26.5H13.009"
              stroke="#E7513B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="mt-[24px] text-lg font-semibold">
            Pertanyaan yang sering diajukan
          </h1>
        </div>
        <div className="h-[900px] mt-[24px] mx-[20px]">
          <hr />
          <div
            className="flex items-center justify-between py-[27px] cursor-pointer"
            onClick={() => setHidden(!hidden)}
          >
            <h1>Dari mana biaya operasioanal Peduly?</h1>
            <span>
              {hidden ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          {hidden && (
            <div className="mb-[20px]">
              <p className="text-sm font-normal leading-6">
                Peduly merupakan social enterprise yaitu perusahaan yang
                memiliki misi sosial. Peduly mengenakan biaya operasional 5%
                untuk kebutuhan biaya tim, biaya pemasaran, pengembangan
                teknologi dan overhead lainnya.
              </p>
            </div>
          )}
          <hr />
          <div
            className="flex items-center justify-between py-[27px] cursor-pointer"
            onClick={() => setHidden2(!hidden2)}
          >
            <h1>Apa itu biaya transaksi?</h1>
            <span>
              {hidden2 ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          {hidden2 && (
            <div className="mb-[20px] text-sm font-normal leading-6">
              <p>
                Biaya ini dikenakan oleh payment gateway yang bekerja sama
                dengan Peduly, artinya biaya ini langsung masuk ke partner kami
                setiap terjadi transaksi berhasil. Detail biaya transaksi
                sebagai berikut:
              </p>
              <p className="mt-[10px]">Donasi dengan metode pembayaran,</p>
              <ul className="list-disc ml-[25px]">
                <li>GOPAY: 2%</li>
                <li>VA Mandiri: Rp4.500</li>
                <li>VA Danamon: Rp4.500</li>
                <li>Transfer BCA: 0</li>
                <li>Transfer BRI: 0</li>
                <li>Uang Tunai: 0</li>
              </ul>
            </div>
          )}
          <hr />
          <div
            className="flex items-center justify-between py-[27px] cursor-pointer"
            onClick={() => setHidden3(!hidden3)}
          >
            <h1>Apa itu tip volunteer?</h1>
            <span>
              {hidden3 ? (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.08004 15.05L10.6 8.53005C11.37 7.76005 12.63 7.76005 13.4 8.53005L19.92 15.05"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                    stroke="#212121"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
          {hidden3 && (
            <div className="mb-[20px] text-sm font-normal leading-6">
              <p>
                Perlu diketahui bahwa Peduly tidak memberikan dana langsung.
                Keberhasilan galang dana ditentukan oleh Pahlawan Peduly
                (pembuat galang dana).
              </p>
              <p className="mt-[10px]">
                Kami memiliki volunteer yang tersebar diberbagai kota di
                indonesia. Kami mengerti beberapa dari penggalang dana
                membutuhkan sumber daya manusia lebih. Atas niat baik Volunteer
                Peduly untuk misi sosial, mereka mungkin akan membantumu hingga
                galang dana donasi berhasil.
              </p>
              <p className="mt-[10px]">
                Sebagai bentuk apresiasi, kita memberi tip kepada mereka (diluar
                biaya operasional). karena ini adalah misi sosial, banyak dari
                hasil tip yang volunteer dapatkan mereka kebalikan lagi ke
                galang dana yang mereka rasa membutuhkan bantuan.
              </p>
              <p className="mt-[10px]">
                Tapi tenang, hal ini tidak berlaku jika terjadi transaksi donasi
                diluar referal volunteer baik donasi online maupun offline.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Biaya
