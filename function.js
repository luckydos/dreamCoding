'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function  name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb(동사)
// e.g. createCardAndPoint -> createCard, createPoint
// funcion is object in JS

function printHello() {
	consolePrint('Hello');
}
printHello();

function log(msg) {
	consolePrint(`msg: ${msg}, type: ${typeof msg}`);
}
log('hello!!!!!');
log(1232222);

// 2. Parametes
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
	obj.name = 'diffEllie';
}
const ellie = { name: 'ellie' };
consolePrint(`before ellie.name: ${ellie.name}`);
changeName(ellie);
consolePrint(`after ellie.name: ${ellie.name}`);

// 3. Default parameters (added in ES6)
function showMsg(message, from = 'unknown_ES6') {
	/* before es6
	if(from === undefined) {
		from = 'unknown';
	}
	*/
	consolePrint(`message: ${message}, from: ${from}`);
}
showMsg('Helloooo');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
	for(let a = 0; a < args.length; a++) {
		consolePrint(args[a]);
	}

	/* for of
	for(const arg of args) {
		consolePrint(arg);
	} */

	// array forEach
	// args.forEach((arg) => consolePrint(arg));
}
printAll('a', 'b', 'c');

// 5. Local scope
let globalMsg = 'global Message'; // global variable
function printMessage() {
	let inMessage = 'hello';
	consolePrint(inMessage); // local variable
	consolePrint(globalMsg);
	function printAnother() {
		consolePrint(inMessage);
		let inChildMessage = 'iii';
	}
	// consolePrint(inChildMessage); //error
	//return undefined; // 기본값. 생략가능.
}
printMessage();
// consolePrint(inMessage); //error

// 6. Return a value
function sum(a, b) {
	return a + b;
}
const res = sum(1, 2); //3
consolePrint(`sum(1, 2): ${res}`);

// 7. Early return, early exit
// 조건이 맞지 않을 경우 또는 undefined 인 경우 바로 return,
// 조건이 맞을 경우에만 기능 적용
function upgradeUser(user) {
	if(user.point <= 10) {
		return;
	}
	
	//long upgrade logic...
	consolePrint(`user ${user.name} upgrade`);
}
const user1 = { name: 'aaa', point: 8 };
const user2 = { name: 'bbb', point: 11 };
upgradeUser(user1);
upgradeUser(user2);

// First-class function
// functions are treated like any other variable (다른변수와 비슷한)
// can be assigned as a value to variable (변수 할당)
// can be passed as an argument to other functions. (함수 파라미터 전달)
// can be returned by another function (리턴값으로 사용 가능)

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosited)
// a function expression is created when the excution reaches it.

funcDeclaration(); // function declaration 은 할당 전 호출 가능. (호이스팅)
function funcDeclaration() {
	consolePrint('function declaration call.')
}

// print(); //function expression 은 할당 전 호출 불가능
const print = function() { // anonymous function
	consolePrint('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
consolePrint(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
	if(answer === 'love you') {
		printYes(answer);
	} else {
		printNo(answer);
	}
}

// anonymous function
const printYes = function(answer) {
	consolePrint(`answer [${answer}] is Yes!!`);
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(answer) {
	consolePrint(`answer [${answer}] is Noooooooop!!`);
	//print(); //recursions 자기자신 호출. 사용 시 무한루프~~
};

randomQuiz('worong!!', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
	consolePrint('simplePrint!');
};
const simplePrintArrowFunc = () => consolePrint('simplePrint ArrowFunc!');

const add = (a,b) => a + b;
const addArrowFunc = function (a,b) {
	return (a + b) + '(ArrowFunc)';
}

simplePrint();
simplePrintArrowFunc();

consolePrint(`add return : ${add(1,2)}`);
consolePrint(`addArrowFunc return : ${addArrowFunc(1,2)}`);

const simpleMultiply = (a,b) => {
	// do something more
	return a + b + ' (simpleMultiply)';
};
consolePrint(`${simpleMultiply(1,2)}`);

// IIFE: Immediately Invoked Function Expression
// 함수 선언과 동시에 호출. 최근에는 많이 사용하지 않음.
(function Func_IIFE() {
	consolePrint('IIFE call');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
// 더하기, 빼기, 나누기, 곱하기, 나머지

function calculate(command, a, b) {
	let rtValue = 0;
	switch(command) {
		case 'add':
			rtValue = a + b;
			break;
		case 'substract':
			rtValue = a - b;
			break;
		case 'divide':
			rtValue = a / b;
			break;
		case 'multiply':
			rtValue = a * b;
			break;
		case 'remainder':
			rtValue = a % b;
			break;
		default:
			rtValue = 'command error';
	}
	return rtValue;
}

consolePrint(`calculate('add', 1,5): ${calculate('add', 1,5)}`);
consolePrint(`calculate('substract', 1,5): ${calculate('substract', 1,5)}`);
consolePrint(`calculate('divide', 1,5): ${calculate('divide', 1,5)}`);
consolePrint(`calculate('multiply', 1,5): ${calculate('multiply', 1,5)}`);
consolePrint(`calculate('remainder', 1,5): ${calculate('remainder', 1,5)}`);
consolePrint(`calculate('default', 1,5): ${calculate('default', 1,5)}`);

function consolePrint(cText) {
	console.log(cText);
	document.getElementsByClassName('dcConsoleText')[0].innerHTML += '<br>' + cText;
}