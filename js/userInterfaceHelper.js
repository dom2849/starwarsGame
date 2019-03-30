export default function UserInterfaceHelper(){
}

UserInterfaceHelper.prototype.clearCards = function(){
    let gameCards = document.querySelectorAll('.card');
    for (let i = 0; i<gameCards.length; i++){
        gameCards[i].remove();
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

UserInterfaceHelper.prototype.addCharacter = function(character, cardClassList){
    let gameRound = document.querySelector('.game__round');
    let card = createCard(character, cardClassList);
    gameRound.append(card);
}

function createCard(character, cardClassList){
    let gameCard = document.createElement('ul');
    gameCard.className = cardClassList;
    let weight = (character.mass === 'unknown') ?  'unknown' : `${character.mass} kg`;
    let height = (character.height === 'unknown') ?  'unknown' : `${character.height} cm`;
    gameCard.innerHTML = `<li>Character: ${character.name} </li>
                         <li class = emphasis>Height: ${height} </li>
                         <li>Weight: ${weight} </li>
                         <li>Hair Color: ${character.hair_color} </li>`;
    return gameCard;
}