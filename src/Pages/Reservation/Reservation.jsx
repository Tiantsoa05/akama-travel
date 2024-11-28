import React, { useState } from "react";

const Reservation = ()=>{
    const [destination, setDestination] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleSearch = () => {
        console.log('Rechercher des disponibilités pour :', {
        destination,
        numRooms,
        numAdults,
        numChildren,
        checkInDate,
        checkOutDate,
        });
    };

    return (
      <div className="search-form " style={{marginTop: "30vh"}}>
          <label htmlFor="destination">Destination :</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <label htmlFor="numRooms">Nombre de chambres :</label>
          <input
            id="numRooms"
            type="number"
            className="number-champ"
            value={numRooms}
            onChange={(e) => setNumRooms(Number(e.target.value))}
          />
          <label htmlFor="numAdults">Adultes :</label>
          <input
            id="numAdults"
            type="number"
            className="number-champ"
            value={numAdults}
            onChange={(e) => setNumAdults(Number(e.target.value))}
          />
          <label htmlFor="numChildren">Enfants :</label>
          <input
            id="numChildren"
            type="number"
            className="number-champ"
            value={numChildren}
            onChange={(e) => setNumChildren(Number(e.target.value))}
          />
          <label htmlFor="checkInDate">Date d'arrivée :</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <label htmlFor="checkOutDate">Date de départ :</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
          <button onClick={handleSearch}>Vérifier les disponibilités</button>
      </div>
    )
}

export default Reservation