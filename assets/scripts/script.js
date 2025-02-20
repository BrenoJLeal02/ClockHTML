const hoursBr = document.getElementById('hours-br');
const minutesBr = document.getElementById('minutes-br');
const secondsBr = document.getElementById('seconds-br');
const hoursJp = document.getElementById('hours-jp');
const minutesJp = document.getElementById('minutes-jp');
const secondsJp = document.getElementById('seconds-jp');
const hoursUk = document.getElementById('hours-uk');
const minutesUk = document.getElementById('minutes-uk');
const secondsUk = document.getElementById('seconds-uk');

const updateClock = () => {
    const dateBr = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const dateJp = new Date().toLocaleString("en-GB", { timeZone: "Asia/Tokyo" });
    const dateUk = new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });

    const [hourBr, minuteBr, secondBr] = dateBr.split(' ')[1].split(':');
    const [hourJp, minuteJp, secondJp] = dateJp.split(' ')[1].split(':');
    const [hourUk, minuteUk, secondUk] = dateUk.split(' ')[1].split(':');

    hoursBr.textContent = hourBr.padStart(2, '0');
    minutesBr.textContent = minuteBr.padStart(2, '0');
    secondsBr.textContent = secondBr.padStart(2, '0');

    hoursJp.textContent = hourJp.padStart(2, '0');
    minutesJp.textContent = minuteJp.padStart(2, '0');
    secondsJp.textContent = secondJp.padStart(2, '0');

    hoursUk.textContent = hourUk.padStart(2, '0');
    minutesUk.textContent = minuteUk.padStart(2, '0');
    secondsUk.textContent = secondUk.padStart(2, '0');
};

setInterval(updateClock, 1000);
