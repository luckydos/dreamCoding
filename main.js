'use strict'

consoleAppend('Hello World!');

let a;
a = 6;

consoleAppend(a);

function consoleAppend(appendText) {
	let dcConsole = document.querySelector('#dcConsole > .dcConsoleText');
	// dcConsole Append
	dcConsole.innerHTML += '<br>' + appendText;

	// console.log
	console.log(appendText);
}