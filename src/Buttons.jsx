import { useGlobalContext } from "./Context";

const Buttons = () => {
    const {isLoading, page, lastPage, handlePage, apiFail } = useGlobalContext()
    if(apiFail) {
        return
    }
    return ( 
        <div className="btn-container">
            <button disabled={isLoading} onClick={()=> handlePage('dec')}>Prev</button>
            <p>{page} of {lastPage}</p>
            <button disabled={isLoading} onClick={()=> handlePage('inc')}>Next</button>
        </div>
        
    )
}

export default Buttons