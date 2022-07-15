const navbar = document.getElementById('navbar')

window.onscroll = function(){
    "use strict";
    if(document.body.scrollTop > 200){
        navbar.classList.add('colored');
        navbar.classList.remove('nav-colored');
        
    }
    else if((document.body.scrollTop = 10)){
        navbar.classList.add('nav-colored');
        navbar.classList.remove('colored');
        
    }
}