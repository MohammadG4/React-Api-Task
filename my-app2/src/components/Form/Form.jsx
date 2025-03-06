import React from 'react'
import "./Form.css"


const Form = () => {
  return (
    <>
      <form method='post'>
        <div className="mainForm">
    <h1 className='cautionH'>Cautions</h1>
    <p className='cautionP'>Be sure to check your E-mail after submitting the form!</p>
          <label for="name">Name</label>
          <input type="text" name="name" id="name" />

          <label for="email">Email</label>
          <input type="email" name="email" id="email" />

          <label for="phone">Phone</label>
          <input type="text" name="phone" id="phone" />

          <label for="university">University</label>
          <select name="university" id="university" required="">
            <option value="">Select an option:</option>
            <option value="Cairo ">Cairo </option>
            <option value="Ain Shams">Ain Shams</option>
            <option value="Helwan">Helwan</option>
            <option value="Other">Other</option>
          </select>
          <label for="university_level">University Level</label>
          <select name="university_level" id="university_level" required="">
            <option value="">Select an option:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option></select>
          <label for="data1">Course</label>
          <select name="data1" id="data1" required="">
            <option value="">Select an option:</option>
            <option value="C++">C++</option>
            <option value="OOP">OOP</option>
            <option value="Flutter">Flutter</option>
            <option value="DS &amp; Algorithms">DS &amp; Algorithms</option>
            <option value="UI/UX">UI/UX</option>
          </select>

          <button>Submit</button>
          </div>
      </form>
    </>
  )
}

export default Form