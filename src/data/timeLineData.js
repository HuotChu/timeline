//reference data endpoint https://cricketsharedsvcs.it.att.com/restservices/customer360/v2/service/customer360view/954476051
const timeLineData = {
   "billingAccountNumber":"954476051",
   "accountDetails":{
      "banStatus":"O",
      "accountType":"I",
      "accountSubType":"R",
      "statusActvCode":"RSP",
      "statusActvRsnCode":"FPP",
      "statusDate":"2021-04-20",
      "customerSince":"2020-04-18",
      "billCycle":20,
      "billCycleDate":"2021-05-20",
      "billDueDate":"2021-05-19",
      "emailAddress":"amdocs2018@gmail.com",
      "preferredLanguage":"English",
      "arBalance":"0.00",
      "openCases":0
   },
   "billingAddress":{
      "fullAddress":"1919 AVENUE O, GALVESTON, TX 77550-8345 USA",
      "addressLine1":"1919 AVENUE O",
      "city":"GALVESTON",
      "state":"TX",
      "zip":"77550",
      "zip4":"8345"
   },
   "name":{
      "firstName":"SNEHA",
      "lastName":"BHATKULKAR"
   },
   "subscribers":[
      {
         "subscriberId":"28302034051",
         "subscriberDetails":{
            "phoneNumber":"4094659730",
            "status":"A",
            "statusReasonCode":"FPP",
            "statusDate":"2021-04-20",
            "subStatusLastAct":"RSP",
            "initActivationDate":"2021-04-18",
            "futureActivityIndicator":false,
            "isPortedIn":false,
            "pendingPortInIndicator":false,
            "pricePlanChangeCount":0,
            "emailAddress":"amdocs2018@gmail.com",
            "name":{
               "firstName":"SNEHA",
               "lastName":"BHATKULKAR"
            },
            "deviceDetails":{
               "currentDevice":{
                  "imei":"359480090000457",
                  "sim":"89011503277397682367",
                  "sku":"DEFBYOD",
                  "model":"BYOD PHONE",
                  "os":"Android",
                  "deviceType":"Smartphone",
                  "network":"LTE"
               }
            }
         },
         "services":{
            "totalRate":30.0,
            "ratePlans":{
               "current":[
                  {
                     "soc":"30",
                     "timeElapsed":17,
                     "longDescription":"Looking for great value? Unlimited talk, texting and data with 2GB of high speed data access.",
                     "shortDescription":"2 GB",
                     "rate":"30.00",
                     "dataSpeed":"8 mb/s",
                     "effectiveDate":"2021-04-18"
                  }
               ]
            },
            "addOns":{
               "current":[
                  {
                     "soc":"BARPAYG",
                     "timeElapsed":17,
                     "shortDescription":"PAYG Barring SOC",
                     "rate":"0.00",
                     "effectiveDate":"2021-04-18"
                  },
                  {
                     "soc":"CRKWIFI",
                     "timeElapsed":17,
                     "longDescription":"Wi-Fi Calling",
                     "shortDescription":"Wi-Fi Calling",
                     "rate":"0.00",
                     "effectiveDate":"2021-04-18"
                  },
                  {
                     "soc":"CRKVOLTE",
                     "timeElapsed":17,
                     "longDescription":"Voice over LTE",
                     "shortDescription":"HD Voice - Voice over LTE",
                     "rate":"0.00",
                     "effectiveDate":"2021-04-18"
                  },
                  {
                     "soc":"CRKABR",
                     "timeElapsed":17,
                     "longDescription":"Video Optimization",
                     "shortDescription":"Stream More-Video Optimization",
                     "rate":"0.00",
                     "effectiveDate":"2021-04-18"
                  }
               ]
            }
         }
      }
   ],
   "events":[
      {
         "type":"device",
         "seqNo":"2735193147",
         "description":"Upgraded Device: (555) 555-5555. You Upgraded your device to iPhone SE. To get the most out of your device:",
         "date":"2021-03-05",
         "timestamp":"1620215662000",
         "attId":"sb181k",
         "applicationId":"Voyage",
         "shortDescription": "Device Upgrade",
         "performedBy":"sb181k",
         "links": [{
            "href" : "https://www.cricketwireless.com/support/using-my-phone",
            "text" : "Set up your device >"
            },{
            "href" : "https://www.cricketwireless.com/cell-phone-accessories",
            "text" : "Get accessories for your device >"
         }]
      },
      {
         "type":"store",
         "seqNo":"2735186895",
         "description":"Upgraded Device: (555) 555-5555. You reset your PIN. Thanks for keeping your account secure! To learn more about security:",
         "date":"2021-04-02",
         "timestamp":"1620215237000",
         "attId":"sb181k",
         "applicationId":"Aktivate",
         "shortDescription": "PIN Reset",
         "performedBy":"sb181k",
         "links": [{
            "href" : "https://www.cricketwireless.com/support/protect-my-phone/account-pin-security.html",
            "text" : "Account Pin Security >"
         }]
      },
      {
         "type":"online",
         "seqNo":"2732582997",
         "description":"Plan Change: (444) 444-5555. Thank you for changing your plan to Unlimited! If you have questions, check out our FAQs:",
         "date":"2021-04-22",
         "timestamp":"1620039371000",
         "attId":"sb181k",
         "applicationId":"Online",
         "shortDescription": "Plan Change",
         "links": [{
            "href" : "https://www.cricketwireless.com/support/plans-and-features/unlimited-data.html",
            "text" : "Data Plan FAQs >"
         }]
      },
      {
         "type":"chat",
         "seqNo":"2732572141",
         "description":"Activated Device (555) 555-5555. Thanks for activating your service! Now that you've activated, here are some helpful tips to get you started:",
         "date":"2021-05-05",
         "timestamp":"1620038901000",
         "attId":"sb181k",
         "applicationId":"Support",
         "shortDescription": "Activation",
         "links": [{
            "href" : "https://www.cricketwireless.com/support/orders-and-activations/phone-setup.html",
            "text" : "Phone Setup >"
         }]
      }
   ],
   "orders":[
      {
         "orderId":"88347452",
         "orderDate":"2021-04-19",
         "orderStepStatus":"SUCCESS"
      },
      {
         "orderId":"88284178",
         "orderDate":"2021-04-18",
         "orderStepStatus":"SUCCESS"
      }
   ],
   "recommendations":{
      "actions":[
         {
            "actionName":"Enroll in AutoPay",
            "featureName":"autoPay",
            "notes":"Account is not currently enrolled in auto pay",
            "priority":"1",
            "attributes":[
               {
                  "name":"Bill Cycle Date",
                  "value":"2021-05-20"
               },
               {
                  "name":"Reason",
                  "value":"Simplify payment"
               }
            ]
         },
         {
            "actionName":"Change Rate Plan",
            "featureName":"changePlan",
            "notes":"Default action when no others match",
            "priority":"3",
            "attributes":[
               {
                  "name":"Plans",
                  "value":"Upgrade"
               },
               {
                  "name":"AddOns",
                  "value":"Add New Features"
               }
            ]
         },
         {
            "actionName":"Change Account Settings",
            "featureName":"settings",
            "notes":"Default action when no others match",
            "priority":"3",
            "attributes":[
               {
                  "name":"Update",
                  "value":"Account Info"
               },
               {
                  "name":"Change",
                  "value":"Bill Cycle Date"
               }
            ]
         }
      ],
      "products":[
         {
            "soc":"SOC123",
            "longDescription":"this is hardcoded example",
            "shortDescription":"short desc",
            "rate":"12.00"
         },
         {
            "soc":"SOC123",
            "longDescription":"this is hardcoded example",
            "shortDescription":"short desc",
            "rate":"12.00"
         },
         {
            "soc":"SOC123",
            "longDescription":"this is hardcoded example",
            "shortDescription":"short desc",
            "rate":"12.00"
         }
      ]
   }
};

export const getTimeLineData = () => {
   const data = {
      accountInfo: { ...timeLineData.accountDetails, ...timeLineData.name },
      events: []
   };
   const accountDetails = timeLineData.accountDetails || {};
   const accountEvents = timeLineData.events || [];
   const accountRecommendations = (timeLineData.recommendations || {}).actions || [];

   if (accountDetails.customerSince) {
      data.events.push({
         "type": "store",
         "description": "Customer Account Creation",
         "date": accountDetails.customerSince,
         "performedBy": `${(timeLineData.name || {}).firstName} ${(timeLineData.name || {}).lastName}`,
         "applicationId":"Retail",
         "shortDescription": "Account Creation",
         "links": [{
            "href": "www.cricketwireless.com/myaccount.html",
            "text": "Visit My Account"
         }]
      });
   }
   accountEvents.forEach(event => {
      data.events.push(event);
   });
   accountRecommendations.forEach(recommendation => {
      if (recommendation.priority === 1) {
         data.events.push({
            "type": "recommendation",
            "description": recommendation.actionName,
            "date": '2021-05-06',
            "shortDescription": "Recommendation"
         });
      }
   });
   return data;
};
