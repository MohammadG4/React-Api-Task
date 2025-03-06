import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";

function App() {
  const [data, setData] = useState([])

const generate=(gender)=>{
  if (gender == "r"){
    axios.get('https://randomuser.me/api/')
    .then(function (response) {
      setData(response.data.results)
    })}
  else if (gender == "m"){
    axios.get('https://randomuser.me/api/?gender=male')
    .then(function (response) {
      setData(response.data.results)
    })}
  else if (gender == "f"){
    axios.get('https://randomuser.me/api/?gender=female')
    .then(function (response) {
      setData(response.data.results)
    })}

}


useEffect(()=>{
  generate("r");
},[])
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={data[0]?.picture.large} alt="" />
          <div className="data">
            <h1 className="name">{data[0]?.name.title} {data[0]?.name.first} {data[0]?.name.last}</h1>
            <p className="bd"><FaCalendarAlt /> {data[0]?.dob.date.split('T')[0]} ({data[0]?.dob.age}years old)</p>
            <p className="email"><MdEmail /> {data[0]?.email}</p>
            <p className="phone"><FaPhone/> {data[0]?.phone}</p>
            <p className="country"><FaGlobe /> {data[0]?.location.country}</p>
          </div>
        </div>
        <div className="depi">
          <button onClick={()=>{generate("r")}}><FaRandom color='white' size='1.1rem'/></button>
          <button onClick={()=>{generate("m")}}><IoMdMale color='white'size='1.3rem'/></button>
          <button onClick={()=>{generate("f")}}><IoMdFemale color='white' size='1.3rem'/></button>
        </div>
      </div>
    </>
  )
}

export default App
