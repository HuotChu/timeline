import './footer.css';

export const createFooter = ({ footerText, onClick }) => {
  const span = document.createElement('span');
  span.innerText = footerText;
  span.className = ['timeline-footer'];

  span.addEventListener('click', () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  });
  return span;
};
