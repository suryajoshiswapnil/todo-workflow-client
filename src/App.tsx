import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import Unknown from "./pages/unknown";

import Header from "./components/header";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="auth/*" element={<Auth />} />
        <Route path="*" element={<Unknown />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
