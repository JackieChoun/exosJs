// TODO : L'EVAL API METEO
// consigne 5:
const cardMeteo = document.querySelector('.cardMeteo');
const button = document.querySelector('button')
let info = document.createElement('div');

// consigne 6:
info.style.height = "300px";
info.style.width = "200px";
info.style.margin = "16px 0px";
info.style.border = "solid 3px grey";
info.style.padding = "16px 12px 24px 12px";

// consigne 7:
cardMeteo.insertBefore(info, button);

// consigne 8:
function addInfo(para){
    // let texte = document.createElement('p');
    // info.append(texte);
    info.innerText = para;
}

// consigne 9:
function bouton(){
    let classButton = document.createElement('class=');
    button.append(classButton);
}

// consigne 10:
button.addEventListener('mousedown', ()=>{
    button.style.backgroundColor = "orange";
})

// consigne 11:
window.addEventListener('mouseup', ()=> {
    button.style.backgroundColor = "cornflowerblue";
});

// consigne 12:
const meteo = async()=> {
    try{
        const rawData = await fetch('https://prevision-meteo.ch/services/json/toulouse');
        console.log(rawData);
    
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        button.addEventListener('click', () =>{
            addInfo( 'Aujourdhui le ' + transformedData.current_condition.date + ' le temps est: ' + transformedData.current_condition.condition + ' et la température est de ' + transformedData.current_condition.tmp +'°C' + ' Temperature max: ' + transformedData.current_condition.wnd_spd + ' Température min: ' + transformedData.current_condition.wnd_gust);
        });
            bouton();
    }
        catch (error) {
            console.error("Erreur lors de l'appel à l'API : ", error);
        }
}
meteo();