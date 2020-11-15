// Selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const day = document.getElementById("day");

// Event listener
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);


// Functions
function showtime() {
    let today = new Date(); // returns today's date
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.toDateString();

    // Am Pm Format
    const AmPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hrs Format
    hour = hour % 12 || 12

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${AmPm}`;
    day.innerHTML = `${date}`;
    setTimeout(showtime, 1000); // calls the function every second
}

// Converting to decimal
function addZero(n) {
    return ((parseInt(n, 10)) < 10 ? "0" : "") + n;
}

function setGreeting() {
    let today = new Date(); // returns today's date
    let hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = "url('../images/morning.png')";
        greeting.innerHTML = "Good Morning";
        // document.querySelector('h1').style.color = "black";
        // document.querySelector('h2').style.color = "black";
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('../images/Noon.jpg')";
        greeting.innerHTML = "Good Afternoon";
        // document.body.style.color = "white";
        // document.querySelector('h1').style.color = "black";
        // document.querySelector('h2').style.color = "black";
    } else {
        document.body.style.backgroundImage = "url('../images/night.png')";
        greeting.innerHTML = "Good Evening";
    }
}

function getName() {
    if (localStorage.getItem('myname') === null) {
        name.innerHTML = "[Enter Name Here]";
    } else {
        name.innerHTML = localStorage.getItem('myname');
    }
}

function setName(e) {
    if (e.type === "keypress") {

        if (e.keyCode === 13) {
            localStorage.setItem('myname', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('myname', e.target.innerHTML);
    }
}

// Function call
showtime();
setGreeting();
getName();