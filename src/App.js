
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Processcart from './components/Processcart/Processcart';
import Header from './components/Header/Header';
import { AuthProvider } from './components/AuthContext/AuthContext';


function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="Processcart" element={<Processcart />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider >

  );
}


export default App;
