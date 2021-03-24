const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const daysEl = document.getElementById('days');

const newYear = '31 Dec 2021';

function countDown(){
    const yeniyil = new Date(newYear);
    const suan = new Date();

    const totalminute = new Date(yeniyil - suan) / 1000;

    const days = Math.floor(totalminute / 3600 / 24 );
    const hours = Math.floor(totalminute / 3600) %24 ;
    const minutes = Math.floor(totalminute /60) %60;
    const seconds = Math.floor(totalminute) % 60;
    
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    daysEl.innerHTML = days;
    console.log(totalminute);
    
}
countDown();

setInterval(countDown, 1000);