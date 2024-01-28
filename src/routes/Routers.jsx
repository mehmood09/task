import React from "react";
import Employee from "../components/Employee/CreateEmployee";
import EmployeeList from "../components/Employee/EmployeeList";
import Home from "../pages/Home";

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/employee" element = {<Employee/>} />
        <Route path="/employee-list" element = {<EmployeeList/>} />
      </Routes> 
    )
   
};
export default Routers