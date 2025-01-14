export const titreChuck = async() => {
    const titre = document.getElementById('text-center');
    try{
        const rawData = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(rawData);
    
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }
            let chuck = document.createElement('h1');
        const transformedData = await rawData.json();
            console.log(transformedData);
            
            titre.innerText = transformedData.value;

            titre.append(chuck);

    }

    catch (error) {
    console.error("Erreur lors de l'appel à l'API : ", error);
    }       
};
