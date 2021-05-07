import './activityView.css';
import { createDateEle } from './date';
import { createEventDetails } from './EventDetails';
import { createButton, toggleButton } from './ExpandButton';
import { createText } from './Text';

export const createActivityView = ({ activityData, index = 0 }) => {
    const dateComponent = createDateEle({date: activityData.date});
    const title = createText({text: ' - ' + activityData.applicationId, primary: true});
    const subtitle = createText({text: activityData.shortDescription, primary: false});
    const buttonId = `expandButton_${index}`;
    const expandButton = createButton({elementId: buttonId});
    const eventDetails = createEventDetails({details: activityData});

    const container = document.createElement('div');
    container.className = 'activity-container';

    let iconType = activityData.type; //==> switch on data to set class name

    const view = `<div class='section-top'>
        <span class='activity-icon ${iconType}'></span>
        <span class='activity-summary'>
            <table cellpadding='0' cellspacing='0'>
                <tr><td class='activity-title'></td></tr>
                <tr><td class='activity-sub-title'></td></tr>
            </table>
        </span>
    </div>
    <div class='section-bottom hide'></div>`;

    container.insertAdjacentHTML('afterbegin', view);
    container.querySelector('.activity-title').appendChild(dateComponent);
    container.querySelector('.activity-title').appendChild(title);
    container.querySelector('.activity-sub-title').appendChild(subtitle);
    container.querySelector('.section-top').appendChild(expandButton);

    const bottom = container.querySelector('.section-bottom');
    bottom.appendChild(eventDetails);

    document.addEventListener('expandBtnClicked', function (e) {
        const { id, state } = e.detail;
        const classes = bottom.classList;
        if (id === buttonId) {
            if (state === 'collapsed') {
                classes.add('hide');
            } else {
                classes.remove('hide');
            }
        } else if (state === 'expanded' && !classes.contains('hide')) {
            expandButton.classList.remove('expanded');
            classes.add('hide');
        }
    });

    return container;
};
