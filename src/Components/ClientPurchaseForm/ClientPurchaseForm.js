import './ClientPurchaseForm.css'
import { useState } from 'react'

const ClientPurchaseForm = ({generarOrdenDeCompra, showPurchaseOrder}) => {

    const [clientName, setClientName] = useState([])
    const [clientSurname, setClientSurame] = useState([])
    const [clientEmail, setClientEmail] = useState([])
    const [clientAdress, setClientAdress] = useState([])
    const [clientLocality, setClientLocality] = useState([])
    const [clientProvince, setClientProvince] = useState([])
    const [clientNumber, setClientNumber] = useState([])
    const [clientPostcode, setClientPostcode] = useState([])
    const [clientForm, setClientForm] = useState([])
    const [showClientForm, setShowClientForm] = useState('show')
    const [payed, setPayed] = useState('no')
    const [formMessageToSend, setFormMessageToSend] = useState('noMessage')

    const [clientNameError, setClientNameError] = useState('')
    const [clientSurnameError, setClientSurnameError] = useState('')
    const [clientEmailError, setClientEmailError] = useState('')
    const [clientAdressError, setClientAdressError] = useState('')
    const [clientLocalityError, setClientLocalityError] = useState('')
    const [clientProvinceError, setClientProvinceError] = useState('')
    const [clientNumberError, setClientNumberError] = useState('')
    const [clientPostcodeError, setClientPostcodeError] = useState('')

    const submitHandle = (e) => {
        e.preventDefault()

        let nombre = ''
        let apellido = ''
        let email = ''
        let direccion = ''
        let localidad = ''
        let provincia = ''
        let numero = ''
        let codigoPostal = ''

        if(clientName.length === 0) {
            nombre = null
            const nameErrorMessage = 'Completá el campo "Nombre".'
            setClientNameError(nameErrorMessage)
        } else {
            console.log(clientName)
        }

        if(clientSurname.length === 0) {
            apellido = null
            const surnameErrorMessage = 'Completá el campo "Apellido".'
            setClientSurnameError(surnameErrorMessage)
        } else {
            console.log(clientSurname)
        }

        if(clientEmail.length === 0) {
            email = null
            const emailErrorMessage = 'Completá el campo "Email".'
            setClientEmailError(emailErrorMessage)
        } else {
                console.log(clientEmail)
        }

        if(clientAdress.length === 0) {
            direccion = null
            const adressErrorMessage = 'Completá el campo "Dirección".'
            setClientAdressError(adressErrorMessage)
        } else {
            console.log(clientAdress)
        }

        if(clientLocality.length === 0) {
            localidad = null
            const localityErrorMessage = 'Completá el campo "Localidad".'
            setClientLocalityError(localityErrorMessage)
        } else {
            console.log(clientLocality)
        }
        
        if(clientProvince.length === 0) {
            provincia = null
            const provinceErrorMessage = 'Completá el campo "Provincia".'
            setClientProvinceError(provinceErrorMessage)
        } else {
            console.log(clientProvince)
        }

        if(clientNumber.length === 0) {
            numero = null
            const numberErrorMessage = 'Completá el campo "Teléfono".'
            setClientNumberError(numberErrorMessage)
        } else if(clientNumber.length !== 0 && clientNumber.length < 10) {
            numero = null
            const numberErrorMessage = 'El formato ingresado en el campo "Teléfono" no es válido.'
            setClientNumberError(numberErrorMessage)
        } else if(clientNumber.length === 10) {
            console.log(clientNumber)
        } else {
            numero = null
            const numberErrorMessage = 'El formato ingresado en el campo "Teléfono" no es válido.'
            setClientNumberError(numberErrorMessage)
        }

        if(clientPostcode.length === 0) {
            codigoPostal = null
            const postcodeErrorMessage = 'Completá el campo "Código Postal".'
            setClientPostcodeError(postcodeErrorMessage)
        } else if(clientPostcode.length !== 0 && clientPostcode.length < 4) {
            codigoPostal = null
            const postcodeErrorMessage = 'El formato ingresado en el campo "Código Postal" no es válido.'
            setClientPostcodeError(postcodeErrorMessage)
        } else if(clientPostcode.length === 4) {
            console.log(clientPostcode)
        } else {
            codigoPostal = null
            const postcodeErrorMessage = 'El formato ingresado en el campo "Código Postal" no es válido.'
            setClientPostcodeError(postcodeErrorMessage)
        }

        if(nombre === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(apellido === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(email === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(direccion === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(localidad === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(provincia === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(numero === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else if(codigoPostal === null) {
            setFormMessageToSend('Hubo un error en alguno de los campos, por favor, revisalos nuevamente.')
            return setClientForm([])
        } else {

            setShowClientForm('hide')

            return setClientForm({
                
                nombre: clientName,
                            
                apellido: clientSurname,
            
                email: clientEmail,
            
                direccion: clientAdress,
            
                localidad: clientLocality,
            
                provincia: clientProvince,
            
                telefono: clientNumber,
                            
                codigoPostal: clientPostcode,
            
            })
        }
    }

    const dismiss = () => {
        setFormMessageToSend('noMessage')
    }
    
    return(
        <div className='formOuterContainer'>
            {formMessageToSend !== 'noMessage'? <div className='formNotificationContainer'>
                    <h5 className='formNotificationMessage'>{formMessageToSend}</h5>
                    <input type="button" value="X" className="formNotificationDismissButton" onClick={dismiss} />
            </div> :
            null}

            {showClientForm === 'show'? 
            <form className='clientForm' onSubmit={submitHandle}>
                

                <h4 className='clientFormTitle'>* Ingresá tus datos *</h4>
                <hr className='ruler' />

                <p className='clientFormInputTitle'>Nombre:</p>
                <input className='clientFormInput' type="text" placeholder="Nombre" onChange={(e) => {
                    setClientName(e.target.value.toUpperCase())
                    setClientNameError('')
                }} />
                {clientNameError === ''? null : <p className='formErrorMessage'>{clientNameError}</p>}

                <p className='clientFormInputTitle'>Apellido:</p>
                <input className='clientFormInput' type="text" placeholder="Apellido" onChange={(e) => {
                    setClientSurame(e.target.value.toUpperCase())
                    setClientSurnameError('')
                }} />
                {clientSurnameError === ''? null : <p className='formErrorMessage'>{clientSurnameError}</p>}

                <p className='clientFormInputTitle'>Dirección de correo electrónico:</p>
                <input className='clientFormInput' type="email" placeholder="eMail" onChange={(e) => {
                    setClientEmail(e.target.value)
                    setClientEmailError('')
                }} />
                {clientEmailError === ''? null : <p className='formErrorMessage'>{clientEmailError}</p>}

                <p className='clientFormInputTitle'>Domicilio:</p>
                <input className='clientFormInput' type="text" placeholder="Dirección" onChange={(e) => {
                    setClientAdress(e.target.value.toUpperCase())
                    setClientAdressError('')
                }} />
                {clientAdressError === ''? null : <p className='formErrorMessage'>{clientAdressError}</p>}

                <p className='clientFormInputTitle'>Localidad:</p>
                <input className='clientFormInput' type="text" placeholder="Localidad" onChange={(e) => {
                    setClientLocality(e.target.value.toUpperCase())
                    setClientLocalityError('')
                }} />
                {clientLocalityError === ''? null : <p className='formErrorMessage'>{clientLocalityError}</p>}

                <p className='clientFormInputTitle'>Provincia:</p>
                <input className='clientFormInput' type="text" placeholder="Provincia" onChange={(e) => {
                    setClientProvince(e.target.value.toUpperCase())
                    setClientProvinceError('')
                }} />
                {clientProvinceError === ''? null : <p className='formErrorMessage'>{clientProvinceError}</p>}

                <p className='clientFormInputTitle'>Número de teléfono:</p>
                <input className='clientFormInput' type="number" placeholder="Número de teléfono" onChange={(e) => {
                    setClientNumber(e.target.value.toString())
                    setClientNumberError('')
                }} />
                {clientNumberError === ''? null : <p className='formErrorMessage'>{clientNumberError}</p>}

                <p className='clientFormInputTitle'>Código postal:</p>
                <input className='clientFormInput' type="number" placeholder="Código postal" onChange={(e) => {
                    setClientPostcode(e.target.value.toString())
                    setClientPostcodeError('')
                }} />
                {clientPostcodeError === ''? null : <p className='formErrorMessage'>{clientPostcodeError}</p>}

                <input className='clientFormButton' type="submit" onClick={() => {
                    console.log(clientForm)
                }} value="Enviar" />
            </form> : 
            <div className='clientFormMessage'>
                <h4 className='clientFormTitle'>Muchas gracias por tu compra, {clientName}!</h4>
                {payed === 'no'? <div className='clientFormMessagePayContainer'>
                    <p className='clientFormMessageInstructions'>Hacé clic en "Pagar" para completar la transacción.</p>
                    <button className='cartButtonPay pagar' onClick={() => {
                        generarOrdenDeCompra(clientForm)
                        setPayed('yes')
                    }}>Pagar</button>
                </div> :
                <div className='purchaseOrderContainer'>
                    <p className='clientFormMessageInstructions'>{showPurchaseOrder}</p>
                    <img src='../../Images/music-toggle-pause-to-play.svg' alt='imagen logo' className='logoMenuImg imageOne'/>
                </div>}
            </div>}
        </div>
    )
}

export default ClientPurchaseForm