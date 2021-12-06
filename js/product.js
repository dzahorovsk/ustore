let products = [
    {
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'Samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
    {
        'name': 'Телевизор 48" LG OLED48C14LB Black',
        'cost': 32000,
        'img': 'assets/product/lg48.jpg',
        'sklad': 5,
        'type': 'LG',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
    {
        'name': "Телевизор Kivi 32H740LW",
        'cost': 6000,
        'img': 'assets/product/kivi32.jpg',
        'sklad': 5,
        'type': 'Kivi',
        'tag': 1,
        'smart': false,
        'display': 55,
        'wifi': true,
    },
    {
        'name': 'Телевизор 43" Xiaomi Mi TV P1 43 Black',
        'cost': 11999,
        'img': 'assets/product/xiaomi32.jpg',
        'sklad': 10,
        'type': 'Xiaomi',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': false,
    },
    {
        'name': 'Телевизор 75" Samsung QE75Q70AAUXUA Black',
        'cost': 74999,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 0,
        'type': 'Samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': "Телевизор Xiaomi Mi TV 4A 32",
        'cost': 12900,
        'img': 'assets/product/xiaomi32.jpg',
        'sklad': 3,
        'type': 'Xiaomi',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': "LG",
        'cost': 14000,
        'img': 'assets/product/lg48.jpg',
        'sklad': 8,
        'type': 'LG',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': "LG",
        'cost': 4000,
        'img': 'assets/product/lg48.jpg',
        'sklad': 1,
        'type': 'LG',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': "Samsung",
        'cost': 11000,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 0,
        'type': 'Samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': "Samsung",
        'cost': 11000,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 5,
        'type': 'Samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
    {
        'name': "Samsung",
        'cost': 11000,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 5,
        'type': 'Samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
];

let newProduct = JSON.parse(JSON.stringify(products));

let page = document.querySelector('#tov');
let pagination = document.querySelector('#stran');
let currentPage = 1;
let notesonPage = 6;
let arrPageButton = [];
let count = 0;
let block = true;

// функция принимающая массив объектов - изначально должна вызываться после проверки локал-сторедж
// на предмет сосдержания строки или после нажатия клавиш применения фильтров и сортировки

showAll(newProduct);

// ------------------------------------------------------------------------------------------------
function showAll(pr) {
    addPageButton(pr);
    showPage(arrPageButton[0]);
}

// -------------------------------- фильтры -------------------------------------------------------
function toClear() {
    newProduct = JSON.parse(JSON.stringify(products));
    showAll(newProduct); 
}

// кнопка применить фильтр
function allFilter() {
    newProduct = JSON.parse(JSON.stringify(products));
    selectFilter(newProduct);
}

// функция обработки фильтров 

function selectFilter(arrPr) {
    let temp = [];
    arrPr.forEach((item) => {
        // проверка фильтров и формирование массива объектов удовлетворяющего всем условиям, пока только одному :)
        // остальные нужно тянуть с формы, когда она будет готова
        if (item.type === 'Samsung') {
            temp.push(item);
        }
        // if (item.type === 'LG') {
        //     temp.push(item);
        // }
    });
    newProduct = temp;
    showAll(newProduct);
}




function addPageButton(sortProduct) {
    count = Math.ceil(sortProduct.length / notesonPage);
    let divContent = '<div class="page-nav-back" id="prev" style="display: none;">&lt;</div>';
    for (let i = 1; i <= count; i++) {
        divContent += '<div id="p-' + i + '"' + (i === +currentPage ? 'class="select-page act"' : 'class="page act"') + '>' + i + '</div>'
    }
    divContent += '<div class="page-nav-next" id="next">&gt;</div>';
    pagination.innerHTML = divContent;
    arrPageButton = document.querySelectorAll('.act');
    for (let item of arrPageButton) {
        item.addEventListener('click', function () {
            showPage(this);
        });
    }
    document.querySelector('.page-nav-back').addEventListener('click', backPage);
    document.querySelector('.page-nav-next').addEventListener('click', nextPage);    
    if (count === 1) {
        document.querySelector('.pages').style.display = "none";
    }
    else {
        document.querySelector('.pages').style.display = "flex";
    }
}

function backPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(arrPageButton[currentPage - 1]);
    }
}
function nextPage() {
    if (currentPage < count) {
        currentPage++;
        showPage(arrPageButton[currentPage - 1]);
    }
}

function showPage(item) {
    let pageNum = +item.innerHTML;
    currentPage = pageNum;
    addPageButton(newProduct);
    if (currentPage == 1) {
        document.querySelector('#prev').style.display = "none";
    } 
    else {
        document.querySelector('#prev').style.display = "block";
    }
    if (currentPage == count) {
        document.querySelector('#next').style.display = "none";
    }
    else {
        document.querySelector('#next').style.display = "block";
    }
    let pagenum = +item.innerHTML;
    let start = (pagenum - 1) * notesonPage;
    let end = start + notesonPage;
    page.innerHTML = '';
    let notes = newProduct.slice(start, end);
    for (let note of notes) {
        let div = document.createElement('div');
        let div_product = document.createElement('div');
         // фото товара
        let product_img = document.createElement('div');
        let imgItems = document.createElement('img');
        // название товара
        let product_name = document.createElement('div');
        // контейнер цены и кнопки в корзину
        let product_footer = document.createElement('div');
        // наличие товара
        let product_available = document.createElement('div');
        if (note.sklad > 0) {
            product_available.innerHTML = 'Есть в наличии';
            product_available.style.color = 'green';
        }
        else {
            product_available.innerHTML = 'Нет в наличии';
            product_available.style.color = 'red';
        }
        if (block) {
            div.setAttribute('class', 'p1');
            div_product.setAttribute('class', 'product');
            product_img.setAttribute('class', 'product-img');
            imgItems.setAttribute('src', `${note.img}`);
            imgItems.setAttribute('id', 'images');
            div_product.appendChild(product_img);
            product_img.appendChild(imgItems);
            product_name.setAttribute('class', 'product-name');
            product_name.innerHTML = note.name;
            div_product.appendChild(product_name);
            product_available.setAttribute('class', 'product-available');
            product_footer.setAttribute('class', 'product-footer');
            div_product.appendChild(product_available);
            page.appendChild(div);
            div.appendChild(div_product);
        }
        else {
            div.setAttribute('class', 'p1-string');
            div_product.setAttribute('class', 'product-string');
            page.appendChild(div);
            div.appendChild(div_product);
            product_img.setAttribute('class', 'product-img-string');
            imgItems.setAttribute('src', `${note.img}`);
            imgItems.setAttribute('id', 'images');
            product_name.setAttribute('class', 'product-name-string');
            product_name.innerHTML = note.name;
            product_available.setAttribute('class', 'product-available');
            product_footer.setAttribute('class', 'product-footer-string');
            div_product.appendChild(product_img);
            product_img.appendChild(imgItems);
            div_product.appendChild(product_name);
            product_name.appendChild(product_available);
        }
        
        div_product.appendChild(product_footer);
        // цена товара
        let product_price = document.createElement('div');
        product_price.setAttribute('class', 'product-price');
        if (note.sklad > 0) {
            product_price.innerHTML = `${note.cost} &#8372`;
            product_price.style.color = 'black';
        }
        else {
            product_price.innerHTML = `${note.cost} &#8372`;
            product_price.style.color = 'lightgray';
            product_price.style.fontStyle = 'italic';
        }
        product_footer.appendChild(product_price);
        // кнопка В КОРЗИНУ
        let product_addCart = document.createElement('div');
        product_addCart.innerHTML = 'В корзину';
        if (note.sklad > 0) {
            product_addCart.setAttribute('class', 'product-cart');
        }
        else {
            product_addCart.setAttribute('class', 'product-lost');
        }
        product_footer.appendChild(product_addCart);
        // подробное описание товара
        let div_product_desc = document.createElement('div');
        div_product_desc.setAttribute('class', 'product-desc');
        div.appendChild(div_product_desc);
        // Диагональ
        let product_display = document.createElement('div');
        product_display.setAttribute('class', 'product-desc-name');
        product_display.innerHTML = `Диагональ экрана:  <span>${note.display}"</span> `;
        div_product_desc.appendChild(product_display);
        // смарт ТВ
        let product_smart = document.createElement('div');
        product_smart.setAttribute('class', 'product-desc-name');
        product_smart.innerHTML = (note.smart ? `Smart TV:  <span>Есть</span>` : `Smart TV:  <span>Нет</span>`);
        div_product_desc.appendChild(product_smart);
        // Вайфай
        let product_wifi = document.createElement('div');
        product_wifi.setAttribute('class', 'product-desc-name');
        product_wifi.innerHTML = (note.wifi ? `Wi-Fi:  <span>Есть</span>` : `Wi-Fi:  <span>Нет</span>`);
        div_product_desc.appendChild(product_wifi);
    }  
}
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