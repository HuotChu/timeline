import './activityView.css';
import { getTimeLineData } from '../data/timeLineData';
import { createDateEle } from './date';
import { createEventDetails } from './EventDetails';
import { createButton } from './ExpandButton';
import { createText } from './Text';

export const createActivityView = ({ activityData, index = 0 }) => {
    console.log(activityData);
    const dateComponent = createDateEle({date: activityData.date});
    const title = createText({text:activityData.applicationId, primary:true});
    const subtitle = createText({text:activityData.shortDescription, primary: false});
    const buttonId = `expandButton_${index}`;
    const expandButton = createButton({elementId:buttonId});
    const eventDetails = createEventDetails({details:activityData});

    const container = document.createElement('div');
    container.className = 'activity-container';

    let iconType = activityData.type; //==> switch on data to set class name

    const view = `<div class='section-top'>
        <span class='activity-icon ${iconType}'></span>
        <span class='activity-title'>
            <table><tr><td>${dateComponent.innerHTML}${title.innerHTML}</td></tr><tr><td>${subtitle.innerHTML}</td></tr></table>
        </span>
        <span class='activity-button'>${expandButton.innerHTML}</span>
    </div>
    <div class='section-bottom hide'>
        ${eventDetails.innerHTML}
    </div>`;

    container.insertAdjacentHTML('afterbegin', view);
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
