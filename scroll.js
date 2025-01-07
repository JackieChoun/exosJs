const bar = document.querySelector(".bar");

addEventListener("scroll", function() {
    const scrollMax = document.body.scrollHeight - innerHeight;
        const onEstOu = scrollY / scrollMax * 100;
        bar.style.width = onEstOu + "%";


    console.log( `
        Hauteur page: ${document.body.scrollHeight} 
        Hauteur affichage: ${innerHeight}
        Scroll Position : ${scrollY}`);
})