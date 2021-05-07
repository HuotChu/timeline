import './header.css';

export const createHeader = ({ headerText }) => {
  const wrapper = document.createElement('div');
  const headerEle = document.createElement('h1');
  wrapper.className = 'wrapper';
  headerEle.innerText = headerText;
  wrapper.appendChild(headerEle);
  
  return wrapper;
};
