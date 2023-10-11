
// Sélectionner les éléments du DOM
const input = document.getElementById("input");
const calcul = document.getElementById("calcul"); // L'élément p qui affiche le calcul en cours
const reset = document.getElementById("reset");
const clear = document.getElementById("clear");
const plusoumoins = document.getElementById("plusoumoins");
const percentage = document.getElementById("percentage");
const divideby = document.getElementById("divideby");
const times = document.getElementById("times");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const equals = document.getElementById("equals");
const digits = document.querySelectorAll(".digit"); // Les boutons des chiffres de 0 à 9
const dot = document.querySelector(".dot");
let inputcurseur = document.querySelector('input');
const digitZeroTwo = document.getElementById("twoZero");
const pi = document.getElementById("pi");

// Masque le curseur clignotant By yvonne
inputcurseur.style.caretColor = 'transparent';

//Empêche le comportement par défaut
const form = document.querySelector('form');
form.addEventListener('submit',event =>{
    event.preventDefault();
});


// Déclarer les variables globales
let inputNumber = "";
let inputOperator = "";
let calculationString = "";
let result = 0; // Le nombre qui stocke le résultat du calcul


// Définir les fonctions auxiliaires

// Une fonction qui met à jour l'affichage de l'entrée et du calcul
function updateDisplay() {
  input.value = inputNumber;
  calcul.textContent = calculationString;
}

// Une fonction qui réinitialise tout
function resetAll() {
  inputNumber = "";
  inputOperator = "";
  calculationString = "";
  result = 0;
  updateDisplay();
}

// Une fonction qui efface l'entrée actuelle
function clearInput() {
  inputNumber = "";
  updateDisplay();
}

// Une fonction qui change le signe de l'entrée actuelle
function changeSign() {
  if (inputNumber) {
    // Si la chaîne du nombre saisi n'est pas vide
    inputNumber = (-inputNumber).toString();
    updateDisplay();
  }
}

// Une fonction qui renvoie le résultat du calcul en pourcentage
function getPercentage() {
  if (calculationString) {
    // Si la chaîne du calcul en cours n'est pas vide
    result /= 100;
    inputNumber = result.toString();
    calculationString += " %";
    updateDisplay();
  }
}

// Une fonction qui ajoute un opérateur au calcul en cours
function addOperator(operator) {
  if (inputNumber) {
    if (calculationString) {
      calculationString += ` ${inputOperator} ${inputNumber}`;
      result = eval(calculationString);
    } 
    else {
      calculationString = inputNumber;
      result = Number(inputNumber);
    }
    inputNumber = "";
    inputOperator = operator; // Affecter l'opérateur passé en paramètre à la chaîne de l'opérateur saisi
    updateDisplay();
  }
}

// Une fonction qui effectue le calcul et affiche le résultat
function calculate() {
  if (inputNumber && inputOperator) {
    calculationString += ` ${inputOperator} ${inputNumber}`;
    result = eval(calculationString);
    inputNumber = result.toString();
    calculationString += " =";
    updateDisplay();
  }
}
// fonction qui ajout deux zero bouton au calculatrice 
function btnZeroTwo() { 
  inputNumber += "00";
   updateDisplay();
};

// Ajouter des écouteurs d'événements aux boutons

reset.addEventListener("click", resetAll);
clear.addEventListener("click", clearInput);
plusoumoins.addEventListener("click", changeSign);
percentage.addEventListener("click", getPercentage);


divideby.addEventListener("click", () => addOperator("/"));
times.addEventListener("click", () => addOperator("*"));
minus.addEventListener("click", () => addOperator("-"));
plus.addEventListener("click", () => addOperator("+"));

// Ajouter un écouteur d'événement au bouton = qui appelle la fonction calculate
equals.addEventListener("click", calculate);

digitZeroTwo.addEventListener("click", btnZeroTwo);

// Parcourir les boutons des chiffres avec une boucle for...of
for (let digit of digits) {
  // Ajouter un écouteur d'événement à chaque bouton des chiffres qui ajoute le chiffre correspondant à la chaîne du nombre saisi et met à jour l'affichage
  digit.addEventListener("click", () => {
    if (inputNumber.length < 10) {
      // Si la longueur de la chaîne du nombre saisi est inférieure à 10
      if (inputNumber === "0") {
        // Si la chaîne du nombre saisi est égale à "0"
        inputNumber = digit.textContent; // Remplacer la chaîne du nombre saisi par le contenu textuel du bouton des chiffres
      } else {
        // Si la chaîne du nombre saisi n'est pas égale à "0"
        inputNumber += digit.textContent; // Ajouter le contenu textuel du bouton des chiffres à la fin de la chaîne du nombre saisi
      }
      updateDisplay(); // Mettre à jour l'affichage
    }
}); }

// Ajouter un écouteur d’événement au bouton du point décimal qui ajoute un point décimal à la chaîne du nombre saisi si elle n’en contient pas déjà un et met à jour l’affichage 
dot.addEventListener("click", () => { 
  if (inputNumber.length < 10) { // Si la longueur de la chaîne du nombre saisi est inférieure à 10 
  if (!inputNumber.includes(".")) { // Si la chaîne du nombre saisi ne contient pas de point décimal 
      if (inputNumber === "") { // Si la chaîne du nombre saisi est vide 
          inputNumber = "0."; // Affecter la chaîne “0.” à la chaîne du nombre saisi 
      } else { // Si la chaîne du nombre saisi n’est pas vide 
          inputNumber += "."; // Ajouter un point décimal à la fin de la chaîne du nombre saisi 
      } updateDisplay(); // Mettre à jour l’affichage 
  } } });

  