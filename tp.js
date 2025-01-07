// const titre1=document.getElementById("titre1");

// window.scrollTo({
//     top: 1000,
//     left: 10,
//     behavior: "smooth",
// });

const titre=document.querySelectorAll("h1");

function goTitre(leTitre) {
    const distance = leTitre.offsetTop;
    window.scrollTo({
        top: distance,
        left: 10,
        behavior: "smooth",
    });
}

function scroll(){
    if(window.scrollTo({
        top: 20,
        behavior: "smooth",
    })) {
        goTitre(titre[1]);
    }
    else {
        goTitre(titre[0]);
    }
}

scroll();
