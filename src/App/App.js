import './App.css';
import React, { useState, useEffect } from 'react';
import { getReservations } from '../APICalls';
import Reservations from '../Reservations/reservations';


function App() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations()
      .then((data) => {
        setReservations(data);
      })
      .catch((error) => {
        console.log("There was a problem.", error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <Reservations reservations={reservations} />
    </div>
  );
}

export default App;
