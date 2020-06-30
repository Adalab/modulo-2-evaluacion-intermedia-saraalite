"use strict";

//Función que genera número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const num = getRandomNumber(100);

console.log(num);



//Recogemos valores
const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const attemptsText = document.querySelector(".js-attempts");
let attempts = 0;




//Función que nos recoge el valor del input
function updateValue() {
  let inputValue = parseInt(input.value);
  console.log(inputValue);
  return  inputValue;
}



//Función que compara los números con if

function compareNumbers(){
    attempts = attempts + 1
    attemptsText.innerHTML = 'Número de intentos: '+ attempts;
    const updatedValue = updateValue();
    if ( isNaN(updatedValue) || updatedValue>100 || updatedValue<0){
        clue.innerHTML= 'El número debe estar entre 0 y 100'
    } else if (updatedValue==num){
        clue.innerHTML= '¡¡¡Has ganado campeona!!!';

    } else if (updatedValue < num) {
        clue.innerHTML = 'Demasiado bajo';

    }else if (updatedValue > num){
        clue.innerHTML = 'Demasiado alto';
    }

}


//Compiladora
function checkValues(){
    updateValue();
    compareNumbers();
}



//Escuchador de evento
button.addEventListener("click",checkValues);