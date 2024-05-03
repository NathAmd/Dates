function calcTime(city, offset) {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * offset));
    return "local time on " + city + " is " + nd.toLocaleString();
}

console.log(calcTime("Anchorage", -8));
console.log(calcTime("Reykjavik", 0));
console.log(calcTime("Saint-Petersburg", 3));
console.log(calcTime("bruxelles", 2));

// exercice 2

function DayOld() {
    const CurrentDate = new Date();
    const BirthdayDate = new Date('1999-06-02');
    const date = CurrentDate.getTime() - BirthdayDate.getTime();
    return date / (1000 * 60 * 60 * 24);
}

console.log(DayOld());

// exercice 3

let HoursAfterToday = (event) => {
    let h = event.target.value;
    let today = new Date();
    document.getElementById('hoursToday').textContent = (new Date(today.getTime() + (h * (1000 * 60 * 60)) - (today.getTimezoneOffset() * 60000))).toUTCString();
}

document.getElementById('hours').addEventListener('keyup', HoursAfterToday);

// exercice 4
let Format12 = false;

function getDay(nbr) {
    let day = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    return day[nbr];
}

let int = setInterval(() => {
    let date = new Date();

    document.getElementsByClassName('dayName')[0].textContent = getDay(date.getDay() - 1);
    document.getElementsByClassName('day')[0].textContent = date.getDate();
    document.getElementsByClassName('month')[0].textContent = (date.getMonth() + 1);
    document.getElementsByClassName('years')[0].textContent = date.getFullYear();
    document.getElementsByClassName('hour')[0].textContent = (Format12 ? date.getHours() : date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + ":" + date.getMinutes() + ":";
    document.getElementsByClassName('seconde')[0].textContent = (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds()) + "" + (!Format12 ? (date.getHours() > 12 ? " pm" : " am") : "");
}, 1000)

let changeTimeFormat = (event) => {
    Format12 = !Format12;
}

document.getElementById('changeTime').addEventListener('click', changeTimeFormat);