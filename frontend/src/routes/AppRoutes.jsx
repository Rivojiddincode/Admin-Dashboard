import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

// Client Pages
import Home from "../pages/client/Home";
import Shop from "../pages/client/Shop";
import ProductDetails from "../pages/client/ProductDetails";
import Cart from "../pages/client/Cart";
import Contact from "../pages/client/Contact";

// Admin Pages
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Orders from "../pages/admin/Orders";
import Settings from "../pages/admin/Settings";
import Users from "../pages/admin/Users"; // 1. USERS SAHIFASINI IMPORT QILDIK

function AppRoutes() {
  return (
    <Routes>
      {/* Client */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} /> {/* 2. USERS YO'LINI QO'SHDIK */}
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
