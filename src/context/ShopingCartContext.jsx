import {useState, createContext} from 'react'

export const CartContext = createContext({
  cart: []
})

const ShopingCartProvider = ({ children }) => {

    const [cart, setcart] = useState([])

    console.log(cart)

    const addItem =(item, quantity) =>{
      if(!isInCart(item.id)){
        setcart(prev =>[...prev, {...item, quantity}])
      } else {
        console.log("error ya se agrego")
      }
    }

    const removeitem = (itemId) =>{
      const cartUpdated = cart.filter(prod => prod.id !== itemId)
      setcart(cartUpdated)
    }

    const cleanCart = () =>{
      setcart ([])
    }

    const isInCart =(itemId) =>{
      return cart.some(prod => prod.id === itemId)
    }



  return (
    <CartContext.Provider value={{ cart, addItem, removeitem, cleanCart}}>

        {children}

    </CartContext.Provider>
  )
}

export default ShopingCartProvider