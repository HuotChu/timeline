import './Text.css';

export const createText = ({text, primary = false})=>{
  console.log(primary);
  const span = document.createElement('span');
  span.className = primary ? 'Main-text' : 'sub-text';
  console.log(span.className)
  span.innerHTML = text;
  
  return span;
};