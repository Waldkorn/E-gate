function hideAllContent() {
	var contentElements = document.getElementsByClassName("content");
	for (i = 0; i < contentElements.length; i++) {
		contentElements[i].style.display = "none";
	}
}

function navigate(input) {
	hideAllContent();
	document.getElementById(input).style.display = "block";
}

hideAllContent();