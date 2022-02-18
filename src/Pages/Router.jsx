import React from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoutes } from "../components/PrivateRoutes";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { Login } from "./Login";
import { Settings } from "./Settings";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Dashboard/*" element={<PrivateRoutes />}>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
