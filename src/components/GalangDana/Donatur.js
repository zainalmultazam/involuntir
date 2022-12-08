import moment from "moment";
import { API_URL } from "config/api";
import IdrFormat from "utils/IdrFormat";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import Spinner from "components/loaders/Spinner";

const Donatur = ({ donatur }) => {
  donatur.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  const observer = useRef();

  const [donaturList, setDonaturList] = useState([]);
  const [donaturListLength, setDonaturListLength] = useState(0);
  const [donaturListLengthMax, setDonaturListLengthMax] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    setDonaturList(donatur.slice(0, 7));
    setDonaturListLength(5);
    setDonaturListLengthMax(donatur.length);
  }, [donatur]);

  const handleLoadMore = () => {
    setDonaturListLength(donaturListLength + 7);
    setDonaturList(donatur.slice(0, donaturListLength + 7));
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
    <div className="whitespace-normal relative mt-[42px] mx-[20px]">
      {donaturList.map((donatur, i) => (
        <div
          key={i}
          className="grid grid-cols-12 items-start h-[65px] mb-[15px]"
        >
          <div className="w-[40px]">
            {donatur.photo === null || donatur.id === 1 ? (
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-[40px] h-[40px] rounded-full"
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
                  donatur.photo.slice(0, 4) === "http"
                    ? `${donatur.photo}`
                    : donatur.photo.slice(0, 7) === "/images"
                    ? `${API_URL}${donatur.photo}`
                    : `${API_URL}/images/images_profile/${donatur.photo}`
                }
                alt=""
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
                className="object-cover w-[40px] h-[40px] rounded-full"
              />
            )}
          </div>
          <div className="col-span-11 ml-[20px]">
            <h1 className="text-base font-bold">
              {donatur.id === 1 ? "Anonim" : donatur.nama}
            </h1>
            <h3 className="text-sm font-medium">
              Donasi {IdrFormat(donatur.donasi)}
            </h3>
            <p className="text-xs font-light text-[#717171]">
              {moment(donatur.created_at).fromNow()}
            </p>
          </div>
        </div>
      ))}
      {donaturListLength < donaturListLengthMax && (
        <div className="w-full flex justify-center items-center" ref={last}>
          {isIntersecting && <Spinner color="#e7513b" />}
        </div>
      )}
    </div>
  );
};

export default Donatur;
