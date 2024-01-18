import React, { useEffect, useState } from "react";
import axios from "axios";


function CreateNotes() {
  const [userForm, setUserForm] = useState({
    id: "",
    question: "",
    answer: "",
    chapter: "",
    classs: "",
    subject: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/notes/create-note", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
            id: "",
            question: "",
            answer: "",
            chapter: "",
            classs: "",
            subject: "",
        });
      });
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateNotes;