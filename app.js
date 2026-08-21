function adminLogiOnAction(event) {

    event.preventDefault();

    Swal.fire({
        title: "Hello!",
        text: "your really admin",
        icon: "error",
        confirmButtonText: "OK"
    }).then(() => {

        window.location.href = "admin_login.html";

    });

}