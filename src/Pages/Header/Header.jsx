import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import Langues from "./Langues";
import { FaGlobe, FaBars } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [appearLanguage, setAppearLanguage] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAppearLanguage(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeModal = ()=>{
    setAppearLanguage(false)
  }

  return (
    <nav className="header">
      <div className="logo" />
      <div className="menus">
        <FaBars className="menu-toggle" size={24} onClick={toggleMenu} style={{ cursor: "pointer", display: "none" }} />
        <ul className={`nav-links d-xs-none`}>
          <li className="nav-item"><a href="#home" className="menu">{t('home')}</a></li>
          <li className="nav-item"><a href="#about" className="menu">{t('about')}</a></li>
          <li className="nav-item"><a href="#services" className="menu">Services</a></li>
          <li className="nav-item"><a href="#destinations" className="menu">Destinations</a></li>
          <li className="nav-item"><a href="#contact" className="menu">Contact</a></li>
          <li className="nav-item"><FaGlobe onClick={() => setAppearLanguage(!appearLanguage)} className="languages"/></li>
        </ul>
        {appearLanguage && <Langues setLanguage={changeLanguage} disappear={closeModal}/>}
      </div>
    </nav>
  );
};

export default Header;
