import { createActivityView } from './activityView';

export default {
    title: 'Composite/Activity View'
};
  
const Template = (args) => createActivityView(args);

export const Device = Template.bind({});
Device.args = {
    activityData: {
        applicationId: "Voyage",
        date: "2021-03-05",
        description: "Upgraded Device: (555) 555-5555. You Upgraded your device to iPhone SE. To get the most out of youor device:",
        links: [{
            href: "https://www.cricketwireless.com/support/using-my-phone",
            text: "Set up your device >"
        }, {
            href: "https://www.cricketwireless.com/cell-phone-accessories",
            text: "Get accessories for your device >"
         }],
        shortDescription: "Device Upgrade",
        type: "transaction"
    }
};

export const Store = Template.bind({});
Store.args = {
    activityData: {
        applicationId: "Aktivate",
        date: "2021-04-02",
        description: "Upgraded Device: (555) 555-5555. You reset your PIN. Thanks for keeping your account secure! To learn morre aboout security:",
        links: [{
            href: "https://www.cricketwireless.com/support/protect-my-phone/account-pin-security.html",
            text: "Account Pin Security >"
         }],
        shortDescription: "PIN Reset",
        type: "memo"
    }
};

export const Online = Template.bind({});
Online.args = {
    activityData: {
        applicationId: "Online",
        date: "2021-02-22",
        description: "Plan Change: (444) 444-5555. Thank you for changing youor plan to Unlimited! If you have questions, check out our FAQs:",
        links: [{
            href: "https://www.cricketwireless.com/support/plans-and-features/unlimited-data.html",
            text: "Data Plan FAQs >"
         }],
        shortDescription: "Plan Change",
        type: "transaction"
    }
};

export const Chat = Template.bind({});
Chat.args = {
    activityData: {
        date: "2020-12-25",
        description: "Activated Device (555) 555-5555. Thanks for activating your service! Now that yuo've activated, here are some helpful tips t oget yuo started:",
        links: [{
            href: "https://www.cricketwireless.com/support/orders-and-activations/phone-setup.html",
            text: "Phone Setup >"
         }],
        shortDescription: "Activation",
        type: "memo"
    }
};
