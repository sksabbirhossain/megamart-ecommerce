import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAdminAuthChecked } from "./hooks/useAdminAuthChecked";
import { AdminLayout } from "./layouts/AdminLayout";
import { AddBrand } from "./pages/Brand/AddBrand";
import { AllBrands } from "./pages/Brand/AllBrands";
import { AddCategory } from "./pages/Category/AddCategory";
import { AllCategories } from "./pages/Category/AllCategories";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { AddProduct } from "./pages/Product/AddProduct";
import { AllProducts } from "./pages/Product/AllProducts";
import { PrivateRoute } from "./routes/admin/PrivateRoute";
import { PublicRoute } from "./routes/admin/PublicRoute";
import { UserLayout } from "./layouts/UserLayout";
import { Home } from "./pages/User/Home/Home";
import { ProductDetails } from "./pages/User/ProductDetails/ProductDetails";
import { CheckOut } from "./pages/User/CheckOut/CheckOut";
import { UserLogin } from "./pages/User/UserLogin";
import { UserRegister } from "./pages/User/UserRegister";

function App() {
  const adminAuthChecked = useAdminAuthChecked();
  if (!adminAuthChecked) {
    return <p>Loading...</p>;
  }
  return (
    <Routes>
      <Route path="/admin" element={<PublicRoute><Login /></PublicRoute>} />

      <Route path="/" element={<UserLayout/>}>
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/" element={<Home/>} />
        <Route path="/product-details/:productId" element={<ProductDetails/>} />
        <Route path="/checkout" element={<CheckOut/>} />
      </Route>

      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/admin/all-brands" element={<PrivateRoute><AllBrands /></PrivateRoute>} />
        <Route path="/admin/add-brand" element={<PrivateRoute><AddBrand /></PrivateRoute>} />
        <Route path="/admin/all-categories" element={<PrivateRoute><AllCategories /></PrivateRoute>} />
        <Route path="/admin/add-category" element={<PrivateRoute><AddCategory /></PrivateRoute>} />
        <Route path="/admin/all-products" element={<PrivateRoute><AllProducts /></PrivateRoute>} />
        <Route path="/admin/add-product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
