export function getReservations() {
    return fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("The server is not working currently");
        }
        return response.json();
      });
  }
  
