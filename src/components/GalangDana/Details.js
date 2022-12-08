import { useCallback, useState } from 'react'
import trimText from './trimText'

function Details({ details }) {
  const [state, setState] = useState({
    showOriginalHTML: false,
    originalHTML: details,
    trimmedHTML: trimText(details, 100, 400)[0],
  })

  const handleShowText = useCallback(() => {
    setState((prevState) => ({
      ...prevState,
      showOriginalHTML: !prevState.showOriginalHTML,
    }))
  }, [setState])

  return (
    <div className="whitespace-normal text-base font-normal mx-[20px] mt-[42px]">
      <div
        className="text"
        dangerouslySetInnerHTML={{
          __html: `${
            !state.showOriginalHTML ? state.trimmedHTML : state.originalHTML
          }`,
        }}
      />
      <button
        className="text-peduly-primary underline mt-[20px]"
        onClick={handleShowText}
      >
        {!state.showOriginalHTML ? 'Baca selengkapnya' : 'Lebih Sedikit'}
      </button>
    </div>
  )
}

export default Details
