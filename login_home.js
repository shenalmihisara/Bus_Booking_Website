const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors", requestOptions)
    .then(response => response.json())
    .then(result => {

        console.log(result);

        const vendors = document.getElementById("vendors")

        for (let i = 0; i < result.length; i++) {

            vendors.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card shadow">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${result[i].vendorName}
                            </h5>

                            <p class="card-text">
                                Vendor ID: ${result[i].vendorId}
                                <br>
                                Email: ${result[i].emailId}
                                <br>
                                ContactNo: ${result[i].contactNo}

                                </p>


                            <button class="btn btn-primary">
                                View Buses
                            </button>

                        </div>
                    </div>
                </div>
            `;
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });