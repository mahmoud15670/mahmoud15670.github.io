document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('nav a[href="#services"]').addEventListener('click', move_services);
    document.querySelector('nav a[href="#projects"]').addEventListener('click', move_projects);
    document.querySelector('nav a[href="#certificates"]').addEventListener('click', move_certificates);
    document.querySelector('nav a[href="#contct"]').addEventListener('click', move_contct);
    window.addEventListener('scroll', () => {
        if (window.scrollY === 600) {
            move_services()
        }
        if (window.scrollY === 1300) {
            move_projects()
        }
        if (window.scrollY === 2300) {
            move_certificates()
        }
        if (window.scrollY === 2900) {
            move_contct()
        }
    });
});

function move_services() {
    document.querySelector('#web').classList.toggle('move');
    document.querySelector('#python').classList.toggle('move_revers');
}
function move_projects() {
    document.querySelector('#commerce').classList.toggle('move');
    document.querySelector('#tic').classList.toggle('move_revers');
}
function move_certificates() {
    document.querySelector('#cs50x').classList.toggle('move');
    document.querySelector('#cs50w').classList.toggle('move_revers');
}
function move_contct() {
    document.querySelector('#num').classList.toggle('move');
    document.querySelector('#gmail').classList.toggle('move_revers');
}