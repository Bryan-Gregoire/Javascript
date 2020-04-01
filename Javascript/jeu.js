// étape 3 
let nom = new URL(location.href).searchParams.get("quizId");
console.log(nom);
// étape 3 fin.

// étape 4, 5 et 6.

// Afficher le thème du quizz choisis, la question le numéro de la question. 
// Creer tableau avec les mots dedans dans l'ordre.
// Mélanger les mots et inserer un boutons pour chaque mot.
$(document).ready(function () {
    let j = 0;
    let answer;
    let extras;
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#thème').text(data[i].description); // afficher le thème.
            $('#question').text(data[i].questions[j].question) // afficher la question.
            $('#number').text(j + 1); // Afficher le numéro de la question (A MODIFIER PLUS TARD).
            answer = data[i].questions[j].answer;  // la réponse.
            extras = data[i].questions[j].extras;  // Les extras.
            break;
        }
    }
    let texte = answer + " " + extras; // Contien la réponse et les extras.
    let mots = texte.split(' ');   // Tableau qui est composé de chaines de texte séparé par un espace. 
    console.log(mots);
    let counter = mots.length;
    while(counter > 0) {
        let index = Math.floor(Math.random()*counter);
        counter--;
        [mots[counter], mots[index]] = [mots[index], mots[counter]]; // mélanger les mots dans le tableau.
    }
    for (let index = 0; index < mots.length; index++) {
        let buts = $('<button id = bouton></button');
        $('#mots').append(buts.text(mots[index])); // Inserer les boutons avec les mots dedans, dans l'ordre.
    }
    console.log(mots);
});
// étape 4, 5 et 6 fin.
