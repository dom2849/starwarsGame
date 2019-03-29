export default function UserInterfaceHelper(){
}

UserInterfaceHelper.prototype.clearCards = function(){
    let gameCards = document.querySelector('.game__cards');
    while (gameCards.firstChild){
        gameCards.removeChild(gameCards.firstChild);
    }
}

UserInterfaceHelper.prototype.displayCharacters = function(humanCharacter, computerCharacter){
    let gameCards = document.querySelector('.game__cards');
    
    let humanCardElement = createCard(humanCharacter);
    let computerCardElement = createCard(computerCharacter);
    gameCards.appendChild(humanCardElement);
    gameCards.appendChild(computerCardElement);
    
}

UserInterfaceHelper.prototype.addSpinner = function(className){
    let spinner = document.createElement('div');
    spinner.className = className
    document.querySelector('body').appendChild(spinner);
}

UserInterfaceHelper.prototype.removeSpinner = function(className){
    document.querySelector(`.${className}`).remove();
}

function createCard(character){
    let gameCard = document.createElement('ul');
    gameCard.className = 'game__card';

    gameCard.innerHTML = `<li>Character: ${character.name} </li>
                         <li class = emphasis>Height: ${character.height} cm </li>
                         <li>Weight: ${character.mass} kg </li>
                         <li>Hair Color: ${character.hair_color} </li>`;

    return gameCard;
}