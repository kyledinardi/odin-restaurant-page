import './style.css';
import pageLoad from './page-load.js';
import homeLoad from './home.js';
import menuLoad from './menu.js';
import contactLoad from './contact.js';

pageLoad();
homeLoad();

const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');
 
homeBtn.addEventListener('click', homeLoad);
menuBtn.addEventListener('click', menuLoad);
contactBtn.addEventListener('click', contactLoad);