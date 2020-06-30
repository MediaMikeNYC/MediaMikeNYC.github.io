var allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var vowels = 'aeiouy'.split('');
var otherLetters = [' g ' , ' j ', ' i ' , ' e '];
var otherLetters1 = [' g ', ' j '];

// start button functions
let start = 0;
startButton.addEventListener("click", function () {
    for (y = 0; y < allLetters.length; y++) {
       setTimeout(() => getRandom(allLetters), y*1000);
    }
});

levelButton2.addEventListener("click", function () {
    for (y = 0; y < vowels.length; y++) {
       setTimeout(() => getRandom(vowels), y*1000);
    }
});

levelButton3.addEventListener("click", function () {
    for (y = 0; y < otherLetters.length; y++) {
       setTimeout(() => getRandom(otherLetters), y*1000);
    }
});

levelButton4.addEventListener("click", function () {
    for (y = 0; y < otherLetters1.length; y++) {
       setTimeout(() => getRandom(otherLetters1), y*1000);
    }
});

function getRandom (letters) {
    var randomSet = letters[Math.floor(Math.random() * letters.length)];
    console.log('set random' , randomSet)
    document.getElementById("demo3").innerHTML = randomSet;
};

// function that assigns entire alphabet
 function setRandomLetter(){
    var letter = allLetters[Math.floor(Math.random() * allLetters.length)];
    console.log('setRandom ', letter)
    document.getElementById("demo3").innerHTML = letter; 
}

// function called getRandom
// accepts array of possible letters
// returns a random letter from that set
// allows me to input array into event listener up top
// below: the text that appears on top of chalk board

levelButton.addEventListener("click", function () {
    var newText = document.createElement("h1");
    newText.id = "levelText";

    var newTextContent = document.createTextNode("The entire Alphabet");
    newText.appendChild(newTextContent);

    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;

    parentDiv.replaceChild( newText, oldText);
    
});

stopButton.addEventListener("click", function () {
   
    var newText = document.createElement("h1");
    newText.id = "levelText";

    var newTextContent = document.createTextNode("Stopped");
    newText.appendChild(newTextContent);

    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;

    parentDiv.replaceChild( newText, oldText);

});

levelButton2.addEventListener("click" , function () {
    
    var newText = document.createElement("h1");
    newText.id = "levelText";
    
    var newTextContent = document.createTextNode("The Vowels");
    newText.appendChild(newTextContent);
    
    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;
    
    parentDiv.replaceChild( newText, oldText);

});

levelButton3.addEventListener("click", function () {

    var newText = document.createElement("h1");
    newText.id = "levelText";
    
    var newTextContent = document.createTextNode("G, J, I, E");
    newText.appendChild(newTextContent);
    
    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;
    
    parentDiv.replaceChild( newText, oldText);
});

levelButton4.addEventListener ("click" , function () {
    var newText = document.createElement("h1");
    newText.id = "levelText";
    
    var newTextContent = document.createTextNode("G and J");
    newText.appendChild(newTextContent);
    
    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;
    
    parentDiv.replaceChild( newText, oldText);
});
