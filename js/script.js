var hamburger = document.querySelector('#hamburger');
var hamMenu = document.querySelector('#hamburgerMenu')
var exit = document.querySelector('#ex')
var dark = document.querySelector('#dark')
var logoDark = document.querySelector('#logoDark')
var libtn = document.querySelector('#libtn')
var darbtn = document.querySelector('#darbtn')


hamburger.addEventListener("click",function() {
    hamMenu.classList.add("active")
})

exit.addEventListener("click",function() {
    hamMenu.classList.remove("active")
})

libtn.addEventListener("click",function() {
    dark.classList.add("light");
})

darbtn.addEventListener("click",function() {
    dark.classList.remove("light");
})


