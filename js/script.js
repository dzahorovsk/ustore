
// вызов левого меню при клике на бургер

function openBurger() {
    document.getElementById('close').className = 'activeMenu';
}

function closeBurger() {
    document.getElementById('close').className = 'leftMenu';
}

function displayCatalog() {
    document.getElementById('shop').className = 'shop';
    document.getElementById('about').className = 'aclose';
    document.getElementById('buy').className = 'aclose';
    document.getElementById('contact').className = 'aclose';
    document.querySelector('.wood').classList.remove('close');
    document.querySelector('.top-shop').classList.remove('close');
    closeBurger();
}
function about() {
    document.getElementById('shop').className = 'aclose';
    document.getElementById('about').className = 'open';
    document.getElementById('buy').className = 'aclose';
    document.getElementById('contact').className = 'aclose';
    document.querySelector('.wood').classList.add('close');
    document.querySelector('.top-shop').classList.add('close');
    closeBurger();
}
function buy() {
    document.getElementById('shop').className = 'aclose';
    document.getElementById('about').className = 'aclose';
    document.getElementById('buy').className = 'open';
    document.getElementById('contact').className = 'aclose';
    document.querySelector('.wood').classList.add('close');
    document.querySelector('.top-shop').classList.add('close');
    closeBurger();
}
function contact() {
    document.getElementById('shop').className = 'aclose';
    document.getElementById('about').className = 'aclose';
    document.getElementById('buy').className = 'aclose';
    document.getElementById('contact').className = 'open';
    document.querySelector('.wood').classList.add('close');
    document.querySelector('.top-shop').classList.add('close');
    closeBurger();
}

// вызов панели фильтров для экрана менее 750px

function displayFilter() {
    document.querySelector('.menu').classList.toggle('show');
}

