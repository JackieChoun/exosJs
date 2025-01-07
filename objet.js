let tableau={
    artiste : "Bouguereau",
    titre : "Dante et Virgil",
    année : "1850"
}
let livre={
    auteur : "Aldous Huxley",
    titre : "le Meilleur des mondes",
    année : "1932"
}
let cd={
    chanteur : "Prince",
    album : "Purple Rain",
    année : "1985"
}
tableau.style="académique";
console.log(tableau);
delete livre.année;
console.log(livre);
console.log(cd.hasOwnProperty("chanteur"));

console.log(`${cd.chanteur} a sortie ${cd.album} en ${cd.année}`)