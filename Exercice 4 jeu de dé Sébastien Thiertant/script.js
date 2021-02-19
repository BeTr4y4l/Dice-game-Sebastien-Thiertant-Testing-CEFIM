let dice = 0;
let max = 6;
let numberTry = 0;
let numberGame = 0;
let easter = 0;
let hardMode = Boolean("false");
let easyMode = Boolean("true");

const rulesContent = document.querySelector(".containerRules");
const numberGuessing = document.getElementById("guessInput");
const containerTitleContent = document.querySelector(".containerTitle");
const containerMidContent = document.querySelector(".containerMid");
const bodyBlock = document.querySelector("body");
const diceButton = document.querySelector(".buttonDice");
const guessingContent = document.querySelector(".containerGuess");
const display = document.querySelector(".displayPlayer");
const launchDisplay = document.querySelector(".launch");

launchDisplay.textContent = "Lance le dé !";
display.textContent = "Lance le dé trouillard(e) !";

// eventlistener du clic sur le bouton dé quand lance le dé et définit la face à deviner.

diceButton.addEventListener("click", function() {
    guessingContent.classList.remove("hide");
    launchDisplay.textContent = "Le dé a été lancé !";
    display.textContent = "Alors, sur quelle face le dé est-il tombé ?";
    dice = Math.floor(Math.random() * Math.floor(max) + 1);
    bodyBlock.classList.remove("win");
    numberTry = 0;
});

// Fonction d'écoute de la touche entrée pour permettre l'envoi de l'input.

let keyboardArray = [];

bodyBlock.addEventListener("keydown", function(keyboard) {
    keyboardArray.push(keyboard.key);
    if (keyboardArray.includes("Enter") == true) {
        compare();
        keyboardArray = []; // reset de l'array pour ne pas conserver la valeur Enter dans celui-ci.
    } else if (keyboardArray.length > 14) {
        keyboardArray = []; // reset de l'array pour ne pas conserver plus de 15 valeurs dans celui-ci et ne pas surcharger les données écoutées.
    }
});

// Fonction pour comparer le nombre choisi avec celui à deviner.

function compare() {
    bodyBlock.classList.remove("win");
    const testValue = numberGuessing.value;
    numberTry++;
    if (dice === 0) {
        display.textContent = "Lance le dé. Sauf si tu essayes de me glitcher ?! Qui sait, ça pourrait marcher... !";
        easter++;
        if (easter == 5) {
            document.body.style.backgroundImage = "url(https://wallpapercave.com/wp/h9RGtqT.jpg)";
            display.textContent = "Tell me, what I am afraid of ?";
        }
    } else if (testValue > max || testValue < 1) {
        display.textContent = `Choisit un nombre entre 1 et ${max} !`;
    } else if (testValue > dice) {
        display.textContent = `C'est moins que ${testValue}`;
    } else if (testValue < dice) {
        display.textContent = `C'est plus que ${testValue}`;
    } else if (testValue == dice && numberTry !== 1) {
        display.textContent = `Bravo ! Tu as trouvé le nombre ${dice} en ${numberTry} tentatives. Retente ta chance.`;
        bodyBlock.classList.add("win");
        launchDisplay.textContent = "Lance le dé !";
        numberGame++;
        displayResults();
        setRecord();
        numberTry = 0;
        dice = 0;
    } else {
        display.textContent = `Tu as trouvé le nombre ${dice} en ${numberTry} tentative ! Impressionant ! Auras-tu le cran de relancer le dé ?`;
        bodyBlock.classList.add("win");
        launchDisplay.textContent = "Lance le dé !";
        numberGame++;
        displayResults()
        setRecord();
        numberTry = 0;
        dice = 0;
    }
}

// fonction d'établissement du record de nombre d'essai minimal de l'intégralité de la session de jeu.

const recordContent = document.querySelector(".record");

let maxTry = max;
let record = max;

function setRecord() {
    if (numberTry < maxTry && record >= numberTry) {
        record = numberTry;
        if (numberTry == 1) {
            recordContent.textContent = `Ton record est de ${record} tentative. Quel boss !`;
        } else {
            recordContent.textContent = `Ton record est de ${record} tentatives`;
        }
    }
}

// fonction d'affichage de l'historique des parties en les stockant dans deux arrays.

const gamesContent = document.querySelector(".games");
const triesContent = document.querySelector(".tries");

let tryArray = [];
let gamesArray = [];

function displayResults() {
    gamesArray.push(numberGame);
    tryArray.push(numberTry);
    gamesContent.textContent = `Partie ${gamesArray.join("/     Partie    ")}`;
    triesContent.textContent = `Essai(s) ${tryArray.join("/     Essai(s)    ")}`;
    if (tryArray.length > 3 && gamesArray.length > 3) {
        tryArray = [];
        gamesArray = [];
    }
}

// Fonction de définition de la difficulté via le Hard mode caché et retour au mode facile


let difficulty = [];

bodyBlock.addEventListener("keydown", function(keyboard) {
    difficulty.push(keyboard.key);
    if (difficulty.length >= 4) {
        if (difficulty.slice(0, 4).join("") == "hard") {
            console.log("Bienvenue en Hard Mode. Tu joues dorénavant avec deux dés.");
            max = 12;
            hardMode = new Boolean("true");
            easyMode = new Boolean("false");
            numberGuessing.setAttribute("max", 12);
            difficulty.splice(0);
        } else if (difficulty.slice(0, 4).join("") == "easy") {
            console.log("De retour en mode facile ? Le mode difficile était trop dur ? Tu joues avec un seul dé.");
            max = 6;
            hardMode = new Boolean("false");
            easyMode = new Boolean("true");
            numberGuessing.setAttribute("max", 6);
            difficulty.splice(0);
        } else {
            difficulty.splice(0);
        }
    }
});



// easter plus bas !






















// easter

let easterArray = [];

bodyBlock.addEventListener("keydown", function(keyboard) {
    easterArray.push(keyboard.key);
    let indexEasterB = easterArray.indexOf("b");

    if (easterArray.length > 14) {
        easterArray = [];
    }
    if (easterArray[indexEasterB + 1] == "a") {
        const indexEasterA = easterArray.indexOf("a");
        if (easterArray[indexEasterA + 1] == "t") {
            easterArray = [];
            numberGuessing.classList.add("easter");
            diceButton.classList.add("easter");
            guessingContent.classList.add("easter");
            display.classList.add("easter");
            containerTitleContent.classList.add("easter");
            containerMidContent.classList.add("easter");
            bodyBlock.style.backgroundImage =
                "url(https://wallpaperaccess.com/full/2041702.jpg)";
            alert("Why do we fall ?");
        }
    }
});