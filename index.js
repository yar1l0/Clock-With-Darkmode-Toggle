const deg = 6; // 6 degrees per "tick" of the second hand
const hourHand = document.querySelector("#hr");
const minuteHand = document.querySelector("#min");
const secondHand = document.querySelector("#sec");

setInterval(() => {
    let day = new Date(); 
    let hours = day.getHours() * 30; // 30 degrees around circle per hour 
    let minutes = day.getMinutes() * deg; 
    let seconds = day.getSeconds() * deg;
    hourHand.style.transform = `rotateZ(${hours+(minutes/12)}deg)`; 
    minuteHand.style.transform = `rotateZ(${minutes}deg)`;
    secondHand.style.transform = `rotateZ(${seconds}deg)`;
});



const styleSheet = document.getElementById('stylesheet');
const toggler = document.getElementById('mode'); //button with moon emoji
const main = 'styles/index.css'; //light mode
const darkmode = 'styles/darkmode.css'; //dark mode

toggler.onclick = function swapStyles() {
    if(styleSheet.getAttribute('href') == main) {
        styleSheet.setAttribute('href', darkmode); 
        toggler.innerHTML = "🌕"; 
    } 
    else if (styleSheet.getAttribute('href') == darkmode) { 
        styleSheet.setAttribute('href', main); 
        toggler.innerHTML = "🌑";
    }
}


const sound = new Audio('./music/alarmsound.mp3');
const playAudio = () => sound.play();
const pause = () => sound.pause();
const alarm = document.getElementById('alarm'); 
let intval;

alarm.onclick = function setAlarm() {
   
    let userHour = prompt("Please enter the hour of which you would like the alarm to be set 😄", "07"); 
    if (userHour.charAt(0) > 0 && userHour < 10) { 
    userHour = "0" + userHour;
}
const userMinutes = prompt("Please enter the minutes of which you would like the alarm to be set 😄", "05");

intval = setInterval(function alarmTime() {
    const realtime = new Date();
    let realHours = realtime.getHours();
    let realMinutes = realtime.getMinutes();
    if(realHours > 12) {
        realHours = realHours - 12; 
    }
    if(userHour > 12) {
        userHour = userHour - 12; 
    }
    
    if(userHour == realHours && userMinutes == realMinutes) { 
        playAudio();
        let snooze = document.getElementById('snooze');
        snooze.onclick = pause, clearInterval(intval), sound.currentTime = 0;
    }
    
}, 1000);
}

