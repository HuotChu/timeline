import './Text.css';

export const createText = ({text = '', primary = false})=>{
  const span = document.createElement('span');
  span.className = primary ? 'main-text' : 'sub-text';
  span.innerText = text;
  
  return span;
};
