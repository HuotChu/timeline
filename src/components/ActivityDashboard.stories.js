import { createActivityDashboard } from './ActivityDashboard';
import { getTimeLineData } from '../data/timeLineData';

export default {
    title: 'Example/ActivityDashboard',
    argTypes: {
        headerLabel: { control: 'text' },
        footerLabel: { control: 'text' },
        data: {}
    }
};

const Template = ({ headerLabel, footerLabel, ...args }) => {

    return createActivityDashboard({ headerLabel, footerLabel, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
    headerLabel : 'Account Activity',
    footerLabel : 'View all account history ',
    data : getTimeLineData()
};


