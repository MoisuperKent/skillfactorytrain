const userName = prompt("Введите имя");
if (userName !== null && userName.trim() !== "") {
    if (isFinite(userName)) {
        alert("Имя не может быть в таком формате");
    }
    else {
        let age = prompt("Введите год рождения")
        if (isFinite(age) && age.trim() !== "") {
            let year = "";
            switch (age % 10) {
                case 1:
                    year = "год";
                    break;
                case 2:
                case 3:
                case 4:
                    year = "года";
                    break;
                default:
                    year = "лет";
            }
            alert(`Добро пожаловать, ${userName} ${2026 - age} ${year}!`)
        }
        else {
            alert("Год рождения должен быть числом!")
        }
    }
}
else {
    alert("Вы не ввели имя!")
}
