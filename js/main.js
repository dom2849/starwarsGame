import StarwarsAPI from './starwarsAPI.js';
import UserInterfaceHelper from './userInterfaceHelper.js';

const numberOfStarwarsCharacters = 2;

let starwarsAPI = new StarwarsAPI();
let uiHelper = new UserInterfaceHelper();


startRound();
function startRound(){

    uiHelper.clearCards();
    let humanCardNumber = generateRandomCharacterNumber();
    let computerCardNumber = generateRandomCharacterNumber();
    while (humanCardNumber === computerCardNumber){
        computerCardNumber = generateRandomCharacterNumber();
    }
    starwarsAPI.getCharacters(humanCardNumber, computerCardNumber, recieveCharacters)
}


function recieveCharacters(error, humanCharacter, computerCharacter){
    if (error) {
        console.log(error);
        return;
    }
    uiHelper.displayCharacters(humanCharacter, computerCharacter);
}


function generateRandomCharacterNumber(){
    return Math.floor(Math.random() * numberOfStarwarsCharacters + 1);
}






