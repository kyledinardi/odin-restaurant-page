const pageLoad = () => {
  const content = document.querySelector('#content');
  const heading = document.createElement('h1');
  const nav = document.createElement('div');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  const footer = document.createElement('div');

  heading.textContent = 'Kinoplex Dine-in';
  homeBtn.textContent = 'Home';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contact';
  footer.innerHTML = 
    'Photos from <a href="https://unsplash.com/">Unsplash</a>';
  
  heading.classList.add('logo');
  nav.classList.add('nav');
  homeBtn.classList.add('home-button');
  menuBtn.classList.add('menu-button');
  contactBtn.classList.add('contact-button');
  footer.classList.add('footer');
  
  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  document.body.insertBefore(heading, content);
  document.body.insertBefore(nav, content);
  document.body.appendChild(footer);
};

export default pageLoad;