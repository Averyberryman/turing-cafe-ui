import { useState } from 'react';
import './reservationForm.css';

function ReservationForm({ addReservation }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");

  function submitReservation(event) {
    event.preventDefault();
    const newReservation = {
      id: Date.now(), 
      name, 
      date, 
      time, 
      number: parseInt(number, 10)  // assuming the server expects an integer for number
    }
    addReservation(newReservation);
    clearInput();
  }

  function clearInput() {
    setName("");
    setDate("");
    setTime("");
    setNumber("");
  }

  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <input
        type='text'
        placeholder='Date (e.g. MM/DD/YYYY)'
        name='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />

      <input
        type='text'
        placeholder='Time (e.g. HH:MM AM/PM)'
        name='time'
        value={time}
        onChange={event => setTime(event.target.value)}
      />

      <input
        type='number'
        placeholder='Number of Guests'
        name='number'
        value={number}
        onChange={event => setNumber(event.target.value)}
      />

      <button onClick={event => submitReservation(event)}>SUBMIT</button>
    </form>
  )
}

export default ReservationForm;
