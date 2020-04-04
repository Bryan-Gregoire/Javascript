/**
 * Step 3.
 * Get the quiz id from the URL.
 */
let nom = new URL(location.href).searchParams.get("quizId");
console.log("l'id choisis : " + nom);
// Step 3 end.

let nbQst = 0;        // Numéro de la question.
let nbGoodAnswer = 0; // Nombre de réponses correctes.

/**
 * Step 4.
 * Display the theme of the chosen quiz.
 */
$(document).ready(function () {
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#thème').text(data[i].description);                 // afficher le thème.
            $('#numbersQuestion').text(data[i].questions.length);  // J'écris le nombre de questions au total.
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
function DisplayElements() {
    let answ = " ";
    let extras = " ";
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#question').text(data[i].questions[nbQst].question)   // afficher la question.
            $('#number').text(nbQst + 1);                            // Afficher le numéro de la question.
            answ = data[i].questions[nbQst].answer;                  // la réponse.
            extras = data[i].questions[nbQst].extras;                // Les extras.
            break;
        }
    }
    let texte = answ + " " + extras; // Contien la réponse et les extras.
    let mots = texte.split(' ');     // Tableau qui est composé de chaque mot de texte séparé par un espace.
    mots = shuffle(mots);            // Mélanger le tableau de mots.
    for (let index = 0; index < mots.length; index++) {
        let buts = $('<button type = button Class = bouton></button>');
        $('#mots').append(buts.text(mots[index])); // Inserer les boutons avec les mots dedans.
    }
}

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

/**
 * Step 7
 * Move a buttom from one container to another one.
 * 
 */
function moveWords() {
    $('.bouton').click(function () {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $('#mots').append($(this))
        } else {
            $('#contain').append($(this));
            $(this).addClass('clicked');
        }
    });
}
// Step 7 end.


/**
 * Step 8.
 * Checks and displays if the answer is correct when the user clicks on the verify button.
 * 
 */
$(document).ready(function () {
    $('#win').hide();           // Je cache le message gagnant.
    $('#lose').hide();          // Je cache le message perdant.
    $('#nextQuestion').hide();  // Je cache le bouton question suivante.
    $('#endResult').hide();     // Je cache le resultat final.
    $('#tryAgain').hide();       // Je cache le bouton recommencer le quiz.
    $('#otherQuiz').hide();     // Je cache le bouton choisir un autre quiz./ 
});
/**
 * Compare 2 arrays. Return true if they are the same, else false.
 * 
 * @param {*} ans 
 * @param {*} givAns 
 */
function verifResult(ans, givAns) {
    if (givAns == null) {
        return false;
    }
    if (ans.length != givAns.length) {
        return false;
    }
    for (let i = 0; i < ans.length; i++) {
        if (ans[i] != givAns[i]) {
            return false;
        }
    }
    return true;
}

/**
 * Return the current answer for the current question.
 * 
 */
function answerCurrentQuestion() {
    let answer;
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            answer = data[i].questions[nbQst].answer; // Je prend la bonne réponse a la question.
            break;
        }
    }
    return answer;
}

/**
 * Check if the answer given is correct, display a message depending on the result.
 * 
 */
function actionOnVerif() {
    $('#buts').click(function () {
        let answer = answerCurrentQuestion();
        $('#correctAnswer').text(answer);
        let elt = $('#contain').children();   // je créer un tableau de tous les bouton clicker.
        let givenAnswer = [];
        let correct = true;
        elt.each(function () {
            givenAnswer.push($(this).text()); // Tableau du texte que contient les boutons clicker.
        });
        answer = answer.split(" ");
        correct = verifResult(answer, givenAnswer);
        if (correct == true) {
            $('#win').show();                 // Si la réponse donné est correcte, j'affiche un message gagnant
            nbGoodAnswer++;
        }
        if (correct == false) {               // Sinon j'affiche un message perdant.
            $('#lose').show();
        }
        $('.bouton').attr("disabled", true);   // Je désactive les mots bouton.
        $('#buts').hide();                     // Je cache le bouton verifier.
        $('#nextQuestion').show();             // Je fais apparraitre le bouton question suivante.
        console.log("La question numéro : " + nbQst);
        let nbQuestion = totalnbQuestion();
        console.log("Le nombre total de question: " + nbQuestion);
        if (nbQst == nbQuestion) {
            lastQuestionVerif();
        }
        answer = "";
    });
}
// Step 8 end.

/**
 * Step 9
 * Go to the next question when I click the next question button.
 */
function actionOnNextQuestion() {
    $('#nextQuestion').click(function () {
        nbQst = nbQst + 1;        // J'incrémente le numéro de la question.
        $('#win').hide();         // Je cache le message gagnant.
        $('#lose').hide();        // Je cache le message perdant.
        $('#nextQuestion').hide();// Je cache le bouton question suivante.
        $('.bouton').remove();    // Je supprime les boutons.
        $('#buts').show();        // Je réaffiche le bouton verifier pour que l'utilisateur vérifie sa réponse.
        DisplayElements();
        moveWords();
    });
}

/**
 * Return the total number of questions.
 */
function totalnbQuestion() {
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            return data[i].questions.length - 1;
        }
    }
}

/**
 * Step 10
 * When checking the last question.
 * 
 */
function lastQuestionVerif() {
    $('#nextQuestion').hide();              // Je cache le bouton question suivante.
    $('#buts').hide();                      // Je cache le bouton verifier.
    $('#tryAgain').show();                  // Je fais apparaitre le bouton recommencer le quiz.
    $('#otherQuiz').show();                 // Je fais apparaitre le bouton choisir un autre quiz.
    $('#endResult').show();                 // Je fais apparaitre le texte du résultat finale.
    $('#result').text(nbGoodAnswer);        // J'écris le nombre de bonne réponse trouver.
    $('#tryAgain').click(function () {      // recommencer le quiz si click sur le bouton.
        window.location.href = "jeu.html" + "?quizId=" + nom;
    });
    $('#otherQuiz').click(function () {     // Retourne sur la page d'acceuil pour choisir un autre quiz.
        window.location.href = "index.html";
    });
}
// step 10 end.

function main() {
    DisplayElements();
    moveWords();
    actionOnVerif();
    actionOnNextQuestion();
}