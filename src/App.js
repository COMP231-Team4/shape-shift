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
import Admin from "./components/Admin";
import axios from "axios";
const API = "http://localhost:3001";
function App() {
  let navigate = useNavigate();

  async function handleLogin(user) {
    try {
      const result = await axios.post(`${API}/api/login`, user);
      if (result.status === 200) {
        const myObject = {
          username: result.data.username,
          admin: result.data.admin,
        };
        localStorage.setItem("userLocal", JSON.stringify(myObject));
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

  async function handleRegister(user) {
    try {
      const result = await axios.post(`${API}/api/register`, user);
      if (result.status === 200) {
        const myObject = {
          username: result.username,
          admin: result.admin,
        };

        localStorage.setItem("userLocal", JSON.stringify(myObject));
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
    localStorage.clear();
  }

  useEffect(() => {
    if (!localStorage.getItem("userLocal")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Header
        onLogout={handleLogout}
        authenticated={localStorage.getItem("userLocal")}
      />
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} onRegister={handleRegister} />}
        />
        <Route path="/" element={<Home />} />

        <Route path="/workouts" element={<Workouts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
