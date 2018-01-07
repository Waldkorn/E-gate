//functie die controleert of de logingegevens kloppen
function login() {

	var username = document.getElementById("username").value;
	var password = document.getElementById("userpassword").value;
	var userIndex = getIndexOfUser(username);

	if (userIndex == undefined || password !== users[userIndex].password) {
		alert("The username and/or password is not correct");
	} else {
		navigate("freeSpaces");
	}
}

function getIndexOfUser(username) {
	for (i = 0; i < users.length; i++) {
		if (users[i].username == username) {
			return i;
		}
	}
}

//login voor de company
function companyLogin() {
	var username = document.getElementById("companyName").value;
	var password = document.getElementById("companyPassword").value;

	var companyIndex = getIndexOfCompany(username);

	console.log(companyIndex);

	if (companyIndex == undefined || password !== companies[companyIndex].password) {
		alert("The username and/or password is not correct");
	} else {
		console.log("acces granted");
	}
}

function getIndexOfCompany(companyName) {
	for (i = 0; i < companies.length; i++) {
		if (companies[i].companyName == companyName) {
			return i;
		}
	}
}