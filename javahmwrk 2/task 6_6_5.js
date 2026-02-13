button = document.querySelector("#start-script");
button.addEventListener('click', function () {
    const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
    const arrValues = [];
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            for (let i = 0; i < obj[key].length; i += 1) {
                arrValues.push(obj[key][i]);
            }
        }
        else {
            arrValues.push(obj[key]);
        }
    }
    // const arrValues=Array.from(Object.values(obj));
    console.log(arrValues.join(", "));
})
