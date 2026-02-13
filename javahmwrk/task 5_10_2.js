const discont = prompt("Введите промокод");
if (discont !== null) {
    if (discont.toLowerCase() == "скидка") {
        alert("Промокод успешно применён");
    }
    else {
        alert("Промокод не работает");
    }
}