function QRcode(outcome) {
	if (outcome == true) {
		document.getElementById("reserveer").innerHTML = "<img src=Images/QRHarambe.jpg onClick='hefboom()'>";
	}
}

function hefboom() {
	window.open("Slagboomanimatie.htm","_self")
}