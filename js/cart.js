
function clearLocalCart() {
    document.querySelector('.cart-boxx').classList.toggle('show');
    clearCart.classList.add('clearCart');
    prodCart = [];
    cartShow.innerHTML = '0';
    countCart = 0;
    totalPrice = 0;
    products = JSON.parse(localStorage.getItem('data'));
    newProduct = JSON.parse(JSON.stringify(products));
    innerCart.innerHTML = 'Ваша корзина пуста!'
    allPrice.innerHTML = '';
    allFilter();
    showPr();
    data = JSON.parse(JSON.stringify(products));
    localStorage.clear();
    addData();
}


function addToCart() {
    clearCart.classList.remove('clearCart');
    let ide = this.id;
    for (let note of notesCart) {
        if (note.id === ide) {
            if (!prodCart.find(
                element => 
                element.id === note.id)
                ) {
                    prodCart.push(note);
                    note.sklad = 1;  
                    countCart++;
                }
            else {
                note.sklad++;  
                countCart++;
            }
            addLocalCart(prodCart);
        } 
    }
    printCart();
    let items = products.slice();
    for (let item of items) {
        if (item.id === ide) {
            item.sklad--;
            addLocalProducts(products);
            if (item.sklad === 0 ) {
                let av = document.querySelector(`#${this.id}_.product-available`);
                let pr = document.querySelector(`#${this.id}__.product-price`);
                this.setAttribute('class', 'product-lost');
                this.removeEventListener('click', addToCart);
                av.innerHTML = 'Нет в наличии';
                av.style.color = 'red';
                pr.style.color = 'lightgray';
                pr.style.fontStyle = 'italic';
            }    
        }    
    }
}

function printCart() {
    let countPrice = 0;
    innerCart.innerHTML = '';
    let tbl = document.createElement('table');
    tbl.className = 'table-cart';
    for(let i = 0; i < prodCart.length; i++){
        let tr = tbl.insertRow();
        let td1 = tr.insertCell();
        let p_name = prodCart[i].name;
        td1.appendChild(document.createTextNode(`${p_name}`));
        td1.className = 'table-cell';
        let td2 = tr.insertCell();
        let p_cost = +prodCart[i].cost;
        td2.appendChild(document.createTextNode(`${p_cost} ₴`));
        td2.className = 'table-cell-cost';
        let td3 = tr.insertCell();
        let p_sklad = +prodCart[i].sklad;
        td3.appendChild(document.createTextNode(`${p_sklad}`));
        td3.className = 'table-cell-cost';
        let td4 = tr.insertCell();
        let p_price = p_cost * p_sklad;
        countPrice += p_price;
        td4.appendChild(document.createTextNode(`${p_price} ₴`));
        td4.className = 'table-cell-cost';
        let td5 = tr.insertCell();
        let p_del = prodCart[i].id;
        td5.setAttribute('id', `${p_del}`);
        td5.appendChild(document.createTextNode(`\u2612`));
        td5.className = 'table-del';
        td5.addEventListener('click', delFromCart);
    }
    totalPrice = countPrice;
    innerCart.appendChild(tbl);
    allPrice.innerHTML = `Итого: ${totalPrice} &#8372`;
}

function delFromCart() {
    displayCart();
    if (countCart > 0) {
        let idc = this.id;
        let sklad = 0;
        let items = prodCart.slice();
        for (let item of items) {
            if (item.id === idc) {
                countCart = countCart - item.sklad;
                sklad = item.sklad;
                if (countCart === 0) {
                    clearCart.classList.add('clearCart');
                }
            } 
        }
        prodCart = prodCart.filter((it) => it.id !== idc);
        displayCart();
        addLocalCart(prodCart);
        let notes = products.slice();
        for (let note of notes) {
            if (note.id === idc) {
                note.sklad = note.sklad + sklad;
                addLocalProducts(products);
                showPr();
            } 
        }
    } 
}



// функции отображения и закрытия корзины

function displayCart() {
    document.querySelector('.cart-boxx').classList.toggle('show');
    if (countCart === 0) {
        innerCart.innerHTML = 'Ваша корзина пуста!'
        totalPrice = 0;
        allPrice.innerHTML = '';
    }
    else {
        printCart();
    }
}
function closeCart() {
    document.querySelector('.cart-boxx').classList.toggle('show');
}


function emptyCart() {
    for (let note of notesCart) {
        note.sklad = 1;
    }
}

function addLocalCart(localCart) {
    localStorage.setItem('cart', JSON.stringify(localCart));
    cartShow.innerHTML = `${countCart}`;
}

function checkLocalCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify(prodCart));
        cartShow.innerHTML = '0';
    }  
    else {
        prodCart = JSON.parse(localStorage.getItem('cart'));
        for (let item of prodCart) {
            countCart += item.sklad;
        }
        cartShow.innerHTML = `${countCart}`;
    }
    if (countCart > 0) {
        clearCart.classList.remove('clearCart');
    }
    if (countCart === 0) {
        innerCart.innerHTML = 'Ваша корзина пуста!'
    }
}


function addLocalProducts(localProducts) {
    if (!localStorage.getItem('goods')) {
        localStorage.setItem('goods', JSON.stringify(newProduct));
    }  
    else {
        localStorage.setItem('goods', JSON.stringify(localProducts));
        newProduct = JSON.parse(localStorage.getItem('goods'));
    }
}

function checkStorage() {
    if (!localStorage.getItem('goods')) {
        localStorage.setItem('goods', JSON.stringify(newProduct));
    }  
    else {
        products = JSON.parse(localStorage.getItem('goods'));
        newProduct = JSON.parse(JSON.stringify(products));
        notesCart = JSON.parse(JSON.stringify(products));
    }
}
