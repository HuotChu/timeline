import './activityView.css';
import { createDateEle } from './date';
import { createEventDetails } from './EventDetails';
import { createButton } from './ExpandButton';
import { createText } from './Text';

export const createActivityView = ({ activityData, index = 0 }) => {
    const dateComponent = createDateEle({date: activityData.date});
    const title = createText({text:activityData.applicationId, primary: true});
    const subtitle = createText({text:activityData.shortDescription, primary: false});
    const buttonId = `expandButton_${index}`;
    const expandButton = createButton({elementId: buttonId});
    const eventDetails = createEventDetails({details: activityData});

    const container = document.createElement('div');
    container.className = 'activity-container';

    let iconType = activityData.type; //==> switch on data to set class name

    const view = `<div class='section-top'>
        <span class='activity-icon ${iconType}'></span>
        <span class='activity-summary'>
            <table><tr><td class='activity-title'></td></tr><tr><td class='activity-sub-title'></td></tr></table>
        </span>
        <span class='activity-button'></span>
    </div>
    <div class='section-bottom hide'></div>`;

    container.insertAdjacentHTML('afterbegin', view);
    container.querySelector('.activity-title').appendChild(dateComponent);
    container.querySelector('.activity-title').appendChild(title);
    container.querySelector('.activity-sub-title').appendChild(subtitle);
    container.querySelector('.activity-button').appendChild(expandButton);
    container.querySelector('.section-bottom').appendChild(eventDetails);

    container.addEventListener('expandBtnClicked', (e) => {
        const { id, state } = e.detail;
        if (id === buttonId) {
            const classes = document.querySelector(`#${buttonId}`).classList;
            if (state === 'collapsed') {
                classes.add('hide');
            } else {
                classes.remove('hide');
            }
        }
    });

    return container;
};
