export default function StarwarsAPI() {
    this.httpsRequest = new XMLHttpRequest();
}

StarwarsAPI.prototype.getCharacters = function (card1Number, card2Number, callback) {
    let self = this;
    this.httpsRequest.open('GET', `https://swapi.co/api/people/${card1Number}/`, true);
    this.httpsRequest.onload = function () {
        if (self.httpsRequest.status !== 200) {
            callback('Error in sending request');
            return;
        }
        let card1 = JSON.parse(self.httpsRequest.responseText);

        self.httpsRequest.open('GET', `https://swapi.co/api/people/${card2Number}/`, callback, true);

        self.httpsRequest.onload = function(){
            if (self.httpsRequest.status !== 200) {
                callback('Error in sending request');
                return;
            }
            let card2 = JSON.parse(self.httpsRequest.responseText);
            callback(null, card1, card2);
        }
        self.httpsRequest.send();
    }
    this.httpsRequest.send();
}