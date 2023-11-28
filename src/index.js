import './style.css';
import pageLoad from './js/page-load.js';
import homeLoad from './js/home.js';
import menuLoad from './js/menu.js';
import contactLoad from './js/contact.js';

pageLoad();
contactLoad();

const homeBtn = document.querySelector('.home-button');
const menuBtn = document.querySelector('.menu-button');
const contactBtn = document.querySelector('.contact-button');
 
homeBtn.addEventListener('click', homeLoad);
menuBtn.addEventListener('click', menuLoad);
contactBtn.addEventListener('click', contactLoad);