import React, { useState } from 'react';
import '../App.css';
import Header from './Header/Header.jsx';
import Reservation from './Reservation/Reservation.jsx';
import Destinations from './Destinations/Destinations.jsx';
import Lieux from './Lieux/Lieux.jsx';
import Description from './Description/Description.jsx';
import { useTranslation } from 'react-i18next';
import Hero from './Hero/Hero.jsx';

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div className="App">
      <main>
          <Header/>
          <Hero/>
          <Description/>
          <Destinations/>
          <Reservation/>
          <Lieux/>
      </main>
    </div>
  );
}

export default Home;