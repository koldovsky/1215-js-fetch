const title = document.querySelector('.header__title');

const greetings = [
    'Hello!',
    'HI',
    'Welcome',
    'Вітаю!',
    'Привіт!',
    'Добрий день!'
]

function getRandomEl(arr) {
    return arr[ Math.floor(Math.random() * arr.length) ];
}

title.innerText = getRandomEl(greetings);
// title.style.color = 'red';
