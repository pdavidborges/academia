//alert('JS carregado!');
//SELEÇÃO/MANIPULAÇÃO DE DOM

var btnMenu = document.querySelector(".btn-menu");
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

//Trabalhando com EVENTOS

//Monitorando o btnMenu
//nome do evento, o que vai acontecer quando o evento ocorrer
btnMenu.addEventListener('click', function(){
    //console.log('clicou');
    //Adicionando/removendo uma classe ao menu
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
})

//ao clicar em algum item do menu, o menu será fechado
menu.addEventListener('click',function(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
})