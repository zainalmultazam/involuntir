import { useEffect, useState } from 'react'
import splitInDots from 'utils/splitDots'
import BackButton from 'components/BackButton'
import PopUpBerhasil from 'components/GalangDanaSupporter/PopUpBerhasil'

const GalangDanaSupporter = () => {
  const [judul, setJudul] = useState(
    'Kanker ganas untuk aslya diangkat dan tak terlihat'
  )
  const [targetDonasi, setTargetDonasi] = useState('')
  const [judulSupporter, setJudulSupporter] = useState('')
  const [linkSupporter, setLinkSupporter] = useState('')
  const [setuju, setSetuju] = useState(false)
  const [berhasil, setBerhasil] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  const handleTarget = (e) => {
    const result = e.target.value.replace(/\D/g, '')
    setTargetDonasi(e.target.validity.valid ? splitInDots(result) : '')
  }

  function handleSetuju() {
    if (setuju == false) {
      setSetuju(true)
    } else {
      setSetuju(false)
    }
  }

  function submit() {
    // post ke api
    setBerhasil(true)
  }

  return (
    <div style={{ maxWidth: '430px' }} className={`relative mx-auto`}>
      {berhasil ? (
        <PopUpBerhasil />
      ) : (
        <div>
          <BackButton hrf={`/`} txt="Galang dana supporter" />

          <div className="mt-[104px] px-[20px]">
            <p className="text-large font-normal">
              Dengan menjadi supporter, kamu membantu galang dana untuk{' '}
              <span className="text-peduly-primary">{judul}</span>
            </p>

            <hr className="my-[24px] h-[1px]" />

            <div>
              <p className="text-large font-semibold mb-[16px]">
                Target donasi
              </p>
              <div className="relative">
                <label className="absolute left-[20px] top-[20px] text-[#717171]">
                  Rp
                </label>
                <input
                  className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-full pl-[45px] p-[20px] text-large font-normal text-[#717171] placeholder-[#C4C4C4] resize-none"
                  type="text"
                  value={targetDonasi}
                  pattern="[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*[0-9]*[.]?[0-9]*"
                  min={0}
                  inputMode="numeric"
                  onChange={handleTarget}
                ></input>
              </div>
            </div>

            <div className="mt-[24px]">
              <p className="text-large font-semibold mb-[16px]">
                Judul galang dana supporter
              </p>
              <input
                className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-full p-[20px] text-large font-normal text-[#717171] placeholder-[#C4C4C4] resize-none"
                placeholder="Contoh: sedekah untk 50 anak"
                value={judulSupporter}
                onChange={(e) => {
                  const result = e.target.value
                  setJudulSupporter(result)
                }}
              ></input>
            </div>

            <div className="mt-[24px]">
              <p className="text-large font-semibold mb-[8px]">
                Buat link supporter
              </p>
              <p className="text-basic text-[#717171] mb-[16px]">
                Link harus dimulai dengan huruf, tanpa spasi (opsional)
              </p>
              <div className="relative">
                <div className="absolute bg-white border-[1px] border-[#E4E4E4] rounded-l-full">
                  <p className="p-[20px] text-[#717171]">peduly.com/</p>
                </div>
                <input
                  className="outline-none border-[#E4E4E4] focus:ring-0 focus:border-[#E4E4E4] w-full border-[1px] rounded-full p-[20px] pl-[148px] text-large font-normal text-[#717171] placeholder-[#C4C4C4] resize-none"
                  placeholder="Contoh: bantuprima"
                  value={linkSupporter}
                  onChange={(e) => {
                    const result = e.target.value
                    setLinkSupporter(result)
                  }}
                ></input>
              </div>
            </div>

            <div className="mt-[24px]">
              <p className="text-large font-semibold mb-[16px]">
                Baca dan beri tanda setuju
              </p>
              <div className="flex flex-row items-start">
                <div>
                  <input
                    type="checkbox"
                    className="text-peduly-primary border-[1px] border-peduly-primary focus:ring-peduly-primary rounded"
                    onChange={() => handleSetuju()}
                  ></input>
                </div>
                <div className="ml-[14px]">
                  <p>
                    Saya mengerti bahwa saya tidak bisa menarik dana yang
                    terkumpul di galang dana ini dan dana yang terkumpul akan
                    saya salurkan otomatis ke{' '}
                    <span className="text-peduly-primary">{judul}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[38px] mb-[20px]">
              {targetDonasi && judulSupporter && linkSupporter && setuju ? (
                <button
                  className="bg-peduly-primary text-white font-semibold rounded-full w-full h-[60px] border-[1px] boder-[#E4E4E4] mt-[12px]"
                  onClick={() => submit()}
                >
                  Jadi Supporter
                </button>
              ) : (
                <button className="bg-[#E4E4E4] text-white font-semibold rounded-full w-full h-[60px] border-[1px] boder-[#E4E4E4] mt-[12px]">
                  Jadi Supporter
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalangDanaSupporter
