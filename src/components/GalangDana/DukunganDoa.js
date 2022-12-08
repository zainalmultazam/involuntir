import Spinner from "components/loaders/Spinner";
import { API_URL } from "config/api";
import { useCallback, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const DukunganDoa = ({ doaDonatur }) => {
  useEffect(() => {
    doaDonatur.reverse();
  }, [doaDonatur]);

  const observer = useRef();

  const [doaDonaturList, setDoaDonaturList] = useState([]);
  const [doaDonaturListLength, setDoaDonaturListLength] = useState(0);
  const [doaDonaturListLengthMax, setDoaDonaturListLengthMax] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    setDoaDonaturList(doaDonatur.slice(0, 5));
    setDoaDonaturListLength(5);
    setDoaDonaturListLengthMax(doaDonatur.length);
  }, [doaDonatur]);

  const handleLoadMore = () => {
    setDoaDonaturListLength(doaDonaturListLength + 5);
    setDoaDonaturList(doaDonatur.slice(0, doaDonaturListLength + 5));
  };

  const last = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsIntersecting(true);
      }
    });
    if (node) observer.current.observe(node);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isIntersecting) {
      setTimeout(() => {
        handleLoadMore();
        setIsIntersecting(false);
      }, 500);
    }
  }, [isIntersecting]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="whitespace-normal relative my-[42px] mx-[20px] space-y-5">
      {doaDonaturList.map((doa, i) => (
        <div
          key={i}
          className="items-start w-fullrounded-[15px] py-[17px] px-[10px]"
          style={{ boxShadow: "0px 1px 16px rgba(0, 0, 0, 0.06)" }}
        >
          <div className="grid grid-cols-12 items-center justify-center">
            <div className="w-[30px] h-[30px] col-span-1">
              {doa.photo === null || doa.id === 1 ? (
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  className="object-cover h-[30px] w-[30px] rounded-full"
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
                  src={
                    doa.photo.slice(0, 4) === "http"
                      ? doa.photo
                      : doa.photo.slice(0, 7) === "/images"
                      ? `${API_URL}${doa.photo}`
                      : `${API_URL}/images/images_profile/${doa.photo}`
                  }
                  onError={() => (
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
                  )}
                  alt=""
                  className="object-cover h-[30px] w-[30px] rounded-full"
                />
              )}
            </div>
            <h1 className="text-[#212121] font-medium text-base col-span-10 ml-[10px]">
              {doa.id === "1" ? "Anonim" : doa.nama}
            </h1>
            <span className="col-span-1 ml-[15px]">
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.75">
                  <path
                    d="M7.81558 9.75C8.13246 9.75 8.38934 9.41421 8.38934 9C8.38934 8.58579 8.13246 8.25 7.81558 8.25C7.4987 8.25 7.24182 8.58579 7.24182 9C7.24182 9.41421 7.4987 9.75 7.81558 9.75Z"
                    stroke="#717171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.81558 4.5C8.13246 4.5 8.38934 4.16421 8.38934 3.75C8.38934 3.33579 8.13246 3 7.81558 3C7.4987 3 7.24182 3.33579 7.24182 3.75C7.24182 4.16421 7.4987 4.5 7.81558 4.5Z"
                    stroke="#717171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.81558 15C8.13246 15 8.38934 14.6642 8.38934 14.25C8.38934 13.8358 8.13246 13.5 7.81558 13.5C7.4987 13.5 7.24182 13.8358 7.24182 14.25C7.24182 14.6642 7.4987 15 7.81558 15Z"
                    stroke="#717171"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </span>
          </div>
          <div className="mt-[10px]">
            <p className="text-sm font-normal text-[#222222]">{doa.komentar}</p>
          </div>
          <div className="flex text-xs font-medium text-[#717171] space-x-4 mt-[20px]">
            <button className="flex items-center">
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.8875 13.0062C7.675 13.0812 7.325 13.0812 7.1125 13.0062C5.3 12.3875 1.25 9.80621 1.25 5.43121C1.25 3.49996 2.80625 1.93746 4.725 1.93746C5.8625 1.93746 6.86875 2.48746 7.5 3.33746C8.13125 2.48746 9.14375 1.93746 10.275 1.93746C12.1938 1.93746 13.75 3.49996 13.75 5.43121C13.75 9.80621 9.7 12.3875 7.8875 13.0062Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="ml-[7.25px]">Suka</p>
            </button>
            <button className="flex items-center">
              <svg
                width={13}
                height={15}
                viewBox="0 0 13 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2937 5C11.3049 5 12.1246 4.16053 12.1246 3.125C12.1246 2.08947 11.3049 1.25 10.2937 1.25C9.28251 1.25 8.46277 2.08947 8.46277 3.125C8.46277 4.16053 9.28251 5 10.2937 5Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.9701 9.375C3.9813 9.375 4.80104 8.53553 4.80104 7.5C4.80104 6.46447 3.9813 5.625 2.9701 5.625C1.9589 5.625 1.13916 6.46447 1.13916 7.5C1.13916 8.53553 1.9589 9.375 2.9701 9.375Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.2937 13.75C11.3049 13.75 12.1246 12.9105 12.1246 11.875C12.1246 10.8395 11.3049 10 10.2937 10C9.28251 10 8.46277 10.8395 8.46277 11.875C8.46277 12.9105 9.28251 13.75 10.2937 13.75Z"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.55054 8.44385L8.71898 10.9313"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.71287 4.06885L4.55054 6.55635"
                  stroke="#E7513B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="ml-[7.25px]">Share</p>
            </button>
          </div>
        </div>
      ))}
      {doaDonaturListLength < doaDonaturListLengthMax && (
        <div className="w-full flex justify-center items-center" ref={last}>
          {isIntersecting && <Spinner color="#e7513b" />}
        </div>
      )}
    </div>
  );
};

export default DukunganDoa;
