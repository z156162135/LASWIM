var maskFlg = false;
var hflg = false;
document.querySelector(' .header>.nav>.div1').onclick = function () {
    document.querySelector('.header>.nav>.div2').style.display = 'block';
    if (hflg) {
        document.querySelector('.header>.nav>.div2').style.display = 'none';
        document.querySelector('.header>.mask').style.display = 'none';
        hflg = false;
        maskFlg = false;
    } else {
        hflg = true;
    }

}
// 显示遮罩层
function showMask() {
    let mask = document.querySelector('.mask');
    let jiantou = document.querySelector('.header>.nav>.div2>ul>li>a>img');
    if (maskFlg == false) {
        maskFlg = true;
        mask.style.display = 'block';
        let i = 0;
        let interval = setInterval(function () {
            mask.querySelector('div').style.height = i + 'rem';
            i++;
            if (i > 33) {
                clearInterval(interval);
            }
        }, 1);
        jiantou.style.transform = 'rotate(180deg)';
    } else {
        maskFlg = false;
        mask.style.display = 'none';
        let i = 33;
        let interval = setInterval(function () {
            mask.querySelector('div').style.height = i + 'rem';
            i--;
            if (i < 1) {
                clearInterval(interval);
            }
        }, 1);
        jiantou.style.transform = 'rotate(0deg)';
    }
}
function showDiv2(a) {
    let div2 = document.querySelector('.header>.mask>div>.div2');
    let img = document.querySelector('.header>.mask>div>.div1>ul>li>.j');
    let li = document.querySelectorAll('.header>.mask>div>.div1>ul>li');
    for (let i of li) {
        i.style.color = '#333';
    }
    a.style.color = '#0086aa';
    let i = 0;
    let interval = setInterval(function () {
        div2.style.width = i + '%';
        i++;
        if (i > 25) {
            clearInterval(interval);
        }
    }, 1);
    img.style.transform = 'rotate(0deg)';
    div2.style.display = 'block';
}
function showDiv3(a, src) {
    let div3 = document.querySelector('.header>.mask>div>.div3');
    let img = document.querySelector('.header>.mask>div>.div3>img');
    let span = document.querySelectorAll('.header>.mask>div>.div2>ul>li>span');
    img.src = src;
    let li2 = document.querySelectorAll('.header>.mask>div>.div2>ul>li');
    for (let i of li2) {
        i.style.color = '#333';
    }
    for (let i of span) {
        i.style.transform = "rotate(90deg)";
    }
    a.querySelector('span').style.transform = "rotate(0deg)";
    a.style.color = '#0086aa';
    div3.style.width = '50%';
    div3.style.display = 'block';
}