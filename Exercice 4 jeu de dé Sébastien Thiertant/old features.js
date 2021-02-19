// première version du easter avec déclenchement après l'indice. Contrairement à la version finale qui se déclenche à n'importe quel moment de la naviguation.

const easterArray = [];
bodyBlock.addEventListener("keydown", function(keyboard) {
    easterArray.push(keyboard.key);
    if (easterBoolean == true && easterArray.join("") === "bat") {
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
});

// test d'amélioration de la fonction de détection des strings dans les eventsListener pour déclenchement du hardmode ou du code secret de destruction
// ne fonctionne pas actuellement

let difficulty = [];

bodyBlock.addEventListener("keydown", function(keyboard) {
    difficulty.push(keyboard.key);
    console.log(difficulty);
    let hardCode = difficulty.slice(0, 4).join("");
    if (hardCode == "hard") {
        alert("gagné mon reuf.");
        difficulty = [];
    } else if (difficulty.length > 4) {
        difficulty = [];
    }
});


// fonction d'écoute du texte permettant le switch de mode de difficulté pas opti

let difficulty = [];

bodyBlock.addEventListener("keydown", function(keyboard) {
    difficulty.push(keyboard.key);

    let indexDifficultyH = difficulty.indexOf("h");
    let indexDifficultyE = difficulty.indexOf("e");

    // hard mode

    if (difficulty.includes("h") == true) {
        if (difficulty[indexDifficultyH + 1] == "a") {
            const indexDifficultyA = difficulty.indexOf("a");
            if (difficulty[indexDifficultyA + 1] == "r") {
                const indexDifficultyR = difficulty.indexOf("r");
                if (difficulty[indexDifficultyR + 1] == "d") {
                    console.log("Bienvenue en Hard Mode. Tu joues dorénavant avec deux dés.");
                    max = 12;
                    hardMode = new Boolean("true");
                    easyMode = new Boolean("false");
                    numberGuessing.setAttribute("max", 12);
                    difficulty = [];
                }
            }
        }

        // easy mode

    } else if (difficulty.includes("e") == true) {
        if (difficulty[indexDifficultyE + 1] == "a") {
            const indexDifficultyEasyA = difficulty.indexOf("a");
            if (difficulty[indexDifficultyEasyA + 1] == "s") {
                const indexDifficultyS = difficulty.indexOf("s");
                if (difficulty[indexDifficultyS + 1] == "y") {
                    console.log("De retour en mode facile ? Le mode difficile était trop dur ? Tu joues avec un seul dé.");
                    max = 6;
                    hardMode = new Boolean("false");
                    easyMode = new Boolean("true");
                    numberGuessing.setAttribute("max", 6);
                    difficulty = [];
                } else {
                    console.log("dog");
                }
            } else {
                console.log("dog");
            }
        } else {
            console.log("dog");
        }

        // reset de l'array si suite non correcte

    } else {
        console.log("dog");
    }
});