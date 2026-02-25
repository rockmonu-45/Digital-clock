function updateClock() {

    // Get current India Time
    const options = { timeZone: "Asia/Kolkata" };
    const now = new Date().toLocaleString("en-US", options);
    const indiaTime = new Date(now);

    let hrs = indiaTime.getHours();
    let min = indiaTime.getMinutes();
    let sec = indiaTime.getSeconds();
    let dayIndex = indiaTime.getDay();

    // AM / PM
    let period = hrs >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // if 0 then 12

    // Add leading zero
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Update HTML
    document.getElementById("hrs").innerText = hrs;
    document.getElementById("min").innerText = min;
    document.getElementById("sec").innerText = sec;
    document.querySelector(".day").innerText = days[dayIndex] + " | " + period;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();