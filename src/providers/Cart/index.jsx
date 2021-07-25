import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";

  
  const CartContext = createContext();
  
  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const removeFromCart = (item) => {
        const newCart = cart.filter((itemOnCart) => itemOnCart.id !== item.id);
        setCart(newCart);
      };    
  
    return (
      <CartContext.Provider value={{ cart, setCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => useContext(CartContext);
  