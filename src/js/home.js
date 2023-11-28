const homeLoad = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  p1.textContent = 'Best crab legs in the west!';
  p2.textContent = 'A quality full-course meal before or after the show.';
  
  content.appendChild(p1);
  content.appendChild(p2);
};

export default homeLoad;