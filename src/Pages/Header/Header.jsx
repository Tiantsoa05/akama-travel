import React from "react";

const Header = ()=>{
    return (
      <nav className="header sticky-top">
        <ul className="nav-links">
          <li className="nav-item"><a href="#home" className=" text-decoration-none menu">Destinations populaires</a></li>
          <li className="nav-item"><a href="#destinations" className=" text-decoration-none menu">Destinations</a></li>
          <li className="nav-item"><a href="#lieux" className=" text-decoration-none menu">Lieux</a></li>
          <li className="nav-item"><a href="#contact" className=" text-decoration-none menu">Contact</a></li>
        </ul>
      </nav>
    )
}

export default Header