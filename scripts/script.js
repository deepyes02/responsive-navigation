window.addEventListener("scroll", function(){
    if (window.innerWidth > 977) {
    const mainNav = document.querySelector('.mainNav');
    setTimeout(function(){
        mainNav.classList.toggle("sticky", window.scrollY > 0)
    }, 200)
    }
})

const mobileNavButton = document.getElementById('mobileNavButton');

mobileNavButton.addEventListener('click', ()=> {
    const mainNav = document.querySelector('.mainNav');
    setTimeout(function () {
            mainNav.classList.toggle("displayBlock");
        }, 300);
}, false);
