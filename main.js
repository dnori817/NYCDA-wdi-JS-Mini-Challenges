//1. Multi-dimensional Array

var nesGames = ["Final Fantasy", "Castlevania", "Contra"];

var superNesGames = ["Super Mario World", "Super Metroid", "Final Fantasy II"];

var nintendoConsoles = [nesGames, superNesGames];

//outputs the two Final Fantasy games
console.log(nintendoConsoles[0][0]);
console.log(nintendoConsoles[1][2]);




//2. Compliment Function

function complimentPerson(name) {
	
	return name + " is awesome!!!";
}

console.log(complimentPerson("Dave"));
console.log(complimentPerson("Damien"));
console.log(complimentPerson("Danielle"));




//3. 99 Bottles of Beer

//for loop
for (var i = 99; i > 0; i--) {
	var nextBottle = i-1;
	console.log(i + " bottles of beer on the wall, " + i + " bottles of beer..." + "\n" + "Take one down, pass it around, " + nextBottle + " bottles of beer on the wall!" );
}


//while loop
