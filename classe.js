//? Premier exo:
// class Imc {
//     //* Constructor -> initialise les données
//     constructor(nom, poids, taille) {
//         this.name = nom;
//         this.weight = poids;
//         this.size = taille; 
//         this.imc = this.calculImc();
//     }
//     //* Le calcul
//     calculImc() {
//         // TODO 
//         return (this.weight / this.size ** 2).toFixed(2);
//     }
//     //* Affichage
//     display() {
//         // TODO
//         console.log(`Bonjour, ${this.name} a un IMC de ${this.imc}`);
//     }
// }
// //* progr principal -> on fait l'injection des données
// let list = [
//     new Imc("Sébastien Chabal", 135, 1.7),
//     new Imc("Escaladeuse", 45, 1.68),
//     new Imc("JOJO", 300, 2),
//     new Imc("Gontrand", 90, 1.75),
//     new Imc("Colonel Clock", 200, 1.75),
//     new Imc("JOsiane de la Vega", 99, 1.55)
// ];
// //list.???((uneInstanceImc) => uneInstanceImc.display());
// list.forEach((uneInstanceImc) => uneInstanceImc.display());

//? deuxieme exo:
class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
// TODO 
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMensuel = salaireMensuel;
        this.salaireAnnuel = this.getCout();
        this.coutTotal = this.calculCout();
    }
    // me servira à passer le cout d 1 employé dans la classe PME quand on fera une boucle sur le tableau des Employee (l'équipe)
    getCout() {
        // TODO
        return (this.salaireMensuel * 12);
    }
    //calcul cout total d 1 salarié
    calculCout() {
        //TODO
        return (this.salaireAnnuel + this.salaireAnnuel * 0.9);
    }
    // display(){
    //     console.log(`cout total du salaire de ${this.nom} ${this.prenom}, ${this.age}: ${this.coutTotal}`)
    // }
}


class Pme {
    // 
    constructor(nom, equipe, ventes, coutsFixes, achats) {
     //TODO
     this.pmeNom = nom;
     this.equipe = equipe;
     this.ventes = ventes;
     this.coutsFixes = coutsFixes;
     this.achats = achats;
    }

    bilanCalculed() {
      //TODO
      console.log(`${this.pmeNom} : Cout initial: ${this.coutsFixes + this.achats}`);
      console.log(`${this.pmeNom} : Cout total équipe: ${Employee.forEach}`)
      console.log(`${this.pmeNom} : VENTES: ${this.ventes}`);
      console.log((Employee.forEach + this.coutsFixes + this.achats) - this.ventes);
    }
}

const pme = new Pme(
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [new Employee("Duval", "Paul", 30, 2000),
    new Employee("Durand", "Alain", 40, 3000),
    new Employee("Dois", "Sylvia", 50, 4000),],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();
// pme.forEach((uneInstanceEmployee) => uneInstanceEmployee.display());