import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Reservation = ()=>{
    const [destination, setDestination] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const {t,i18n} = useTranslation()

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
      <div className="search-form form">
        <h3>{t('incitation')} </h3>
        <p>{t('incitation_text')}</p>
          <label htmlFor="destination">Destination :</label>
          <input
            type="text"
            id="destination form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <label htmlFor="numAdults">{t('nb_pers')} :</label>
          <input
            id="numAdults"
            type="number"
            className="number-champ form-control"
            value={numAdults}
            onChange={(e) => setNumAdults(Number(e.target.value))}
          />
          <label htmlFor="numChildren">{t('sejour')} :</label>
          <input
            id="numChildren"
            type="number"
            className="number-champ form-control"
            value={numChildren}
            onChange={(e) => setNumChildren(Number(e.target.value))}
          />
          <label htmlFor="checkInDate">{t('date_depart')} :</label>
          <input
            type="date"
            id="checkInDate form-control"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
          <button onClick={handleSearch} className="btn btn_conf">{t('valider')}</button>
      </div>
    )
}

export default Reservation