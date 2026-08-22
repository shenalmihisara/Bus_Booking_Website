function adminLoginPageOnAction(event) {

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

function AdminLoginOnAction() {
    const EnterPin = document.getElementById("Admin_pin").value;

    const AdminPin = "1234";

    if (AdminPin === EnterPin) {

        Swal.fire({
            title: "Your Successfuly Login Admin Page!",
            text: "Welcome!",
            icon: "success",
            confirmButtonText: "Go to Admin Page"
        }).then(() => {
            window.location.href = "login_home_admin.html";
        });

        localStorage.setItem("isLoggedIn", "true")
    }else{
        Swal.fire({
            title: "Your Admin Pin Is Wrong",
            icon: "error"
        });
    }
}