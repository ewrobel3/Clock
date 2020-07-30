function moveHands() {
    var date = new Date();
    var h = 30 * ((date.getHours() % 12) + date.getMinutes() / 60);
    var m = 6 * date.getMinutes();
    var s = 6 * date.getSeconds();

    var textTime = "";
    if(date.getHours() < 10) {
        textTime += "0";
    }
    textTime += `${date.getHours()}:`;
    if(date.getMinutes() < 10) {
        textTime += "0";
    }
    textTime += `${date.getMinutes()}:`;
    if(date.getSeconds() < 10) {
        textTime += "0";
    }
    textTime += `${date.getSeconds()}`;

    document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";
    document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById("hours").style.cssText = "-webkit-transform:rotate(" + h + "deg);";
    document.getElementById("digTime").innerHTML = textTime;
    setTimeout(moveHands, 1000);
}

window.onload = moveHands;