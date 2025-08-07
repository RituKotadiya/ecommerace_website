import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Product from './components/Product/Product';



function App() {
  return (



    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/Signin" element={<Signin />} />
    //     <Route path="/Signup" element={<Signup />} />
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>

    <Product/>

  );
}


export default App;
