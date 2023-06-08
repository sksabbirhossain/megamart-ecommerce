import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAdminAuthChecked } from "./hooks/useAdminAuthChecked";
import { Main } from "./layouts/Main";
import { AddBrand } from "./pages/Brand/AddBrand";
import { AllBrands } from "./pages/Brand/AllBrands";
import { AddCategory } from "./pages/Category/AddCategory";
import { AllCategories } from "./pages/Category/AllCategories";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { AddProduct } from "./pages/Product/AddProduct";
import { AllProducts } from "./pages/Product/AllProducts";
// import { Register } from "./pages/Register";
import { PrivateRoute } from "./routes/admin/PrivateRoute";
import { PublicRoute } from "./routes/admin/PublicRoute";

function App() {
  const adminAuthChecked = useAdminAuthChecked();
  if (!adminAuthChecked) {
    return <p>Loading...</p>;
  }
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/" element={<Main />}>
        <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/all-brands" element={<AllBrands />} />
        <Route path="/add-brand" element={<AddBrand />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
