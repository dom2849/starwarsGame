export default function UserInterfaceHelper(){
}

UserInterfaceHelper.prototype.clearContent = function(elementClassToClear){
    let element = document.querySelectorAll(`${elementClassToClear}`);
    element.textContent = '';
}

UserInterfaceHelper.prototype.addMessageContent = function(className, message){
    let messageElelement = document.querySelector(`${className}`);
    messageElelement.textContent = message;
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

UserInterfaceHelper.prototype.addCharacterContent = function(character, cardToAddTo){
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