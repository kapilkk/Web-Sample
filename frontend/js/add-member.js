let memberForm = document.getElementById('memberForm');

//submit event listener on memberForm
memberForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //storing form input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.getElementById("gender").value;

    const memberData = {
        first_name: firstName,
        last_name: lastName,
        mobile,
        gender
    }

    //console.log(memberData);
    //api request to save the member details in db
    fetch("http:localhost:5000/api/members", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(memberData)
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(res);
            }
        })
        .then(data => {
            //console.log(data);
            showToast();
            memberForm.reset();
        })
        .catch(err => {
            console.log(err);
        });
});

//to display a toaster with a message
function showToast() {
    const successToast = document.getElementById("successToast");
    let toast = new bootstrap.Toast(successToast)

    toast.show()
}
