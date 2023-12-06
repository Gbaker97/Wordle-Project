import { WORDS } from "./word_bank.js";
import { animateBox } from "./animation.js";

const USER_INPUT = document.getElementById('inputField');
const ANSWER_POPUP = document.getElementById('word_display');
const POPUP = document.getElementById('popup');
const YES_BTN = document.getElementById('yesBtn');
const NO_BTN = document.getElementById('noBtn');
const TOTAL_GUESSES = 6;

let guessNumber = 1;
  
let numOfWords = WORDS.length;
let correctWord = WORDS[Math.floor(Math.random() * numOfWords)].toUpperCase();

const playAgain = () => {

  POPUP.classList.remove('invisible');

  YES_BTN.addEventListener('click', () => {
    window.location.reload();
  });

  NO_BTN.addEventListener('click', () => {
    POPUP.classList.add('invisible');
  });
};

export const checkGuess = () => {

  let playerGuess = USER_INPUT.value.toUpperCase();
  let correctLetters = 0;
  let l = 0;

  if (playerGuess.length != 5) {
    alert("Please enter a 5 letter word.");
    clearInput();
    return;
  }

  for (const letter of playerGuess) {
    l += 1;
    let box = document.getElementById(`g${guessNumber}_${l}`);
    box.textContent = letter;
    animateBox(box);
    if (letter == correctWord[l-1]) {
      box.classList.toggle('correct');
      markKeyboard(letter, 'rgb(20, 183, 20)');
      correctLetters += 1;
    }
    else if (correctWord.includes(letter)) {
      box.classList.toggle('misplaced');
      markKeyboard(letter, 'orange');
    }
    else {
      box.classList.toggle('incorrect');
      markKeyboard(letter, 'rgb(128, 128, 128)');
    }
  }
  guessNumber += 1;

  if (correctLetters == 5 || guessNumber == 7) {
    ANSWER_POPUP.textContent = `The correct word was ${correctWord}.`;
    playAgain();
  }
};

export const clearInput = () => {
  USER_INPUT.value = "";
};

function markKeyboard (letter, color) {
  let key = document.getElementById(`key${letter}`);
  key.style.background = color;
};
