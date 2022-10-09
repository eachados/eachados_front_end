import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, SelectObjectType, Splash } from "../screens";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route caseSensitive path="/*" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/select-object-type" element={<SelectObjectType />} />
    </Routes>
  );
};

export { Router };
