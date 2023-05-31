import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./layouts/Main";
import { AddBrand } from "./pages/Brand/AddBrand";
import { AllBrands } from "./pages/Brand/AllBrands";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/add-brand" element={<AddBrand />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
