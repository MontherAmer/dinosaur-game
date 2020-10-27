export const handleGameOver = (test) => {
  const dinosaur = document.querySelector('.dinosaur');
  const barrier = document.querySelector('.barrier');
  setInterval(() => {
    var dBound = dinosaur.getBoundingClientRect();
    var bBound = barrier.getBoundingClientRect();
    let [dTop, dRight, dLeft, dBottom, bTop, bRight, bLeft, bBottom] = [
      dBound.top,
      dBound.right,
      dBound.left,
      dBound.bottom,
      bBound.top,
      bBound.right,
      bBound.left,
      bBound.bottom,
    ];

    let checkTopRight = dRight >= bLeft && dRight <= bRight && dTop <= bBottom && dTop >= bTop;

    let checkTopLeft = dTop <= bBottom && dTop >= bTop && dLeft >= bLeft && dLeft <= bRight;

    let checkBottomRight = dRight >= bLeft && dRight <= bRight && dBottom >= bTop && dBottom <= bBottom;

    // let checkBottomLeft = dLeft >= bLeft && dLeft <= bRight && dBottom >= bBound && dBottom >= bTop;
    if (checkBottomRight || checkTopLeft || checkTopRight) test(true);
  }, 1);
};

export const stopAnimations = () => {
  const dinosaur = document.querySelector('.dinosaur'),
    barrier = document.querySelector('.barrier'),
    ground = document.querySelector('.ground'),
    ground2 = document.querySelector('.ground2'),
    cloud1 = document.querySelector('.move-cloud-1'),
    cloud2 = document.querySelector('.move-cloud-2'),
    cloud3 = document.querySelector('.move-cloud-3');

  dinosaur.style.animationPlayState = 'paused';
  barrier.style.animationPlayState = 'paused';
  ground.style.animationPlayState = 'paused';
  ground2.style.animationPlayState = 'paused';
  cloud1.style.animationPlayState = 'paused';
  cloud2.style.animationPlayState = 'paused';
  cloud3.style.animationPlayState = 'paused';
};

export const showGameOver = () => {
  const gameOverImg = document.querySelector('.game_over');
  gameOverImg.style.display = 'block';
};

export const playDieSound = () => {
  const dieAudio = document.getElementById('dieAudio');
  dieAudio.play();
};
