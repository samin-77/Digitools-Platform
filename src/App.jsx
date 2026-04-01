// src/App.jsx
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import Stats           from "./components/Stats";
import ProductsSection from "./components/ProductsSection";
import CartSection     from "./components/CartSection";
import Steps           from "./components/Steps";
import Pricing         from "./components/Pricing";
import CTA             from "./components/CTA";
import Footer          from "./components/Footer";
import products        from "./data/products.json";

export default function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  // ── Add to cart ─────────────────────────────────────────────
  const handleBuy = (product) => {
    if (cartItems.find((p) => p.id === product.id)) {
      toast.info(`${product.name} is already in your cart!`, {
        icon: "🛍️",
      });
      return;
    }
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart! 🛒`);
  };

  // ── Remove from cart ─────────────────────────────────────────
  const handleRemove = (product) => {
    setCartItems((prev) => prev.filter((p) => p.id !== product.id));
    toast.error(`${product.name} removed from cart.`);
  };

  // ── Proceed to checkout ──────────────────────────────────────
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setCartItems([]);
    setActiveTab("products");
    toast.success("Order placed! Thank you for your purchase 🎉");
  };

  return (
    <>
      {/* React Toastify container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      {/* Navbar – cart count + click to open cart tab */}
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setActiveTab("cart")}
      />

      {/* Hero banner */}
      <section id="home">
        <Hero />
      </section>

      {/* Stats band */}
      <Stats />

      {/* Products / Cart toggle section */}
      <ProductsSection
        products={products}
        cartItems={cartItems}
        onBuy={handleBuy}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Cart panel – shown only when activeTab === "cart" */}
      {activeTab === "cart" && (
        <section id="cart-section">
          <CartSection
            cartItems={cartItems}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          />
        </section>
      )}

      {/* Steps section */}
      <section id="features">
        <Steps />
      </section>

      {/* Pricing section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* CTA banner */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}