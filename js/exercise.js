"use strict"

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

function incrementAttempts(){
    attempts = attempts + 1
    attemptsText.innerHTML = 'Número de intentos: '+ attempts;
}

//Función que compara los números con if

function changeClue(textString){
    clue.innerHTML= textString
}

function compareNumbers(){
    const updatedValue = updateValue();
    
    if ( isNaN(updatedValue) || updatedValue>100 || updatedValue<0){
        changeClue('El número debe estar entre 0 y 100');
    } else if (updatedValue==num){
        changeClue('¡¡¡Has ganado, campeona!!!');

    } else if (updatedValue < num) {
        changeClue('Demasiado bajo');

    }else if (updatedValue > num){
        changeClue('Demasiado alto');
    }

}



//Compiladora
function checkValues(event){
    event.preventDefault();
    incrementAttempts();
    updateValue();
    compareNumbers();
    
}



//Escuchador de evento
button.addEventListener("click",checkValues);