/**
 * Step 3.
 * Get the quiz id from the URL.
 */
let nom = new URL(location.href).searchParams.get("quizId");
console.log(nom);
// Step 3 end.

let nbQst = 0; // Numéro de la question.

/**
 * Step 4.
 * Display the theme of the chosen quiz.
 */
$(document).ready(function () {
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#thème').text(data[i].description); // afficher le thème.
            break;
        }
    }
});
// Step 4 end.

/**
 * Step 5 and 6.
 * Display the question and the number of the question.
 * Create an array that contains every words of the answer and the extras in order.
 * Shuffle the array
 * Insert the buttons with each element of the table in it.
 */
$(document).ready(function () {
    let answer;
    let extras;
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#question').text(data[i].questions[nbQst].question) // afficher la question.
            $('#number').text(nbQst + 1); // Afficher le numéro de la question (A MODIFIER PLUS TARD).
            answer = data[i].questions[nbQst].answer;  // la réponse.
            extras = data[i].questions[nbQst].extras;  // Les extras.
            break;
        }
    }
    let texte = answer + " " + extras; // Contien la réponse et les extras.
    let mots = texte.split(' ');   // Tableau qui est composé de chaque mot de texte séparé par un espace.
    mots = shuffle(mots);
    console.log(mots);
    for (let index = 0; index < mots.length; index++) {
        let buts = $('<button id = bouton></button');
        $('#mots').append(buts.text(mots[index])); // Inserer les boutons avec les mots dedans.
    }
});

// Step 5 end.

/**
 * Step 6.
 * Shuffle the array.
 * @param {*[]} array  
 */
function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        [array[counter], array[index]] = [array[index], array[counter]];
    }
    return array;
}
// Step 6 end.