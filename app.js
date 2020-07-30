function moveHands() {
    var date = new Date();
    var h = 30 * ((date.getHours() % 12) + date.getMinutes() / 60);
    var m = 6 * date.getMinutes();
    var s = 6 * date.getSeconds();
    document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";
    document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
    document.getElementById("hours").style.cssText = "-webkit-transform:rotate(" + h + "deg);";

    setTimeout(moveHands, 1000);
}

window.onload = moveHands;