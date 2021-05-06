import { createButton } from './ExpandButton';

export default {
  title: 'Example/ExpandButton',
  argTypes: {
    elementId: 'id',
    onClick: { action: 'onClick' }
  },
};

const Template = ({ elementId, onClick }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ elementId, onClick });
};

export const Primary = Template.bind({});
Primary.args = {
  elementId: 'id',
  onClick: () => { window.alert('Hola');}
};
