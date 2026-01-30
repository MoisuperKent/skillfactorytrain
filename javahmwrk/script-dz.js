const number=prompt("Введите задуманное число");
if (number===null || Number.isNaN(+number) || number.trim()==="") {
    alert("Введите число");
}
else {
    alert(`Введённое число - ${number}\nКвадрат числа - ${Math.pow(number,2)}\nКуб числа - ${Math.pow(number,3)}`);
}