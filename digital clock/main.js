function showtime() {
    let time = new Date();
    let hours =  time.getHours();
    let minutes =  time.getMinutes();
    let seconds = time.getSeconds();

    document.getElementById("digital").innerText = hours + ":" + minutes + ":" + seconds ;
}
 setInterval(showtime , 1000);