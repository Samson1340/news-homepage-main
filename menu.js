const menu = document.getElementById("menu");
const menuClose = document.getElementById("menu-close");
const navBar = document.getElementById("nav-bar");

menu.onclick = function(){

    navBar.style.display = 'block';
}

menuClose.onclick= function(){

    navBar.style.display = 'none';
}