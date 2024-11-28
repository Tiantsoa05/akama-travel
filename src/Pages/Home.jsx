import React, { useState } from 'react';
import '../App.css'; // Importez votre fichier de styles CSS
import Header from './Header/Header.jsx';
import Reservation from './Reservation/Reservation.jsx';
import Destinations from './Destinations/Destinations.jsx';
import Lieux from './Lieux/Lieux.jsx';

function Home() {

  return (
    <div className="App">
        <Header/>
      <main>
        <div className="hero" id='home'>
          <div className="container align-self-center w-50" >
            <h2 className='titre text-center'>Akama Travel</h2>
            <p className='text-presentation'> Nous vous aidons à choisir la meilleure destination.</p>
          </div>
          <Reservation/>
        </div>
          <Destinations/>
          <Lieux/>
      </main>
    </div>
  );
}

export default Home;