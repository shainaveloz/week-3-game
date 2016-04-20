// Variables
game = {};
game.characters = ["Captain Marvel", "Superman", "Batman", "Darkseid", "Catwoman", "Joker", "The Flash", "Martian Manhunter", "Doomsday", "Spectre","Wally West", "John Stewart", "Hal Jordan", "Deadshot", "Sinestro", "Wonder Woman", "Green Arrow", "Aquaman", "Robin", "Lex Luthor", " General Zod", "Vixen", "Firestorm", "Bane", "Black Canary", "Beast Boy", "Bizarro", "Atom", "Brainiac", "Constantine", "Cyborg", "Hawkman", "Killer Frost", "Katana", "Jimmy Olsen", "Jay Garrick", "Heat Wave", "Hawkgirl", "Harley Quinn", "Shazam", "Teios", "Two-Face", "Starfire", "Riddler", "Scarecrow", "Rip Hunter", "Ra's al Ghul", "Raven", "Mr. Freeze", "Pandora"] ;

var word;
game.charactersPArray = [];
game.numberInWordBank = 51;
game.lives = 7;
game.placeholder = "";
game.currentWord;
game.wins;

	

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	game.Pullword();
	game.SetUnderline();

}
	game.Pullword = function() {
		word = game.characters[Math.floor(Math.random() * game.characters.length)];
	}

	game.SetUnderline = function() {
		for (i=0; i < game.characters.length; i++) {
			game.characters[i] = game.characters[i].charAt(i);
			game.charactersPArray[i] = "_";
		}
		game.placeholder = game.charactersPArray.join("");
		document.getElementById("word").innerHTML = game.placeholder;
		document.getElementById("Letters").innerHTML = word.length;
	}

	game.UpdateLetter = function(letter) {
		game.Changes = 0;
		for (i=0; i < game.characters.length; i++){
			game.characters[i] = game.characters.charAt(i);
			if (game.characters.charAt(i)==letter) {
				game.charactersPArray[i] = letter;
				game.Changes += 1;
			}
		}
		if (game.Changes < 1) {
			game.lives -=1;
			document.getElementById("lives").innerHTML = game.lives;
		}
		game.placeholder = game.charactersPArray.join("");
		document.getElementById("word").innerHTML = game.placeholder;

		game.Word1 = game.characters.join("");
		game.Word2 = game.charactersPArray.join("");

		if (game.lives < 1) {
			document.getElementById("word").innerHTML = game.Word1;
			alert("You lost!");
			window.location.reload();
		}
	}


	document.getElementById("wins").innerHTML = "Wins = " + game.wins;
	document.getElementById("lives").innerHTML = "Lives = " + game.lives;
