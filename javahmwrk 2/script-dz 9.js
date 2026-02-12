function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

button = document.querySelector("#start-script");
button.addEventListener('click', function () {
   const ticTacToe=[];
   const  noughtsNcrosses=["X","O"]
   for (let i=0;i<3;i+=1) {
    for (let j=0;j<3;j+=1) {
        ticTacToe.push(getRandomElement(noughtsNcrosses));
    }
   }
   console.log("-----");
   console.log(ticTacToe.slice(0, 3).join(' '));
   console.log(ticTacToe.slice(3, 6).join(' '));
   console.log(ticTacToe.slice(6, 9).join(' '));  
})