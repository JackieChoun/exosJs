// const titre = document.body.getElementsByTagName("h1");
// console.log(titre);
// const para = document.getElementsByClassName("paragraphe");
// console.log(para);
// const paragr = document.getElementById("java");
// console.log(paragr);
// const p = document.querySelector("#java");
// console.log(p);

// let newText = document.createTextNode(`Nouveau texte`);
// document.body.appendChild(newText);

// function ajoutTexte(pseudo, texte){
//     const newTxt = document.createElement("p");

//     newTxt.innerText = `${pseudo} : ${texte}`;
//     document.body.appendChild(newTxt);
// }

// ajoutTexte("Kaya", "awesome");
// ajoutTexte("Mer", "balcon");
// ajoutTexte("Troie", "soleil");
// ajoutTexte("Rei Hino", "mysterio");

// // const lien = document.body.getElementsByTagName("a")[0];
// // lien.setAttribute("href", "https://www.natura-sciences.com/comprendre/5-fake-news-rechauffement-climatique.html");

// const image = document.body.getElementsByTagName("img")[0];
// image.setAttribute("src", "https://www.urban-comics.com/wp-content/uploads/2023/06/batman-killing-time-tom-king-1.jpg");

// const txt = document.body.getElementsByTagName("p");
// const texteTab = Array.from(txt);
// texteTab.map(txt => txt.innerText = "Hacked");

// const titre1 = document.getElementById("titre");
// console.log(titre1.offsetHeight, titre1.offsetWidth, titre1.clientHeight);

const navi = document.querySelectorAll("a");
const titre2 = document.querySelector("h1");

navi[1].addEventListener("click", function(){
    titre2.classList.add("maCouleur");
});
navi[2].addEventListener("click", function() {
    titre2.classList.remove("maCouleur");
});
navi[3].addEventListener("click", function() {
    titre2.classList.toggle("maCouleur");
});