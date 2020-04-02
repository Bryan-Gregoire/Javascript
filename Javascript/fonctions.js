/**
 * Step 1.
 * Display all descriptions of data.
 */
function displayDescription() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].description);
        console.log(data[i].id);
    }
}
// Step 1 end.

/**
 * Step 2.
 * Complete the form.
 * Display the description of data.
 */
$(document).ready(function () {
    for (let index = 0; index < data.length; index++) {
        let element = data[index].id;
        let descript = data[index].description;
        let item = $('<option name value ></option>)');
        $('#lang').append(item.text(descript));
        $(item).attr("name", element);
        $(item).attr("value", descript);
    }
});

/**
 * Step 2.
 * Send to a new page if there is a click.
 */
$(document).ready(function () {
    $('#validate').click(function () {
        let selectedValue = $('#lang').val();
        let selectedName = $('#lang option:selected').text();
        let nameOfOption = $('#lang option:selected').attr("name");
        console.log(nameOfOption);
        console.log(selectedValue);
        console.log(selectedName);
        window.location.href = "./jeu.html" + "?quizId=" + nameOfOption;

        // "?" veut dire démarrage des paramètres.
        // "&" si je veut rajouter des paramètres.
    });
});
// Step 2 end.