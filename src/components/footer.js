import './footer.css';

export const createFooter = ({ footerText }) => {
  const span = document.createElement('span');
  span.innerText = footerText;
  span.className = ['timeline-footer'];
  return span;
};
