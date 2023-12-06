import { checkGuess, clearInput } from "./app.js";

document.addEventListener('DOMContentLoaded', function () {

  const KEYS1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const KEYS2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Enter'];
  const KEYS3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'];

  makeKeys(KEYS1, 1);
  makeKeys(KEYS2, 2);
  makeKeys(KEYS3, 3);

  });

  function makeKeys(array, row) {
  
    const USER_INPUT = document.getElementById('inputField');

    let keyboard = document.getElementById(`keyboard${row}`);
  
    function handleKeyPress(key) {
      USER_INPUT.value += key;
    };
  
    function handleBackspace() {
      USER_INPUT.value = USER_INPUT.value.slice(0, -1);
    };
  
    array.forEach(key => {
      const button = document.createElement('button');
      button.textContent = key;
      button.setAttribute("id", `key${key}`);
      button.setAttribute("class", "key");
      button.addEventListener('click', function() {
        if (key === 'Backspace') {
          handleBackspace();
        }
        else if (key === 'Enter') {
          checkGuess();
          clearInput();
        }
        else {
          handleKeyPress(key);
        }
      });
      keyboard.appendChild(button);
  });
  };


