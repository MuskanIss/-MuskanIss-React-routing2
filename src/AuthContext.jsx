import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [alert, setAlert] = useState("");
  const login = (name, password) => {
    if (!isAuth && name === "admin" && password === "admin") {
      setAlert("");
      setIsAuth(true);
    } else {
      if (isAuth === false) setAlert("Wrong login credentials!!!!");
      setIsAuth(false);
    }
  };
  const value = { isAuth, login, alert };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};
