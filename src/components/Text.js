import './Text.css';

export const createText = ({text})=>{
  console.log(text);
  const span = document.createElement('span');
  span.className = 'Main-text'
  span.innerHTML = text;
  
  return span;
};