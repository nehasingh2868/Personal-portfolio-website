burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
navlist = document.querySelector('.navitems')

burger.addEventListener('click', ()=>{
  navlist.classList.toggle('v-class-resp');
  logo.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})


