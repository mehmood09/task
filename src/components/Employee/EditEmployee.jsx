import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditEmployee() {
  const [userForm, setUserForm] = useState({
    name: "",
    cnic: "",
    job: "",
    phone: "",
    idate: "",
    edate:"",
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/employee/update-employee/" + params.id, {
        name: userForm.name,
        cnic: userForm.cnic,
        job: userForm.job,
        phone:userForm.phone,
        idate:userForm.idate,
        edate:userForm.edate,

      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/employee-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/employee/get-employee/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          cnic: res.data.data.cnic,
          job: res.data.data.job,
          phone:res.data.data.phone,
          idate:res.data.data.idate,
          edate:res.data.data.edate,
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">CNIC</label>
            <input
              type="text"
              className="form-control"
              name="cnic"
              id="cnic"
              value={userForm.cnic}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job</label>
            <input
              type="text"
              className="form-control"
              name="job"
              id="job"
              value={userForm.job}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              value={userForm.phone}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Issue Date</label>
            <input
              type="text"
              className="form-control"
              name="idate"
              id="idate"
              value={userForm.idate}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Expiray Date</label>
            <input
              type="text"
              className="form-control"
              name="edate"
              id="edate"
              value={userForm.edate}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditEmployee;