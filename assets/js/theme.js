const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');
const body = document.querySelector('body');






openMenu.addEventListener('click',show);


closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
        
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    body.style.overflow = 'hidden';
}
function close(){
    mainMenu.style.top = '-100%';
    body.style.overflow = 'scroll';
    body.style.overflowX = 'hidden';
    
}


$("#myField").keyup(function() {
    $("#myField").val(this.value.match(/[0-9]*/));
});