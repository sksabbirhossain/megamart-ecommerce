import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./layouts/Main";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />}>
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
