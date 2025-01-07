// let i=0;
// let dessin=[];

// // while (i < 10) {
// //     i++;
// //     dessin.push("#");
// //     console.log(dessin);
// // }

// for(let j = 10; j > 0; j -=2){
//     dessin.push("#");
//     console.log(dessin);
// }


function moyenne(tab){
    let somme = 0;
    for(let k = 0; k < tab.length; k++){
        somme += tab[k];
    }
    console.log(somme/tab.length);
}

moyenne([1, 2, 3, 5, 10]);