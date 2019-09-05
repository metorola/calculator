let screen = document.querySelector('#monitor');
const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
let delButton = document.querySelector('#delButton');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const subtract = document.querySelector('#subtract');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const sumUp = document.querySelector('#sumUp');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
let equalButton = document.querySelector('#equalButton');
let clear = document.querySelector('#clear');
const zero = document.querySelector('#zero');
const point = document.querySelector('#point');


clear.addEventListener('click', clearScreen);
equalButton.addEventListener('click', equalTo);
delButton.addEventListener('click', del);
divide.onclick = function() {insert('/')};
multiply.onclick = function() {insert('*')};
seven.onclick = function() {insert(7)};
eight.onclick = function() {insert(8)};
nine.onclick = function() {insert(9)};
subtract.onclick = function() {insert('-')};
four.onclick = function() {insert(4)};
five.onclick = function() {insert(5)};
six.onclick = function() {insert(6)};
sumUp.onclick = function() {insert('+')};
one.onclick = function() {insert(1)};
two.onclick = function() {insert(2)};
three.onclick = function() {insert(3)};
zero.onclick = function() {insert(0)};
point.onclick = function() {insert('.')};

function insert(x) {
	screen.value = screen.value + x; 
}

function clearScreen() {
	screen.value = "";
}

function del() {
	screen.value = screen.value.substring(0, screen.value.length-1);
}

function equalTo() {
	screen.value = eval(screen.value);
}