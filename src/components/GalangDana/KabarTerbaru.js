import { useState } from "react";
import moment from "moment";
import CheckIcon from "assets/icons/CheckIcon";
import Share from "assets/icons/Share";

const KabarTerbaru = ({ kabar }) => {
  const [selengkapnya, setSelengkapnya] = useState(false);

  function handleSelengkapnya() {
    setSelengkapnya(true);
  }

  return (
    <div className={`whitespace-normal mb-[10px] pt-[42px] ` + (kabar.length>0 && `pl-[40px] pr-[20px] `) + (!selengkapnya && kabar.length>0 && `relative h-[188px] overflow-hidden`)}>
      { !selengkapnya && kabar.length>0 &&
        <div className="absolute top-0 left-0 h-full w-full z-10 flex flex-col justify-between">
          <div className="h-full" style={{ background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #FFFFFF 100%)"}}>
          </div>
          <div className="pb-[32px] pl-[20px] bg-white">
            <p className="text-[16px] font-normal text-peduly-primary underline cursor-pointer" onClick={()=>handleSelengkapnya()}>Baca Selengkapnya</p>
          </div>
        </div>
      }

      { kabar.length==0 &&
        <div className="flex flex-col items-center w-full mt-[20px]">
          <img src="/icon/signpost.svg"/>
          <p className="text-[16px] text-[#717171] mt-[24px]">Belum ada kabar terbaru penggalangan dana ini</p>
          <div
            className="mb-[24px] mt-[12px] flex rounded-[15px] px-[20px] py-[19px] mx-[20px] bg-[#E7513B1F]"
          >
            <span>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00016 14.6666C11.6668 14.6666 14.6668 11.6666 14.6668 7.99998C14.6668 4.33331 11.6668 1.33331 8.00016 1.33331C4.3335 1.33331 1.3335 4.33331 1.3335 7.99998C1.3335 11.6666 4.3335 14.6666 8.00016 14.6666Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 5.33331V8.66665"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.99658 10.6667H8.00257"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-xs font-normal ml-[16px]">
              <b>Discalimer!</b> Informasi, opini dan foto yang ada di halaman galang dana ini adalah miliki dan tanggung jawab pembuat galang dana. Jika ada masalah atau hal mencurigakan silakan laporkan kepada kami.
            </p>
          </div>
        </div>
      }
      <ul className="relative border-l border-gray-200 dark:border-gray-700">
        {kabar.map((kabar, i) => (
          <li className="mb-[30px] ml-4" key={i}>
            <div className="absolute w-[40px] h-[40px] bg-white rounded-full -left-5 border border-white dark:border-gray-900 dark:bg-gray-700">
              {kabar.photo === null ? (
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M20 40.5383C31.0457 40.5383 40 31.584 40 20.5383C40 9.49264 31.0457 0.53833 20 0.53833C8.95431 0.53833 0 9.49264 0 20.5383C0 31.584 8.95431 40.5383 20 40.5383Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M21.4787 28.0649C21.828 28.0649 22.1093 28.3489 22.1093 28.6969C22.1093 29.0462 21.828 29.3289 21.4787 29.3289H10.8413C10.4933 29.3289 10.2094 29.0462 10.2094 28.6969C10.2094 24.3382 13.428 20.2089 17.9173 20.2089C18.2667 20.2089 18.5493 20.4916 18.5493 20.8409C18.5493 21.1889 18.2667 21.4729 17.9173 21.4729C14.4147 21.4729 11.7853 24.5915 11.4987 28.0649H21.4787ZM20.208 18.9889C17.9053 18.9889 16.0387 17.1329 16.0387 14.8422C16.0387 12.5516 17.9067 10.6956 20.208 10.6956C22.5093 10.6956 24.3773 12.5516 24.3773 14.8422C24.3773 17.1329 22.5107 18.9889 20.208 18.9889ZM20.208 17.7262C21.8147 17.7262 23.1147 16.4342 23.1147 14.8422C23.1147 13.2502 21.8147 11.9582 20.208 11.9582C18.6013 11.9582 17.3013 13.2502 17.3013 14.8422C17.3013 16.4342 18.6013 17.7262 20.208 17.7262ZM26.336 20.2262C27.2627 20.1262 28.188 20.4355 28.8613 21.0715L28.8667 21.0769C29.456 21.6475 29.7893 22.4289 29.7893 23.2435C29.7893 24.0609 29.456 24.8422 28.868 25.4129L25.02 29.1489C24.7733 29.3875 24.384 29.3875 24.14 29.1489L20.2933 25.4142C19.7027 24.8422 19.3693 24.0609 19.3693 23.2449C19.3693 22.4289 19.7027 21.6475 20.2987 21.0715C20.972 20.4355 21.8973 20.1262 22.824 20.2262C23.4827 20.2982 24.0947 20.5702 24.58 20.9982C25.0653 20.5702 25.6773 20.2969 26.336 20.2262ZM26.472 21.4809C25.9133 21.5422 25.412 21.8422 25.104 22.2982C24.8533 22.6702 24.3067 22.6702 24.0573 22.2982C23.7493 21.8422 23.248 21.5422 22.6893 21.4809C22.1293 21.4209 21.5707 21.6089 21.172 21.9835C20.8267 22.3182 20.6333 22.7729 20.6333 23.2449C20.6333 23.7169 20.828 24.1715 21.1733 24.5062L24.5813 27.8142L27.9893 24.5049C28.336 24.1702 28.528 23.7169 28.528 23.2435C28.528 22.7715 28.3347 22.3209 27.992 21.9862C27.5853 21.6075 27.0293 21.4209 26.472 21.4809Z"
                    fill="#E7513B"
                  />
                </svg>
              ) : (
                <img
                  src={kabar.photo}
                  alt=""
                  className="object-cover w-[40px] h-[40px] rounded-full"
                />
              )}
            </div>
            <div className="relative flex items-center space-x">
              <h3 className="font-semibold text-basic leading-none text-[#222222] pl-[11px] mr-1">
                {kabar.name}
              </h3>
              {kabar.status_akun !== "Not Verified" && (
                <div>
                  <CheckIcon />
                </div>
              )}
            </div>
            <small className="text-super-small pl-[11px] text-[#717171] font-medium">
              {moment(kabar.tanggal_dibuat).fromNow()}
            </small>
            <p className="mb-4 mt-[15px] text-base font-normal text-[#222222] pl-[11px]">
              {kabar.body}
            </p>
            {/* {kabar.photo && (
              <div className="pl-[11px]">
                <img src={kabar.photo} alt="Foto kabar terbaru" />
              </div>
            )} */}
            <div className="flex justify-start pl-[11px] space-x-normal-space">
              <button className="inline-flex items-center py-2 text-small font-medium bg-white text-[#717171]">
                <img
                  src="/icon/landing-page/heart.svg"
                  className="mx-w-[12px]"
                  alt=""
                  style={{ maxWidth: "12px" }}
                />
                <p className="ml-[7.25px]">Suka</p>
              </button>
              <button className="inline-flex items-center py-2 text-small font-medium bg-white text-[#717171]">
                <Share />
                <p className="ml-[7.25px]">Share</p>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default KabarTerbaru;
