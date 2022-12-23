import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
const Routers = () => {

    return (
        <Routes>
            <Route path="/E-commerce-app" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="product/:id" element={<Product />} />
        </Routes>
    )

}

export default Routers