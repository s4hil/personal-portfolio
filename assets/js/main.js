let show_nav = false;
const navBtn = document.querySelector('.nav-btn');
const navBar = document.querySelector('.nav-list');
navBtn.addEventListener('click', function() {
    if(show_nav == false){
        navBtn.innerHTML = "<i class='fas fa-times'>";
        navBar.classList.add('show-nav');
        show_nav = true;
    }
    else {
        navBtn.innerHTML = "<i class='fas fa-bars'>";
        navBar.classList.remove('show-nav');
        show_nav = false;
    }
});