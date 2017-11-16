function gadgets(id, name, desc, location){
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.location = location;
	this.isTaken = false;
}


function loc(id,name,desc){
	this.id = id;
	this.name = name;
	this.desc = desc;
}


	var crimeAlley = new loc(0,"Crime Alley","You walk out of the theatre with parents into Crime Alley because of Bats.");
	var batCave = new loc(1,"Bat Cave","You have entered the Bat Cave to create a plan to fight crime."); 
	var arkhamAsylum = new loc(2,"Arkham Asylum","You have entered Arkham Asylum where there are crazies.");
	var wayneManor = new loc(3,"Wayne Manor","You entered Wayne Manor where you find Alfred greeting you.");
	var wayneEnterprises = new loc(4,"Wayne Enterprises","Say Hi to Fox as you enter Wayne Enterprises");
	var iceBergLounge = new loc(5,"Iceberg Lounge","You are confronted by both Mr. Freeze and Penguin in the Iceberg Lounge.");
	var gcPolice = new loc(6,"Gotham City Police Department","You see Lt. Gordon shining the bat signal in the sky at the Gotham City Police Department.");
	var blackGate = new loc(7,"Black Gate Prison", "You visit the the Riddler at BlackGate Prison to find more clues.");
	var arkhamCity = new loc(8,"Arkham City","You have entered into Arkham City because the criminals are out of control.");
	var jokersFunland = new loc(9,"Joker's Funland","You have found Joker at Joker's Funland, do not let him escape.");


	var locations = [crimeAlley, batCave, arkhamAsylum, wayneManor, wayneEnterprises, iceBergLounge, gcPolice, blackGate, arkhamCity, jokersFunland];

	var Batarang = new gadgets(0,"Batarang", "Use the Batarang to fight Joker.", jokersFunland.id);
	var Grapple = new gadgets(1,"Grapple","Use the Grapple to escape Black Gate Prison undetected.", blackGate.id);
	var Batmobile = new gadgets(2,"Batmobile","Fox gives you the Batmobile, ride out in style!", wayneEnterprises.id);
	var BatSuit = new gadgets(3,"Bat Suit", "Put on the suit so you can fight crime.", batCave.id);
	var TheBatPlane = new gadgets(4,"The Bat Plane","Take the plane and fly away.", gcPolice.id);

	var gadgets = [Batarang, Grapple, Batmobile, BatSuit, TheBatPlane];


function crimeAlley_btn() {
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function batCave_btn() {
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function arkhamAsylum_btn() {
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function wayneManor_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function wayneEnterprises_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function iceBergLounge_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function gcPolice_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function blackGate_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function arkhamCity_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function jokersFunland_btn() {
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = true;
}

