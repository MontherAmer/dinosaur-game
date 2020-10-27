export const startView = () => {
  const dinosaur = document.querySelector('.dinosaur');
  const ground = document.createElement('div');
  const ground2 = document.createElement('div');
  ground.classList.add('ground');
  ground2.classList.add('ground2');

  dinosaur.appendChild(ground);
  dinosaur.appendChild(ground2);
};
