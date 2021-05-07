import './expandButton.css';

export const createButton = ({ elementId }) => {
    const btn = document.createElement('span');
    const detail = {
        id: elementId,
        state: 'collapsed'
    };
    btn.className = 'button-toggle-ui expand-button';
    btn.addEventListener('click', function () {
        this.classList.toggle('expanded');
        detail.state = this.classList.contains('expanded') ? 'expanded' : 'collapsed';
        document.dispatchEvent(new CustomEvent('expandBtnClicked', { bubbles: true, detail }));
    });

    return btn;
};
