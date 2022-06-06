import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from "./Pages/First";
import Second from "./Pages/Second";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/table" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
