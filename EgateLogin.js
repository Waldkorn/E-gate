//user object aanmaken
function Person(username, password) {
	this.username = username;
	this.password = password;
}

//company object aanmaken
function Company(companyname, password) {
	this.companyname = companyname;
	this.password = password;
}

//maakt admin persoon aan om in te loggen voor de demo
var admin = new Person("admin", "admin");

//maakt codegorilla company aan
var demoCompany = new Company("CodeGorilla", "test");

//functie die controleert of de logingegevens kloppen
function login() {

	var username = document.getElementById("fullname").value;
	var password = document.getElementById("password").value;

	if (username == admin.username && password == admin.password) {
		getAccess();
	} else {
		document.getElementById("warning").innerHTML = "The username and/or password is not correct";
	}
}

//functie die bij correct login daadwerkelijk inlogt
function getAccess() {
	console.log("access granted");
}

//login voor de company
function companyLogin() {
	var username = document.getElementById("companyName").value;
	var password = document.getElementById("companyPassword").value;

	if (username == demoCompany.companyname && password == demoCompany.password) {
		getCompanyAccess();
	} else {
		document.getElementById("companyWarning").innerHTML = "The username and/or password is not correct";
	}
}

//functie die bij correct login inlogt voor bedrijven
function getCompanyAccess() {
	console.log("access granted");
}