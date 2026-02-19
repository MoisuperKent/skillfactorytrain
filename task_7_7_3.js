button = document.querySelector("#script-start");
button.addEventListener('click', function () {
    const users = [{ name: "Уилл", age: 16 }, { name: "Майк", age: 17 }, { name: "Дастин", age: 16 }, { name: "Лукас", age: 17 }, , { name: "Нэнси", age: 20 }, , { name: "Джонатан", age: 21 }, { name: "Стив", age: 21 }]
    const fullAgedUsers = users.filter(index => { if (index.age > 18) { return true } });
    const fullAgedNamesOfUsers = fullAgedUsers.map((index) => { return index.name })
    console.log(fullAgedNamesOfUsers);
})