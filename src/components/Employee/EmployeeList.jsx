import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import DataTable from 'react-data-table-component';


import axios from "axios";
function EmployeeList() {
  const [userForm, setUserForm] = useState([]);
  const deleteEmployee = (_id) => {
    axios
      .delete("http://localhost:4000/employee/delete-employee/" + _id)
      .then(() => {
        console.log("Employee Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/employee/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'CNIC',
      selector: 'cnic',
      sortable: true,
    },
    {
      name: 'Job',
      selector: 'job',
      sortable: true,
    },
    {
      name: 'Phone',
      selector: 'phone',
    },
    {
      name: 'IDate',
      selector: 'idate',
      sortable: true,
    },
    {
      name: 'EDate',
      selector: 'edate',
      sortable: true,
    },
    {
      name: 'Email',
      selector: 'email',
    },    
    {
      name: 'days',
      selector: 'days',
    },
    
  ];
  const conditionalRowStyles = [
    {
      when: row => row.days > 4000,
      style: {
        backgroundColor: 'red',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: row => row.days > 2000 && row.days < 3000,
      style: {
        backgroundColor: 'yellow',
        color: 'black',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
      when: row => row.days > 1000 && row.days < 2000,
      style: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
  ];



    return (
    <div>

        <DataTable
        title="Employees"
        columns={columns}
        data={userForm}
        pagination
        highlightOnHover
        conditionalRowStyles={conditionalRowStyles}
      />


    </div>
  );
}
export default EmployeeList;