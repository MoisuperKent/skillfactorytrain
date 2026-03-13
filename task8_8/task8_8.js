const loadBtn = document.getElementById("loadAnimals-btn");
const loader= document.querySelector(".animals__loader");
async function getPhotos() {
    console.log("start");
    try {
        loader.style.display="block";
        const result = await fetch("https://api.thedogapi.com/v1/images/search?limit=20&size=med");
        if (!result.ok) {
            throw new Error("Что-то пошло не так!");
        }
        else {
            console.log("go");
            const data = await result.json();
            const url = data.map(element => element.url);
            uploadPhotos(url);
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        loader.style.display="none";
    }
}
function uploadPhotos(url) {
    const div = document.querySelector(".animals");
    div.innerHTML = "";
    console.log(url);
    url.forEach((element) => {
        let img = document.createElement("img");
        img.src = element;
        div.appendChild(img);
    });
}
loadBtn.addEventListener("click", getPhotos());