let barrierInterval;
const container = document.querySelector('.container');
const barrier = document.createElement('div');

const moveBarrier = () => {
  container.appendChild(barrier);
  let barrierNumber = Math.floor(Math.random() * Math.floor(7)) + 1;
  barrier.classList.remove('barrier1', 'barrier2', 'barrier3', 'barrier4', 'barrier5', 'barrier6', 'barrier7');
  barrier.classList.add('barrier', `barrier${barrierNumber}`);
};

export const createBarriers = () => {
  moveBarrier();
  barrierInterval = barrierInterval = setInterval(() => {
    moveBarrier();
  }, 3700);
};

export const clearBarrierInterval = () => {
  clearInterval(barrierInterval);
};
