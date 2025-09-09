import { createContext, useState } from "react";


export const AuthContext = createContext();
export const CartContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const addToCart = (product) => {

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If the product is already in the cart, increase its quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 0 }
            : item
        );
      } else {
        // Otherwise, add the new product to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }

    });

  };
  
  // const handleRemoveItem = (id) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  const updateQuantity = (id, amount) => {
    setCartItems((prev) => prev.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) } // prevent 0 or negative
        : item
    )
    );
  };


  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  const signIn = (email, password) => {
    if (user && user.email === email && user.password === password) {
      setIsLogin(true);
      return true;
    }
    return false;
  };


  const signUp = (user, email, password) => {
    // Fake signup
    if (user && email && password) {
      setUser({ user, email, password });
      setIsLogin(true);
    }
  };

  const signOut = () => {
    setUser(null);
    setIsLogin(false);
  };



  return (
    <AuthContext.Provider value={{ user, isLogin, signIn, signUp, signOut, cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </AuthContext.Provider>

  );
}
