import React from "react";
import HomePage from "../pages/customers_page/home_page/HomePage";
import { Route, Routes } from "react-router-dom";
import CustomerPageLayout from "../pages/customers_page/CustomerPageLayout";
import ProductsPage from "../pages/customers_page/products_page/ProductsPage";
import ProductDetailsPage from "../pages/customers_page/product_details_page/ProductDetailsPage";
function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CustomerPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="product/:id/product_details" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default PageRoutes;
