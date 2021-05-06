import './eventDetails.css';

export const createEventDetails = ({
details
}) => {
  if(!details){
    details = {
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
  }
  const container = document.createElement('div');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  title.innerText = details.type === 'memo' ? `Call Care ${details.shortDescription}` : details.shortDescription;
  description.innerText = details.description;
  container.appendChild(title).appendChild(description);
  //const mode = primary ? 'storybook-event-details--primary' : 'storybook-event-details--secondary';
  container.className = ['storybook-event-details'].join(' ');
  const links = details.links || [];
  links.forEach((a)=>{
      const link = document.createElement('a');
      link.href = a.href;
      link.innerText = a.text;
    container.appendChild(link);
    });

  //container.style.backgroundColor = backgroundColor;

  return container;
};
