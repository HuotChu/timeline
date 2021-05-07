import './expandButton.css';

export const createButton = ({ elementId }) => {
    const btn = document.createElement('span');
    const detail = {
        id: elementId,
        state: 'collapsed'
    };
    btn.className = 'button-toggle-ui expand-button';
    btn.addEventListener('click', () => {
        detail.state = detail.state === 'collapsed' ? 'expanded' : 'collapsed';
        const elementEvent = new CustomEvent('expandBtnClicked', { detail });
        btn.classList.toggle('expanded');
        if ( elementEvent ) {
            btn.dispatchEvent(elementEvent);
        }
    });

    return btn;
};
