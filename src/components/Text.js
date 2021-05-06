import './Text.css';

export const createText = (text = '', primary = false)=>{
  const span = document.createElement('span');
  span.className = primary ? 'Main-text' : 'sub-text';
  span.innerText = text;
  
  return span;
};
