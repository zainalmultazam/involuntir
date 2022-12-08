import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext(null)

const DataContextProvider = (props) => {
    const [data, setData] = useState({})
    const [value, setValue] = useState()

    return(
        <DataContext.Provider value={{
            data,
            setData: data => setData(data),
            value: value,
            setValue: value => setValue(value)
        }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider

