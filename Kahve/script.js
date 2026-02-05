const navBtn = document.querySelector(".navBtn");
const navbar = document.querySelector(".navbar");
const navbarHeader = document.querySelector(".navbarHeader");

navBtn.addEventListener("click",()=>{
    navbar.classList.add("showNavbar");
});

navbarHeader.addEventListener("click",()=>{
    navbar.classList.remove("showNavbar");
})