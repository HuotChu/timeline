import './activityView.css';
import { getTimeLineData } from '../data/timeLineData';
import { createDateEle } from './date';
import { createEventDetails } from './EventDetails';
import { createButton } from './ExpandButton';
import { createText } from './Text';

export const createActivityView = ({ activityData, index = 0 }) => {
    const { events } = getTimeLineData();
    activityData = events[0] || {};
    const dateComponent = createDateEle(activityData.date);
    const title = createText(activityData.applicationId, true);
    const subtitle = createText(activityData.shortDescription, false);
    const buttonId = `expandButton_${index}`;
    const expandButton = createButton(buttonId);
    const eventDetails = createEventDetails(activityData);

    const container = document.createElement('div');
    container.className = 'activity-container';

    let iconType = ''; //==> switch on data to set class name

    const view = `<div class='section-top'>
        <span class='activity-icon ${iconType}'></span>
        <span class='activity-title'>
            <table><tr><td>${dateComponent}${title}</td></tr><tr><td>${subtitle}</td></tr></table>
        </span>
        <span class='activity-button'>${expandButton}</span>
    </div>
    <div class='section-bottom hide'>
        ${eventDetails}
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

    return view;
};
