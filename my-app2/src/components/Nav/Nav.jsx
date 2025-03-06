import React from 'react'
import "./Nav.css"
import Logo from "../../assets/logo.png"

const Nav = () => {
  return (
        <>
      <div className="mainNav">
        <a href="https://180daraga.com/"><img src={Logo} alt="" /></a>
        
        <ul>
          <a href="https://180daraga.com/"><li>Home</li></a>
          <a href="https://180daraga.com/event"><li>Event</li></a>
          <a href="https://180daraga.com/team"><li>Team Hierarchy</li></a>
          <a href="https://180daraga.com/blogs"><li>Blogs</li></a>
          
        </ul>
      </div>
    </>
  )
}

export default Nav
