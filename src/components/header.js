import './header.css';

export const createHeader = ({ headerText }) => {
  const header = document.createElement('header');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const headerDiv = document.createElement('div');
  const headerEle = document.createElement('h1');

  headerEle.innerText = headerText;

  headerDiv.appendChild(headerEle);
  wrapper.appendChild(headerDiv);
  header.appendChild(wrapper);
  
  return header;
};
