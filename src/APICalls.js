export function getReservations() {
    return fetch("http://localhost:3001/api/v1/reservations")
      .then((response) => {
        if (!response.ok) {
          throw new Error("The server is not working currently");
        }
        return response.json();
      });
  }
  
  export function postReservation(reservation) {
    return fetch("http://localhost:3001/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reservation),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to add reservation");
      }
      return response.json();
    });
  }
  
