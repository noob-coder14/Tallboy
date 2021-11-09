var navToggle = document.querySelector('.btn-open');
var navTarget = document.querySelector('.nav-toggle');
navToggle.addEventListener('click', () => {
  navTarget.classList.toggle('nav-show');
    let btnIcon=navToggle.querySelector('i')
    if(btnIcon.classList.contains('bx-menu')){
        btnIcon.classList.value='bx bx-x';

    }
    else{
        btnIcon.classList.value='bx bx-menu';
    }
})


// work-slider