import { createActivityView } from './activityView';

export default {
    title: 'Activity View'
};
  
const Template = (args) => createActivityView(args);

export const Default = Template.bind({});
Default.args = {
    activityData: {},
    index: 0
};
