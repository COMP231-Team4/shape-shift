// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Blog from './components/Blog';
import Nutrition from './components/Nutrition';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;



