import './expandButton.css';

export const createButton = ({
    elementId,
    onClick
}) => {
  const element = document.getElementById(elementId);
  const elementEvent = element ? element.createCustomEvent('expandBtnClicked') : null;
  const btn = document.createElement('button');
  const span = document.createElement('span');
  btn.addEventListener('click', () => {
    console.log(btn.classList);
    btn.classList.toggle('expanded');
    if (elementEvent) {
      dispatchEvent(elementEvent);
    }
    if (typeof onClick === 'function') {
      onClick();
    }
  });
  span.className = ['expand-button'].join(' ');
  btn.className = ['button-toggle-ui'].join(' ');
  btn.appendChild(span);
  return btn;
};