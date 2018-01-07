function companyedit(company) {
	navigate("companyEdit");

	document.getElementById("editBedrijfsnaam").value = companies[loggedInCompany].companyName;
	document.getElementById("editUsername").value = companies[loggedInCompany].username;
	document.getElementById("editAddress").value = companies[loggedInCompany].address;
	document.getElementById("editZipcode").value = companies[loggedInCompany].zipcode;
	document.getElementById("editCity").value = companies[loggedInCompany].city;
	document.getElementById("editCountry").value = companies[loggedInCompany].country;
	document.getElementById("editPhone").value = companies[loggedInCompany].phone;
	document.getElementById("editEmail").value = companies[loggedInCompany].email;

	var formElements = document.getElementsByClassName("formFields");

	for (i = 0; i < formElements.length; i++) {
		if (formElements[i].value == "undefined") {
			formElements[i].value = "";
		}
	}
} 