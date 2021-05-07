import './activityDashboard.css';
import { getTimeLineData } from '../data/timeLineData';
import { createHeader } from './header';
import { createActivityView } from './activityView';
import {createWelcomeText} from "./Welcome";
import {createFooter} from "./footer";

export const createActivityDashboard = ({ headerLabel, footerLabel, data }) => {
  if (!data) {
    data = getTimeLineData();
  }
  const container = document.createElement('div');
  container.classList.add('storybook-activity-dashboard');
  const header = createHeader({headerText: headerLabel});
  const content = document.createElement('div');
  content.classList.add('storybook-activity-dashboard-content');
  const footer = createFooter({footerText: footerLabel, onClick: () => {location.href="/"}});
  container.appendChild(header);
  container.appendChild(content);
  container.appendChild(footer);
  if ((data.accountInfo||{}).customerSince) {
     const welcome = createWelcomeText({
       boldText: "Thanks for being with us since ",
       date: data.accountInfo.customerSince,
       normalText: "Here are the most recent activities on your account."
      });
     content.appendChild(welcome);
  }
  if (data.events) {
    data.events.forEach((event, idx) => {
      const activityView = createActivityView({ activityData: event, index: idx});
      content.appendChild(activityView);
    });
  }
  return container;
};
