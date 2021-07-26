
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);

  const signIn = (data, history) => {
    localStorage.setItem("@token", data.email);
    setAuth([data]);
    history.push("/usuario");
    toast.info("Bem vindo");
  };
  const logout = (history) => {
    localStorage.clear();
    history.push("/");
    const logout = localStorage.getItem("@token") || "[]";
    setAuth(JSON.parse(logout));
    toast.info("Volte sempre");
  };

  return (
    <AuthContext.Provider value={{ auth, signIn, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);