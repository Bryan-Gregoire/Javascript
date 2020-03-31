// étape 1
function displayDescription() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].description);
        console.log(data[i].id);
    }
}
// fin étape 1

// étape 2
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

$(document).ready(function () {
    $('#validate').click(function () {
        let selectedValue = $('#lang').val();
        let selectedName = $('#lang option:selected').text();
        let nameOfOption = $('#lang option:selected').attr("name");
        console.log(nameOfOption);
        console.log(selectedValue);
        console.log(selectedName);
        window.location.href = "./jeu.html"+"?quizId="+nameOfOption;
    });
});
// fin étape 2