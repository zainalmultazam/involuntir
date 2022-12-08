import { useEffect, useState } from 'react'

function DeskripsiGalangDana({ setStep, data, state }) {
  const [peran, setPeran] = useState(
    state.deskripsi.peran ? state.deskripsi.peran : ''
  )
  const [penerima, setPenerima] = useState(
    state.deskripsi.penerima ? state.deskripsi.penerima : ''
  )
  const [usaha, setUsaha] = useState(
    state.deskripsi.usaha ? state.deskripsi.usaha : ''
  )
  const [biaya, setBiaya] = useState(
    state.deskripsi.biaya ? state.deskripsi.biaya : ''
  )
  const [alasan, setAlasan] = useState(
    state.deskripsi.alasan ? state.deskripsi.alasan : ''
  )
  const [fotoKeterangan1, setFotoKeterangan1] = useState(
    state.deskripsi.image?.fotoKeterangan1
      ? state.deskripsi.image.fotoKeterangan1
      : ''
  )
  const [fotoKeterangan2, setFotoKeterangan2] = useState(
    state.deskripsi.image?.fotoKeterangan2
      ? state.deskripsi.image.fotoKeterangan2
      : ''
  )
  const [fotoKeterangan3, setFotoKeterangan3] = useState(
    state.deskripsi.image?.fotoKeterangan3
      ? state.deskripsi.image.fotoKeterangan3
      : ''
  )

  function divide(paragraf) {
    let txt = paragraf
    let text = txt.split('.')
    let str = text.join('.</br></br>')
    return str
  }

  const deskripsiHTML = `<p>${divide(peran)}</p><br/><p>${divide(
    penerima
  )}</p><br/>${
    fotoKeterangan1 &&
    `<img style="width: 374px; height: 300px; object-fit: cover;" src=${fotoKeterangan1} alt=''/><br/>`
  }<p>${divide(usaha)}</p><br/>${
    fotoKeterangan2 &&
    `<img style="width: 374px; height: 300px; object-fit: cover;" src=${fotoKeterangan2} alt=''/><br/>`
  }<p>${divide(biaya)}</p><br/>${
    fotoKeterangan3 &&
    `<img style="width: 374px; height: 300px; object-fit: cover;" src=${fotoKeterangan3} alt=''/><br/>`
  }<p>${divide(alasan)}</p>`

  const handleOnSimpan = () => {
    data({
      peran,
      penerima,
      usaha,
      biaya,
      alasan,
      image: {
        fotoKeterangan1,
        fotoKeterangan2,
        fotoKeterangan3,
      },
      deskripsiHTML,
    })
  }

  const handleOnNext = () => {
    setStep('previewCerita')
    data({
      peran,
      penerima,
      usaha,
      biaya,
      alasan,
      image: {
        fotoKeterangan1,
        fotoKeterangan2,
        fotoKeterangan3,
      },
      deskripsiHTML,
    })
  }

  function handleFoto(e, pilihan) {
    const reader = new FileReader()

    reader.addEventListener('load', () => {
      if (pilihan === 1) {
        setFotoKeterangan1(reader.result)
      } else if (pilihan === 2) {
        setFotoKeterangan2(reader.result)
      } else if (pilihan === 3) {
        setFotoKeterangan3(reader.result)
      }
    })

    reader.readAsDataURL(e.target.files[0])
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  function validator() {
    if (peran && penerima && usaha && biaya && alasan) {
      return true
    }
    return false
  }

  return (
    <div className="py-[20px]">
      {/* INTRO CERITA */}
      <div className="mx-[20px] mt-[14px]">
        <h1 className="text-large font-medium">
          Tulis cerita tentang galang dana
        </h1>
        <div className="text-sm font-normal text-[#717171] mt-[4px] pr-[10px]">
          <p>
            Dengan membuat cerita yang menarik dan lengkap, galang dana ini
            berkesempatan mendapatkan donasi lebih banyak dari yang kamu
            harapkan.
          </p>
          <p className="mt-[4px]">
            Ikuti intruksi, kami akan menuntunmu menjadi penulis cerita yang
            baik. cerita terpisah menjadi beberapa kolom dan nanti akan kami
            jadikan satu kalimat dalam halaman galang dana ini.
          </p>
        </div>
      </div>
      {/* PERANMU */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Ceritakan tentang dirimu serta peranmu dalam institusi pendidikan yang
          akan dibantu pembelian tanah atau pembangunan
        </h1>
        <div className="flex items-center px-[20px] py-[10px] border-[1px] border-peduly-primary rounded-full w-[158px] mt-[14px]">
          <p className="mr-[16px] text-peduly-primary text-sm font-normal">
            Lihat Contoh
          </p>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 10.05V12.3C12.75 15.3 11.55 16.5 8.55 16.5H5.7C2.7 16.5 1.5 15.3 1.5 12.3V9.45C1.5 6.45 2.7 5.25 5.7 5.25H7.95"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 10.05H10.35C8.55 10.05 7.95 9.45 7.95 7.65V5.25L12.75 10.05Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7 1.5H11.7"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 3.75C5.25 2.505 6.255 1.5 7.5 1.5H9.465"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6V10.6425C16.5 11.805 15.555 12.75 14.3925 12.75"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6H14.25C12.5625 6 12 5.4375 12 3.75V1.5L16.5 6Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Perkenalkan identitas dirimu dan peran kamu dalam institusi pendidikan tersebut"
          value={peran}
          onChange={(e) => {
            setPeran(e.target.value)
          }}
        >
          peran
        </textarea>
      </div>
      {/* PENERIMA MANFAAT */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Ceritakan tentang penerima manfaat mulai dari lokasi dan kegiatan
          sehari-harinya
        </h1>
        <div className="flex items-center px-[20px] py-[10px] border-[1px] border-peduly-primary rounded-full w-[158px] mt-[14px]">
          <p className="mr-[16px] text-peduly-primary text-sm font-normal">
            Lihat Contoh
          </p>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 10.05V12.3C12.75 15.3 11.55 16.5 8.55 16.5H5.7C2.7 16.5 1.5 15.3 1.5 12.3V9.45C1.5 6.45 2.7 5.25 5.7 5.25H7.95"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 10.05H10.35C8.55 10.05 7.95 9.45 7.95 7.65V5.25L12.75 10.05Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7 1.5H11.7"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 3.75C5.25 2.505 6.255 1.5 7.5 1.5H9.465"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6V10.6425C16.5 11.805 15.555 12.75 14.3925 12.75"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6H14.25C12.5625 6 12 5.4375 12 3.75V1.5L16.5 6Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Tulis secara lengkap kisah mengenai penerima manfaat secara detail"
          value={penerima}
          onChange={(e) => {
            setPenerima(e.target.value)
          }}
        >
          penerima
        </textarea>
      </div>
      {/* GAMBAR 1 */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Upload foto tentang galang dana (opsional)
        </h1>
        <div className="mt-[16px] w-[88px]">
          <label htmlFor="foto-1" className="w-full cursor-pointer">
            {fotoKeterangan1.length > 0 ? (
              <img
                src={fotoKeterangan1}
                className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                alt=""
              />
            ) : (
              <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V8"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            name="foto-1"
            id="foto-1"
            className="hidden"
            onChange={(e) => handleFoto(e, 1)}
          />
        </div>
      </div>
      {/* MASALAH & USAHA */}
      <div className="mx-[20px] mt-[24px]">
        <p className="text-large font-medium">
          Ceritakan tentang masalah dan usaha yang telah dilakukan
        </p>
        <div className="flex items-center px-[20px] py-[10px] border-[1px] border-peduly-primary rounded-full w-[158px] mt-[14px]">
          <p className="mr-[16px] text-peduly-primary text-sm font-normal">
            Lihat Contoh
          </p>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 10.05V12.3C12.75 15.3 11.55 16.5 8.55 16.5H5.7C2.7 16.5 1.5 15.3 1.5 12.3V9.45C1.5 6.45 2.7 5.25 5.7 5.25H7.95"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 10.05H10.35C8.55 10.05 7.95 9.45 7.95 7.65V5.25L12.75 10.05Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7 1.5H11.7"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 3.75C5.25 2.505 6.255 1.5 7.5 1.5H9.465"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6V10.6425C16.5 11.805 15.555 12.75 14.3925 12.75"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6H14.25C12.5625 6 12 5.4375 12 3.75V1.5L16.5 6Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Tulis secara lengkap kisah mengenai penerima manfaat secara detail"
          value={usaha}
          onChange={(e) => {
            setUsaha(e.target.value)
          }}
        >
          masalah dan usaha
        </textarea>
      </div>
      {/* GAMBAR 2 */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Upload foto tentang galang dana (opsional)
        </h1>
        <div className="mt-[16px] w-[88px]">
          <label htmlFor="foto-2" className="w-full cursor-pointer">
            {fotoKeterangan2.length > 0 ? (
              <img
                src={fotoKeterangan2}
                className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                alt=""
              />
            ) : (
              <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V8"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            name="foto-2"
            id="foto-2"
            className="hidden"
            onChange={(e) => handleFoto(e, 2)}
          />
        </div>
      </div>
      {/* RENCANA PENGGUNAAN DANA */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Berapa biaya yang dibutuhkan dan bagaimana rencana penggunaan dana
        </h1>
        <div className="flex items-center px-[20px] py-[10px] border-[1px] border-peduly-primary rounded-full w-[158px] mt-[14px]">
          <p className="mr-[16px] text-peduly-primary text-sm font-normal">
            Lihat Contoh
          </p>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 10.05V12.3C12.75 15.3 11.55 16.5 8.55 16.5H5.7C2.7 16.5 1.5 15.3 1.5 12.3V9.45C1.5 6.45 2.7 5.25 5.7 5.25H7.95"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 10.05H10.35C8.55 10.05 7.95 9.45 7.95 7.65V5.25L12.75 10.05Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7 1.5H11.7"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 3.75C5.25 2.505 6.255 1.5 7.5 1.5H9.465"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6V10.6425C16.5 11.805 15.555 12.75 14.3925 12.75"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6H14.25C12.5625 6 12 5.4375 12 3.75V1.5L16.5 6Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Tulis secara lengkap kisah mengenai penerima manfaat secara detail"
          value={biaya}
          onChange={(e) => {
            setBiaya(e.target.value)
          }}
        >
          rencana biaya
        </textarea>
      </div>
      {/* ALASAN */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Jelaskan kenapa galang dana ini sangat dibutuhkan
        </h1>
        <div className="flex items-center px-[20px] py-[10px] border-[1px] border-peduly-primary rounded-full w-[158px] mt-[14px]">
          <p className="mr-[16px] text-peduly-primary text-sm font-normal">
            Lihat Contoh
          </p>
          <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 10.05V12.3C12.75 15.3 11.55 16.5 8.55 16.5H5.7C2.7 16.5 1.5 15.3 1.5 12.3V9.45C1.5 6.45 2.7 5.25 5.7 5.25H7.95"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 10.05H10.35C8.55 10.05 7.95 9.45 7.95 7.65V5.25L12.75 10.05Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7 1.5H11.7"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 3.75C5.25 2.505 6.255 1.5 7.5 1.5H9.465"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6V10.6425C16.5 11.805 15.555 12.75 14.3925 12.75"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 6H14.25C12.5625 6 12 5.4375 12 3.75V1.5L16.5 6Z"
              stroke="#E7513B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <textarea
          className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full h-[157px] border-[1px] rounded-[30px] p-[20px] text-large font-normal placeholder-[#C4C4C4] resize-none  mt-[14px]"
          placeholder="Perkenalkan identitas dirimu dan peran kamu dalam institusi pendidikan tersebut"
          value={alasan}
          onChange={(e) => {
            setAlasan(e.target.value)
          }}
        >
          alasan dibutuhkannya dana
        </textarea>
      </div>
      {/* GAMBAR 3 */}
      <div className="mx-[20px] mt-[24px]">
        <h1 className="text-large font-medium">
          Upload foto tentang galang dana (opsional)
        </h1>
        <div className="mt-[16px] w-[88px]">
          <label htmlFor="foto-3" className="w-full cursor-pointer">
            {fotoKeterangan3.length > 0 ? (
              <img
                src={fotoKeterangan3}
                className="rounded-[15px] border-[1px] border-peduly-primary h-[60px] w-full object-cover"
                alt=""
              />
            ) : (
              <div className="rounded-[15px] border-[1px] border-peduly-primary border-dashed h-[60px] flex items-center justify-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12H16"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V8"
                    stroke="#E7513B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </label>
          <input
            type="file"
            accept="image/*"
            name="foto-3"
            id="foto-3"
            className="hidden"
            onChange={(e) => handleFoto(e, 3)}
          />
        </div>
      </div>
      {/* TOMBOL */}
      <div className="mt-[32px] mx-[20px]">
        <div className="flex items-center justify-center text-base font-normal mt-[8px]">
          <button
            className="bg-[#E4E4E4] text-[#717171] rounded-full w-full h-[60px] mr-[12px]"
            onClick={() => setStep('judul')}
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
  )
}

export default DeskripsiGalangDana
