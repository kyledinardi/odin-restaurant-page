import restaurantImage from './restaurant.jpg';

(function() {
  const content = document.querySelector('#content');
  const image = document.createElement('img');
  const heading = document.createElement('h1');
  const paragraph = document.createElement('p');
  image.src = restaurantImage;
  image.alt = 'Kinoplex Dine-in';
  heading.textContent = 'Kinoplex Dine-in';
  paragraph.textContent = 'Best crab legs in the west!';
  content.appendChild(image);
  content.appendChild(heading);
  content.appendChild(paragraph);
})();