document.addEventListener('DOMContentLoaded', () => {
    let block = document.querySelector('.content-bar__container_hidden');
    let btnOpenBlock = document.querySelector('.content-bar__button');

    console.log(block);

    btnOpenBlock.addEventListener('click', () => {
        btnOpenBlock.style.display = 'none';
        block.classList.add('active');
    })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250ZW50LWJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbGV0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYmFyX19jb250YWluZXJfaGlkZGVuJyk7XHJcbiAgICBsZXQgYnRuT3BlbkJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtYmFyX19idXR0b24nKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhibG9jayk7XHJcblxyXG4gICAgYnRuT3BlbkJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJ0bk9wZW5CbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfSlcclxufSkiXSwiZmlsZSI6ImNvbnRlbnQtYmFyLmpzIn0=