export const prepareContainer = () => {
  // * get container
  const container = document.querySelector('.container');

  // * create dinosaur div
  const dinosaur = document.createElement('div');
  dinosaur.classList.add('dinosaur');
  
  container.appendChild(dinosaur);
};
