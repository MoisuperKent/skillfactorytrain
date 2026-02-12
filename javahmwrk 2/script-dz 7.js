button = document.querySelector("#start-script");
button.addEventListener('click', function () {
    const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
    const uniqueSet=new Set(arr);
    const uniqueArr=Array.from(uniqueSet);
    console.log(uniqueArr)
})