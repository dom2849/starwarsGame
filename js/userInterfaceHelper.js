export default function UserInterfaceHelper(){
}

UserInterfaceHelper.prototype.clearCards = function(){
    let gameCards = document.querySelectorAll('.card');
    for (let i = 0; i<gameCards.length; i++){
        gameCards[i].textContent = '';
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

UserInterfaceHelper.prototype.addCharacter = function(character, cardToAddTo){
    let gameCard = document.querySelector(`${cardToAddTo}`);
    let cardContent = createCardContent(character, cardToAddTo);
    gameCard.innerHTML = cardContent;
}

function createCardContent(character){
    let weight = (character.mass === 'unknown') ?  'unknown' : `${character.mass} kg`;
    let height = (character.height === 'unknown') ?  'unknown' : `${character.height} cm`;
    let cardContent = `<li>Character: ${character.name} </li>
                         <li class = emphasis>Height: ${height} </li>
                         <li>Weight: ${weight} </li>
                         <li>Hair Color: ${character.hair_color} </li>`;
    return cardContent;
}