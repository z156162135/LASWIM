function changewidth() {
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    if (height > width) {
        document.documentElement.style.fontSize = width / 1920 * 32 + 'px';
    } else {
        document.documentElement.style.fontSize = width / 1920 * 16 + 'px';
    }
}
changewidth();
window.onresize = function () {
    changewidth();
}