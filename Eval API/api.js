const apiDiv = document.querySelector('.apiContacter');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =  async () => {
//     //Data va récup Toutes les données de l'api
//     const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);
//     //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
//     const dataTransformed = await response.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
// };
// contactApi();

// const contactApiSecure =  async () => {
//     const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
//     console.log(rawData);
    
//     // Vérification du statut de la réponse
//     if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
//         console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//         return; // Sortir de la fonction si la réponse n'est pas OK
//     }

//     const transformedData = await rawData.json();
//     console.log(transformedData);
//     apiDiv2.innerHTML = transformedData.name.fr;
// }

// contactApiSecure();

// const contactApiSecurePlus =  async () => {
//     try {
//         const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
//         console.log(rawData);
        
//         // Vérification du statut de la réponse
//         if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return; // Sortir de la fonction si la réponse n'est pas OK
//         }

//         const transformedData = await rawData.json();
//         console.log(transformedData);
//         apiDiv.innerHTML = transformedData.name.fr;
//     } catch (error) {
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// }
// contactApiSecurePlus();


apiDiv.style.backgroundColor = "#CCE3DA"
apiDiv.style.display = "flex";
apiDiv.style.justifyContent = "space-evenly";
apiDiv.style.flexWrap = "wrap"; 
const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }

        const transformedData = await rawData.json();
    for(let i = 0; i < transformedData.length; i++){
        console.log(transformedData);
        let container = document.createElement('div');
        let nom = document.createElement('h3');
        let image = document.createElement('img');
        let type = document.createElement('li');
        let height = document.createElement('li');
        let weight = document.createElement('li');

        apiDiv.append(container);
        image.src = transformedData[i].sprites.regular;
        nom.innerText = transformedData[i].name.fr;
        type.innerText = 'Type: ';
        for(let j = 0; j < transformedData[i].types.length; j++){
        type.innerText += transformedData[i].types[j].name + ' ';
        };
        height.innerText = 'Taille: '+ transformedData[i].height;
        weight.innerText = 'Poids: ' + transformedData[i].weight;

        container.append(image);
        container.append(nom);
        container.append(type);
        container.append(height);
        container.append(weight);

        container.style.marginTop = "10px";
        container.style.width = "10%";
        container.style.height = "auto";
        image.style.width = "70%";
        container.style.paddingLeft = "30px";
        container.style.backgroundColor = "white";
    }

    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}
contactApiSecurePlus();
