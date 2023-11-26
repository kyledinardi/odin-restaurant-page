const pageLoad = () => {
  const content = document.querySelector('#content');
  const nav = document.createElement('div');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  const footer = document.createElement('div');
  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contach';
  footer.innerHTML = 
    'Photo by <a href="https://unsplash.com/@ninjason">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA">Unsplash</a>'
  nav.classList.add('nav');
  homeBtn.classList.add('home-button');
  menuBtn.classList.add('menu-button');
  contactBtn.classList.add('contact-button');
  footer.classList.add('footer');
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  document.body.insertBefore(nav, content);
  document.body.appendChild(footer);
};

export default pageLoad;