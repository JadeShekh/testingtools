import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResizeImage from "./pages/ResizeImage";
import CompressPDF from "./pages/CompressPDF";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resize-image" element={<ResizeImage />} />
      <Route path="/compress-pdf" element={<CompressPDF />} />
    </Routes>
  );
}
