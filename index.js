const openNav = document.querySelector('.fa-bars');
const closeNav = document.querySelector('.fa-xmark');
const navList = document.querySelector('.nav__list');

closeNav.style.display = 'none';

function closeNavBar() {
    navList.classList.add('hidden');
    closeNav.style.display = 'none';
    openNav.style.display = 'block';
}

openNav.addEventListener('click', function () {
    navList.classList.remove('hidden');
    closeNav.style.display = 'block';
        openNav.style.display = 'none';
})

closeNav.addEventListener('click', closeNavBar);

// document.body.addEventListener('click', closeNavBar);