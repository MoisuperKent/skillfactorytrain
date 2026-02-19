button = document.querySelector("#script-start");
button.addEventListener('click', function () {
    function printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }

    const person = {
        name: "Чупачупс",
        age: 31
    };

    printInfo.call(person, person.name, person.age);
})