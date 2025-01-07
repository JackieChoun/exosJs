let nom = "devig";
let prenom = "mehdi";
let phrase = [nom, prenom, prenom[0] + nom[0] + nom[2]];
console.log(phrase);




function mention(francais, math, philo){
    let notes = [francais, math, philo];
    let moyenne = (francais + math + philo) / notes.length;
    if (moyenne >= 15) {
        console.log("Très bien");
    } else if (moyenne >= 10) {
        console.log("Assez bien");
    } else { 
        console.log("Refus");
    }
}

mention(11, 10, 1);