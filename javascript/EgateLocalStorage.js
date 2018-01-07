//aanmaak van de array met user objects
var users = [];

//variabele die word gebruikt om te checken of localstorage werkt
var check = window.localStorage['users'];


console.log(check.length);

//maakt een lege localstorage aan als er geen localstorage is, anders load hij de localstorage
if (check === undefined || check.length == 0) {
	localStorage['users'] = [];
} else {
	users = JSON.parse(localStorage['users']);
}

//object prototype voor gebruikers
function User(username, firstname, lastname, email, address, zipcode, city, password) {
	this.username = username;
	this.firstname = firstname;
	this.lastname = lastname;
	this.email = email;
	this.address = address;
	this.zipcode = zipcode;
	this.city = city;
	this.password = password;

	this.name = this.firstname + " " + this.lastname;
}

//voegt een user toe en stopt hem in de localstorage
function addUser(username, firstname, lastname, email, address, zipcode, city, password) {
	var addition = new User(username, firstname, lastname, email, address, zipcode, city, password);
	users.push(addition);
	localStorage['users'] = JSON.stringify(users);
}

//addUser functie voor de onclick zodat de html niet cluttered raakt.
function addPersonForm() {
	var username = document.getElementById("User_username").value;
	var firstname = document.getElementById("User_firstname").value;
	var lastname = document.getElementById("User_lastname").value;
	var email = document.getElementById("User_email").value;
	var address = document.getElementById("User_address").value;
	var zipcode = document.getElementById("User_zipcode").value;
	var city = document.getElementById("User_city").value;
	var password = document.getElementById("User_password").value;

	addUser(username, firstname, lastname, email, address, zipcode, city, password);

	alert("User succesfully added");

	navigate("loginForm")

	var fields = document.getElementById("accountMaken").childNodes;

	for (i = 0; i < fields.length; i++) {
		fields[i].value = "";
	}
}

//addUser("Waldkorn", "Ewout", "Eggens", "ewouteggens@hotmail.com", "Damsport 19", "9728 PP", "Groningen", "Waldiboy");

//aanmaak van de array met company objects
var companies = [];

var companyCheck = window.localStorage['companies'];

//maakt een lege localstorage aan voor companies als die er nog niet is, anders load hij de local storage
if (companyCheck === undefined || companyCheck.length == 0) {
	localStorage['companies'] = [];
} else {
	companies = JSON.parse(localStorage['companies']);
}

//object prototype voor companies
function Company(companyName, parkingSystem, password) {
	this.companyName = companyName;
	this.parkingSystem = parkingSystem;
	this.password = password;
}

//voegt nieuwe company toe
function addCompany(companyName, parkingSystem, password) {
	var addition = new Company(companyName, parkingSystem, password);
	companies.push(addition);
	localStorage['companies'] = JSON.stringify(companies);
}



//de onclick functie voor de form
function addCompanyForm() {
	var companyName = document.getElementById("bedrijfsnaam").value;
	var parkingSystem = document.getElementById("parkeerSysteem").value;
	var password = document.getElementById("companyFormPassword").value;

	addCompany(companyName, parkingSystem, password);

	alert("Company succesfully added");

	var fields = document.getElementById("btnAccountMaken").childNodes;

	for (i = 0; i < fields.length; i++) {
		fields[i].value = "";
	}
}