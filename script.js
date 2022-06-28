// Selectors

const card = document.querySelector('.card');
const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

// Onload function

window.onload = () => {
  card.classList.add(generateRandomSuit());
  number.innerHTML = generateRandomNumber();
};

// Event listener

btn.addEventListener('click', (e) => {
  card.classList.remove(generateRandomSuit());
  card.classList.add(generateRandomSuit());
  number.innerHTML = generateRandomNumber();
});

// Functions

const generateRandomNumber = () => {
  const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];
  const indexNums = Math.floor(Math.random() * numbers.length);
  return numbers[indexNums];
};

const generateRandomSuit = () => {
  const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
  const indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
};
