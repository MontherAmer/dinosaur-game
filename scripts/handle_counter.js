let counterInterval;
let counter = 0;
let counterDiv = document.querySelector('.counter');
let topScoreDiv = document.querySelector('.top_score');

const displayOnScreen = (type, data) => {
  let numberOfZeros = (data + '').length;
  let str = '';
  for (let i = 0; i < 5 - numberOfZeros; i++) {
    str += 0;
  }
  str += data;
  type === 'C' ? (counterDiv.innerText = str) : (topScoreDiv.innerHTML = str);
};

export const startCounter = () => {
  let topScore = localStorage.getItem('DINOSAUR_TOP_SCORE') || 0;
  counterInterval = setInterval(() => {
    counter++;
    counter > topScore ? (topScore = counter) : null;
    displayOnScreen('C', counter);
    displayOnScreen('T', topScore);
  }, 70);
};

export const stopCounter = () => {
  // * stop the counter
  clearInterval(counterInterval);
  // * check the top score value and save the new one if there is new one
  let topScore = localStorage.getItem('DINOSAUR_TOP_SCORE');
  !topScore || topScore < counter ? localStorage.setItem('DINOSAUR_TOP_SCORE', counter) : null;
};
