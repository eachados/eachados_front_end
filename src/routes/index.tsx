import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Splash } from "../screens";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route caseSensitive path="/*" element={<Splash />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export { Router };
