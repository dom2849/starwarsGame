import StarwarsAPI from './starwarsAPI.js';
import UserInterfaceHelper from './userInterfaceHelper.js';

const numberOfStarwarsCharacters = 87;

const starwarsAPI = new StarwarsAPI();
const uiHelper = new UserInterfaceHelper();


const btnStart = document.getElementById('play-round');
btnStart.addEventListener('click', playRound);

function playRound() {
    setUpUserInterfaceForBeginningOfRound();
    let cardNumbers = getCardNumbers();
    let humanCharacter;

    starwarsAPI.getCharacter(cardNumbers[0])
        .then(character => {
            humanCharacter = character;
            return starwarsAPI.getCharacter(cardNumbers[1]);
        })
        .then(computerCharacter => {
            addCharacters(humanCharacter, computerCharacter);
            determineWinner(humanCharacter, computerCharacter);
        })
        .catch(error => handleError(error))
        .finally(() => cleanUpUserInterfaceForEndOfRound());
}

function getCardNumbers() {
    let humanCardNumber = generateRandomCharacterNumber();
    let computerCardNumber = generateRandomCharacterNumber();
    while (humanCardNumber === computerCardNumber) {
        computerCardNumber = generateRandomCharacterNumber();
    }
    return [humanCardNumber, computerCardNumber];
}

function handleError(error) {
    console.log(error);
    uiHelper.addMessageContent('.message', 'Something went wrong, please try again later.');
}

function setUpUserInterfaceForBeginningOfRound() {
    uiHelper.addSpinner('spinner');
    btnStart.disabled = true;
    uiHelper.clearContent('message');
}

function cleanUpUserInterfaceForEndOfRound() {
    uiHelper.removeElement('spinner');
    btnStart.disabled = false;
}

function addCharacters(humanCharacter, computerCharacter) {
    uiHelper.addCharacterContent(humanCharacter, '.card--human');
    uiHelper.addCharacterContent(computerCharacter, '.card--computer');
}

function determineWinner(humanCharacter, computerCharacter){
    let winner = getWinner(humanCharacter, computerCharacter);
    uiHelper.addMessageContent('.message', winner);
}

function getWinner(humanCharacter, computerCharacter) {
    let humanCharacterHeight = Number(humanCharacter.height);
    let computerCharacterHeight = Number(computerCharacter.height);

    if (isNaN(humanCharacterHeight) && isNaN(computerCharacterHeight)) return 'Draw!';
    if (isNaN(humanCharacterHeight)) return 'Computer wins!';
    if (isNaN(computerCharacterHeight)) return 'You win!';
    if (humanCharacterHeight === computerCharacterHeight) return 'Draw!'
    return (humanCharacterHeight > computerCharacterHeight) ? 'You win!' : 'Computer wins!';
}

function generateRandomCharacterNumber() {
    return Math.floor(Math.random() * numberOfStarwarsCharacters + 1);
}

