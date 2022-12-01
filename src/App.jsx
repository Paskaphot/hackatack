import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Matchs from "./pages/Matchs";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Swap" element={<Swap />} />
        <Route path="/Matchs" element={<Matchs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
