export default function StarwarsAPI() {
    this.httpsRequest = new XMLHttpRequest();
}

StarwarsAPI.prototype.getCharacter = function (cardNumber) {
    let self = this;
    return new Promise((resolve, reject) => {
        self.httpsRequest.open('GET', `https://swapi.co/api/people/${cardNumber}/`, true);
        self.httpsRequest.onload = function () {
            if (self.httpsRequest.status !== 200) {
                reject('error in sending request')
            }
            resolve(JSON.parse(self.httpsRequest.responseText));
        }
        self.httpsRequest.send();
    })
}