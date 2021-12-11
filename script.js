const menu = document.querySelector(".navlinks");
const ul = document.querySelector(".nav");
function my() {
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        setTimeout(()=>{ul.style.display = "block"} ,500)
    }
    else{
        setTimeout(()=>{ul.style.display = "none"} ,200)
        
    }
        

}