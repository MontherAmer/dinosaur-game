require('../styles/index.css');
window.$ = require('jquery');

const { prepareContainer } = require('./pre_start');

const { moveDinosaur, jumb, bend,stopBending } = require('./handle_dinosaur');
const { createBarriers } = require('./handle_barriers');
const { startView } = require('./handle_view');

// * document loaded
document.addEventListener('DOMContentLoaded', () => {
  let isGameOn = false;
  // * get container and add element to it
  prepareContainer();

  const startGame = () => {
    isGameOn = !isGameOn;
    moveDinosaur();
    startView();
    createBarriers();
  };

  document.addEventListener('keydown', (e) => {
    !isGameOn ? startGame() : e.key === 'ArrowUp' ? jumb() : e.key === 'ArrowDown' ? bend() : console.log('whiat');
  });

  // * track the arrow down to check when user stop pressing the key
  document.addEventListener('keyup', (e) => {
    e.key === 'ArrowDown' ? stopBending() : null;
  });
});
