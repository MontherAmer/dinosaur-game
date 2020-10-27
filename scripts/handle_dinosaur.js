let dinosaurInterval;
let dinosaurisBending;

const playJumbSound = () => {
  const jumbAudio = document.getElementById('jumbAudio');
  jumbAudio.play();
};

export const moveDinosaur = () => {
  const dinosaur = document.querySelector('.dinosaur');
  let interval = 1;
  dinosaurInterval = setInterval((i = 0) => {
    interval % 2 === 0
      ? (dinosaur.classList.remove('dinosaur_run2'), dinosaur.classList.add('dinosaur_run1'))
      : (dinosaur.classList.remove('dinosaur_run1'), dinosaur.classList.add('dinosaur_run2'));
    interval++;
  }, 100);
};

export const jumb = () => {
  const dinosaur = document.querySelector('.dinosaur');
  dinosaur.classList.add('dinosaur-jumb');
  playJumbSound();
  setTimeout(() => {
    dinosaur.classList.remove('dinosaur-jumb');
  }, 1100);
};

// * handle dinosaur bending the interval will not work without the dinosaurisBending value
export const bend = () => {
  if (!dinosaurisBending) {
    const dinosaur = document.querySelector('.dinosaur');
    dinosaurisBending = true;
    let interval = 1;
    dinosaur.classList.remove('dinosaur_run2', 'dinosaur_run1');
    clearInterval(dinosaurInterval);
    dinosaurInterval = setInterval((i = 0) => {
      interval % 2 === 0
        ? (dinosaur.classList.remove('dinosaur_bend2'), dinosaur.classList.add('dinosaur_bend1'))
        : (dinosaur.classList.remove('dinosaur_bend1'), dinosaur.classList.add('dinosaur_bend2'));
      interval++;
    }, 100);
  }
};

// * stop bending by removing the style and clear the interval
export const stopBending = () => {
  const dinosaur = document.querySelector('.dinosaur');
  dinosaurisBending = false;
  clearInterval(dinosaurInterval);
  let interval = 1;
  dinosaur.classList.remove('dinosaur_bend2', 'dinosaur_bend1');
  dinosaurInterval = setInterval((i = 0) => {
    interval % 2 === 0
      ? (dinosaur.classList.remove('dinosaur_run2'), dinosaur.classList.add('dinosaur_run1'))
      : (dinosaur.classList.remove('dinosaur_run1'), dinosaur.classList.add('dinosaur_run2'));
    interval++;
  }, 100);
};

export const clrearDinosaurInterval = () => {
  clearInterval(dinosaurInterval);
  const dinosaur = document.querySelector('.dinosaur');
  dinosaur.classList.remove('dinosaur_run1', 'dinosaur_run2', 'dinosaur_bend1', 'dinosaur_bend2');
  dinosaur.classList.add('dinosaur-die');
};
