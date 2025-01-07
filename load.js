const images = document.querySelectorAll("img");

const tabImg = Array.from(images);

tabImg.map((image,i) => image.addEventListener("load", function(){
    console.log(`img Num : ${i} - OK`);
}))

const titre = document.querySelector("h1");

const txt = setTimeout(function() {
    titre.textContent = "SALUT C'EST COOL";
    titre.style.opacity = 1;
    document.body.style.background = "royalblue";
}, 2000);

let timer = 0;

const countDown = setInterval(function() {
    console.log(timer);
    timer++
}, 2000);

const titre = document.querySelector("h1");
let timer = 3;

titre.addEventListener("click", function() {
    const countDown = setInterval(function() {
        if(timer > 0) {
            titre.textContent= timer;
        }
        else{
            titre.textContent ="GO GO GO";
            clearInterval(countDown);
        }
        timer--;
        console.log(timer);
    }, 2000);
});

// const image = document.querySelector("img");
// const tabImg = Array.from(image);

// tabImg.map((image) => addEventListener("load", function(){
//     const count = setInterval(function() {
//         for (let i = 0; i < tabImg.lenght; i++) {
//             image.setAttribute(tabImg[i]);
//         }
//     })
// }))