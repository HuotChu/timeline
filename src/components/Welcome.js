import './Welcome.css';
import {createDateEle} from './date';

export const createWelcomeText = ({boldText, date, normalText})=>{
    const container = document.createElement('div');
    container.className = 'container';
    const boldTe = document.createElement('p');
    const normalTe = document.createElement('p');
    const dateText = createDateEle({date});


    boldTe.innerHTML = boldText;
    normalTe.innerHTML = "! "+ normalText;

    boldTe.appendChild(dateText);
    container.appendChild(boldTe);
    container.appendChild(normalTe);

    return container;
}