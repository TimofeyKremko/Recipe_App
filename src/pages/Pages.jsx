import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router-dom";

export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path="Recipe-App/" element={<Home />} />
        <Route path="Recipe-App/cuisine/:type" element={<Cuisine />} />
        <Route path="Recipe-App/searched/:search" element={<Searched />} />
        <Route path="Recipe-App/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}
