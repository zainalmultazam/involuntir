import BackButton from 'components/BackButton'
import Spinner from 'components/loaders/Spinner'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Select from 'react-select'
import { getToken, setRekeningBerhasil } from 'utils/cookiesHooks'

const bankList = [
  {
    value: 1,
    label: 'Bank Mandiri',
  },
  {
    value: 2,
    label: 'Bank Syariah Indonesia (BSI)',
  },
  {
    value: 3,
    label: 'Bank Negara Indonesia (BNI)',
  },
  {
    value: 4,
    label: 'Bank Rakyat Indonesia (BRI)',
  },
  {
    value: 5,
    label: 'Bank Central Asia (BCA)',
  },
  {
    value: 6,
    label: 'Bank Tabungan Negara (BTN)',
  },
  {
    value: 7,
    label: 'CIMB Niaga',
  },
  {
    value: 8,
    label: 'CIMB Niaga Syariah',
  },
  {
    value: 9,
    label: 'Bank Danamon',
  },
  {
    value: 10,
    label: 'Bank Danamon Syariah',
  },
  {
    value: 11,
    label: 'Bank Muamalat',
  },
  {
    value: 12,
    label: 'Bank Bukopin',
  },
]

function Rekening() {
  const [Bank, setBank] = useState('')
  const [namaRekeing, setNamaRekeing] = useState('')
  const [Rekening, setRekening] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #BEBEBE',
      color: state.isSelected ? 'white' : 'black',
      padding: 10,

      backgroundColor: state.isSelected ? '#E7513B' : 'white',
    }),
    control: (provided) => ({
      ...provided,
      height: '60px',
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 9999,
      borderColor: 'rgba(0, 0, 0, 0.3)',
      color: 'rgba(0, 0, 0, 0.3)',
      font: 'root.font.regular',
      marginTop: 10,
      boxShadow: '0 !important',
      '&:hover': {
        outline: 'none !important',
        borderColor: 'rgba(0, 0, 0, 0.3)',
      },
      '&:focus': {
        outline: 'auto 2px Highlight !important',
        // outline: "auto 5px -webkit-focus-ring-color !important",
      },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    },
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData()
    formData.append('bank', Bank)
    formData.append('nama_rekening', namaRekeing)
    formData.append('no_rekening', Rekening)

    // for if api done

    // await axios
    //   .post(`${API_URL}/api/rekening`, formData, {
    //     headers: { Authorization: `Bearer ${getToken()}` },
    //   })
    //   .then((res) => {
    //     setRekeningBerhasil();
    //     history.push({
    //       pathname: `/ubah-profile/berhasil`,
    //       state: {
    //         H1: "Selamat!",
    //         P1: "Perubahan Berhasi ^,^",
    //         hrf: "profile",
    //         Button: "Kembali",
    //       },
    //     });
    //   })
    //   .catch((err) => {});

    // remove this when api done
    setRekeningBerhasil()
    history.push({
      pathname: `/pengaturan/rekening/berhasil`,
      state: {
        H1: 'Selamat!',
        P1: 'Perubahan Berhasi ^,^',
        hrf: 'profile',
        Button: 'Kembali',
      },
    })
  }

  function validator() {
    if (Bank && Rekening && namaRekeing) {
      return true
    }
    return false
  }

  if (!getToken()) {
    return <Redirect to="/" />
  }

  if (loading) {
    return (
      <div className="mx-auto max-w-[430px] h-screen flex items-center justify-center">
        <Spinner color="#e7513b" />
      </div>
    )
  }

  return (
    <div className="mx-auto" style={{ maxWidth: '430px' }}>
      <BackButton hrf={'1'} txt="Rekening" />
      <form onSubmit={handleOnSubmit}>
        <div className="mt-[102px] mx-[20px] space-y-5">
          <div>
            <label htmlFor="Bank" className="text-base font-normal ml-[10px]">
              Bank
            </label>
            <Select
              id="Bank"
              placeholder="Pilih Bank"
              value={bankList.value === null ? '' : bankList.value}
              styles={customStyles}
              noOptionsMessage={() => 'Jenis Bank Tidak Ditemukan :('}
              options={bankList}
              components={{
                IndicatorSeparator: () => null,
              }}
              isSearchable={false}
              onChange={(e) => setBank(e)}
            />
          </div>
          <div>
            <label
              htmlFor="namaRekening"
              className="text-base font-normal ml-[10px]"
            >
              Atas Nama
            </label>
            <div
              className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[10px]"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <input
                id="namaRekening"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                type="text"
                placeholder="Nama Pemilik"
                maxLength="50"
                value={namaRekeing}
                onChange={(e) => setNamaRekeing(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="noRekening"
              className="text-base font-normal ml-[10px]"
            >
              No. Rekening
            </label>
            <div
              className="w-full border-[1px] h-[60px] px-[20px] flex items-center rounded-full mt-[10px]"
              style={{
                borderColor: 'rgba(0, 0, 0, 0.3)',
              }}
            >
              <input
                id="noRekening"
                className="bg-transparent outline-none  focus:ring-transparent border-none text-base font-normal w-full"
                type="tel"
                placeholder="No. Rekening"
                maxLength="50"
                value={Rekening}
                onChange={(e) => setRekening(e.target.value.replace(/\D/g, ''))}
              />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full h-[84px] bg-white flex justify-center items-center max-w-[430px] py-[12px] z-40">
          <span className="w-[90%]">
            {validator() ? (
              <button
                className="bg-peduly-primary  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px]"
                type="submit"
              >
                Simpan
              </button>
            ) : (
              <button className="bg-[#E4E4E4]  text-white font-bold w-full max-w-[374px]  text-[16px] rounded-full h-[60px] pointer-events-none">
                Simpan
              </button>
            )}
          </span>
        </div>
      </form>
    </div>
  )
}

export default Rekening
