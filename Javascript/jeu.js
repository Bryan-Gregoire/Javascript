/**
 * Step 3.
 * Get the quiz id from the URL.
 */
let nom = new URL(location.href).searchParams.get("quizId");
console.log( "l'id choisis : " + nom);
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
    console.log("Les mots boutons :");
    console.log(mots);
    for (let index = 0; index < mots.length; index++) {
        let buts = $('<button type = button  Class = bouton></button>');
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

/**
 * Step 7
 * Move a buttom from one container to another one.
 */
$(document).ready(function () {
    $('.bouton').click(function () {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked');
            $('#mots').append($(this))
        } else {
            $('#contain').append($(this));
            $(this).addClass('clicked');
        }
    });
});
// Step 7 end.

let nbGoodAnswer = 0; // Nombre de réponses correctes.

/**
 * Step 8.
 * Checks and displays if the answer is correct when the user clicks on the verify button.
 */
$(document).ready(function () {
    $('#win').hide();
    $('#lose').hide();
    let answer;
    for (let i = 0; i < data.length; i++) {
        if (nom == data[i].id) {
            answer = data[i].questions[nbQst].answer;
            break;
        }
    }
    $('#correctAnswer').text(answer);
    $('#buts').click(function () {
        let elt = $('#contain').children();
        let givenAnswer = [];
        let correct = false;
        elt.each(function () {
            givenAnswer.push($(this).text());
        });
        console.log("La réponse donnée : " + givenAnswer);
        answer = answer.split(" ");
        console.log("La bonne réponse : " + answer);
        if(answer.length != givenAnswer.length){
            $('#lose').show();
        }
        for (let i = 0; i < answer.length; i++) {
            if(answer[i] != givenAnswer[i]){
                correct = false;
                break;
            } else {
                correct = true;
            }
        }
        if(correct == true){
            $('#win').show();
            nbGoodAnswer++;
            console.log("bonne réponse : "+ nbGoodAnswer);
        } else {
            $('#lose').show();
        }
        $('.bouton').attr("disabled", true);
        $('#buts').hide();
    });
});
// Step 8 end.