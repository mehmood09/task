import React from "react";

//import Home from "../pages/Home";
import Home from "../components/container/home/index";
import About from "../components/container/about/index";
import {Routes, Route} from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
        <Route index path="/" element = {<Home/>} />
        <Route path="/about" element = {<About/>} />       
      </Routes> 
    )
   
};
export default Routers