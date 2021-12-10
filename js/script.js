
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

// функции отображения продуктов в строку или блоком

function displayBlock() {
    block = true;
    showAll(products);
    document.querySelector('.sort-block').classList.remove('sort-noactive');
    document.querySelector('.sort-block').classList.add('sort-active');
    document.querySelector('.sort-string').classList.remove('sort-active');
    document.querySelector('.sort-string').classList.add('sort-noactive');
    document.getElementById('tov').classList.remove('goods-string');
    document.getElementById('tov').classList.add('goods');
}
function displayString() {
    block = false;
    showAll(products);
    document.querySelector('.sort-string').classList.remove('sort-noactive');
    document.querySelector('.sort-string').classList.add('sort-active');
    document.querySelector('.sort-block').classList.remove('sort-active'); 
    document.querySelector('.sort-block').classList.add('sort-noactive');
    document.getElementById('tov').classList.remove('goods');
    document.getElementById('tov').classList.add('goods-string');
}

// функции отображения и закрытия корзины

function displayCart() {
    document.querySelector('.cart-boxx').classList.toggle('show');
}
function closeCart() {
    document.querySelector('.cart-boxx').classList.toggle('show');
}