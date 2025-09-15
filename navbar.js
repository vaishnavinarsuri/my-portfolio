let toggler=document.querySelector(".nav-toggler");
toggler.addEventListener("click",makeCross);

function makeCross(){
    toggler.classList.toggle("active");
   
    let nav=document.querySelector(".nav");
    nav.classList.toggle("open");

    if(nav.classList.contains("open"))
    {
        nav.style.maxHeight=nav.scrollHeight+"px";
    }
    else{
        nav.removeAttribute("style")
    }
}