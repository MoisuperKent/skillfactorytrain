const userName = prompt("Введите имя");
if (userName !== null && userName.trim() !== "") {
    if (isFinite(userName)) {
        alert("Имя не может быть в таком формате");
    }
    else {
        let age = prompt("Введите год рождения")
        if (isFinite(age) && age.trim() !== "") {
            alert(`Добро пожаловать, ${userName} ${2026 - age}!`)
        }
        else {
            alert("Год рождения должен быть числом!")
        }
    }
}
else {
    alert("Вы не ввели имя!")
}