const card = document.getElementById('userCard');

const cardApi = async() => {
    try{
        const rawData = await fetch('https://randomuser.me/api/');
        console.log(rawData);
    
        if (!rawData.ok || rawData.status !== 200) {
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return;
        }

        const transformedData = await rawData.json();
            console.log(transformedData);
            let container = document.createElement('div');
            let nom = document.createElement('h3');
            let image = document.createElement('img');
            let mail = document.createElement('li');
            let adress = document.createElement('li');
            let phone = document.createElement('li');
            let boutton = document.createElement('button');

            card.append(container);
            image.src = transformedData.results[0].picture.large;
            nom.innerText = transformedData.results[0].name.title + ' ' + transformedData.results[0].name.first + ' ' + transformedData.results[0].name.last;
            mail.innerText = transformedData.results[0].email;
            adress.innerText = 'Adress:'+ transformedData.results[0].location.street.number + '-' + transformedData.results[0].location.street.name + ' ('+ transformedData.results[0].location.city + '-' + transformedData.results[0].location.country + ')';
            phone.innerText = 'Phone: ' + transformedData.results[0].phone;
            boutton.innerText = 'Random User';
            
            
    
            container.append(image);
            container.append(nom);
            container.append(mail);
            container.append(adress);
            container.append(phone);
            container.append(boutton);

            container.style.width = "100%";
            container.style.height = "auto";
            container.style.padding = "20px";
            container.style.backgroundColor = "#cfe3ff";
            container.style.listStyle = "none";
            container.style.textAlign = "center";
            container.style.borderRadius = "10px";
            image.style.borderRadius = "10px";
            boutton.style.backgroundColor = "blue";
    }

    catch (error) {
    console.error("Erreur lors de l'appel à l'API : ", error);
    }       
};
cardApi();