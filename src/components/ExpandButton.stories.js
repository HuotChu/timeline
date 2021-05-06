import { createButton } from './ExpandButton';

export default {
  title: 'Example/ExpandButton',
  argTypes: {
    elementId: 'id'
  },
};

const Template = ({ elementId }) => createButton({ elementId });

export const Primary = Template.bind({});
Primary.args = {
  elementId: 'id'
};
