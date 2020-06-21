// The arrays that determine the levels of difficulty

var allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var vowels = 'aeiouy'.split('');
var otherLetters = [' g ' , ' j ', ' i ' , ' e '];
var otherLetters1 = [' g ', ' j '];

let start = 0;
startButton.addEventListener("click", function () {
    for (y = 0; y < allLetters.length; y++) {
       setTimeout(() => getRandom(allLetters), y*1000);
    }
});

function getRandom (letters) {
    var randomSet = letters[Math.floor(Math.random() * allLetters.length)];
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

levelButton.addEventListener("click", function () {
    document.getElementById("levelText").innerHTML += "Level: The entire alphabet" 
});

levelButton2.addEventListener("click" , function () {
    document.getElementById("levelText").innerHTML += "Level: The vowels"

});

levelButton3.addEventListener("click", function () {
document.getElementById("levelText").innerHTML += "Level: g, j, i, e "
});

levelButton4.addEventListener ("click" , function () {
document.getElementById("levelText").innerHTML += "Level: g and j"
});
