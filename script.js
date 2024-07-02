function updateTime() {
    const now = new Date();
    const options = { weekday: 'long' };
    document.getElementById('currentTime').textContent = now.toUTCString().split(' ')[4];
    document.getElementById('currentDay').textContent = now.toLocaleDateString('en-US', options);
}

updateTime();
setInterval(updateTime, 60000); // Update every minute

