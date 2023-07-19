document.addEventListener('DOMContentLoaded', () => {
    let block = document.querySelector('.content-bar__container_hidden');
    let btnOpenBlock = document.querySelector('.content-bar__button');

    console.log(block);

    btnOpenBlock.addEventListener('click', () => {
        btnOpenBlock.style.display = 'none';
        block.classList.add('active');
    })
})