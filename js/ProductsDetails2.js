var img = document.querySelectorAll(".main>.body>.details>.div1>ul>li>img");
var bigImg = document.querySelector(".main>.body>.details>.div1>div>img:nth-child(2)");
var btn = document.querySelectorAll(".main>.body>.details>.div1>div>img:not(:nth-child(2))");
for (const i of img) {
    // 鼠标移入
    i.onmouseover = function () {
        bigImg.src = this.src;
    }
    // 鼠标移出
    i.onmouseout = function () {
        bigImg.src = "./images/ProductsDetails2/details/big.png";
    }
}
var index = 1;

btn.forEach((i, a) => {
    i.onclick = function () {
        if (a == 1) {
            index++;
        } else {
            index--;
        }
        if (index == 1 || index == 3) {
            bigImg.src = "./images/ProductsDetails2/details/big.png";
            index = 1;
            return;
        } else if (index == 0) {
            index = 2;
        }
        bigImg.src = `./images/ProductsDetails2/details/d${index}.png`;
    }
});
var loadBtn = document.querySelectorAll(".main>.body>.resource>ul>li");
loadBtn.forEach((i, a) => {
    i.onclick = function () {
        if (a == 0) {
            loadBtn[0].style.backgroundColor = "#ececec";
            loadBtn[1].style.backgroundColor = "#fff";
        } else {
            loadBtn[1].style.backgroundColor = "#ececec";
            loadBtn[0].style.backgroundColor = "#fff";
        }
    }
})