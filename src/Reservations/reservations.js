import './reservations.css';
import Card from '../Card/card';
function Reservations({ reservations }){

    const reservationCards = reservations.map(reservation => {
        return (
          <Card
            name={reservation.name}
            date={reservation.date}
            time={reservation.time}
            number={reservation.number}
            key={reservation.id}
          />
        );
      });

  return (
    <div className='reservation-container'>
      {reservationCards}
    </div>
  )
}
export default Reservations;