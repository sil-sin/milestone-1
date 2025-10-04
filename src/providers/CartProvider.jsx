import { useState } from 'react'
import { createContext, useContext } from 'react'

//createContext creates context for the provider , inside we have default value
export const CartContext = createContext([{ id: 1, name: 'silvi' }])


export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const handleSetCard = (item) => {
        console.log(item)
        setCart(prev => [...prev, item])
    }

    console.log('hook:', cart)
    return <CartContext.Provider value={{ cart, handleSetCard }}>{children}</CartContext.Provider>
}

