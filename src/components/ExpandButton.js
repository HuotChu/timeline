import './expandButton.css';

export const createButton = ({ elementId }) => {
    const element = document.getElementById(elementId);
    const detail = {
        id: elementId,
        state: 'collapsed'
    };
    const btn = document.createElement('button');
    const span = document.createElement('span');
    btn.addEventListener('click', () => {
        detail.state = detail.state === 'collapsed' ? 'expanded' : 'collapsed';
        const elementEvent = element.createCustomEvent('expandBtnClicked', { detail });
        btn.classList.toggle('expanded');
        btn.dispatchEvent(elementEvent);
    });
    span.classList.add = 'expand-button';
    btn.classList.add = 'button-toggle-ui';
    btn.appendChild(span);
    return btn;
};
