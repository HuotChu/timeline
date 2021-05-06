import {createText} from './Text';

export default {
    title: 'Main Text',
    argTypes: {
      text : {control : 'text'}
    },
  };

const Template = ({text})=>{
    return createText({text});
};


export const MainText = Template.bind({});

MainText.args = {
  text: 'Customer Care'
};






