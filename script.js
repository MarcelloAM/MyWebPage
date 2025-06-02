const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-solid fa-x');
    navbar.classList.toggle('active');
}
/*Verificar o por que essa funcão não funciona.*/