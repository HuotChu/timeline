import './Welcome.css';
import { createDateEle } from './date';

export const createWelcomeText = ({boldText, date, normalText})=>{
    const container = document.createElement('div');
    container.className = 'container';
    const boldElement = document.createElement('p');
    const normalElement = document.createElement('p');
    const dateText = createDateEle({ date });

    boldElement.innerText = boldText;
    normalElement.innerText = normalText;
    boldElement.appendChild(dateText);
    boldElement.innerText += '! ';
    container.appendChild(boldElement);
    container.appendChild(normalElement);

    return container;
}
