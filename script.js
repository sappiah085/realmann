

    const toggler = document.querySelector('.toggle');
    const navlinks = document.querySelector('.navlinks');
    const nav = document.querySelector('.nav');
    toggler.addEventListener('click', ()=>{
        toggler.classList.toggle('active');
        nav.classList.toggle('active');
        navlinks.classList.toggle('active');
    });

    
    
 