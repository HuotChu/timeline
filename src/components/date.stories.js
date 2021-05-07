import { createDateEle } from './date';

export default {
  title: 'Format/DateEle',
  argTypes: {
    date: { control: 'text' }
  }
};

const Template = ({ date, ...args }) => createDateEle({ date, ...args });

export const Primary = Template.bind({});
Primary.args = {
  date: '2021-05-04',
};

export const Secondary = Template.bind({});
Secondary.args = {
  date: 'Test',
};
