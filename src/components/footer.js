import './footer.css';

export const createFooter = ({ footerText, onClick }) => {
  const div = document.createElement('div');
  div.innerText = footerText;
  div.className = 'timeline-footer';

  div.addEventListener('click', () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  });
  return div;
};
