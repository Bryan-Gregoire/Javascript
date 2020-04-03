/**
 * Step 3.
 * Get the quiz id from the URL.
 */
let nom = new URL(location.href).searchParams.get("quizId");
console.log("l'id choisis : " + nom);
// Step 3 end.

let nbQst = 0; // Numéro de la question.
let nbGoodAnswer = 0; // Nombre de réponses correctes.

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
function DisplayElements() {
    let answ;
    let extras;
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            $('#question').text(data[i].questions[nbQst].question) // afficher la question.
            $('#number').text(nbQst + 1); // Afficher le numéro de la question.
            answ = data[i].questions[nbQst].answer;  // la réponse.
            extras = data[i].questions[nbQst].extras;  // Les extras.
            break;
        }
    }
    let texte = answ + " " + extras; // Contien la réponse et les extras.
    let mots = texte.split(' ');   // Tableau qui est composé de chaque mot de texte séparé par un espace.
    mots = shuffle(mots);
    for (let index = 0; index < mots.length; index++) {
        console.log("for display");
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
 */
function moveWords() {
    $('.bouton').click(function () {
        //console.log("enter move");
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $('#mots').append($(this))
            //console.log("enter clicked");
        } else {
            $('#contain').append($(this));
            $(this).addClass('clicked');
            //console.log("enter else");
        }
    });
}
// Step 7 end.


/**
 * Step 8.
 * Checks and displays if the answer is correct when the user clicks on the verify button.
 */
$(document).ready(function () {
    $('#win').hide(); // Je cache le message gagnant.
    $('#lose').hide(); // Je cache le message perdant.
    $('#nextQuestion').hide();  // Je cache le bouton question suivante.
});

function actionOnVerif() {
    console.log("1. action");
    let answer = " ";
    console.log("test1 qst dans action question "+nbQst+" taille data "+data.length);
    //console.log("data length "+data.length);
    for (let i = 0; i < data.length; i++) {
        console.log(nom);
        if (nom == data[i].id) {
            //console.log("dans nom = data "+data[i].id);
            answer = data[i].questions[nbQst].answer; // Je prend la bonne réponse a la question.
            break;
        }
    }
    console.log("2.display correct answer");
    $('#correctAnswer').text(answer);
    $('#buts').click(function () {
        console.log("3. start verification quest "+nbQst+" answer :"+answer);
        //console.log(answer);
        let elt = $('#contain').children();   // je créer un tableau de tous les bouton clicker.
        let givenAnswer = [];
        let correct = false;
        elt.each(function () {
            givenAnswer.push($(this).text());    // Tableau du texte que contient les boutons clicker.
        });
        console.log("4. start split");
        //console.log(answer);
        answer = answer.split(" ");
        //console.log(answer);
        if(givenAnswer == null){
            correct = false;
        }
        //console.log("4");
        if (answer.length != givenAnswer.length) {     // je compare la bonne réponse avec la réponse donné.
            $('#lose').show();
        }
        //console.log("5");
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] != givenAnswer[i]) {
                correct = false;
                break;
            } else {
                correct = true;
            }
        }
        if (correct == true) {
            $('#win').show();  // Si la réponse donné est correcte, j'affiche un message
            nbGoodAnswer++;
        } else {               // Sinon je lui dis 
            $('#lose').show();
        }
        $('.bouton').attr("disabled", true);
        $('#buts').hide();
        $('#nextQuestion').show();
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
        console.log("incrementation qst dans onnextquestion avant "+nbQst);
        nbQst = nbQst + 1;  // J'incrémente le numéro de la question.
        console.log("incrementation qst dans onnextquestion apres "+nbQst);
        $('#win').hide();  // Je cache le message gagnant.
        $('#lose').hide();  // Je cache le message perdant.
        $('#nextQuestion').hide();  // Je cache le bouton question suivante.
        $('.bouton').remove(); // Je supprime les boutons.
        $('#buts').show();  // Je réaffiche le bouton verifier pour que l'utilisateur vérifie sa réponse.
        DisplayElements();
        actionOnVerif();
        moveWords();
    });
}
$(document).ready(function () {
    DisplayElements();
    moveWords();
    actionOnVerif();
    actionOnNextQuestion();
});