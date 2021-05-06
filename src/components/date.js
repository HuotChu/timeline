import './date.css';

const formatDate = (date) => {
  const dateArray = date.split('-');
  if (dateArray.length === 3) {
      dateArray[0] = dateArray[0].slice(-2);
      dateArray.push(dateArray.splice(1,1)[0]);
      return dateArray.reverse().join('/');
  } else {
      return 'Invalid Date';
  }
};

export const createDateEle = (date) => {
    const span = document.createElement('span');
    if (date) {
        const formattedDate = formatDate(date);
        span.innerText = formattedDate;
        span.className = 'timeline-date';
    }
    return span;
};
