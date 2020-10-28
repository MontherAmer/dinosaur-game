let barrierInterval;
const container = document.querySelector('.container');
const barrier = document.createElement('div');
let acceleration = 0;

const moveBarrier = () => {
  container.appendChild(barrier);
  let barrierNumber = Math.floor(Math.random() * Math.floor(7)) + 1;
  barrier.classList.remove('barrier1', 'barrier2', 'barrier3', 'barrier4', 'barrier5', 'barrier6', 'barrier7');
  barrier.classList.add('barrier', `barrier${barrierNumber}`);
};

export const createBarriers = (_time) => {
  let count = 0;
  moveBarrier();
  barrierInterval = barrierInterval = setInterval(() => {
    count++;
    count % 5 === 0
      ? (clearInterval(barrierInterval), createBarriers(_time - (Math.floor(Math.random() * (100 - 90 + 1)) + 90)))
      : moveBarrier();
    console.log('_time  ', _time);
  }, _time);
};

export const clearBarrierInterval = () => {
  clearInterval(barrierInterval);
};
