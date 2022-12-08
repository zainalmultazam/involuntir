import { useState } from 'react'
import TabStep from 'components/BuatGalangDana/TabStep'
import TujuanGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/TujuanGalangDana'
import PenerimaGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/PenerimaGalangDana'
import TargetGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/TargetGalangDana'
import JudulGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/JudulGalangDana'
import DeskripsiGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/DeskripsiGalangDana'
import PreviewCeritaGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/PreviewCeritaGalangDana'
import AjakanGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/AjakanGalangDana'
import RingkasanGalangDana from '../../../components/BuatGalangDana/StepBuatGalangDana/RingkasanGalangDana'

function StepBuatGalangDana() {
  const [step, setStep] = useState('tujuan')

  const [tujuanGalangDana, setTujuanGalangDana] = useState({})
  const [penerimaGalangDana, setPenerimaGalangDana] = useState({})
  const [targetGalangDana, setTargetGalangDana] = useState({})
  const [judulGalangDana, setJudulGalangDana] = useState({})
  const [deskripsiGalangDana, setDeskripsiGalangDana] = useState('')
  const [ajakanGalangDana, setAjakanGalangDana] = useState({})

  const data = {
    tujuan: tujuanGalangDana,
    penerima: penerimaGalangDana,
    target: targetGalangDana,
    judul: judulGalangDana,
    deskripsi: deskripsiGalangDana,
    ajakan: ajakanGalangDana,
  }

  return (
    <div style={{ maxWidth: '430px' }} className={`mx-auto pt-[24px] `}>
      {step !== 'ringkasan' && <TabStep step={step} />}
      {step === 'tujuan' && (
        <TujuanGalangDana
          setStep={setStep}
          data={setTujuanGalangDana}
          state={data}
        />
      )}
      {step === 'penerima' && (
        <PenerimaGalangDana
          setStep={setStep}
          data={setPenerimaGalangDana}
          state={data}
        />
      )}
      {step === 'target' && (
        <TargetGalangDana
          setStep={setStep}
          data={setTargetGalangDana}
          state={data}
        />
      )}
      {step === 'judul' && (
        <JudulGalangDana
          setStep={setStep}
          data={setJudulGalangDana}
          state={data}
        />
      )}
      {step === 'deskripsi' && (
        <DeskripsiGalangDana
          setStep={setStep}
          data={setDeskripsiGalangDana}
          state={data}
        />
      )}
      {step === 'previewCerita' && (
        <PreviewCeritaGalangDana
          setStep={setStep}
          deskripsi={data.deskripsi.deskripsiHTML}
          data={setDeskripsiGalangDana}
          state={data}
        />
      )}
      {step === 'ajakan' && (
        <AjakanGalangDana
          setStep={setStep}
          data={setAjakanGalangDana}
          state={data}
        />
      )}
      {step === 'ringkasan' && (
        <RingkasanGalangDana setStep={setStep} data={data} />
      )}
    </div>
  )
}

export default StepBuatGalangDana
