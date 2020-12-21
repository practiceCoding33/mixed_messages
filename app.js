const btn = document.querySelector('#btn');
const msg = document.querySelector('#message');

const beginning = ['A turtle', 'Willie Nelson', 'Ferris Bueller', 'A goat'];
const middle = ['danced all around', 'did cartwheels on', 'wrote a poem about', 'walked slowly down'];
const end = ['the street.', 'the stairs.', 'the roof.', 'a glass bridge.'];

function randomNum(arr) {
    let random = Math.floor(Math.random() * arr.length);
    return random;
}

btn.addEventListener('click', () => {
    msg.textContent = `${beginning[randomNum(beginning)]} ${middle[randomNum(middle)]} ${end[randomNum(end)]}`;
});