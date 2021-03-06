var loggedInCompany = -1;

//functie die controleert of de logingegevens kloppen
function login() {

	var username = document.getElementById("username").value;
	var password = document.getElementById("userpassword").value;
	var userIndex = getIndexOfUser(username);

	if (userIndex == undefined || password !== users[userIndex].password) {
		alert("The username and/or password is not correct");
	} else {
		navigate("freeSpaces");
		document.getElementById("username").value = "";
		document.getElementById("userpassword").value = "";
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

	if (companyIndex == undefined || password !== companies[companyIndex].password) {
		alert("The username and/or password is not correct");
	} else {
		loggedInCompany = companyIndex;
		navigate("profileCompany");
	}
}

function getIndexOfCompany(companyName) {
	for (i = 0; i < companies.length; i++) {
		if (companies[i].companyName == companyName) {
			return i;
		}
	}
}