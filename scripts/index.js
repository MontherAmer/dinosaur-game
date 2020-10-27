require('../styles/index.css');
window.$ = require('jquery');

const { prepareContainer } = require('./pre_start');

const { moveDinosaur, jumb, bend, stopBending, clrearDinosaurInterval } = require('./handle_dinosaur');
const { createBarriers, clearBarrierInterval } = require('./handle_barriers');
const { startView } = require('./handle_view');
const { handleGameOver, stopAnimations } = require('./handle_game_over');

// * document loaded
document.addEventListener('DOMContentLoaded', () => {
  let isGameOn = false;
  // * get container and add element to it
  prepareContainer();

  const startGame = () => {
    isGameOn = true;
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
      isGameOn = false;
    });
  };

  document.addEventListener('keydown', (e) => {
    !isGameOn ? startGame() : e.key === 'ArrowUp' ? jumb() : e.key === 'ArrowDown' ? bend() : console.log('whiat');
  });

  // * track the arrow down to check when user stop pressing the key
  document.addEventListener('keyup', (e) => {
    e.key === 'ArrowDown' ? stopBending() : null;
  });
});
