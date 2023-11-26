const homeLoad = () => {
  const content = document.querySelector('#content');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');
  heading.textContent = 'Kinoplex Dine-in';
  paragraph.textContent = 'Best crab legs in the west!';
  content.appendChild(heading);
  content.appendChild(paragraph);
};

export default homeLoad;