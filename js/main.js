import StarwarsAPI from './starwarsAPI.js';
import UserInterfaceHelper from './userInterfaceHelper.js';

const numberOfStarwarsCharacters = 87;

let starwarsAPI = new StarwarsAPI();
let uiHelper = new UserInterfaceHelper();


document.getElementById('play-round').addEventListener('click', playRound);

function playRound(){
    uiHelper.clearCards();
    let humanCardNumber = generateRandomCharacterNumber();
    let computerCardNumber = generateRandomCharacterNumber();
    while (humanCardNumber === computerCardNumber){
        computerCardNumber = generateRandomCharacterNumber();
    }
    uiHelper.addSpinner('spinner');
    starwarsAPI.getCharacters(humanCardNumber, computerCardNumber, recieveCharacters);
}


function recieveCharacters(error, humanCharacter, computerCharacter){
    uiHelper.removeSpinner('spinner');    
    if (error) {
        console.log(error);
        return;
    }
    uiHelper.displayCharacters(humanCharacter, computerCharacter);
}


function generateRandomCharacterNumber(){
    return Math.floor(Math.random() * numberOfStarwarsCharacters + 1);
}






