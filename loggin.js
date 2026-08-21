document.getElementById("btnLogin").addEventListener("click", function() {
  const username = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "userName": username,
    "password": password
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  fetch("https://api.freeprojectapi.com/api/BusBooking/login", requestOptions)
    .then((response) => response.json())
    .then(result => {
      console.log(result);

      //login succes nam
      if (result.result === true) {
        alert("login successful");

        window.location.href = "login_home_admin.html"
      } else {
        alert("invalid user name or password");
      }
    })
    .catch((error) => console.error(error));



});