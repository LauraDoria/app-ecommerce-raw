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

        //Total carrito
        const cartTotal = () => {
            let total = 0
            cart.forEach(product => {
                total += product.quantity * product.precio
            })
            
            return total
        }

        //Cantidad de productos
        const cartItemQuantity = () => {
            let productCount = 0
            cart.forEach(product => {
                productCount += product.quantity
            })
    
            return productCount
        }
    
        //Eliminar del carrito
        const removeItemFromCart = (id) => {
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
                removeItemFromCart,
                cartTotal,
                cartItemQuantity,
            }}>
                {children}
            </CartContext.Provider>
        )
    }

export default CartContextProvider