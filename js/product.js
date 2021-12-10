let page = document.querySelector('#tov');
let pagination = document.querySelector('#stran');
let currentPage = 1;
let notesonPage = 6;
let arrPageButton = [];
let count = 0
let block = true;
let countCart = 0;

let cartShow = document.querySelector('.countCart');
let clearCart = document.querySelector('.clearCart-active');

let data = JSON.parse(JSON.stringify(products));
let newProduct = JSON.parse(JSON.stringify(products));
let prodCart = [];
let notesCart = JSON.parse(JSON.stringify(products));


// функция принимающая массив объектов - изначально должна вызываться после проверки локал-сторедж
// на предмет сосдержания строки или после нажатия клавиш применения фильтров и сортировки

addData();
checkStorage();
checkLocalCart();
showAll(newProduct);
emptyCart();

// ------------------------------------------------------------------------------------------------
function showAll(pr) {
    startSort(pr);
    addPageButton(pr);
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
        product_addCart.setAttribute('id', `${note.id}`);
        if (note.sklad > 0) {
            product_addCart.setAttribute('class', 'product-cart');
            product_addCart.addEventListener('click', addToCart);
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
