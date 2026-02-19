button = document.querySelector("#script-start");
button.addEventListener('click', function () {
    function clearArray(array) {
        const newArray = Array.from(new Set(array));
        return newArray.sort((a, b) => a - b);
    }
    const numbers = [1, 5, 2, 5, 3, 1, 7, 2, 8, 3];
    console.log(clearArray(numbers))
})