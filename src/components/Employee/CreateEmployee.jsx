import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/images/signup.gif';
//import avatar from '../../assets/images/doctor-img01.png';
import { useForm } from "react-hook-form";

import React, { useEffect, useState } from "react";
import axios from "axios";

function AddEmployee() {
  const [userForm, setUserForm] = useState({
    name: "",
    cnic: "",
    job: "",
    phone: "",
    idate: "",
    edate: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://faizan-production-employee.up.railway.app/employee/create-employee", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
            name: "",
            cnic: "",
            job: "",
            phone: "",
            idate: "",
            edate: "",
        });
      });
  };
  useEffect(() => {}, []);    
    return (
        <>
            <section className="px-5 xl:px-0">
                <div className="max-w-[1170px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* ========== image box =============  */}
                        <div className="hidden lg:block bg-primaryColor rouded-l-lg">
                            <figure className="rounded-l-lg">
                                <img src={signupImg} alt="" className="w-full rounded-l-lg" />
                            </figure>
                        </div>
                        {/* ========== sign up form =============  */}
                        <div className="rounded-l-lg lg:pl-16 py-10">
                            <h3 className="text-headingColor text-[22] leading-9 font-bold mb-10">
                                Add <span className="text-primaryColor">Employee</span>
                            </h3>
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-5">
                                    <input type="text" placeholder="Full Name" name="name" value={userForm.name} onChange={inputsHandler}
                                        className="w-full pr-1 py-1 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-1 text-headingColor
                            placeholder:text-textColor rounded-md cursor-pointer required"/>
                                </div>
                                <div className="mb-5">
                                    <input type="text" placeholder="CNIC" name="cnic" value={userForm.cnic} onChange={inputsHandler}
                                        className="w-full pr-1 py-1 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-1 text-headingColor
                            placeholder:text-textColor rounded-md cursor-pointer required"/>
                                </div>
                                <div className="mb-5">
                                    <input type="text" placeholder="Job Role" name="job" value={userForm.job} onChange={inputsHandler}
                                        className="w-full pr-1 py-1 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor rounded-md cursor-pointer required"/>
                                </div>
                                <div className="mb-5">
                                    <input type="text" placeholder="Phone Number" name="phone" value={userForm.phone} onChange={inputsHandler}
                                        className="w-full pr-1 py-1 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor rounded-md cursor-pointer required"/>
                                </div>
                                <div className="mb-5">
                                    <input type="date" placeholder="Card Issue Date" name="idate" value={userForm.idate} onChange={inputsHandler}
                                        className="w-full pr-1 py-1 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor rounded-md cursor-pointer required"/>
                                </div>
                                <div className="mb-5">
                                    <input type="date" placeholder="Card Expiray Date" name="edate" value={userForm.edate} onChange={inputsHandler}
                                        className="w-full pr-1 py-1 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor rounded-md cursor-pointer required"/>
                                </div>
                                <div className="mt-7">
                                   <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
                                        Add Employee
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AddEmployee