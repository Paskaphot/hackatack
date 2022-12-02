import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Matchs from "./pages/Matchs";
import Header from "./components/Header";
import { MatchsCity } from "./context/MatchsCity";

function App() {
  return (
    <MatchsCity>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Swap" element={<Swap />} />
          <Route path="/Matchs" element={<Matchs />} />
        </Routes>
      </BrowserRouter>
    </MatchsCity>
  );
}

export default App;
