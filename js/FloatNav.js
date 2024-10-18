document.querySelector('.floatNav>ul>li:nth-child(7)>a').onclick = function () {
    var scrollY = window.scrollY || window.pageYOffset;
    let scrollYSetInterval = setInterval(function () {
        scrollY -=30;
        window.scroll(0, scrollY);
        if(scrollY <= 0){
            clearInterval(scrollYSetInterval);
        }
    }, 1)
}
