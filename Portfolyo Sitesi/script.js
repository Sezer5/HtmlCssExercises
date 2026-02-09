const navBtn = document.querySelector('.navBtn');
const sidebar = document.querySelector('#sidebar');
const closeBtn = document.querySelector('#closeBtn');
const sidebarLinks = document.querySelector('.sidebarLinks');


navBtn.addEventListener("click",()=>{
    sidebar.classList.add('showSidebar');
});

closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove('showSidebar');
})

sidebarLinks.addEventListener("click",()=>{
    sidebar.classList.remove('showSidebar');
})