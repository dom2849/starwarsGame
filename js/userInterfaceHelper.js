export default function UserInterfaceHelper(){
}

UserInterfaceHelper.prototype.clearCards = function(){
    let gameCards = document.querySelector('.game__cards');
    while (gameCards.firstChild){
        gameCards.removeChild(gameCards.firstChild);
    }
}

UserInterfaceHelper.prototype.addMessage = function(className, message){
    let messageElelement = document.createElement('h2');
    messageElelement.className = className;
    messageElelement.textContent = message;
    document.querySelector('.game').appendChild(messageElelement);
}

UserInterfaceHelper.prototype.removeElement = function(className){
    let element = document.querySelector(`.${className}`);
    if (element){
        element.remove();
    }
}

UserInterfaceHelper.prototype.addSpinner = function(className){
    let spinner = document.createElement('div');
    spinner.className = className
    document.querySelector('body').appendChild(spinner);
}

UserInterfaceHelper.prototype.displayCharacters = function(humanCharacter, computerCharacter){
    let gameCards = document.querySelector('.game__cards');
    
    let humanCardElement = createCard(humanCharacter);
    let computerCardElement = createCard(computerCharacter);
    gameCards.appendChild(humanCardElement);
    gameCards.appendChild(computerCardElement);
    
}


function createCard(character){
    let gameCard = document.createElement('ul');
    gameCard.className = 'game__card';
    let weight = (character.mass === 'unknown') ?  'unknown' : `${character.mass} kg`;
    let height = (character.height === 'unknown') ?  'unknown' : `${character.height} cm`;
    gameCard.innerHTML = `<li>Character: ${character.name} </li>
                         <li class = emphasis>Height: ${height} </li>
                         <li>Weight: ${weight} </li>
                         <li>Hair Color: ${character.hair_color} </li>`;

    return gameCard;
}