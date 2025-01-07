// const leTexte = document.querySelector("textarea");
// const txt = [];
// const voyelles = ["a", "e", "i", "o", "u", "y"];

// leTexte.addEventListener("keypress", function(unEvent){
//     const touche = unEvent.key;

//     if(voyelles.includes(touche)){
//         txt.push(touche);
//     }
//     console.log(txt.join("_"));
// });

const monForm = document.querySelector("form");

monForm.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK");
    monForm.reset();
})
