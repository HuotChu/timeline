import { createHeader } from './header';

export default {
  title: 'Content/header',
  argTypes: {
    headerText: { control: 'text' }
  }
};

const Template = ({ headerText, ...args }) => createHeader({ headerText, ...args });

export const Primary = Template.bind({});
Primary.args = {
  headerText: 'Account Activity'
};

export const Secondary = Template.bind({});
Secondary.args = {
  headerText: 'Test'
};
