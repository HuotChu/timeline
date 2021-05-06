import {createWelcomeText} from './Welcome';

export default {
title: 'Example/Welcome',
argTypes:{
        boldText: {control : 'text'},
        date : {control : 'text'},
        normalText : {control : 'text'}
    }
};

const Template = ({...args})=> createWelcomeText({...args});

export const WelcomeText = Template.bind({});
WelcomeText.args = {
    boldText: "Thanks for being with us since",
    date: '2021-05-04',
    normalText: "Here are the most recent activities on your account"
}