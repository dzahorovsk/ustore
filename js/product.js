let products = [
    {
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
    {
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 0,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
    {
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': false,
        'display': 55,
        'wifi': true,
    },
    {
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': false,
    },
    {
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },{
        'name': 'Телевизор 55" Samsung UE55AU7100UXUA Black',
        'cost': 19499,
        'img': 'assets/product/samsung42.jpg',
        'sklad': 10,
        'type': 'samsung',
        'tag': 1,
        'smart': true,
        'display': 55,
        'wifi': true,
    },
]

let newProduct; 

let page = document.querySelector('#tov');
let pagination = document.querySelector('#stran');
let currentPage = 1;
let notesonPage = 6;
let arrPageButton = [];
let count = 0;


// функция принимающая массив объектов - изначально должна вызываться после проверки локал-сторедж
// на предмет сосдержания строки или после нажатия клавиш применения фильтров и сортировки

showAll(products);

// ------------------------------------------------------------------------------------------------
function showAll(pr) {
    newProduct = JSON.parse(JSON.stringify(pr));
    addPageButton(newProduct);
    showPage(arrPageButton[0]);
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
        div.setAttribute('class', 'p1');
        page.appendChild(div);
        let div_product = document.createElement('div');
        div_product.setAttribute('class', 'product');
        div.appendChild(div_product);
        // фото товара
        let product_img = document.createElement('div');
        product_img.setAttribute('class', 'product-img');
        div_product.appendChild(product_img);
        let imgItems = document.createElement('img');
        imgItems.setAttribute('src', `${note.img}`);
        imgItems.setAttribute('id', 'images');
        product_img.appendChild(imgItems);
        // название товара
        let product_name = document.createElement('div');
        product_name.setAttribute('class', 'product-name');
        product_name.innerHTML = note.name;
        div_product.appendChild(product_name);
        // наличие товара
        let product_available = document.createElement('div');
        product_available.setAttribute('class', 'product-available');
        if (note.sklad > 0) {
            product_available.innerHTML = 'Есть в наличии';
            product_available.style.color = 'green';
        }
        else {
            product_available.innerHTML = 'Нет в наличии';
            product_available.style.color = 'red';
        }
        div_product.appendChild(product_available);
        // контейнер цены и кнопки в корзину
        let product_footer = document.createElement('div');
        product_footer.setAttribute('class', 'product-footer');
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
