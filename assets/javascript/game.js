$(".btn-primary").on("click", function(){
	chooseWord();
	
});



var wordsArray = ['outkast', 'migos', 'wale', 'nwa', 'eminem', 'tupac', 'biggie', 'common', 'pitbull', 'tyga'];
var wordsUArray = [];
var lives = 10;
var numInWordsArray = wordsArray.length; 
var words = "";
var wordsU = "";

$(".btn-default").on("click", function(){
	var guess = this.innerHTML.toLowerCase();
	console.log(guess);
});

function chooseWord(){
	words = wordsArray[(Math.floor(Math.random()*numInWordsArray))];
	console.log(words);
}

function setCharacters(){
	//chooseWord();
	for (var i=0; i<words.length; i++){
		wordsArray[i] = words.charAt(i);
		wordsUArray[i] = "_";
		console.log(wordsUArray[i]);
	}
	wordsU = wordsUArray.join("");
	document.getElementById("WORD").innerHTML = wordsU;
	document.getElementById("numLetters").innerHTML = words.length;
}

function updateLetter(letter){
	var changes = 0;
	for( var i = 0; i <words.length; i++){
		wordArray[i] = words.charAt[i];
		if(words.charAt(i) == letter){
			wordsArray[i] == letter;
			changes +=1;
		}
	}

		if (changes < 1){
			lives -=1;
			document.getElementById("lives").innerHTML - lives;
			wordU = wordsArray.join("");
			document.getElementById("WORD").innerHTML = wordsU;
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

//chooseWord();
//setCharacters();