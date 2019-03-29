import StarwarsAPI from './starwarsAPI.js';
import UserInterfaceHelper from './userInterfaceHelper.js';

const numberOfStarwarsCharacters = 87;

let starwarsAPI = new StarwarsAPI();
let uiHelper = new UserInterfaceHelper();


let btnStart = document.getElementById('play-round');
btnStart.addEventListener('click', playRound);

function playRound(){
    cleanUpGameFromPreviousRound();
    let humanCardNumber = generateRandomCharacterNumber();
    let computerCardNumber = generateRandomCharacterNumber();
    while (humanCardNumber === computerCardNumber){
        computerCardNumber = generateRandomCharacterNumber();
    }
    uiHelper.addSpinner('spinner');
    starwarsAPI.getCharacters(humanCardNumber, computerCardNumber, recieveCharacters);
}

function cleanUpGameFromPreviousRound(){
    btnStart.disabled = true;
    uiHelper.clearCards();
    uiHelper.removeElement('message');
}

function recieveCharacters(error, humanCharacter, computerCharacter){
    uiHelper.removeElement('spinner');    
    if (error) {
        console.log(error);
        uiHelper.addMessage('message', 'Something went wrong, please try again later.');
    }

    else{ 
        uiHelper.displayCharacters(humanCharacter, computerCharacter);
        let winner = getWinner(humanCharacter, computerCharacter);
        uiHelper.addMessage('message', winner);
    }

    btnStart.disabled = false;
}


function generateRandomCharacterNumber(){
    return Math.floor(Math.random() * numberOfStarwarsCharacters + 1);
}

function getWinner(humanCharacter, computerCharacter){
    let humanCharacterHeight = Number(humanCharacter.height);
    let computerCharacterHeight = Number(computerCharacter.height);

    if (isNaN(humanCharacterHeight) && isNaN(computerCharacterHeight)) return 'Draw!';
    if (isNaN(humanCharacterHeight)) return 'Computer wins!';
    if (isNaN(computerCharacterHeight)) return 'You win!';
    if (humanCharacterHeight === computerCharacterHeight) return 'Draw!'
    return (humanCharacterHeight > computerCharacterHeight) ? 'You win!' : 'Computer wins!';
}








