var img = document.querySelector('.main>.banner>img');
var li = document.querySelectorAll('.main>.banner>ul>li>img');
let a = 0;
li.forEach((i, index) => {
    i.onclick = function () {
        if (index == a) {
            return;
        }
        a = index;
        img.style.opacity = 0;
        setTimeout(function () {
            img.src = i.src;
            img.style.opacity = 1;
        }, 500)
        for (const j of li) {
            j.parentNode.querySelector('p').style.color = '#fff';
            j.parentNode.style.borderColor = '#fff';
        }
        this.parentNode.style.borderColor = 'red';
        this.parentNode.querySelector('p').style.color = 'red';
    }
});
let flg = true;
let ul = document.querySelector('.main>.banner>ul');
document.querySelector('#hand').onclick = function () {
    if (flg) {
        ul.style.opacity = '0';
        setTimeout(function () {
            ul.style.display = 'none';
        }, 500)
        flg = false;
    } else {
        ul.style.display = 'flex';
        setTimeout(function () {
            ul.style.opacity = '1';
        }, 1)
        flg = true;
    }
}

