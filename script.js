const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

// Consigne 1
const tabData = [];

// Consigne 2
tabData.push(usersHuman, usersPet, usersXeno);

// Consigne 3
let a = usersHuman;
function afficherHummain(a){
    console.log(`nom: ${usersHuman[a].name}`);
    console.log(`email: ${usersHuman[a].email}`);
    console.log(`age: ${usersHuman[a].age}`);
}
afficherHummain([2]);

// Consigne 4
let b = usersPet;
function afficherAnimal(b){
    console.log(`nom: ${usersPet[b].name}`);
    console.log(`espece: ${usersPet[b].espece}`);
    console.log(`age: ${usersPet[b].age}`);
    console.log(`propriétaire: ${usersPet[b].propriétaire}`);
}
afficherAnimal([1]);

// Consigne 5
let c = usersXeno;
function afficherXeno(c){
    console.log(`nom: ${usersXeno[c].name}`);
    console.log(`espece: ${usersXeno[c].espece}`);
    console.log(`age: ${usersXeno[c].age}`);
    console.log(`niveau de menace: ${usersXeno[c].menace}`);
}
afficherXeno([0]);
//ou pour un
// function afficherXeno(tabData){
//     console.log(`nom: ${usersXeno[0].name}`);
//     console.log(`espece: ${usersXeno[0].espece}`);
//     console.log(`age: ${usersXeno[0].age}`);
//     console.log(`niveau de menace: ${usersXeno[0].menace}`);
// }
// afficherXeno(usersXeno)

// Consigne 6, 7, 8

function profil(tabData){
    for(let i = tabData[0]; i < tabData.length; i++){    
         if (type == "humain"){
            afficherHummain(tabData);
        }
        else if (type == "animal de compagnie"){
            afficherAnimal(tabData);
        }
        else if (type == "Xeno"){
            afficherXeno(tabData);
        }
        else{
            console.log("Type de Profil non Existant");
        }
    }
}

//Consigne 9
profil(usersPet);
profil([1]);
profil([2]);
profil([25]);