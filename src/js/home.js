const homeLoad = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  const para = document.createElement('p');
  const quote = document.createElement('blockquote');
  const attribution = document.createElement('span');

  para.innerHTML = 'A quality meal before or after the show.<br><br>';
  quote.textContent = '"Best crab legs in the west!"';
  attribution.textContent = ' - Robert K'
  
  content.appendChild(para);
  content.appendChild(quote);
  content.appendChild(attribution);
};

export default homeLoad;