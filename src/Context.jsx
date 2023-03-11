import React, { useContext, useEffect, useReducer, createContext } from "react";

import {
    SET_LOADING,
    SET_BEERS,
    HANDLE_PAGE,
    HANDLE_API_FAIL,
} from './actions'
import reducer from './reducer'

const API_BEERS ='https://api.punkapi.com/v2/beers'

const initialState = {
    isLoading: true,
    apiFail: false,
    beers:[],
    page: 1,
    perPage: 15,
    lastPage: 22,
}

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const fetchBeers = async (url) => {
        dispatch({type: SET_LOADING})
        try {
            const response = await fetch(url);
            if(!response.ok) {
                dispatch({type: HANDLE_API_FAIL})           
            }
            const data = await response.json();
            console.log('response ', response)
            dispatch({type:SET_BEERS, payload:{beers:data}})
        } catch (error) {
            console.log(error);
        }
    }

    const handlePage = (value) => {
        dispatch({type:HANDLE_PAGE, payload: value})
    }


    useEffect(() => {
        fetchBeers(`${API_BEERS}?page=${state.page}&per_page=${state.perPage}`)
    }, [state.page])

    return <AppContext.Provider value={{...state, handlePage}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }