import './date.css';

export const createDateEle = ({ date }) => {
  const span = document.createElement('span');
  const formattedDate = formatDate(date);
  span.innerText = formattedDate;
  span.className = ['timeline-date'];
  return span;

  function formatDate (date) {
    const dateArray = date.split('-');
    if (dateArray.length === 3) {
      dateArray.push(dateArray.splice(1,1)[0])
      return dateArray.reverse().join("/");
    } else {
      return "Invalid Date";
    }
  }
};
