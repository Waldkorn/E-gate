//array waar alle parkeerplaatsen in terecht komen
var parkeerplaatsen = [];

//prototype voor object Parkeerplaats
function Parkeerplaats(naam, locatie, capaciteit, cost, image) {
	this.naam = naam;
	this.locatie = locatie;
	this.capaciteit = capaciteit;
	this.cost = cost;
	this.image = image;
}

//een demo lijst maken met parkeerplaatsen
var QPark = new Parkeerplaats("Q-park museum centrum", "Herepoortenmolendrift 2", 225, 2.50, "Images/QParkMuseum.jpg");
var Interparking = new Parkeerplaats("Interparking bios", "ruiterstraat 12", 180, 2.00, "Images/Interparking.jpg");
var QPark2 = new Parkeerplaats("Q-park rademarkt", "Rademarkt 27", 370, 2.50, "Images/QParkRademarkt.jpg")

//alle parkeerplaatsen toevoegen
parkeerplaatsen.push(QPark);
parkeerplaatsen.push(Interparking);
parkeerplaatsen.push(QPark2);

console.log(parkeerplaatsen);

for (i = 0; i < parkeerplaatsen.length; i++) {
	document.getElementById("parkeerPlaatsen").innerHTML += "<div class=parkeerPlaatsDIV alternative_cls><div class=detailsfreespace><div class=park><p>" + parkeerplaatsen[i].naam + "</p></div><div class=park><p>" + parkeerplaatsen[i].locatie + "</p></div><div class=park><p>" + parkeerplaatsen[i].capaciteit + " free spaces</p></div><div class=park><p>" + parkeerplaatsen[i].cost + " euro per hour</p></div></div><div class=parkeerImage><img src=" + parkeerplaatsen[i].image + " /></div><button class=buttonReserve onClick=navigate('reserveer')><span>Reserve</span></button></div>";
}