import { useEffect } from 'react'

function TabStep({ step }) {
  useEffect(() => {
    const tabStep = document.querySelector('.tab-step')
    if (step === 'tujuan') {
      tabStep.scrollLeft = 0
    } else if (step === 'penerima') {
      tabStep.scrollLeft = 66
    } else if (step === 'target') {
      tabStep.scrollLeft = 132
    } else if (step === 'judul') {
      tabStep.scrollLeft = 198
    } else if (step === 'deskripsi') {
      tabStep.scrollLeft = 264
    } else if (step === 'previewCerita') {
      tabStep.scrollLeft = 330
    } else if (step === 'ajakan') {
      tabStep.scrollLeft = 396
    }
  }, [step])

  return (
    <div className="tab-step flex flex-row overflow-x-scroll scroll-smooth px-[20px] cursor-move no-scrollbar">
      {/* TUJUAN */}
      <div className=" flex flex-col items-center mr-[6px]">
        <p className={`text-base mb-[9px] text-peduly-primary`}>Tujuan</p>
        <hr className="w-[100px] h-[4px] bg-peduly-primary rounded" />
      </div>
      {/* PENERIMA */}
      <div className=" flex flex-col items-center mr-[6px]">
        <p
          className={
            `text-base mb-[9px] ` +
            (step === 'penerima' ||
            step === 'target' ||
            step === 'judul' ||
            step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `text-peduly-primary`
              : `text-[#717171]`)
          }
        >
          Penerima
        </p>
        <hr
          className={
            `w-[100px] h-[4px] rounded ` +
            (step === 'penerima' ||
            step === 'target' ||
            step === 'judul' ||
            step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `bg-peduly-primary`
              : `bg-[#E4E4E4]`)
          }
        />
      </div>
      {/* TARGET */}
      <div className=" flex flex-col items-center mr-[6px]">
        <p
          className={
            `text-base text-[#717171] mb-[9px] ` +
            (step === 'target' ||
            step === 'judul' ||
            step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `text-peduly-primary`
              : `text-[#717171]`)
          }
        >
          Target
        </p>
        <hr
          className={
            `w-[100px] h-[4px] rounded ` +
            (step === 'target' ||
            step === 'judul' ||
            step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `bg-peduly-primary`
              : `bg-[#E4E4E4]`)
          }
        />
      </div>
      {/* JUDUL */}
      <div className=" flex flex-col items-center mr-[6px]">
        <p
          className={
            `text-base text-[#717171] mb-[9px] ` +
            (step === 'judul' ||
            step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `text-peduly-primary`
              : `text-[#717171]`)
          }
        >
          Judul
        </p>
        <hr
          className={
            `w-[100px] h-[4px] rounded ` +
            (step === 'judul' ||
            step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `bg-peduly-primary`
              : `bg-[#E4E4E4]`)
          }
        />
      </div>
      {/* DESKRIPSI */}
      <div className=" flex flex-col items-center mr-[6px]">
        <p
          className={
            `text-base text-[#717171] mb-[9px] ` +
            (step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `text-peduly-primary`
              : `text-[#717171]`)
          }
        >
          Deskripsi
        </p>
        <hr
          className={
            `w-[100px] h-[4px] rounded ` +
            (step === 'deskripsi' ||
            step === 'previewCerita' ||
            step === 'ajakan'
              ? `bg-peduly-primary`
              : `bg-[#E4E4E4]`)
          }
        />
      </div>
      {/* PREVIEW CERITA */}
      <div className=" flex flex-col items-center mr-[6px]">
        <p
          className={
            `text-base text-[#717171] mb-[9px] ` +
            (step === 'previewCerita' || step === 'ajakan'
              ? `text-peduly-primary`
              : `text-[#717171]`)
          }
        >
          Preview
        </p>
        <hr
          className={
            `w-[100px] h-[4px] rounded ` +
            (step === 'previewCerita' || step === 'ajakan'
              ? `bg-peduly-primary`
              : `bg-[#E4E4E4]`)
          }
        />
      </div>
      {/* AJAKAN */}
      <div className=" flex flex-col items-center">
        <p
          className={
            `text-base text-[#717171] mb-[9px] ` +
            (step === 'ajakan' ? `text-peduly-primary` : `text-[#717171]`)
          }
        >
          Ajakan
        </p>
        <hr
          className={
            `w-[100px] h-[4px] rounded ` +
            (step === 'ajakan' ? `bg-peduly-primary` : `bg-[#E4E4E4]`)
          }
        />
      </div>
    </div>
  )
}

export default TabStep
