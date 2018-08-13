let arrayPines = ["https://images.pexels.com/photos/930676/pexels-photo-930676.jpeg",
"https://images.pexels.com/photos/1310044/pexels-photo-1310044.jpeg",
"https://images.pexels.com/photos/1309897/pexels-photo-1309897.jpeg",
"https://images.pexels.com/photos/14644/pexels-photo-14644.jpeg",
"https://images.pexels.com/photos/1307662/pexels-photo-1307662.jpeg",
"https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg",
"https://images.pexels.com/photos/556658/pexels-photo-556658.jpeg",
"https://images.pexels.com/photos/1296265/pexels-photo-1296265.jpeg", 
"https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg",
"https://images.pexels.com/photos/122427/roll-the-dice-craps-board-game-points-122427.jpeg"];

function printPines(pin) {
    let card = document.createElement("article");
    let button = document.createElement("button");
    let imagePin = document.createElement("img");
    //let textSrc = document.createTextNode();

    for (var i = 0; i < pin.length; i++) {
        let textSrc = document.createTextNode(pin[i]);
        console.log(textSrc);
        imagePin.src= {textSrc};
        console.log(imagePin);
    }

    /* Anidar elementos */
    card.appendChild(imagePin);
    card.appendChild(button);
    let pinsContainer = document.getElementById("pins-container");
    pinsContainer.appendChild(card);
}

printPines(arrayPines);