//--------------------------register--------------------------------

document.getElementById("btnSingUp").addEventListener("click", function () {
    const fullName = document.getElementById("txtFullName").value;
    const email = document.getElementById("txtEmail").value;
    const userName = document.getElementById("txtUserName").value;
    const password = document.getElementById("txtPassword").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "userId": 0,
        "userName": userName,
        "emailId": email,
        "fullName": fullName,
        "role": "user",
        "createdDate": new Date().toISOString(),
        "password": password,
        "projectName": "BusBooking",
        "refreshToken": "",
        "refreshTokenExpiryTime": new Date().toISOString()
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    console.log(raw);


    fetch("https://api.freeprojectapi.com/api/BusBooking/AddNewUser", requestOptions)
        .then((response) => response.json())
        .then(result => {
            console.log(result);

            if (result.result) {
                window.location.href = "login.html"
                alert("registation succesfull")
            } else {
                alert("invalid caractor found");
            }
        });

});