function greetUser() {
    let enter_time = parseInt(document.getElementById('timeInput').value);
    let output = document.getElementById('output');
    
    output.innerHTML = `Hours: <b>${enter_time}</b><br>`;

    if (enter_time >= 0 && enter_time < 1200) {
        output.innerHTML += `Greeting: <b>"Good Morning!"</b>`;
    } else if (enter_time >= 1200 && enter_time < 1700) {
        output.innerHTML += `Greeting: <b>"Good Afternoon!"</b>`;
    } else if (enter_time >= 1700 && enter_time < 2100) {
        output.innerHTML += `Greeting: <b>"Good Evening!"</b>`;
    } else if (enter_time >= 2100 && enter_time < 2400) {
        output.innerHTML += `Greeting: <b>"Good Night!"</b>`;
    } else {
        output.innerHTML += `Error: <b>"Enter correct Timing!"</b>`;
    }
}