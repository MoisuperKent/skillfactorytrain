button = document.querySelector("#script-start");
button.addEventListener('click', function () {
    function calculate(a, b, operator) {
        switch (operator) {
            case "-":
                return a - b;
            case "+":
                return a + b;
            case "/":
                return a / b;
            case "*":
                return a * b;
            default:
                console.error("Неизвестная операция:", operator);
                return NaN;
        }
    }
    object = { a: 2, b: 4, operator: '*' };
    console.log(calculate.apply(object, [2, 3, "*"]));
    // с передачей объекта со значениями a, b и operator в качестве первого аргумента и массива с тремя значениями [2, 3, "+"] в качестве второго аргумента. Почему?
})