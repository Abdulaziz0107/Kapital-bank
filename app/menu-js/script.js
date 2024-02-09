const hamburger = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    console.log("Js");
});
