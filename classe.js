class Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
        this.name = nom;
        this.weight = poids;
        this.size = taille; 
    }
    //* Le calcul
    calculImc() {
        // TODO
        let imc = poids / taille**2
        return imc;
    }
    //* Affichage
    display() {
        // TODO
        console.log(nom 'a un IMC de' imc);
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55)
];
//list.???((uneInstanceImc) => uneInstanceImc.display());