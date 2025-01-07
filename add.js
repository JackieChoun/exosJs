// const link = document.querySelector("a");

// link.addEventListener("click", function() {
//     console.log("Bonjour")
// });


// addEventListener("keypress", function(event) {
//     console.log(event);
// })

// const txt = document.querySelector("p");

// function ajouttxt(){
//     let texte = prompt(`écris moi ton monologue.`);
//     txt.innerText = `${texte}`;
// }

// addEventListener("click", function(){
//     ajouttxt();
// });

addEventListener("click", function(unEvent) {
    const monImg= document.createElement("img");
    monImg.setAttribute("src", "https://loremflickr.com/100/100");
    console.log(unEvent.x, unEvent.y);

        monImg.style.position="absolute";
        monImg.style.left=(unEvent.x-monImg.width/2) + "px";
        monImg.style.top=(unEvent.y-monImg.height/2) + "px";

        document.body.appendChild(monImg);
});