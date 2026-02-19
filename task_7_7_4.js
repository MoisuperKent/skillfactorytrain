button = document.querySelector("#script-start");
button.addEventListener('click', function () {
    function setFullName(name) {
        this.fullName = name;
    }

    const person = {
        fullName: "Чупачупс",
        age: 31
    };
    const setPersonFullName = setFullName.bind(person);
    setPersonFullName("John Smith");
    console.log(person);
})