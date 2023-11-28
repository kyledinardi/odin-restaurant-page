import cheeseburger from '../img/cheeseburger.jpg';
import crab from '../img/crab.jpg';
import pizza from '../img/pizza.jpg';
import cookies from '../img/cookies.jpg';
import frenchFries from '../img/fries.jpg';
import salad from '../img/salad.jpg';
import beer from '../img/beer.jpg';
import coffee from '../img/coffee.jpg';
import softDrinks from '../img/soda.jpg';


const menuLoad = () => {
  const content = document.querySelector('#content');
  content.textContent = '';
  
  const entreeHeading = document.createElement('h3');
  const sideHeading = document.createElement('h3');
  const beverageHeading = document.createElement('h3');
  const entreeWrapper = document.createElement('div');
  const sideWrapper = document.createElement('div');
  const beverageWrapper = document.createElement('div');
  const menuItems = [];

  for(let i = 0; i < 9; i++) {
    menuItems[i] = document.createElement('div');
    menuItems[i].classList.add('menu-item');
    menuItems[i][0] = document.createElement('img');
    menuItems[i][1] = document.createElement('p');
  }
  
  entreeWrapper.classList.add('menu-wrapper');
  sideWrapper.classList.add('menu-wrapper');
  beverageWrapper.classList.add('menu-wrapper');

  entreeHeading.textContent = 'Entrees';
  sideHeading.textContent = 'Sides';
  beverageHeading.textContent = 'Beverages';

  menuItems[0][0].src = cheeseburger;
  menuItems[0][1].textContent = 'Cheeseburger';
  menuItems[1][0].src = crab;
  menuItems[1][1].textContent = 'Crab';
  menuItems[2][0].src = pizza;
  menuItems[2][1].textContent = 'Pizza';
  menuItems[3][0].src = cookies;
  menuItems[3][1].textContent = 'Cookies';
  menuItems[4][0].src = frenchFries;
  menuItems[4][1].textContent = 'French Fries';
  menuItems[5][0].src = salad;
  menuItems[5][1].textContent = 'Salad';
  menuItems[6][0].src = beer;
  menuItems[6][1].textContent = 'Beer';
  menuItems[7][0].src = coffee;
  menuItems[7][1].textContent = 'Coffee';
  menuItems[8][0].src = softDrinks;
  menuItems[8][1].textContent = 'Soft Drinks';

  for(let i = 0; i < 9; i++) {
    menuItems[i].appendChild(menuItems[i][0]);
    menuItems[i].appendChild(menuItems[i][1]);
    switch(Math.floor(i / 3)) {
      case 0:
        entreeWrapper.appendChild(menuItems[i]);
        break;
      case 1:
        sideWrapper.appendChild(menuItems[i]);
        break;
      case 2:
        beverageWrapper.appendChild(menuItems[i]);
        break;
    }
  }

  content.appendChild(entreeHeading);
  content.appendChild(entreeWrapper);
  content.appendChild(sideHeading);
  content.appendChild(sideWrapper);
  content.appendChild(beverageHeading);
  content.appendChild(beverageWrapper);
}

export default menuLoad;