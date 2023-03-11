import {
    SET_LOADING,
    SET_BEERS,
    HANDLE_PAGE,
    HANDLE_API_FAIL,
} from './actions'

const reducer = (state, action ) => {
    switch(action.type) {
        case  HANDLE_API_FAIL:
            return {...state, isLoading: false, apiFail:true}
        case SET_LOADING: 
            return {...state, isLoading: true}
        case SET_BEERS:
            return {...state, isLoading: false, beers:action.payload.beers}
        case HANDLE_PAGE:
            if(action.payload === 'inc') {
                let nextPage = state.page + 1
                if(nextPage > state.lastPage) {
                    nextPage = 1
                }
                return {...state, page:nextPage}
            }
            if(action.payload === 'dec') {
                let prevPage = state.page - 1
                if(prevPage < 1 ) {
                    prevPage = state.lastPage
                }
                return {...state, page:prevPage}
            }
        default:
            throw new Error (`no matching "${action.type}" action type`)
    }
}





export default reducer