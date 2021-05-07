import './activityDashboard.css';
import { getTimeLineData } from '../data/timeLineData';
import { createHeader } from './header';
import { createActivityView } from './activityView';
import {createWelcomeText} from "./Welcome";
import {createFooter} from "./footer";
import Bugsnag from '@bugsnag/js';

export const createActivityDashboard = ({ headerLabel, footerLabel, data }) => {
  if (!data) {
    data = getTimeLineData();
    Bugsnag.start('8c7a261bdc73dddbe81ca236384a1158');
  }
  const container = document.createElement('div');
  container.classList.add('storybook-activity-dashboard');
  const header = createHeader({headerText: headerLabel});
  const content = document.createElement('div');
  content.classList.add('storybook-activity-dashboard-content');
  const footer = createFooter({footerText: footerLabel, onClick: () => {
     Bugsnag.notify(new Error("Error occured on Click on Footer"));
    //location.href="/"
    }
  });
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
