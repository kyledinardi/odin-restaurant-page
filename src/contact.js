const contactLoad = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  const phoneNumber = document.createElement('p');
  const address = document.createElement('p');
  const email = document.createElement('p');

  phoneNumber.textContent = '+1 614-338-2666';
  address.innerHTML = '4019 James Martin Circle<br>Columbus, OH 43209';
  email.textContent = 'kinoplexdinein@kinoplex.com';

  content.appendChild(phoneNumber);
  content.appendChild(address);
  content.appendChild(email);
}

export default contactLoad;