import './ClientPurchaseForm.css'
import { useState, useContext } from 'react'

const ClientPurchaseForm = () => {

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

    const submitHandle = (e) => {
        e.preventDefault()
        /*Validar inputs tipo text en formulario para no permitir 
        caracteres numéricos o especiales*/

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
            alert('Completá el campo "Nombre".')
        } else {
            console.log(clientName)
        }

        if(clientSurname.length === 0) {
            apellido = null
            alert('Completá el campo "Apellido".')
        } else {
            console.log(clientSurname)
        }

        if(clientEmail.length === 0) {
            email = null
            alert('Completá el campo "Email".')
        } else {
                console.log(clientEmail)
        }

        if(clientAdress.length === 0) {
            direccion = null
            alert('Completá el campo "Dirección".')
        } else {
            console.log(clientAdress)
        }

        if(clientLocality.length === 0) {
            localidad = null
            alert('Completá el campo "Localidad".')
        } else {
            console.log(clientLocality)
        }
        
        if(clientProvince.length === 0) {
            provincia = null
            alert('Completá el campo "Provincia".')
        } else {
            console.log(clientProvince)
        }

        if(clientNumber.length === 0) {
            numero = null
            alert('Completá el campo "Teléfono".')
        } else if(clientNumber.length !== 0 && clientNumber.length < 10) {
            numero = null
            alert('El formato ingresado en el campo "Teléfono" no es válido.')
        } else if(clientNumber.length === 10) {
            console.log(clientNumber)
        } else {
            numero = null
            alert('El formato ingresado en el campo "Teléfono" no es válido.')
        }

        if(clientPostcode.length === 0) {
            codigoPostal = null
            alert('Completá el campo "Código Postal".')
        } else if(clientPostcode.length !== 0 && clientPostcode.length < 4) {
            codigoPostal = null
            alert('El formato ingresado en el campo "Código Postal" no es válido.')
        } else if(clientPostcode.length === 4) {
            console.log(clientPostcode)
        } else {
            codigoPostal = null
            alert('El formato ingresado en el campo "Código Postal" no es válido.')
        }

        if(nombre === null) {
            return setClientForm([])
        } else if(apellido === null) {
            return setClientForm([])
        } else if(email === null) {
            return setClientForm([])
        } else if(direccion === null) {
            return setClientForm([])
        } else if(localidad === null) {
            return setClientForm([])
        } else if(provincia === null) {
            return setClientForm([])
        } else if(numero === null) {
            return setClientForm([])
        } else if(codigoPostal === null) {
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
    
    return(

        showClientForm === 'show'? 
            <form className='clientForm' onSubmit={submitHandle}>
                <h4 className='clientFormTitle'>* Ingresá tus datos *</h4>
                <hr className='ruler' />
                <p className='clientFormInputTitle'>Nombre:</p>
                <input className='clientFormInput' type="text" placeholder="Nombre" minLength={1} onChange={(e) => setClientName(e.target.value.toUpperCase())} />
                <p className='clientFormInputTitle'>Apellido:</p>
                <input className='clientFormInput' type="text" placeholder="Apellido" minLength={1} onChange={(e) => setClientSurame(e.target.value.toUpperCase())} />
                <p className='clientFormInputTitle'>Dirección de correo electrónico:</p>
                <input className='clientFormInput' type="email" placeholder="eMail" onChange={(e) => setClientEmail(e.target.value)} />
                <p className='clientFormInputTitle'>Domicilio:</p>
                <input className='clientFormInput' type="text" placeholder="Dirección" minLength={1} onChange={(e) => setClientAdress(e.target.value.toUpperCase())} />
                <p className='clientFormInputTitle'>Localidad:</p>
                <input className='clientFormInput' type="text" placeholder="Localidad" minLength={1} onChange={(e) => setClientLocality(e.target.value.toUpperCase())} />
                <p className='clientFormInputTitle'>Provincia:</p>
                <input className='clientFormInput' type="text" placeholder="Provincia" minLength={1} onChange={(e) => setClientProvince(e.target.value.toUpperCase())} />
                <p className='clientFormInputTitle'>Número de teléfono:</p>
                <input className='clientFormInput' type="number" placeholder="Número de teléfono" minLength={10} maxLength={10} onChange={(e) => setClientNumber(e.target.value.toString())} />
                <p className='clientFormInputTitle'>Código postal:</p>
                <input className='clientFormInput' type="number" placeholder="Código postal" minLength={4} maxLength={4} onChange={(e) => setClientPostcode(e.target.value.toString())} />
                <input className='clientFormButton' type="submit" onClick={console.log(clientForm)} value="Enviar" />
                {/* <input type='submit' onClick={() => enviarDatosCliente(formClientData)}>Enviar datos</input> */}
            </form> : 
            <div className='clientFormMessage'>
                <h4 className='clientFormTitle'>Muchas gracias por tu compra {clientName}!</h4>
                <p className='clientFormMessageInstructions'>Hacé clic en "Pagar" para completar la transacción.</p>
                <button className='cartButtonPay pagar'>Pagar</button>
            </div>
    )
}

export default ClientPurchaseForm