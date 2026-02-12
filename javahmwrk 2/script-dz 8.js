button = document.querySelector("#start-script");
button.addEventListener('click', function () {
    const number=prompt("Введите число");
    if (isFinite(number) && number.trim() !== "")
         {
           const mas=[];
           for (let i=0; i<=number; i+=1) {
            mas.push(i);
           } 
           console.log(mas);
         }
         else {
            alert("недопустимый формат");
         }
    
})