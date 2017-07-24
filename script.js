//=======Задача №1 & Задача №2 & Задача №3===========

function paragRed(){
    let parag = document.getElementsByTagName('p');
    let myImg = document.getElementsByTagName('img');
	    for(let i = 0; i < parag.length; i++){
		parag[i].style.background = "red";
		let x = i + 1;
	    let myPar = parag[i].innerHTML;
	    parag[i].innerHTML = x + ". " + myPar;
	}	
	for(let j = 0; j < myImg.length; j++){
		myImg[j].style.boxShadow = "10px 10px 10px rgba(0,0,0,0.5)";
	}
}
paragRed();

//============Задача №4==================

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let click = 0;
let click2 = 0;

function clickCounter(){
	if(this.id === "btn1"){
		click = click + 1;		
	} else if(this.id === "btn2"){
		click2 = click2 + 1;		
	}
}
function clickRes(){
			alert(click);
}
function clickRes2(){
			alert(click2);
}
btn1.addEventListener('click', clickCounter);
btn2.addEventListener('click', clickCounter);
btn3.addEventListener('click', clickRes);
btn4.addEventListener('click', clickRes2);

//============Задача №5==================

let number = document.querySelector('input[name="number"]');
let degree = document.querySelector('input[name="degree"]');
let numOk = document.getElementById('numOK');

function numDegree(){
	let n = parseInt(number.value, 10);
	let d = parseInt(degree.value, 10);
	 (isNaN(n) || isNaN(d) ) ? alert("Вводить только цифры") : alert(Math.pow(n, d));
}
numOk.addEventListener('click', numDegree);

//============Задача №6==================

function changeEl(tag){
	let elem = document.getElementsByTagName(tag);
	for(let i = 0; i < elem.length; i++){
		elem[i].style.textDecoration = "underline";
	}
}
changeEl("p");

//============Задача №7=======Задача №8===========

let yourAge = document.querySelector('input[name="age"]');
let ageBtn = document.getElementById('btn5');
function age(yourAge){
	if(isNaN(yourAge.value) || yourAge.value == undefined || yourAge.value === ""){      /*yourAge.value == undefined --- помоему лишнее и не работает*/
		alert("Введите возраст");
	} else {
		(parseInt(yourAge.value, 10) >= 16) ? alert("Добро пожаловать") : alert("Вы еще молоды");
	}
}
ageBtn.addEventListener('click', function(){age(yourAge)});

//============Задача №9==================

let myArray = [123, 345, "apple", "orange"];

function showArray(arr){
	(arguments.length) === 0 ? alert("Ошибка, аргумент не задан") : console.log(arr.length);	
}
showArray(myArray);

//============Задача №10==================
let btn6 = document.getElementById('btn6');
function forNum(){
    let enterNum = prompt("Введите число");
	 if(enterNum >= 10){
	 	return enterNum * enterNum;
	 } else if(enterNum <= 7){
	 	alert("Число равно или меньше 7");
	 } else if(Number(enterNum) === 8 || Number(enterNum) === 9){
	 	return enterNum;
	 }
}
btn6.addEventListener('click', forNum);

//============Задача №11==================

let hiddenNum = parseInt(Math.random() * 10, 10);
let btn7 = document.getElementById('btn7');
let i = 1;

function guessN(rrr){
	while(i < 4){
		if(hiddenNum == rrr){
			alert("Вы угадали!!! с " + i + " " + " попытки");
			if(i < 4){
				i = 4;
				alert("Конец игры");
			}
			break;
		}
		else if(hiddenNum < rrr){
			alert("Вы не угадали!!! Число меньше " + rrr + " " + i++ + " " + " попытка");
			if(i === 4){
				alert("GAME OVER");
			}
			break;
		}
		else if(hiddenNum > rrr){
			alert("Вы не угадали!!! Число больше " + rrr + " " + i++ + " " + " попытка");
			if(i === 4){
				alert("GAME OVER");
			}
			break;
		}
	}
}


function rrr(){
    let attempt = document.querySelector('input[name="guess"]');
    isNaN(attempt.value) ? alert("Error") : guessN(attempt.value);
}

btn7.addEventListener('click', rrr);