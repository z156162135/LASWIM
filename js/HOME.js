var ul1 = document.querySelectorAll('.main>.banner>.ul1>li');
var ul2 = document.querySelector('.main>.banner>.ul2');
var i = -100;
var index = 1;
var flg = true;
function change() {
    ul2.style.transform = `translateX(${i}%)`;
    for (const j of ul1) {
        j.style.backgroundColor = '#fff';
    }
    ul1[index].style.backgroundColor = '#0086aa';
    if (i <= -100) {
        flg = !flg
        i += 100;
        index--;
    } else if (i >= 0) {
        flg = !flg
        i -= 100;
        index++;
    } else if (flg) {
        i -= 100;
        index++;
    } else {
        i += 100;
        index--;
    }
}
var banner = setInterval(change, 3000)
ul1.forEach((item, a) => {
    item.onmouseover = function () {
        clearInterval(banner);
        index = a;
        i = 0 - a * 100
        for (const j of ul1) {
            j.style.backgroundColor = '#fff';
        }
        ul1[index].style.backgroundColor = '#0086aa';
        ul2.style.transform = `translateX(${i}%)`;
    }
    item.onmouseout = function () {
        banner = setInterval(change, 3000)
    }
});
var btn = document.querySelectorAll('.main>.goods>div>img');
btn.forEach((item, index) => {
    item.onmouseover = function () {
        if (index == 0) {
            this.style.transform = 'rotate(180deg)';
        } else {
            this.style.transform = 'rotate(0deg)';
        }
        this.src = './images/HOME/goods/hover箭头.png';
    }
    item.onmouseout = function () {
        this.src = './images/HOME/goods/箭头.png';
        if (index == 0) {
            this.style.transform = 'rotate(0deg)';
        } else {
            this.style.transform = 'rotate(180deg)';
        }
    }
});
var div = document.querySelector('.main>.goods>div>ul>div');
var one = 100;
var page = 0;
btn[0].onclick = function () {
    if (page < 0) {
        page += 25;
        div.style.transform = `translateX(${page}rem)`;
    }
}
btn[1].onclick = function () {
    if (page > 0 - one) {
        page -= 25;
        div.style.transform = `translateX(${page}rem)`;
    }
}