require('../styles/index.css');
window.$ = require('jquery');


const { startView } = require('./handle_view');
const { prepareContainer } = require('./pre_start');
const { startCounter, stopCounter } = require('./handle_counter');
const { createBarriers, clearBarrierInterval } = require('./handle_barriers');
const { handleGameOver, stopAnimations, showGameOver } = require('./handle_game_over');
const { moveDinosaur, jumb, bend, stopBending, clrearDinosaurInterval } = require('./handle_dinosaur');

// * document loaded
document.addEventListener('DOMContentLoaded', () => {
  let isGameOn = false;
  let firstGame = true;
  // * get container and add element to it
  prepareContainer();

  const startGame = () => {
    isGameOn = true;
    startCounter();
    moveDinosaur();
    startView();
    createBarriers();
    handleGameOver((data) => {
      console.log(data);
      // * stop all animations
      stopAnimations();
      // * stop dinosaur moving and add dinosaur die image
      clrearDinosaurInterval();
      // * stop the barrier interval (dont create new barrier)
      clearBarrierInterval();
      // * stop the counter
      stopCounter();
      showGameOver();
      firstGame = false;
      isGameOn = false;
    });
  };

  document.addEventListener('keydown', (e) => {
    !isGameOn
      ? firstGame
        ? startGame()
        : location.reload()
      : e.key === 'ArrowUp'
      ? jumb()
      : e.key === 'ArrowDown'
      ? bend()
      : console.log('whiat');
  });

  // * track the arrow down to check when user stop pressing the key
  document.addEventListener('keyup', (e) => {
    e.key === 'ArrowDown' ? stopBending() : null;
  });
});
