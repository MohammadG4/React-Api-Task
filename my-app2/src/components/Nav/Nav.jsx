import React, { useState } from 'react';
import "./Nav.css";
import Logo from "../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu toggled:", !menuOpen); // For debugging
  };

  return (
    <>
      <div className="mainNav">
        <a href="https://180daraga.com/"><img src={Logo} alt="" /></a>
        
        <div className="ham" onClick={toggleMenu}><GiHamburgerMenu  color='#66140f' /></div>
        <ul className={menuOpen ? "mobile-menu-active" : ""}>
          <a href="https://180daraga.com/"><li>Home</li></a>
          <a href="https://180daraga.com/event"><li>Event</li></a>
          <a href="https://180daraga.com/team"><li>Team Hierarchy</li></a>
          <a href="https://180daraga.com/blogs"><li>Blogs</li></a>
        </ul>
      </div>
    </>
  );
};

export default Nav;