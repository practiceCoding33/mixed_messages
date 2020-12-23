const btn = document.querySelector('#btn');
const msg = document.querySelector('#message');

const beginning = ['A turtle', 'Willie Nelson', 'A goat', 'Ferris Bueller', 'A sumo wrestler'];
const middle = ['danced all around', 'did cartwheels on', 'wrote a poem about', 'walked on', 'spun in circles on', 'swore to never dance on'];
const end = ['the street.', 'the stairs.', 'the roof.', 'a glass bridge.', 'a car.'];

function randomNum(arr) {
    let random = Math.floor(Math.random() * arr.length);
    return random;
}

btn.addEventListener('click', () => {
    msg.textContent = `${beginning[randomNum(beginning)]} ${middle[randomNum(middle)]} ${end[randomNum(end)]}`;
});