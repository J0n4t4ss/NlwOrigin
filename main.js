//open and close menu when you click on icon

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle){
    element.addEventListener('click', function (){
        nav.classList.toggle('show')
    })
}

//when you click in a menu icon, hidden menu

const links = document.querySelectorAll('nav ul li a')

for (const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

//header scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
})

//TESTIMONIALS CAROUSEL

const swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   pagination: {
       el:'.swiper-pagination'
   },
   mousewheel: true,
   Keyboar: true
  });

