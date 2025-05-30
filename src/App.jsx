import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllFeaturesPage from "./pages/AllFeaturesPage";
import HomePage from "./pages/HomePage";
import FeatureDetailPage from "./pages/FeatureDetailPage";
import Footer from "./components/Footer";
import "react-datepicker/dist/react-datepicker.css";
import DemoPage from "./pages/DemoPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import GroundDetail from "./pages/GroundDetails";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import WooProductDetail from "./components/WooProductDetail";
import SlideCart from "./components/SlideCart";
import Aboutus from "./pages/Aboutus";
import TenantLocations from "./pages/TenantLocations";
import GroundDetails from "./pages/GroundDetails";
import AllGrounds from "./pages/AllGrounds";
import AllLocations from "./pages/AllGrounds";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="//features" element={<AllFeaturesPage />} />
          <Route path="/feature/:featureId" element={<FeatureDetailPage />} />
          <Route path="/demopage" element={<DemoPage />} />
          <Route path="/ground/:id" element={<GroundDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />{" "}
          <Route path="/product/:id" element={<WooProductDetail />} />
          <Route path="/slideCart" element={<SlideCart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/locations" element={<TenantLocations />} />
          <Route path="/all-locations" element={<AllLocations />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
