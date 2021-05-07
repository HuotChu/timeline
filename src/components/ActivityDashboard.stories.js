import { createActivityDashboard } from './ActivityDashboard';
import { getTimeLineData } from '../data/timeLineData';

export default {
    title: 'Composite/ActivityDashboard',
    argTypes: {
        headerLabel: { control: 'text' },
        footerLabel: { control: 'text' }
    }
};

const Template = ({ headerLabel, footerLabel, ...args }) => {
    return createActivityDashboard({ headerLabel, footerLabel, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    headerLabel: 'Account Activity',
    footerLabel: 'View all account history '
};
