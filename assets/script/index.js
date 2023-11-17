'use strict'
const userDate = document.querySelector('#userDate');
userDate.value = '';

const btnCheck = document.querySelector('.btnCheck');
btnCheck.addEventListener('click', () => {
    const inputDate = document.getElementById('userDate').value;
    const outputDiv = document.getElementById('output');
    const userDate = new Date(inputDate);
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(inputDate)) {
      outputDiv.innerHTML = 'Please input a valid date(YYYY-MM-DD)<br> Example:2000-10-20';
      return;
    }
  
    const today = new Date();
    const dateToday = today.toDateString();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeekIndex = userDate.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];
    const userBirthday = new Date(userDate.getFullYear(), userDate.getMonth(), userDate.getDate());
    const age = today.getFullYear() - userDate.getFullYear();
    const bornDays = Math.floor((today - userDate) / (1000 * 3600 * 24));
    
    let nextBirthday = new Date(today.getFullYear(), userDate.getMonth(), userDate.getDate());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilNextBirthday = Math.floor((nextBirthday - today) / (1000 * 3600 * 24));
  
    outputDiv.innerHTML = `
      The day is: ${dayOfWeek}<br>
      Your age: ${age} years old<br>
      Days you has been alive: ${bornDays} days<br>
      Next birthday on: ${nextBirthday.toDateString()}<br>
      Days until next birthday: ${daysUntilNextBirthday} days
    `;
})
  