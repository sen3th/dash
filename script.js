//date display script

const dateDisplayElement = document.getElementById("currentDate");

const today = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const formattedDate = today.toLocaleDateString(undefined, options);

dateDisplayElement.innerHTML = formattedDate;