function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');

    box1.textContent = hours;
    box2.textContent = minutes;
    box3.textContent = seconds;

    // Add styles
    box1.style.color = 'white';
    box1.style.fontSize = '70px';
    box1.style.textAlign = "center";
    box2.style.color = 'white';
    box2.style.fontSize = '70px';
    box2.style.textAlign = "center";
    box3.style.color = 'white';
    box3.style.fontSize = '70px';
    box3.style.textAlign = "center";
}

setInterval(updateTime, 1000);
updateTime();

