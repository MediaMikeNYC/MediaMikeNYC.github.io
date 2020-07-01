var allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
var vowels = 'aeiouy'.split('');
var smallSet = 'gjie'.split('');
var lastSet = 'gj'.split('');
var _timer;

var startButton = document.querySelector("#startButton");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var stopButton = document.querySelector("#stopButton"); 


//controls all letters
startButton.addEventListener("click", function () {
    getRandom(allLetters);
 });
 
 // stop button
 stopButton.addEventListener("click", function () {
    clearTimeout(_timer);
    clearTimeout(getRandom);
 });
 
 function getRandom (letters) {
     var randomSet = letters[Math.floor(Math.random() * letters.length)];
     console.log('set random' , randomSet)
     document.getElementById("demo3").innerHTML = randomSet;
     _timer = setTimeout(() => getRandom(letters), 1000);
 };

// Controls vowels
button2.addEventListener("click", function () {
    getRandom(vowels);
 });
 
 // stop button
 stopButton.addEventListener("click", function () {
    clearTimeout(_timer);
 });
 
 function getRandom (letters) {
     var randomSet = letters[Math.floor(Math.random() * letters.length)];
     console.log('set random' , randomSet)
     document.getElementById("demo3").innerHTML = randomSet;
     _timer = setTimeout(() => getRandom(vowels), 1000);
 };


 // Letter set G J I E

 button3.addEventListener("click", function () {
    getRandom(smallSet);
 });
 
 // stop button
 stopButton.addEventListener("click", function () {
    clearTimeout(_timer);
 });
 
 function getRandom (letters) {
     var randomSet = letters[Math.floor(Math.random() * letters.length)];
     console.log('set random' , randomSet)
     document.getElementById("demo3").innerHTML = randomSet;
     _timer = setTimeout(() => getRandom(letters), 1000);
 };
 
 // Letter set J G

 button4.addEventListener("click", function () {
    getRandom(lastSet);
 });
 
 // stop button
 stopButton.addEventListener("click", function () {
    clearTimeout(_timer);
 });
 
 function getRandom (letters) {
     var randomSet = letters[Math.floor(Math.random() * letters.length)];
     console.log('set random' , randomSet)
     document.getElementById("demo3").innerHTML = randomSet;
     _timer = setTimeout(() => getRandom(letters), 1000);
 };


button1.addEventListener("click", function () {
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

button2.addEventListener("click" , function () {
    
    var newText = document.createElement("h1");
    newText.id = "levelText";
    
    var newTextContent = document.createTextNode("The Vowels");
    newText.appendChild(newTextContent);
    
    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;
    
    parentDiv.replaceChild( newText, oldText);

});

button3.addEventListener("click", function () {

    var newText = document.createElement("h1");
    newText.id = "levelText";
    
    var newTextContent = document.createTextNode("G, J, I, E");
    newText.appendChild(newTextContent);
    
    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;
    
    parentDiv.replaceChild( newText, oldText);
});

button4.addEventListener ("click" , function () {
    var newText = document.createElement("h1");
    newText.id = "levelText";
    
    var newTextContent = document.createTextNode("G and J");
    newText.appendChild(newTextContent);
    
    var oldText = document.getElementById("levelText");
    var parentDiv = oldText.parentNode;
    
    parentDiv.replaceChild( newText, oldText);
});

