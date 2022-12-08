import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

const initialState = document.title

export const TitleNameContext = createContext(initialState)

export const TitleNameProvider = ({ children }) => {
  const [title, setTitle] = useState(initialState)

  function titleCase(str) {
    let splitStr = str.toLowerCase().split(' ')
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')
  }

  useEffect(() => {
    document.title = titleCase(title)
  }, [title])

  const handleSetTitle = (titleName) => {
    setTitle(titleCase(titleName))
  }

  return (
    <TitleNameContext.Provider value={{ title, handleSetTitle }}>
      {children}
    </TitleNameContext.Provider>
  )
}
