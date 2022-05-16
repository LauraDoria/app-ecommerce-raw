import { useState, createContext } from "react";

const CartContext = createContext()

/*Para envolver toda la app con un Provider que no sea creado dentro de App, paso todos los
componentes hijos {childern} como props al componente CartContextProvder*/
export const CartContextProvider = ({children}) => {
    
    //Crear nuevo estado.
    const [cart, setCart] = useState([])

    //Setear estado al agregar productos
    const addProductToCart = (productToAdd) => {

        setCart([...cart, productToAdd])

    }
    
    //Obtener cantidad de productos
    const getProductQuantity = () => {

        let totalCount = 0

        cart.forEach(product => {

            totalCount += product.cantidad

        })
    
        return totalCount

    }
        
    //Indicar si el producto ya fue agregado al carrito
    const isInCart = (id) => {

        return cart.some(product => product.id === id )

    }
    
    //Vaciar carrito
    const clearCart = () => {

        setCart([])

    }

    //Total carrito
    const cartTotal = () => {
        
        let total = 0
        
        cart.forEach(product => {
            
            total += product.subtotal
        
        })
            
        return total

    }

    //Cantidad de productos
    // const cartItemQuantity = () => {
        
    //     let productCount = 0
        
    //     cart.forEach(product => {
            
    //         productCount += product.quantity
       
    //     })
    
    //     return productCount
    
    // }
    
    //Eliminar del carrito
    const removeItemFromCart = (id) => {
        
        const products = cart.filter(product => product.id !== id)
        
        setCart(products)
    
    }
    
    return(

        <CartContext.Provider value={{
            
        cart,
            
        addProductToCart,
            
        getProductQuantity,
            
        isInCart,
            
        clearCart,
            
        removeItemFromCart,
            
        cartTotal,}}>
                
            {children}
            
        </CartContext.Provider>

    )
}

export default CartContext