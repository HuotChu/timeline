import {createText} from './Text';

export default {
    title: 'Main Text',
    argTypes: {
      text : {control : 'text'},
      primary : {control : 'boolean'}
    },
  };

const Template = ({text, primary})=>{
    return createText({text, primary});
};


export const MainText = Template.bind({});

MainText.args = {
  text: 'Customer Care',
  primary: true
};






