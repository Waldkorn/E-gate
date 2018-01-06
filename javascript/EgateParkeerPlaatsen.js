//array waar alle parkeerplaatsen in terecht komen
var parkeerplaatsen = [];

//prototype voor object Parkeerplaats
function Parkeerplaats(naam, locatie, capaciteit, image) {
	this.naam = naam;
	this.locatie = locatie;
	this.capaciteit = capaciteit;
	this.image = image;
}

//een demo lijst maken met parkeerplaatsen
var QPark = new Parkeerplaats("Q-park museum centrum", "Herepoortenmolendrift 2", 225, "Images/QParkMuseum.jpg");
var Interparking = new Parkeerplaats("Interparking bios", "ruiterstraat 12", 180, "Images/Interparking.jpg");
var QPark2 = new Parkeerplaats("Q-park rademarkt", "Rademarkt 27", 370, "Images/QParkRademarkt.jpg")

//alle parkeerplaatsen toevoegen
parkeerplaatsen.push(QPark);
parkeerplaatsen.push(Interparking);
parkeerplaatsen.push(QPark2);

console.log(parkeerplaatsen);

for (i = 0; i < parkeerplaatsen.length; i++) {
	document.getElementById("parkeerPlaatsen").innerHTML += "<div class=parkeerPlaatsNaam>" + parkeerplaatsen[i].naam + "</div>";
	document.getElementById("parkeerPlaatsen").innerHTML += "<div class=parkeerPlaatsLocatie>" + parkeerplaatsen[i].locatie + "</div>";
	document.getElementById("parkeerPlaatsen").innerHTML += "<div class=parkeerPlaatsCapaciteit>" + parkeerplaatsen[i].capaciteit + "</div>";
	document.getElementById("parkeerPlaatsen").innerHTML += "<div class=parkeerImage><img src=" + parkeerplaatsen[i].image + "></div>";
}
