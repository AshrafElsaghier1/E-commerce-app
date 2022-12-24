import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
const Routers = () => {

    return (
        <Routes path="/E-commerce-app">
            <Route path="/E-commerce-app" element={<Navigate to="/E-commerce-app/home" />} />
            <Route path="/E-commerce-app/home" element={<Home />} />
            <Route path="/E-commerce-app/products/:id" element={<Products />} />
            <Route path="/E-commerce-app/product/:id" element={<Product />} />
        </Routes>
    )

}

export default Routers