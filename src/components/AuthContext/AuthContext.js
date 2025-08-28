import { createContext, useState } from "react";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isLogin, setIsLogin] = useState(false);

  // const signIn = (email, password) => {
  //   // Fake auth
  //   if (email && password) {
  //     let match = user.filter((e) => {
  //       return e.email === email && e.password === password
  //     })
  //     if (match.length > 0) {
  //       setIsLogin(true);
  //       return true;
  //     }else{
  //       return false;
  //     }
  //   }
  // };

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

  const signOut = () => {setUser(null);
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLogin, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
