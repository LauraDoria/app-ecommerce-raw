import './LoadingSpinner.css'

const LoadingSpinner = () => {
    return(
        <div>
            <h4 className='loading'>Cargando...</h4>
            <img src='./Images/logo-icon.svg' className="loadingSpinner" alt="logo" />
        </div>
    )
}

export default LoadingSpinner