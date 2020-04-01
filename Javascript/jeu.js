// étape 3 
let nom = new URL(location.href).searchParams.get("quizId");
console.log(nom);
// étape 3 fin.

// étape 4

// Afficher le thème du quizz choisis.
$(document).ready(function () {
    let j = 0;
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#thème').text(data[i].description); // afficher le thème.
            $('#question').text(data[i].questions[j].question) // afficher la question.
            $('#number').text(j + 1); // Afficher le numéro de la question (A MODIFIER PLUS TARD).
            break;
        }
    }
});

// étape 4 fin.