let li = document.querySelectorAll('.main>.body>ul>li');
for (const i of li) {
    i.onclick = function () {
        for (const j of li) {
            j.style.backgroundColor = '#fff';
            j.style.color = '#7c7c7c';
        }
        this.style.backgroundColor = '#7c7c7c';
        this.style.color = '#fff';  
    }

}