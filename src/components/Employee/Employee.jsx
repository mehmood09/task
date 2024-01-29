import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import axios from "axios";
import moment from 'moment'

export const Employee = () => {

    const columns = [
        {
          name: 'الاسم Name',
          selector: row => row.name,
          sortable: true,
        },
        {
          name: 'رقم الهؤيه CNIC',
          selector: row => row.cnic,
          sortable: true,
        },
        {
          name: 'التخصص Job',
          selector: row => row.job,
          sortable: true,
        },
        {
          name: 'رقم الجوال Phone',
          selector: row => row.phone,
          sortable: true,
        },
        {
          name: 'تاريخ اصدارالبطاقه Issue Date',
          selector: row => moment(row.idate).format('DD/MM/YYYY'),
          sortable: true,
        },
        {
          name: 'تاريخ الانتهاء Expiray Date',
          selector: row => moment(row.edate).format('DD/MM/YYYY'),
          sortable: true,
        },
           
      ];
      const [data, setData] = useState([]);
      const [search, setSearch]= useState('');
      const [filter, setFilter] = useState([]);

      //fetch('http://localhost:3000/api/patients').then(res => res.json()   const req = await fetch("http://localhost:4000/employee/").then(res => res.json());
      const getEmployeesss = async() => {
        try {
            const req = await fetch("https://faizan-production-employee.up.railway.app/employee/").then(res => res.json());
            //const res = await req.json();
            setData(res);
            setFilter(res);            
        } catch (error) {
            console.log(error);
        }
      }
      const getEmployee = async() => {
        try {
            axios
            .get("https://faizan-production-employee.up.railway.app/employee/")
            .then((res) => {
                setData(res.data.data);
                setFilter(res);
            })
            .catch((error) => {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
        }
      }
      useEffect(() => {
        getEmployee();
      }, []);
    
      useEffect(() => {
        const result = data.filter((item)=> {
            return item.name.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
      }, [search]);
      
      const conditionalRowStyles = [
        {
          when: row => row.days > 729,
          style: {
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        {
          when: row => row.days > 634 && row.days < 730,
          style: {
            backgroundColor: 'red',
            color: 'black',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        {
          when: row => row.days > 544 && row.days < 634,
          style: {
            backgroundColor: 'yellow',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      ];    
      const tableHeaderStyle = {
        headCells : {
          style : {
            fontWeight: "bold", fontSize:"14px", backgroundColor: "#ccc", color: "brown"
          },
        },
      }
  return (
    <React.Fragment>
        <DataTable
        title="Employees Details"
        customStyles={tableHeaderStyle}
        columns={columns}
        data={data}
        fixedHeader
        pagination
        highlightOnHover
        conditionalRowStyles={conditionalRowStyles}
        subHeader
        subHeaderComponent={
            <input type='text'
            className='w-25 form-control'
            placeholder='Search...'
            value={ search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        }
        />
    </React.Fragment>
  )
}
export default Employee;