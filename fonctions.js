// étape 1
function displayDescription() {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].description);
    }
}
// fin étape 1

// étape 2
$(document).ready(function() {
    for (let index = 0; index < data.length; index++) {
        let element = data[index].id;
        let descript = data[index].description;
        let item = $("<option id=descript").text(descript);
        $("langages").append(item)
    };
});