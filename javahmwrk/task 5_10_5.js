const button = document.querySelector('.get-loan');

button.addEventListener('click', function () {
    const age = prompt('Введите ваш возраст:');
    console.log(typeof age);
    if (String(age).trim() !== "" && age !== null && isFinite(age)) {
        let year = '';
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
        if (age < 18 || age >= 65) {
            alert("Мы не можем оформить вам кредит.");
        }
        else {
            let loan = 0;

            if (age >= 18 && age <= 21) {
                loan = prompt(`С учётом того, что ваш возраст составляет ${age} ${year}, мы можем предложить вам сумму до 50 тыс. руб.`);
            }
            else if (age > 22 && age <= 35) {
                loan = prompt(`С учётом того, что ваш возраст составляет ${age} ${year}, мы можем предложить вам сумму до 400 тыс. руб.`);
            }
            else if (age > 36 && age <= 65) {
                loan = prompt(`С учётом того, что ваш возраст составляет ${age} ${year}, мы можем предложить вам сумму до 1000000 руб.`);
            }

            if (isFinite(loan) && loan !== null && loan.trim() !== "") {
                if (loan % 1000 != 0) {
                    alert("Сумма должна быть кратна 1000 руб.!");
                }
                else {
                    if (age >= 18 && age <= 21) {
                        if (loan <= 50000) {
                            alert("Ура! Поздравляем с получением кредита");
                        }
                        else {
                            alert("Вы превысили допустимую сумму кредита");
                        }
                    }
                    else if (age > 22 && age <= 35) {
                        if (loan <= 400000) {
                            alert("Ура! Поздравляем с получением кредита");
                        }
                        else {
                            alert("Вы превысили допустимую сумму кредита");
                        }
                    }
                    else if (age > 36 && age <= 65) {
                        if (loan <= 1000000) {
                            alert("Ура! Поздравляем с получением кредита");
                        }
                        else {
                            alert("Вы превысили допустимую сумму кредита");
                        }
                    }
                }
            }
            else {
                alert("Недопустимый формат суммы кредита")
            }
        }
    }
    else {
        alert("Недопустимый формат для возраста");
    }
});