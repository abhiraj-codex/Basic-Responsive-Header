const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn')
const navMenu = document.querySelector('.nav-item');

function lets(){
menuButton.classList.toggle('active');
closeButton.classList.toggle('no-active');
navMenu.classList.toggle('nooo-active');


}

// Typed js I will Post a overview soon

let typed = new Typed('.heelo', {
  strings: ["Responsive Header.", "Follow For more." , 'Github - abhiraj-codex'],
  typeSpeed: 30,
  loop:true,

});



