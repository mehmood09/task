import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//import { Routes, Route, Link } from "react-router-dom";
//import Home from "../pages/Home";
import Home from "./components/container/home/index";
import About from "./components/container/about/index";
import Navbar from "./components/NavBar/index";

import {Routes, Route} from 'react-router-dom'
import './components/NavBar/styles.scss';
import './components/container/home/styles.scss';

function App() {
  return (
    <>
      <div className="App">
        {/** particles */}
        
        {/** navbar */}
        <Navbar/>
        
        {/** main content */}
        
      <Routes>
        <Route index path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />       
      </Routes> 
      </div>

     
    </>

  );
}
export default App;
