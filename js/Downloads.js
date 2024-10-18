var li = document.querySelectorAll('.main>.list>.left>li');
for (const i of li) {
    i.onclick = function () {
        for (const j of li) {
                j.style.border = 'none';
        }
        this.style.borderLeft = '.3125rem solid #0086aa';
    }
}