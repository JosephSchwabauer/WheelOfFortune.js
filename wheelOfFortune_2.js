// this code is not showing the board upon loading the page BUT IT IS RETAINING THE CORRECT LETTERS GUESSED!!
//var answer = "WOW";
var answer = ['T', 'A', 'L', 'K', '_', 'I', 'S', '_', 'C', 'H', 'E', 'A', 'P ', '_', 'S', 'H', 'O', 'W', '_', 'M', 'E', '_', 'T', 'H', 'E', '_', 'C', 'O', 'D', 'E'];
var totalWin = 0; 
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var board = ['_','_','_','_',' ','_','_',' ','_','_','_','_','_',' ','_','_','_','_',' ','_','_',' ','_','_','_',' ','_','_','_','_'];

var usedAlpha;

var letter;

window.onload = function () {
    var myAlpha = document.getElementById('alpha');
    var letterList = document.createElement('ul');
    
    for (var i =0; i < alphabet.length; i++){
        letterList.id = alphabet;
        var letters = document.createElement('li');
       // alpha.innerHTML = alphabet;
        //letters.id = 'letter';
        letters.innerHTML = alphabet[i];
        myAlpha.appendChild(letterList);
        letterList.appendChild(letters);
    }
    
    var myBoard = document.getElementById('');
    var spaces = document.createElement('ul');
}

$(document).ready(function(){
    $("#spinbutt").click(function(){
        var rando = Math.floor((Math.random() * 10) + 1);
        var spinArray = ["nothing", 100, 300, 500, 700, 900, 2000, 3000, 5000, -1000, 0];
        var win = spinArray[rando];
        document.getElementById('moneyWon').innerHTML = (win + "!");
        guessPrompting(win);
        });
    $("#guessbutt").click(function() {
        var guess = prompt("Okay, go ahead and guess the phrase...");
        var guessUP = guess.toUpperCase();
        var guessed = guessUP;
        if (guessed == answer){
            prompt("You win!");
        } else {
            prompt("You don't win! But we'll let you spin again...");
         }
    });
    
}); 

function modAlph(letterUp) {
    
    
    for (var l = 0; l < alphabet.length; l++) {
        if (alphabet[l] === letterUp) {
            
            letterList = alphabet.splice(alphabet[l], " ");
            
            

            //letterList[l].innerHTML = " ";
            //myAlpha = myAlpha.replace(myAlpha[l], " ");
            //document.getElementById('alpha').innerHTML = myAlpha;
            // prompt("does 'A' exist at index 0");
        };
                //else {
                  //  break;
                //}
    }
};

function guessPrompting(win) {
    var guessPrompt = prompt("Please guess a letter: ");
    letter = guessPrompt.toUpperCase();
    document.getElementById('guessedLetter').innerHTML = ("You guessed " + letter + "!");
    letterCheck(letter, win);
};


function letterCheck(letter, win) {
    var lettersUp = letter.toUpperCase();
    var letterUp = lettersUp;
    for (var i = 0; i < answer.length; i++) {
        if (letterUp == answer[i]) {
            spinTotal(win);
            modBoard(letterUp);
            modAlph(letterUp);
            break;
        } else {
            modAlph(letterUp);
        }
    };
};



 
function spinTotal(win) {
    totalWin += win;
    document.getElementById("tally").innerHTML = totalWin;
};
    

function modBoard(letterUp) {
    var aLength = answer.length;
    for (var x = 0; x < aLength; x++) {     
        if (letterUp == answer[x]) {
          board[x] = answer[x];
          var newBoard = board.join("");
          document.getElementById("userBoard").innerHTML = newBoard;
        }
    }
}

function sorry(letter) {
    document.getElementById('guessedLetter').innerHTML = ("Sorry, " + letter + " is not in the phrase!");
};
     
      
      












    

    

