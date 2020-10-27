export const startView = () => {
  const container = document.querySelector('.container'),
    ground = document.createElement('div'),
    ground2 = document.createElement('div'),
    cloud1 = document.createElement('div'),
    cloud2 = document.createElement('div'),
    cloud3 = document.createElement('div');

  cloud1.classList.add('cloud', 'move-cloud-1');
  cloud2.classList.add('cloud', 'move-cloud-2');
  cloud3.classList.add('cloud', 'move-cloud-3');
  ground.classList.add('ground');
  ground2.classList.add('ground2');

  container.appendChild(ground);
  container.appendChild(ground2);
  container.appendChild(cloud1);
  container.appendChild(cloud2);
  container.appendChild(cloud3);
};
