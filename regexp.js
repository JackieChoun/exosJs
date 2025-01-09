const mail = document.getElementById('email');
const mdp = document.getElementById('password');
const error = document.getElementById('error');

mail.addEventListener('keyup', function(){
    const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
    if(regexMail.test(mail.value)){
        mail.style.backgroundColor = 'lightgreen';
    }
    else{
        mail.style.backgroundColor = 'red';
    }
});

// mdp.addEventListener('keyup', function(event){
//     const charDecimal = /\d/;
//     const charSpecial = /[$&@!]/;
//     const charWord = /\w{6,8}/;
//     if(event.target.value.match(charDecimal, charSpecial, charWord)){
//         mdp.style.backgroundColor = 'lightgreen';
//     }
//     else{
//         mdp.style.backgroundColor = 'red';
//     }
// })

mdp.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';
    // Si MDP <6 alors dans errormessage on cumule une <li></li> (trop court)
    // Sinon Si MDP >8 alors dans errormessage on cumule une <li></li> (trop long)
    // Si la value du passWord ne match pas la regex decimale alors on cumule une <li></li> (faut un chiffre)
    // etc ... meme système pour les autres cas 
    // On peut aussi faire un truc genre si erroMessage est vide alors c'est tout bon 
    if(mdp.value.length<6){
      errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }
    else if(mdp.value.length>8){
      errorMessage+='<li>Le Mot de passe trop LONG</li>'
    }
  
    if(!mdp.value.match(charDecimal)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!mdp.value.match(charSpecial)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
      error.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
      error.style.border ='5px solid red'
    }
    else{
      error.innerHTML = 'Le mot de passe est valide ! 👍';
      error.style.border ='5px solid green'
    }
});
