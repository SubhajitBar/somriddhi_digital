import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainSection from "./components/MainSection/MainSection";
import CouponSection from "./components/CouponSection/CouponSection";
import CategorySection from "./components/CategorySection/CategorySection";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <CouponSection/>
      <CategorySection/>
    </>
  );
};

export default App;


