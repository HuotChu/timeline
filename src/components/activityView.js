import './activityView.css';
import { createDateEle } from './date';
import { createEventDetails } from './EventDetails';
import { createButton } from './ExpandButton';
import { createText } from './Text';

export const createActivityView = ({ activityData, index }) => {
    /** Pseudo Code */
    //const { data vars } = activityData;
    //const dateComponent = createDateEle(dataVars.date);
    //const title = createText(dataVars.title, true);
    //const subtitle = createText(dataVars.subTitle, false);
    //const buttonId = `expandButton_${index}`;
    //const expandButton = createButton(buttonId);
    //const eventDetails = createEventDetails(activityData.details);

    const container = document.createElement('div');
    container.className = 'activity-container';

    //let iconType = ''; ==> switch on data to set class name

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
    constainer.addEventListener('expandBtnClicked', (e) => {
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
