// src/App.js
import React, { useEffect, useState } from "react";
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
import axios from "axios";
const API = "http://localhost:3001";
function App() {
  let navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  async function handleLogin(user) {
    try {
      const result = await axios.post(`${API}/api/login`, user);
      if (result.status === 200) {
        setauthenticated(true);
        localStorage.setItem("authenticated", true);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

  function handleLogout() {
    navigate("/login");
    setauthenticated(false);
    localStorage.setItem("authenticated", false);
  }

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Header onLogout={handleLogout} authenticated={authenticated} />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<Home />} />

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
