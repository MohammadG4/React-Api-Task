import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    university_level: "",
    course: ""
  });


  const submit = (e) => {
    e.preventDefault(); 

    axios
      .post("https://fake-form.onrender.com/api/students/addStudent", data)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    setdata({
      name: "",
      email: "",
      phone: "",
      university: "",
      university_level: "",
      course: ""
    });
  };


  const update = (e) => {
    const { name, value } = e.target;
    setdata((prevdata) => ({
      ...prevdata,
      [name]: value
    }));
  };



  return (
    <>
      <form onSubmit={submit}>
        <div className="mainForm">
          <h1 className="cautionH">Cautions</h1>
          <p className="cautionP">
            Be sure to check your E-mail after submitting the form!
          </p>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={data.name} onChange={update} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={data.email} onChange={update} required />

          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" value={data.phone} onChange={update} required />

          <label htmlFor="university">University</label>
          <select name="university" id="university" value={data.university} onChange={update} required>
            <option value="">Select an option:</option>
            <option value="Cairo">Cairo</option>
            <option value="Ain Shams">Ain Shams</option>
            <option value="Helwan">Helwan</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="university_level">University Level</label>
          <select name="university_level" id="university_level" value={data.university_level} onChange={update} required>
            <option value="">Select an option:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="course">Course</label>
          <select name="course" id="course" value={data.course} onChange={update} required>
            <option value="">Select an option:</option>
            <option value="C++">C++</option>
            <option value="OOP">OOP</option>
            <option value="Flutter">Flutter</option>
            <option value="DS & Algorithms">DS & Algorithms</option>
            <option value="UI/UX">UI/UX</option>
          </select>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default Form;