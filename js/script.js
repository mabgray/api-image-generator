const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function(){
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    return console.log(images);
    selectRandomImage(images);
}

const selectRandomImage = function(images){
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    displayImage(randomIndex);
}

const displayImage = function(randomImage){

    let author = randomImage.author;
    let imageAdress = randomImage.download_url;
    authorSpan.innerHTML = author;
    imgDiv.classList.remove("hide");
}
button.addEventListener("click", function(){
    getImage();
});