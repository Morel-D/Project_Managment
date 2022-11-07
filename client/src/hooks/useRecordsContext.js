import { useContext } from "react"
import { RecordContext } from "../context/recordContext"

export const useRecordsContext = () => {
    const context = useContext(RecordContext)

    if (!context)
    {
        throw Error('useRecordsContext must be inside the useRecordsContextProvider'); 
    }

    return context
}