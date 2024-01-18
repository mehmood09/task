import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditNote() {
  const [userForm, setUserForm] = useState({
    id: "",
    question: "",
    answer: "",
    chapter: "",
    classs: "",
    subject: "",
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.id]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/notes/update-note/" + params.id, {
        question: userForm.question,
        answer: userForm.answer,
        chapter: userForm.chapter,
        classs: userForm.classs,
        subject: userForm.subject,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/notes-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/notes/get-note/" + params.id)
      .then((res) => {
        setUserForm({
          question: res.data.data.question,
          answer: res.data.data.answer,
          chapter: res.data.data.chapter,
          classs: res.data.data.classs,
          subject:  res.data.data.subject,
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
        <div className="mb-3">
            <label className="form-label">ID</label>
            <input
              type="text"
              className="form-control"
              name="id"
              id="id"
              value={userForm.id}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Question</label>
            <input
              type="text"
              className="form-control"
              name="question"
              id="question"
              value={userForm.question}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Answer</label>
            <input
              type="text"
              className="form-control"
              name="answer"
              id="answer"
              value={userForm.answer}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Chapter</label>
            <input
              type="text"
              className="form-control"
              name="chapter"
              id="chapter"
              value={userForm.chapter}
              onChange={inputsHandler}
            />
          </div>


          <div className="mb-3">
            <label className="form-label">Class</label>
            <input
              type="text"
              className="form-control"
              name="classs"
              id="classs"
              value={userForm.classs}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              value={userForm.subject}
              onChange={inputsHandler}
            />
          </div>



          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditNote;