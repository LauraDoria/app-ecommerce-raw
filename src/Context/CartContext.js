import { useState, createContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addProductToCart = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getProductQuantity = () => {
        let totalCount = 0
        cart.forEach(product => {
            totalCount += product.cantidad
        })
        return totalCount
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id )
    }

    const clearCart = () => {
        setCart([])
    }

    const cartTotal = () => {
        let total = 0
        cart.forEach(product => {
            total += product.subtotal
        })
        return total
    }

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