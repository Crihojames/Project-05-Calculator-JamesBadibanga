//  import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

// Sélectionner les éléments du DOM
const input = document.getElementById("input"); // L'élément input qui affiche le nombre saisi
const calcul = document.getElementById("calcul"); // L'élément p qui affiche le calcul en cours
const reset = document.getElementById("reset"); // Le bouton AC qui réinitialise tout
const clear = document.getElementById("clear"); // Le bouton C qui efface l'entrée actuelle
const plusoumoins = document.getElementById("plusoumoins"); // Le bouton +/- qui change le signe de l'entrée actuelle
const percentage = document.getElementById("percentage"); // Le bouton % qui renvoie le résultat du calcul en pourcentage
const divideby = document.getElementById("divideby"); // Le bouton ÷ qui ajoute l'opérateur de division au calcul
const times = document.getElementById("times"); // Le bouton × qui ajoute l'opérateur de multiplication au calcul
const minus = document.getElementById("minus"); // Le bouton - qui ajoute l'opérateur de soustraction au calcul
const plus = document.getElementById("plus"); // Le bouton + qui ajoute l'opérateur d'addition au calcul
const equals = document.getElementById("equals"); // Le bouton = qui effectue le calcul et affiche le résultat
const digits = document.querySelectorAll(".digit"); // Les boutons des chiffres de 0 à 9
const dot = document.querySelector(".dot"); // Le bouton du point décimal
const digitZeroTwo = document.getElementById("twoZero");

// Déclarer les variables globales
let inputNumber = ""; // La chaîne qui stocke le nombre saisi par l'utilisateur
let inputOperator = ""; // La chaîne qui stocke l'opérateur saisi par l'utilisateur
let calculationString = ""; // La chaîne qui stocke le calcul en cours
let result = 0; // Le nombre qui stocke le résultat du calcul

const form = document.querySelector('form');
form.addEventListener('submit',event =>{
    event.preventDefault();
});

// Définir les fonctions auxiliaires

// Une fonction qui met à jour l'affichage de l'entrée et du calcul
function updateDisplay() {
  input.value = inputNumber; // Afficher le nombre saisi dans l'élément input
  calcul.textContent = calculationString; // Afficher le calcul en cours dans l'élément p
}

// Une fonction qui réinitialise tout
function resetAll() {
  inputNumber = ""; // Réinitialiser la chaîne du nombre saisi
  inputOperator = ""; // Réinitialiser la chaîne de l'opérateur saisi
  calculationString = ""; // Réinitialiser la chaîne du calcul en cours
  result = 0; // Réinitialiser le résultat du calcul
  updateDisplay(); // Mettre à jour l'affichage
}

// Une fonction qui efface l'entrée actuelle
function clearInput() {
  inputNumber = ""; // Effacer la chaîne du nombre saisi
  updateDisplay(); // Mettre à jour l'affichage
}

// Une fonction qui change le signe de l'entrée actuelle
function changeSign() {
  if (inputNumber) {
    // Si la chaîne du nombre saisi n'est pas vide
    inputNumber = (-inputNumber).toString(); // Convertir le nombre saisi en son opposé et le reconvertir en chaîne
    updateDisplay(); // Mettre à jour l'affichage
  }
}

// Une fonction qui renvoie le résultat du calcul en pourcentage
function getPercentage() {
  if (calculationString) {
    // Si la chaîne du calcul en cours n'est pas vide
    result /= 100; // Diviser le résultat par 100 pour obtenir le pourcentage
    inputNumber = result.toString(); // Convertir le résultat en chaîne et l'affecter à la chaîne du nombre saisi
    calculationString += " %"; // Ajouter le symbole du pourcentage à la fin de la chaîne du calcul en cours
    updateDisplay(); // Mettre à jour l'affichage
  }
}

// Une fonction qui ajoute un opérateur au calcul en cours
function addOperator(operator) {
  if (inputNumber) {
    // Si la chaîne du nombre saisi n'est pas vide
    if (calculationString) {
      // Si la chaîne du calcul en cours n'est pas vide
      calculationString += ` ${inputOperator} ${inputNumber}`; // Ajouter l'opérateur et le nombre saisis à la fin de la chaîne du calcul en cours
      result = eval(calculationString); // Évaluer la chaîne du calcul en cours et affecter le résultat à la variable result
    } else {
      // Si la chaîne du calcul en cours est vide
      calculationString = inputNumber; // Affecter le nombre saisi à la chaîne du calcul en cours
      result = Number(inputNumber); // Convertir le nombre saisi en nombre et l'affecter à la variable result
    }
    inputNumber = ""; // Réinitialiser la chaîne du nombre saisi
    inputOperator = operator; // Affecter l'opérateur passé en paramètre à la chaîne de l'opérateur saisi
    updateDisplay(); // Mettre à jour l'affichage
  }
}

// Une fonction qui effectue le calcul et affiche le résultat
function calculate() {
  if (inputNumber && inputOperator) {
    // Si la chaîne du nombre saisi et la chaîne de l'opérateur saisi ne sont pas vides
    calculationString += ` ${inputOperator} ${inputNumber}`; // Ajouter l'opérateur et le nombre saisis à la fin de la chaîne du calcul en cours
    result = eval(calculationString); // Évaluer la chaîne du calcul en cours et affecter le résultat à la variable result
    inputNumber = result.toString(); // Convertir le résultat en chaîne et l'affecter à la chaîne du nombre saisi
    calculationString += " ="; // Ajouter le symbole d'égalité à la fin de la chaîne du calcul en cours
    updateDisplay(); // Mettre à jour l'affichage
  }
}

function btnZeroTwo() {
  inputNumber += "00";
   updateDisplay();
}

// Ajouter des écouteurs d'événements aux boutons

// Ajouter un écouteur d'événement au bouton AC qui appelle la fonction resetAll
reset.addEventListener("click", resetAll);

// Ajouter un écouteur d'événement au bouton C qui appelle la fonction clearInput
clear.addEventListener("click", clearInput);

// Ajouter un écouteur d'événement au bouton +/- qui appelle la fonction changeSign
plusoumoins.addEventListener("click", changeSign);

// Ajouter un écouteur d'événement au bouton % qui appelle la fonction getPercentage
percentage.addEventListener("click", getPercentage);

// Ajouter un écouteur d'événement au bouton ÷ qui appelle la fonction addOperator avec le paramètre "/"
divideby.addEventListener("click", () => addOperator("/"));

// Ajouter un écouteur d'événement au bouton × qui appelle la fonction addOperator avec le paramètre "*"
times.addEventListener("click", () => addOperator("*"));

// Ajouter un écouteur d'événement au bouton - qui appelle la fonction addOperator avec le paramètre "-"
minus.addEventListener("click", () => addOperator("-"));

// Ajouter un écouteur d'événement au bouton + qui appelle la fonction addOperator avec le paramètre "+"
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

  // Ajouter un écouteur d’événement à l’élément input qui permet de saisir des nombres avec le clavier 
input.addEventListener("keydown", (event) => { 

  if (event.key >= "0" || "0" && event.key <= "9") { // Si la touche enfoncée est un chiffre de 0 à 9 
      if (inputNumber.length < 10) { // Si la longueur de la chaîne du nombre saisi est inférieure à 10 
          if (inputNumber === "0") { // Si la chaîne du nombre saisi est égale à “0” 
              inputNumber = event.key; // Remplacer la chaîne du nombre saisi par la touche enfoncée 
          } else { // Si la chaîne du nombre saisi n’est pas égale à “0” 
              inputNumber += event.key; // Ajouter la touche enfoncée à la fin de la chaîne du nombre saisi 
          } updateDisplay(); // Mettre à jour l’affichage 
      } 
  } 
  else if (event.key === ".") { // Si la touche enfoncée est le point décimal 
          if (inputNumber.length < 10) { // Si la longueur de la chaîne du nombre saisi est inférieure à 10 
              
              if (!inputNumber.includes(".")) { // Si la chaîne du nombre saisi ne contient pas de point décimal 
                  if (inputNumber === "") { // Si la chaîne du nombre saisi est vide 
                      inputNumber = "0."; // Affecter la chaîne “0.” à la chaîne du nombre saisi 
                  } 
                  else { // Si la chaîne du nombre saisi n’est pas vide 
                      inputNumber += "."; // Ajouter un point décimal à la fin de la chaîne du nombre saisi 
                  } updateDisplay(); // Mettre à jour l’affichage 
              } 
          } 
  } 
              
  else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") { // Si la touche enfoncée est un opérateur arithmétique
       addOperator(event.key); // Appeler la fonction addOperator avec le paramètre correspondant à la touche enfoncée 
  } 
  else if (event.key === "=" || event.key === "Enter") { // Si la touche enfoncée est le symbole d’égalité ou la touche Entrée 
      calculate(); // Appeler la fonction calculate 
  } 
  else if (event.key === "Backspace") { // Si la touche enfoncée est la touche Retour arrière 
      clearInput(); // Appeler la fonction clearInput 
  } 
  else if (event.key === "Escape") { // Si la touche enfoncée est la touche Échap 
      resetAll(); // Appeler la fonction resetAll 
  } });