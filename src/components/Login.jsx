import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => setIsAuth((prev) => !prev)}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};
