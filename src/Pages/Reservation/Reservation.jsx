import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import de Bootstrap pour des styles élégants

const Reservation = () => {
  const [destination, setDestination] = useState('');
  const [numAdults, setNumAdults] = useState(1);
  const [numSejour, setNumSejour] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');

  const { t, i18n } = useTranslation();

  const handleSearch = async (e) => {

    e.preventDefault();

    const data = {
      destination,
      numAdults,
      numSejour,
      checkInDate
    };

    if(destination.trim()!=='' || numAdults.trim()!=='' || numSejour.trim()!=='' || checkInDate.trim()!==''){
      try {
        const response = await axios.post('http://localhost:3000/send-email', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response,data)
        if (response.status === 200) {
          alert(t('email_sent_success'));
        } else {
          alert(t('email_sent_error'));
        }
      } catch (error) {
        console.log("error")
      }
    }else{
      alert(t('form_error'))
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 rounded">
        <h3 className="text-center mb-4 text-primary">{t('incitation')}</h3>
        <p className="text-center mb-4">{t('incitation_text')}</p>
        
        <form onSubmit={handleSearch}>
          <div className="form-group mb-3">
            <label htmlFor="destination" className="form-label">{t('destination')} :</label>
            <input
              type="text"
              id="destination"
              className="form-control"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="numAdults" className="form-label">{t('nb_pers')} :</label>
            <input
              id="numAdults"
              type="number"
              className="form-control"
              value={numAdults}
              min={1}
              onChange={(e) => setNumAdults(Number(e.target.value))}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="numSejour" className="form-label">{t('sejour')} :</label>
            <input
              id="numSejour"
              type="number"
              className="form-control"
              value={numSejour}
              min={0}
              onChange={(e) => setNumSejour(Number(e.target.value))}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="checkInDate" className="form-label">{t('date_depart')} :</label>
            <input
              type="date"
              id="checkInDate"
              className="form-control"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg px-5 py-2">
              {t('valider')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
