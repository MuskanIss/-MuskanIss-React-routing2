import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import style from "styled-components";

export const Login = () => {
  const { isAuth, login, alert } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const Alert = style.div`
  color:red;
  `;
  return (
    <div>
      <br />
      {!isAuth ? (
        <>
          <div>Name is admin and password is admin</div>
          <br />
          <Alert>{alert}</Alert>
          <br />
          <div>
            <label>Name:</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <br />
          <div>
            <label>Password:</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <br />
        </>
      ) : (
        <></>
      )}
      <div>
        <button onClick={() => login(name, password)}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};
