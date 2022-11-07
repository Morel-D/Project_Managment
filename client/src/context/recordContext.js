import { createContext, useReducer } from "react";

export const RecordContext = createContext();

export const recordReducer = (state, action) => {
    switch (action.type)
    {
        case 'SET_RECORDS':
            return {
                records: action.payload
            }
            break;
        case 'CREATE_RECORD':
            return {
                records: [action.payload, ...state.records]
            }
            break;
        case 'DELETE_RECORDS':
            return {
               records: state.records.filter((w) => w._id !== action.payload.id)
            }
        default: 
            return state
    }
}

export const RecordContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(recordReducer, {
        records: null
    })


    return (
    <RecordContext.Provider value={{...state, dispatch}}>
        {children}
    </RecordContext.Provider>
    )
} 