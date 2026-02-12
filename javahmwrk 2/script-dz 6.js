button = document.querySelector("#start-script");
button.addEventListener('click', function () {
    const word = prompt("Введите слово");
    const mas = Array.from(word);
    let flag = true;
    for (let i = 0; i <= Math.floor(mas.length / 2); i += 1) {
        if (flag) {
            if (mas[i] != mas[mas.length - 1 - i]) {
                flag = false;
            }
            // console.log(mas[i], mas[mas.length - 1 - i]);
        }
        else {
            break;
        }
    }
    if (flag) {
        console.log(`Слово ${word} является палиндромом`);
    }
    else {
        console.log(`Слово ${word} не является палиндромом`);
    }
})