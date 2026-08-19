const raw = "";

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusLocations", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));