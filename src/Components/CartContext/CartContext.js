import { useState, createContext } from "react";

const CartContext = createContext()

const CartContextProvider = ({children}) => {
        //Crear nuevo estado.
        const [cart, setCart] = useState([])

        //Setear estado al agregar productos
        const addToCart = (productToAdd) => {
            setCart([...cart, productToAdd])
        }
    
        //Obtener cantidad de productos
        const getProductQuantity = () => {
            let count = 0
            cart.forEach(prod => {
                count += prod.quantity
            })
    
            return count
        }
        
        //
        const isInCart = (id) => {
            return cart.some(prod => prod.id === id )
        }
    
        //Vaciar carrito
        const clearCart = () => {
            setCart([])
        }
    
        //Eliminar del carrito
        const removeFromCart = (id) => {
            const products = cart.filter(prod => prod.id !== id)
            setCart(products)
        }
    
        return(
            <CartContext.Provider value={{
                cart,
                addToCart,
                getProductQuantity,
                isInCart,
                clearCart,
                removeFromCart
            }}>
                {children}
            </CartContext.Provider>
        )
    }

export default CartContextProvider