import React,{createContext,useEffect, useState} from 'react'

const StoreContext = createContext()
const initialState = {
    dialog: undefined,
    projects:[],
    error:undefined
}

const StoreProvider = (props) => {
    const [state,setState] = useState(initialState)


    return (
        <StoreContext.Provider>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreProvider
