import './Card.css';

const Card = ({ name, date, time, number }) => {
    return (
      <div className='card'>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{time}</p>
        <p>Number of Guests: {number}</p>
      </div>
    )
  }
  export default Card;