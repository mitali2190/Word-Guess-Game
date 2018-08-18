var arrayOfLetters = ["tiger", "lion", "parrot", "rabbit"];
var pickedLetter;
var pickedLetterArray = [];
var pickedLetterPlaceholders = [];
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var guessesLeft;
var prevWord;

function newGame() {
    guessesLeft = 10;
    document.getElementById('guess_left').innerHTML = guessesLeft;
    lettersGuessed = [];
    pickedLetter = arrayOfLetters[Math.floor(Math.random() * arrayOfLetters.length)];
    console.log(pickedLetter);
    pickedLetterArray = pickedLetter.split("");
    pickedLetterPlaceholders = [];
    var placeHolderString;
    for (var i = 0; i < pickedLetterArray.length; i++) {
        pickedLetterPlaceholders.push("___");
    }
    var placeHolderString = pickedLetterPlaceholders.join(' ');

    document.getElementById('dash_span').innerHTML = placeHolderString;
    document.getElementById('letter_exist').innerHTML = "";

    //document.getElementById('win').innerHTML = wins;
    //document.getElementById('loss').innerHTML = losses;
    // write to DOM
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log("key press check");


    for (var i = 0; i < pickedLetterArray.length; i++) {
        console.log("letter guessed array check");
        if (userGuess === pickedLetterArray[i]) {
            pickedLetterPlaceholders[i] = userGuess;
            document.getElementById('dash_span').innerHTML = pickedLetterPlaceholders;
        }
    }

    if (lettersGuessed.indexOf(userGuess) != -1) {
        console.log("a happened");
        document.getElementById('err_msg').innerHTML = "You already gussed this letter, Please press another letter";
    }
    else {
        guessesLeft--;


        if (guessesLeft === 0) {
            console.log("c happened");
            losses++;
            document.getElementById('loss').innerHTML = losses;
            prevWord = pickedLetterArray.join("");
            if (prevWord === "tiger") {
                document.getElementById("imageid").src = "http://images6.fanpop.com/image/photos/35200000/Elegant-Tiger-tigers-35204002-2560-1920.jpg";
            }
            if (prevWord === "lion") {
                document.getElementById("imageid").src = "https://www.zoo.org.au/sites/default/files/styles/zv_carousel_large/public/Lion-Encounter-Pride-web620_0.jpg?itok=y1TuLIJw";
            }
            if (prevWord === "parrot") {
                document.getElementById("imageid").src = "https://www.hedweb.com/animimag/parrot.jpg";
            }
            if (prevWord === "rabbit") {
                document.getElementById("imageid").src = "https://www.hedweb.com/animimag/rabbit.jpg";
            }
            newGame();
        }
        lettersGuessed.push(userGuess.toLowerCase());
        document.getElementById('err_msg').innerHTML = "";
        document.getElementById('letter_exist').innerHTML = lettersGuessed;
        document.getElementById('guess_left').innerHTML = guessesLeft;
    }

    if (pickedLetterArray.join("") === pickedLetterPlaceholders.join("")) {
        wins++;
        document.getElementById('win').innerHTML = wins;
        prevWord = pickedLetterArray.join("");
        newGame();

        if (prevWord === "tiger") {
            document.getElementById("imageid").src = "http://images6.fanpop.com/image/photos/35200000/Elegant-Tiger-tigers-35204002-2560-1920.jpg";
        }
        if (prevWord === "lion") {
            document.getElementById("imageid").src = "https://www.zoo.org.au/sites/default/files/styles/zv_carousel_large/public/Lion-Encounter-Pride-web620_0.jpg?itok=y1TuLIJw";
        }
        if (prevWord === "parrot") {
            document.getElementById("imageid").src = "https://www.hedweb.com/animimag/parrot.jpg";
        }
        if (prevWord === "rabbit") {
            document.getElementById("imageid").src = "https://www.hedweb.com/animimag/rabbit.jpg";
        }
    }

}

//if (pickedLetterPlaceholders.indexOf(userGuess) === -1) {
//  guessesLeft--;

//}


//newGame();