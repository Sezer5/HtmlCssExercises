let mobileLinkMain = document.querySelector(".mobileLinkMain");
let header = document.querySelector(".header");

function displayHeaderMenu(){
    if(mobileLinkMain.style.display==="none"){
        mobileLinkMain.style.display="block";
        header.style.height="auto";
    }else{
        mobileLinkMain.style.display="none";
    }
}