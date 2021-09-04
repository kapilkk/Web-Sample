getMembers();

//to get all the member via api request
function getMembers() {
    fetch("http://localhost:5000/api/members")
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(res);
            }
        })
        .then(data => {
            //console.log(data)
            renderMembers(data);
        })
        .catch(err => {
            console.log(err);
        });
}

//function to render all the members via DOM manipulation
function renderMembers(members) {
    let memberRef = document.getElementById("members-container");

    members.forEach(member => {
        let column = document.createElement("div");
        column.className = "col-12 col-md-4 col-lg-3 mt-3";

        let card = document.createElement("div");
        card.className = "card card-custom";

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";

        let mainBody = document.createElement("div");
        mainBody.className = "d-flex align-items-center justify-content-start";

        let iconDiv = document.createElement("div");
        iconDiv.className = "gender-icon";

        let icon = document.createElement("i");

        if (member.gender === "MALE")
            icon.className = "las la-male fs-5";
        else if (member.gender === "FEMALE")
            icon.className = "las la-female fs-5";

        let fullname = document.createElement("h6");
        fullname.className = "mb-0 ms-1";
        fullname.innerHTML = member.fullname;

        let mobile = document.createElement("p");
        mobile.className = "text-muted mt-3 mb-0";
        mobile.innerHTML = "+91 " + member.mobile;

        column.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(mainBody);
        mainBody.appendChild(iconDiv);
        iconDiv.appendChild(icon);
        mainBody.appendChild(fullname);
        cardBody.appendChild(mobile);

        memberRef.appendChild(column);
    });
}


