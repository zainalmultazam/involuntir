import trimText from 'components/GalangDana/trimText'
import { useEffect } from 'react'
import { useCallback, useState } from 'react'
import KonfirmasiSelesai from '../KonfirmasiSelesai'

function RingkasanGalangDana({ setStep, data }) {
  const { tujuan, penerima, target, judul, deskripsi, ajakan } = data

  const [popUp, setPopUp] = useState(false)

  const [text, setText] = useState({
    showOriginalHTML: false,
    originalHTML: deskripsi?.deskripsiHTML,
    trimmedHTML: trimText(deskripsi?.deskripsiHTML, 100, 400)[0],
  })

  const handleShowText = useCallback(() => {
    setText((prevState) => ({
      ...prevState,
      showOriginalHTML: !prevState.showOriginalHTML,
    }))
  }, [setText])

  const handleOnNext = () => {
    setPopUp(true)
  }

  const handleOnSimpan = () => {}

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  function validator() {
    return true
  }

  return (
    <>
      {popUp && (
        <div
          className="fixed h-screen w-screen top-0 left-0 z-50"
          style={{ background: 'rgb(111, 111, 111, 0.5)' }}
        ></div>
      )}
      <KonfirmasiSelesai
        status={popUp}
        onClickOutside={() => (popUp ? setPopUp(!popUp) : null)}
      />
      <div>
        <div
          className="fixed z-40 top-0 bg-white"
          style={{ boxShadow: '0 5px 5px -5px rgb(0 0 0 / 0.1)' }}
        >
          <div className="w-[430px]">
            <div className="mx-[20px] inline-flex items-center h-[72px]">
              <div className="cursor-pointer" onClick={() => setStep('ajakan')}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57 5.92999L3.5 12L9.57 18.07"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.4999 12H3.66992"
                    stroke="#292D32"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className=" relative ml-[16px] text-[16px] leading-[21.79px] font-medium mt-1">
                Ringkasan
              </span>
            </div>
          </div>
        </div>
        <div className="py-[20px]">
          <h1 className="text-large font-medium mt-[52px] mx-[20px]">
            Review informasi galang dana kamu
          </h1>
          {/* 1. TUJUAN */}
          <div
            className="rounded-[15px] mx-[20px] mt-[24px]"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="py-[20px] mx-[20px] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M10.8232 14H9.6709V9.40527C9.6709 9.25228 9.67253 9.09928 9.67578 8.94629C9.67904 8.79329 9.68229 8.64355 9.68555 8.49707C9.69206 8.35059 9.7002 8.21061 9.70996 8.07715C9.6416 8.15202 9.55697 8.2334 9.45605 8.32129C9.3584 8.40918 9.25423 8.50033 9.14355 8.59473L8.32324 9.24902L7.74707 8.52148L9.86621 6.86133H10.8232V14Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-large font-medium ml-[10px]">
                  Tujuan galang dana
                </h1>
              </div>
              <p
                className="text-large font-normal text-peduly-primary cursor-pointer"
                onClick={() => setStep('tujuan')}
              >
                Edit
              </p>
            </div>
            <hr />
            <div className="mx-[20px] font-normal">
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Kategori</p>
                <p className="text-large">Bantuan pendidikan</p>
              </div>
              <hr />
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">
                  Galang dana ditujukan untuk
                </p>
                <p className="text-large">{tujuan?.label}</p>
              </div>
            </div>
          </div>
          {/* 2. PENERIMA */}
          <div
            className="rounded-[15px] mx-[20px] mt-[24px]"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="py-[20px] mx-[20px] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M12.4219 14H7.58789V13.1357L9.43848 11.2607C9.79655 10.8962 10.0911 10.582 10.3223 10.3184C10.5534 10.0514 10.7243 9.79915 10.835 9.56152C10.9489 9.32389 11.0059 9.0651 11.0059 8.78516C11.0059 8.4401 10.9066 8.17969 10.708 8.00391C10.5094 7.82487 10.2474 7.73535 9.92188 7.73535C9.61263 7.73535 9.32617 7.7972 9.0625 7.9209C8.80208 8.04134 8.5319 8.21387 8.25195 8.43848L7.62207 7.68164C7.82064 7.51237 8.03223 7.35775 8.25684 7.21777C8.4847 7.0778 8.73861 6.96712 9.01855 6.88574C9.2985 6.80111 9.61751 6.75879 9.97559 6.75879C10.4281 6.75879 10.8187 6.84017 11.1475 7.00293C11.4762 7.16243 11.7285 7.38542 11.9043 7.67188C12.0833 7.95833 12.1729 8.29199 12.1729 8.67285C12.1729 9.05697 12.0964 9.41178 11.9434 9.7373C11.7904 10.0628 11.5723 10.3851 11.2891 10.7041C11.0059 11.0199 10.6689 11.3633 10.2783 11.7344L9.04297 12.9404V12.9941H12.4219V14Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-large font-medium ml-[10px]">Penerima</h1>
              </div>
              <p
                className="text-large font-normal text-peduly-primary cursor-pointer"
                onClick={() => setStep('penerima')}
              >
                Edit
              </p>
            </div>
            <hr />
            <div className="mx-[20px] font-normal">
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">
                  Nama penerima manfaat
                </p>
                <p className="text-large">{penerima?.namaPenerima}</p>
              </div>
              <hr />
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Tujuan galang dana</p>
                <p className="text-large">{penerima?.tujuan}</p>
              </div>
            </div>
          </div>
          {/* 3. TARGET DONASI */}
          <div
            className="rounded-[15px] mx-[20px] mt-[24px]"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="py-[20px] mx-[20px] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M12.1484 8.49219C12.1484 8.81445 12.0833 9.0944 11.9531 9.33203C11.8229 9.56966 11.6439 9.76497 11.416 9.91797C11.1914 10.0677 10.931 10.1751 10.6348 10.2402V10.2744C11.2044 10.346 11.6341 10.5251 11.9238 10.8115C12.2168 11.098 12.3633 11.4772 12.3633 11.9492C12.3633 12.3626 12.264 12.7321 12.0654 13.0576C11.8669 13.3799 11.5625 13.6338 11.1523 13.8193C10.7422 14.0049 10.2148 14.0977 9.57031 14.0977C9.18294 14.0977 8.82324 14.0667 8.49121 14.0049C8.16243 13.943 7.84993 13.8438 7.55371 13.707V12.6865C7.85645 12.8363 8.17871 12.9518 8.52051 13.0332C8.8623 13.1146 9.1862 13.1553 9.49219 13.1553C10.0879 13.1553 10.5127 13.0446 10.7666 12.8232C11.0205 12.5986 11.1475 12.2894 11.1475 11.8955C11.1475 11.6416 11.0807 11.4333 10.9473 11.2705C10.8171 11.1077 10.6136 10.9857 10.3369 10.9043C10.0635 10.8229 9.71029 10.7822 9.27734 10.7822H8.64746V9.85938H9.28223C9.69564 9.85938 10.0277 9.81055 10.2783 9.71289C10.529 9.61198 10.7096 9.47363 10.8203 9.29785C10.9342 9.12207 10.9912 8.91699 10.9912 8.68262C10.9912 8.37663 10.8919 8.139 10.6934 7.96973C10.4948 7.7972 10.2002 7.71094 9.80957 7.71094C9.56868 7.71094 9.34896 7.73861 9.15039 7.79395C8.95508 7.84928 8.77441 7.91927 8.6084 8.00391C8.44238 8.08854 8.28451 8.17969 8.13477 8.27734L7.58301 7.48145C7.85319 7.27962 8.17546 7.10872 8.5498 6.96875C8.92415 6.82878 9.36035 6.75879 9.8584 6.75879C10.5908 6.75879 11.1556 6.91667 11.5527 7.23242C11.9499 7.54492 12.1484 7.96484 12.1484 8.49219Z"
                    fill="white"
                  />
                </svg>

                <h1 className="text-large font-medium ml-[10px]">
                  Target donasi
                </h1>
              </div>
              <p
                className="text-large font-normal text-peduly-primary cursor-pointer"
                onClick={() => setStep('target')}
              >
                Edit
              </p>
            </div>
            <hr />
            <div className="mx-[20px] font-normal">
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Kebutuhan biaya</p>
                <p className="text-large">Rp{target?.biaya}</p>
              </div>
              <hr />
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Durasi galang dana</p>
                <p className="text-large">{target?.waktu}</p>
              </div>
            </div>
          </div>
          {/* 4. JUDUL */}
          <div
            className="rounded-[15px] mx-[20px] mt-[24px]"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="py-[20px] mx-[20px] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M12.6807 12.4326H11.7139V14H10.5811V12.4326H7.33398V11.5635L10.5957 6.8418H11.7139V11.4805H12.6807V12.4326ZM10.5811 11.4805V9.70801C10.5811 9.56152 10.5827 9.41341 10.5859 9.26367C10.5924 9.11068 10.599 8.96419 10.6055 8.82422C10.612 8.68424 10.6185 8.55566 10.625 8.43848C10.6315 8.31803 10.6364 8.21875 10.6396 8.14062H10.6006C10.5387 8.27083 10.4704 8.4043 10.3955 8.54102C10.3206 8.67448 10.2409 8.80469 10.1562 8.93164L8.39844 11.4805H10.5811Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-large font-medium ml-[10px]">Judul</h1>
              </div>
              <p
                className="text-large font-normal text-peduly-primary cursor-pointer"
                onClick={() => setStep('judul')}
              >
                Edit
              </p>
            </div>
            <hr />
            <div className="mx-[20px] font-normal">
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Judul galang dana</p>
                <p className="text-large">{judul?.judul}</p>
              </div>
              <hr />
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Link galang dana</p>
                <p className="text-large">peduly.com/{judul?.slug}</p>
              </div>
              <hr />
              <div className="py-[20px]">
                <p className="text-basic text-[#717171] ">Banner galang dana</p>
                <div className="grid grid-cols-2 gap-4 mt-[4px]">
                  <span className="border-dotted border-[1px] border-peduly-primary rounded-[15px] aspect-w-1 aspect-h-1">
                    {judul?.image?.image1 && (
                      <img
                        src={judul?.image?.image1}
                        alt="banner"
                        className="w-[100%] object-cover rounded-[15px]"
                      />
                    )}
                  </span>
                  <span className="border-dotted border-[1px] border-peduly-primary rounded-[15px] aspect-w-1 aspect-h-1">
                    {judul?.image?.image2 && (
                      <img
                        src={judul?.image?.image2}
                        alt="banner"
                        className="w-[100%] object-cover rounded-[15px]"
                      />
                    )}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-[1rem]">
                  <span className="border-dotted border-[1px] border-peduly-primary rounded-[15px] aspect-w-1 aspect-h-1">
                    {judul?.image?.image3 && (
                      <img
                        src={judul?.image?.image3}
                        alt="banner"
                        className="w-[100%] object-cover rounded-[15px]"
                      />
                    )}
                  </span>
                  <span className="border-dotted border-[1px] border-peduly-primary rounded-[15px] aspect-w-1 aspect-h-1">
                    {judul?.image?.image4 && (
                      <img
                        src={judul?.image?.image4}
                        alt="banner"
                        className="w-[100%] object-cover rounded-[15px]"
                      />
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 5. CERITA */}
          <div
            className="rounded-[15px] mx-[20px] mt-[24px]"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="py-[20px] mx-[20px] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M10.0146 9.53711C10.4736 9.53711 10.8773 9.62012 11.2256 9.78613C11.5771 9.94889 11.8506 10.1898 12.0459 10.5088C12.2412 10.8245 12.3389 11.2119 12.3389 11.6709C12.3389 12.1722 12.2331 12.6051 12.0215 12.9697C11.8099 13.3311 11.499 13.6094 11.0889 13.8047C10.6787 14 10.179 14.0977 9.58984 14.0977C9.21549 14.0977 8.86556 14.0651 8.54004 14C8.21777 13.9349 7.93945 13.8372 7.70508 13.707V12.6719C7.94922 12.8086 8.24219 12.9209 8.58398 13.0088C8.92578 13.0934 9.25293 13.1357 9.56543 13.1357C9.89746 13.1357 10.1823 13.0869 10.4199 12.9893C10.6576 12.8916 10.8398 12.7419 10.9668 12.54C11.097 12.3382 11.1621 12.0827 11.1621 11.7734C11.1621 11.3633 11.0303 11.0475 10.7666 10.8262C10.5062 10.6016 10.0977 10.4893 9.54102 10.4893C9.3457 10.4893 9.13737 10.5072 8.91602 10.543C8.69792 10.5755 8.51562 10.6113 8.36914 10.6504L7.86621 10.3525L8.13477 6.86133H11.8457V7.87207H9.14551L8.98926 9.64941C9.10645 9.62337 9.24642 9.59896 9.40918 9.57617C9.57194 9.55013 9.77376 9.53711 10.0146 9.53711Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-large font-medium ml-[10px]">Cerita</h1>
              </div>
              <p
                className="text-large font-normal text-peduly-primary cursor-pointer"
                onClick={() => setStep('deskripsi')}
              >
                Edit
              </p>
            </div>
            <hr />
            <div className="whitespace-normal text-basic text-[#717171] text-justify py-[20px] mx-[20px]">
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: `${
                    !text.showOriginalHTML
                      ? text.trimmedHTML
                      : text.originalHTML
                  }`,
                }}
              />
              <button
                className="text-peduly-primary underline mt-[20px]"
                onClick={handleShowText}
              >
                {!text.showOriginalHTML ? 'Baca selengkapnya' : 'Lebih Sedikit'}
              </button>
            </div>
          </div>
          {/* 6. AJAKAN */}
          <div
            className="rounded-[15px] mx-[20px] mt-[24px]"
            style={{ boxShadow: '0px 1px 16px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="py-[20px] mx-[20px] flex flex-row justify-between items-center">
              <div className="flex flex-row items-center">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20Z"
                    fill="#E7513B"
                  />
                  <path
                    d="M7.59766 10.958C7.59766 10.5381 7.62695 10.1247 7.68555 9.71777C7.7474 9.31087 7.85156 8.93001 7.99805 8.5752C8.14453 8.22038 8.34635 7.90788 8.60352 7.6377C8.86393 7.36751 9.19108 7.15592 9.58496 7.00293C9.97884 6.84668 10.4525 6.76855 11.0059 6.76855C11.1491 6.76855 11.3102 6.77507 11.4893 6.78809C11.6683 6.80111 11.8164 6.82227 11.9336 6.85156V7.80371C11.8066 7.7679 11.6667 7.74023 11.5137 7.7207C11.3639 7.70117 11.2142 7.69141 11.0645 7.69141C10.4655 7.69141 9.99837 7.80534 9.66309 8.0332C9.3278 8.25781 9.08854 8.56706 8.94531 8.96094C8.80208 9.35156 8.71908 9.79915 8.69629 10.3037H8.75488C8.85254 10.141 8.97461 9.99609 9.12109 9.86914C9.26758 9.74219 9.44661 9.64128 9.6582 9.56641C9.86979 9.48828 10.1156 9.44922 10.3955 9.44922C10.8122 9.44922 11.1751 9.53711 11.4844 9.71289C11.7936 9.88542 12.0312 10.1361 12.1973 10.4648C12.3665 10.7936 12.4512 11.1924 12.4512 11.6611C12.4512 12.1657 12.3551 12.6003 12.1631 12.9648C11.9743 13.3294 11.7041 13.6094 11.3525 13.8047C11.0042 14 10.5892 14.0977 10.1074 14.0977C9.7526 14.0977 9.4222 14.0326 9.11621 13.9023C8.81348 13.7721 8.54818 13.5768 8.32031 13.3164C8.09245 13.056 7.91504 12.7305 7.78809 12.3398C7.66113 11.946 7.59766 11.4854 7.59766 10.958ZM10.0879 13.1504C10.459 13.1504 10.7568 13.0299 10.9814 12.7891C11.2093 12.5449 11.3232 12.1722 11.3232 11.6709C11.3232 11.264 11.2223 10.9417 11.0205 10.7041C10.8219 10.4665 10.5225 10.3477 10.1221 10.3477C9.84863 10.3477 9.60938 10.4062 9.4043 10.5234C9.19922 10.6406 9.03971 10.7887 8.92578 10.9678C8.8151 11.1468 8.75977 11.3291 8.75977 11.5146C8.75977 11.7035 8.78743 11.8939 8.84277 12.0859C8.89811 12.278 8.98112 12.4554 9.0918 12.6182C9.20247 12.7777 9.34082 12.9062 9.50684 13.0039C9.67285 13.1016 9.86654 13.1504 10.0879 13.1504Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-large font-medium ml-[10px]">Ajakan</h1>
              </div>
              <p
                className="text-large font-normal text-peduly-primary cursor-pointer"
                onClick={() => setStep('ajakan')}
              >
                Edit
              </p>
            </div>
            <hr />
            <div className="py-[20px] mx-[20px]">
              <p className="text-basic text-[#717171] text-justify">
                {ajakan?.text}
              </p>
            </div>
          </div>
          {/* TOMBOL */}
          <div className="mt-[32px] mx-[20px]">
            <div className="flex items-center justify-center text-base font-normal mt-[8px]">
              <button
                className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
                onClick={() => setStep('ajakan')}
              >
                Kembali
              </button>
              {validator() ? (
                <button
                  className="bg-peduly-primary text-white rounded-full w-full h-[60px]"
                  onClick={handleOnNext}
                >
                  Lanjut
                </button>
              ) : (
                <button
                  className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px]"
                  disabled
                >
                  Lanjut
                </button>
              )}
            </div>
            <button
              className="bg-white text-peduly-primary font-semibold rounded-full w-full h-[60px] border-[1px] boder-[#E4E4E4] mt-[12px]"
              onClick={handleOnSimpan}
            >
              Simpan dan lanjutkan nanti
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RingkasanGalangDana
