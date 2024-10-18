var li1 = document.querySelectorAll(".main>.goods>.list>li>div");
for (const i of li1) {
    i.onclick = function () {
        let flg = this.parentNode.querySelector('div>span:nth-child(2)').innerText;
        if (flg == "+") {
            for (const j of li1) {
                j.parentNode.querySelector('ul').style.display = "none";
                j.parentNode.querySelector('div>span:nth-child(2)').innerText = "+";
                for (const z of j.parentNode.querySelectorAll("ul>li")) {
                    if (z.querySelector('ul')) {
                        z.querySelector('ul').style.display = "none";
                        z.querySelector('span').flg = true;
                    }
                }
            }
            this.parentNode.querySelector('div>span:nth-child(2)').innerText = "-";
            this.parentNode.querySelector('ul').style.display = "block";
        } else {
            this.parentNode.querySelector('div>span:nth-child(2)').innerText = "+";
            this.parentNode.querySelector('ul').style.display = "none";
        }
    }
    for (const j of i.parentNode.querySelectorAll("ul>li>span")) {
        j.flg = true;
        j.onclick = function () {
            if (this.flg) {
                for (const g of this.parentNode.parentNode.querySelectorAll("li")) {
                    if (g.querySelector('ul')) {
                        g.querySelector('ul').style.display = "none";
                    }
                }
                this.parentNode.querySelector('ul').style.display = "block";
            } else {
                this.parentNode.querySelector('ul').style.display = "none";
            }
            this.flg = !this.flg;
        }
    }
}
for (const i of document.querySelectorAll(".main>.goods>div>.paging>img")) {
    i.onmouseover = function () {
        this.src = "./images/ProductsList2/paging/hoverBtn.png"
        if (this.className == "right") {
            this.style.transform = 'rotate(0deg)';
        } else {
            this.style.transform = 'rotate(180deg)';
        }
    }
    i.onmouseout = function () {
        this.src = "./images/ProductsList2/paging/btn.png"
        if (this.className == "right") {
            this.style.transform = 'rotate(180deg)';
        } else {
            this.style.transform = 'rotate(0deg)';
        }
    }
}