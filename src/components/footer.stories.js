import { createFooter } from './footer';

export default {
  title: 'Example/Footer',
  argTypes: {
    footerText: { control: 'text' }
  }
};

const Template = ({ footerText, ...args }) => createFooter({ footerText, ...args });

export const Primary = Template.bind({});
Primary.args = {
  footerText: 'View all account history',
  onClick: () => { window.alert('View all account history');}
};

export const Secondary = Template.bind({});
Secondary.args = {
  footerText: 'Test',
};
