import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "pages/ProductsPage/ProductsPage";
import CartPage from "pages/CartPage/CartPage";

export const PATH = {
  PRODUCTS: '/products',
  CART: '/cart'
}

export const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route path={PATH.PRODUCTS} element={<ProductsPage/>}/>
      <Route path={PATH.CART} element={<CartPage/>}/>
      <Route path="/" element={<Navigate to={PATH.PRODUCTS}/>}/>
    </Routes>
    </>
      );
};

export default AppRoutes;