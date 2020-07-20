var star = [];
star[1] = document.getElementById('1');
star[2] = document.getElementById('2');
star[3] = document.getElementById('3');
star[4] = document.getElementById('4');
star[5] = document.getElementById('5');

document.addEventListener("click", function (evt) {

    targetElement = evt.target;  // retorna el element clickat

    if ((targetElement.id == '1') || (targetElement.id == '2') || (targetElement.id == '3') || (targetElement.id == '4') || (targetElement.id == '5')) {
        let i = parseInt(targetElement.id);

        paintStars(i); //seria interessant saber com navegar el DOM per diferents elements de la mateixa classe.

    } else {

        deleteStars();

    }
});

function deleteStars() {

    for (var j = 5; j > 0; j--) {
        star[j].classList.remove("checked");
    }
}

function paintStars(i) {

    for (var j = 5; j > 0; j--) {
        star[j].classList.remove("checked");
    }
    for (i; i > 0; i--) {
        star[i].classList.add("checked");
    }

}