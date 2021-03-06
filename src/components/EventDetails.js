import './eventDetails.css';

export const createEventDetails = ({ details }) => {
  if (!details) {
    details = {
      "type":"transaction",
      "seqNo":"2735193147",
      "description":"Upgraded Device: (555) 555-5555. You Upgraded your device to iPhone SE. To get the most out of youor device:",
      "date":"2021-03-05",
      "timestamp":"1620215662000",
      "attId":"sb181k",
      "applicationId":"Voyage",
      "shortDescription": "Device Upgrade",
      "performedBy":"sb181k",
      "links": [{
        "href" : "https://www.cricketwireless.com/support/using-my-phone",
        "text" : "Set up your device >"
      },
      {
        "href" : "https://www.cricketwireless.com/cell-phon-accessories",
        "text" : "Get accessories for your device >"
      }]
    };
  }
  const wrapper = document.createElement('div');
  const line = document.createElement('div');
  const container = document.createElement('div');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  const links = details.links || [];
  line.className = 'hr';
  wrapper.appendChild(line);
  title.innerText = details.type === 'memo' ? `Call Care ${details.shortDescription}` : details.shortDescription;
  description.innerText = details.description;
  container.appendChild(title).appendChild(description);
  container.className = ['storybook-event-details'].join(' ');
  links.forEach((a) => {
      const link = document.createElement('a');
      link.href = a.href;
      link.innerText = a.text;
      container.appendChild(link);
  });
  wrapper.appendChild(container);

  return wrapper;
};
