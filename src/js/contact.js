import phoneSVG from '../svg/phone.svg';
import addressSVG from '../svg/map-marker.svg';
import emailSVG from '../svg/email.svg';

const contactLoad = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  const gridWrapper = document.createElement('div');
  const phoneIcon = document.createElement('img');
  const addressIcon = document.createElement('img');
  const emailIcon = document.createElement('img');
  const phoneNumber = document.createElement('p');
  const address = document.createElement('p');
  const email = document.createElement('p');

  gridWrapper.classList.add('wrapper');
  phoneIcon.classList.add('svg');
  addressIcon.classList.add('svg');
  emailIcon.classList.add('svg');

  phoneIcon.src = phoneSVG;
  addressIcon.src = addressSVG;
  emailIcon.src = emailSVG;
  phoneNumber.textContent = '+1 614-338-2666';
  address.innerHTML = '4019 James Martin Circle<br>Columbus, OH 43209';
  email.textContent = 'kinoplexdinein@kinoplex.com';

  gridWrapper.appendChild(phoneIcon);
  gridWrapper.appendChild(phoneNumber);
  gridWrapper.appendChild(addressIcon);
  gridWrapper.appendChild(address);
  gridWrapper.appendChild(emailIcon);
  gridWrapper.appendChild(email);

  content.appendChild(gridWrapper);
}

export default contactLoad;