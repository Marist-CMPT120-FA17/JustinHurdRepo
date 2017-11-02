

function crimeAlley() {
	var desc = "You walk out of the theatre with parents into Crime Alley because of Bats.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
    
}

function batCave() {
	var desc = "You put on the Bat Suit in the Bat Cave to fight crime.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function arkhamAsylum() {
	var desc = "You have entered Arkham Asylum where there are crazies.";
	updateDisplay(desc);
	document.getElementById("north").disabled = true;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function wayneManor() {
	var desc = "You entered Wayne Manor where you find Alfred greeting you.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function wayneEnterprises() {
	var desc = "Say Hi to Fox as you enter Wayne Enterprises.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function iceBergLounge() {
	var desc = "You are confronted by both Mr. Freeze in the Iceberg Lounge.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function gcPolice() {
	var desc = "You see Lt. Gordon shining the bat signal in the sky at the Gotham City Police Department.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = true;
}

function blackGate() {
	var desc = "You visit the Penguin at BlackGate Prison to find more clues.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = false;
    document.getElementById("west").disabled = false;
}

function arkhamCity() {
	var desc = "You have entered into Arkham City because the criminals are out of control.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = false;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = false;
}

function jokersFunland() {
	var desc = "You have found Joker at Joker's Funland, do not let him escape.";
	updateDisplay(desc);
	document.getElementById("north").disabled = false;
    document.getElementById("south").disabled = true;
    document.getElementById("east").disabled = true;
    document.getElementById("west").disabled = true;
}
