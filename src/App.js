// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import Workouts from "./components/Workouts";
import Blog from "./components/Blog";
import Nutrition from "./components/Nutrition";
import Products from "./components/Products";
import Login from "./components/Login";
import MealPlan from "./components/MealPlan";

function App() {
  let navigate = useNavigate();
  function handleLogin(user) {
    navigate("/home");
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home />} />

        <Route path="/workouts" element={<Workouts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
