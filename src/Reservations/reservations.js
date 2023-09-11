import './reservations.css';
import Card from "./Card"
function Reservations({ reservations }){

  const reservationCards = reservations.map(reservation => {
    return (
      <Card
        title={reservation.name}
        description={reservation.date}
        id={reservation.time}
        key={reservation.id}
      />
    )
  })

  return (
    <div className='reservation-container'>
      {reservationCards}
    </div>
  )
}
export default Reservations;