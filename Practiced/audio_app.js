let button = document.querySelectorAll("button");
for(let i=0; i<button.length; i++) {

    let audioBtn = button[i].addEventListener("click", function() {
        let text = this.innerHTML;
        audioPlay(text);
        console.log(text);
    });

}

function audioPlay(text) {

    switch(text) {
        case "Chile Amar" :
            var audio = new Audio("audio/chile_amar.mp3");
            audio.play();
            break;

        case "Jhoom" :
            var audio = new Audio("audio/Jhoom-Minar_Rahman.mp3");
            audio.play();
            break;

        case "Tor Premete Ondho Holam" :
            var audio = new Audio("audio/Tor_Premete_Ondho_Holam.mp3");
            audio.play();
            break;

        case "Tumi Amar" :
            var audio = new Audio("audio/Tumi_Amar.mp3");
            audio.play();
            break;

    }
}