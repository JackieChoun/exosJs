// const parag = document.getElementsByTagName("p");

// tabPara = Array.from(parag);

// console.log(tabPara);

//? Fonction qui remplace le texte par un autre:
// tabPara.map(function(uneCase){
//     uneCase.innerText='azerty';
//? Puis qui affiche dans la console avec un click:
//     uneCase.addEventListener('click',function(){
//         console.log("truc");
//     });
// });

//? Enleve un element:
// document.body.removeChild(parag[2]);

//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
// const userData = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

// const div1 = document.getElementById('utilisateur');

// const titreh1 = document.createElement('h1');
// const paragraphe = document.createElement('p');
// const paragraphe1 = document.createElement('p');
// const paragraphe2 = document.createElement('p');
// const image = document.createElement('img');

// image.src = userData.img;
// titreh1.innerText = userData.name;
// paragraphe.innerText = userData.email;
// paragraphe1.innerText = userData.age;
// paragraphe2.innerText = userData.dob;

// div1.append(image, titreh1, paragraphe, paragraphe1, paragraphe2);

// div1.style.backgroundColor = " #4158D0";
// div1.style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
// div1.style.color = 'white';
// div1.style.margin = 'margin';
// div1.style.width = '500px';

//? changer titre sur le click:
// const titreB = document.querySelector('h1');

// titreB.addEventListener('click', function(){
//     titreB.innerText = "🤩";
// });

//? focus et blur
const texte = document.getElementById('barre');

barre.addEventListener('focus', ()=>{
    texte.style.backgroundColor = 'royalblue';
    texte.style.color = 'white';
})
barre.addEventListener('blur', ()=>{
    texte.style.backgroundColor = 'transparent';
    texte.style.color = 'black';
})