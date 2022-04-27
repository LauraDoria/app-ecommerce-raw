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
            cart.forEach(product => {
                count += product.quantity
            })
    
            return count
        }
        
        //Indicar si el producto ya fue agregado al carrito
        const isInCart = (id) => {
            return cart.some(product => product.id === id )
        }
    
        //Vaciar carrito
        const clearCart = () => {
            setCart([])
        }
    
        //Eliminar del carrito
        const removeFromCart = (id) => {
            const products = cart.filter(product => product.id !== id)
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