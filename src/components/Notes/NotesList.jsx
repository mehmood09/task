import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NotesList() {
  const [userForm, setUserForm] = useState([]);
  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/notes/delete-note/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/notes/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    
    <div className="divide-blue-200...">

<div className="mb-5 flex items-center justify-between">
                            <label className="text-headingColor font-bold text-[16px] leading-7">
                                Select Class: <select name="role" value="" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                focus:outline-none">
                                    <option value="9th">9th</option>
                                    <option value="10th">10th</option>
                                </select>
                            </label>
                            <label className="text-headingColor font-bold text-[16px] leading-7">
                                Question Type: <select name="qtype" value="" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                focus:outline-none">
                                    <option value="">Select</option>
                                    <option value="MCQs">MCQs</option>
                                    <option value="Short">Short</option>
                                    
                                </select>
                            </label>
                            <label className="text-headingColor font-bold text-[16px] leading-7">
                                Chapter: <select name="chapter" value="" className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
                                focus:outline-none">
                                    <option value="">Select</option>
                                    <option value="C1">C1</option>
                                    <option value="C2">C2</option>
                                    <option value="C3">C3</option>
                                    <option value="C4">C4</option>
                                    <option value="C5">C5</option>
                                </select>
                            </label>
                        </div>




      <table className="table urduh border-1 border-solid border-[#0066ff61] text-[18px] font-bold mb-10 leading-7 text-headingColor">
        <thead>
          <tr>
          <th scope="col">Class</th>
          <th scope="col">Chapter</th>
          <th scope="col">Answer</th>
          <th scope="col">Question</th>
          <th scope="col">#</th>
            
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr className="font-Jameel Noori Nastaleeq text-right divide-y divide-y divide-dashed divide-sky-400" key={index}>
                <td>{user.Class}</td>
                <td>{user.Chapter}</td>
                <td>{user.Answer}</td>
                <td>{user.Question}</td>
                <th scope="row">{user.Id}</th>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default NotesList;