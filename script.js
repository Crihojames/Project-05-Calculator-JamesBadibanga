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

// Déclarer les variables globales
let inputNumber = ""; // La chaîne qui stocke le nombre saisi par l'utilisateur
let inputOperator = ""; // La chaîne qui stocke l'opérateur saisi par l'utilisateur
let calculationString = ""; // La chaîne qui stocke le calcul en cours
let result = 0; // Le nombre qui stocke le résultat du calcul

const form = document.querySelector('form');
form.addEventListener('submit',event =>{
    event.preventDefault();
});