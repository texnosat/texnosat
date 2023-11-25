import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/Product-page.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Registration from "./components/Registration/Registration.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<App />} path="/" />
      <Route element={<ProductPage />} path="/product/:id" />
      <Route element={<Registration />} path="/registration" />
    </Routes>
    <Footer />
  </BrowserRouter>
);
