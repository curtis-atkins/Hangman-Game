$(".btn-primary").on("click", function(){
	chooseWord();
  setCharacters();
});

// you need to call your functions for them to run! This
// is a common beginner mistake :) 
$(".letterButton").on("click", function() {
  updateLetter(this.innerHTML.toLowerCase());
});


var wordsArray = ['outkast', 'migos', 'wale', 'nwa', 'eminem', 'tupac', 'biggie', 'common', 'pitbull', 'tyga'];
var chosenWord = [];
var wordsUArray = [];
var lives = 10;
var numInWordsArray = wordsArray.length; 
var words = "";
// try to use clearer variable names, I was a bit unclear on what wordsU meant,
// something like guessedWord and computerWord (just an example) would make more
// sense to another programmer.
var wordsU = "";

$(".btn-default").on("click", function(){
	var guess = this.innerHTML.toLowerCase();
	console.log("guess");
	console.log(guess);
});

function chooseWord(){
	words = wordsArray[(Math.floor(Math.random()*numInWordsArray))];
  console.log("words");
	console.log(words);
}

function setCharacters(){
	//chooseWord();
	for (var i=0; i<words.length; i++){
    // nice loop, but we need to update a new array with the individual letters rather than the existing
    // words array, this will result in something like ["m", "i", "g", "o", "s", outkast, eminem, ... ]
	  chosenWord[i] = words.charAt(i);
		wordsUArray[i] = "_";
	}
	wordsU = wordsUArray.join("");
  console.log("wordsU");
  console.log(wordsU);
	document.getElementById("WORD").innerHTML = wordsU;
	document.getElementById("numLetters").innerHTML = words.length;
}

function updateLetter(letter){
  // we can use a boolean here since this is keeping track of two things,
  // guess was correct (true) and guess was false (false)
  var changes = false 
  console.log("updateLetter");
  console.log(wordsArray);
  console.log(words);
  console.log(wordsUArray);
	for( var i = 0; i <words.length; i++){
		if(words.charAt(i) == letter){
      // we can use one equal sign here since we are assigning a variable
      // rather than comparing (where we actually want to use three "===" when comparing)
			wordsUArray[i] = letter;
      // here we updated to say guess is correct
			changes = true;
		}
	}

		if (changes){
      // if changes is true when something changes, we want this to happen when
      // changes is true, and lives to decrease when changes is 0
			document.getElementById("lives").innerHTML - lives;
			wordU = wordsUArray.join("");
			document.getElementById("WORD").innerHTML = wordU;
		} else {
			lives -=1;
    }
			var words1 = wordsArray.join("");
			var words2 = wordsUArray.join("");

			if(words1 ==words2){  
				alert("You Won! Loading a new word!");
				window.location.reload();
			}
			if(lives < 1){
				document.getElementById("WORD").innerHTML == words1;
				alert("You have run out of lives. Please try again.");
				window.location.reload();
			}
}
