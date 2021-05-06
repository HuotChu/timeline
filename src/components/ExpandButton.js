import './expandButton.css';

export const createButton = ({ elementId }) => {
    const btnElement = document.getElementById(elementId);
    const detail = {
        id: elementId,
        state: 'collapsed'
    };
    const btn = document.createElement('button');
    const span = document.createElement('span');
    btn.addEventListener('click', () => {
        detail.state = detail.state === 'collapsed' ? 'expanded' : 'collapsed';
        const elementEvent = btnElement ? btnElement.createCustomEvent('expandBtnClicked', { detail }) : null;
        btn.classList.toggle('expanded');
        if( elementEvent ){
            btn.dispatchEvent(elementEvent);
        }
    });
    span.className = ['expand-button'].join(' ');
    btn.className = ['button-toggle-ui'].join(' ');
    btn.appendChild(span);
    return btn;
};
