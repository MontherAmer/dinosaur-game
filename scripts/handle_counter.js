let counterInterval;
let counter = 0;
let counterDiv = document.querySelector('.counter');
let topScoreDiv = document.querySelector('.top_score');
let currentSpeed = 3.3;

const playPointsSound = () => {
  const pointAudio = document.getElementById('pointAudio');
  pointAudio.play();
};

const increaseSpeed = () => {
  const barrier = document.querySelector('.barrier');
  const ground = document.querySelector('.ground');
  const ground2 = document.querySelector('.ground2');
  currentSpeed = currentSpeed - .1;
  barrier.style.animationDuration = `${currentSpeed}s`;
  ground.style.animationDuration = `${currentSpeed}s`;
  ground2.style.animationDuration = `${currentSpeed}s`;
};

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
    counter % 100 === 0 ? (playPointsSound(), increaseSpeed()) : null;
  }, 70);
};

export const stopCounter = () => {
  // * stop the counter
  clearInterval(counterInterval);
  // * check the top score value and save the new one if there is new one
  let topScore = localStorage.getItem('DINOSAUR_TOP_SCORE');
  !topScore || topScore < counter ? localStorage.setItem('DINOSAUR_TOP_SCORE', counter) : null;
};
