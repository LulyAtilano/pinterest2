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
    for (var i = 0; i < pin.length;i++) {
        let pinsContainer = document.getElementById('pins-container');
        let card = document.createElement('article');
        let button = document.createElement('button');
        button.textContent= "...";
        let image = document.createElement("img");
        //card.appendData(textSrc);
        //let card = "<img class='pintCard' src='" + textSrc + "'/>";
        //let image = new Image();
        image.src = pin[i];
        card.appendChild(image);
        card.appendChild(button)
        //pinsContainer.appendChild(card)
        //console.log(pinsContainer.appendChild(card));
        console.log(card);
        //return card;
    }
    pinsContainer.appendChild(card);
    /*for (const prop in pin) {
        console.log("<img src='${pin[prop]}'/>");
        //return <img src='${pin[prop]}'/>;
    }*/
}

printPines(arrayPines);