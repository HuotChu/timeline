import { createEventDetails } from './EventDetails';

export default {
  title: 'Content/EventDetails',
  argTypes: {
    "type":"memo",
      "seqNo":"2735269226",
      "description":"Security Authentication has been bypassed with reason makeAPayment",
      "date":"2021-05-05",
      "timestamp":"1620220457000",
      "attId":"sb181k",
      "applicationId":"Voyage",
      "performedBy":"sb181k",
      "shortDescription": "Make a Payment",
      "links":[{
        "href" : 'www.cricketwireless.com/cell-phones',
        "text" : 'Shop Phones'
      }]
  }
};

const Template = ({ details, ...args }) => {

  return createEventDetails({ details, ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  "type":"memo",
  "seqNo":"2735269226",
  "description":"Security Authentication has been bypassed with reason makeAPayment",
  "date":"2021-05-05",
  "timestamp":"1620220457000",
  "attId":"sb181k",
  "applicationId":"Voyage",
  "performedBy":"sb181k",
  "shortDescription": "Make a Payment",
  "links":[{
    "href" : 'www.cricketwireless.com/cell-phones',
    "text" : 'Shop Phones'
  }]
};
