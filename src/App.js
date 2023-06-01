import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./layouts/Main";
import { AddBrand } from "./pages/Brand/AddBrand";
import { AllBrands } from "./pages/Brand/AllBrands";
import { AllCategories } from "./pages/Category/AllCategories";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { AddCategory } from "./pages/Category/AddCategory";
import { setTitle } from "./utils/setTitle";
import { AllProducts } from "./pages/Product/AllProducts";

function App() {
  //set page title
  setTitle("Add Category")
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/add-brand" element={<AddBrand />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
