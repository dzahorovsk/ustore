
function clearLocalCart() {
    clearCart.classList.add('clearCart');
    prodCart = [];
    console.log(prodCart);
    cartShow.innerHTML = '0';
    countCart = 0;
    products = JSON.parse(localStorage.getItem('data'));
    newProduct = JSON.parse(JSON.stringify(products));
    showAll(newProduct);
    localStorage.clear();
}


function addToCart() {
    clearCart.classList.remove('clearCart');
    let ide = this.id;
    console.log(ide);
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
            console.log(note.sklad);
            addLocalCart(prodCart);
        } 
    }
    let items = products.slice();
    for (let item of items) {
        if (item.id === ide) {
            item.sklad--;
            console.log(products);
            addLocalProducts(products);
            newProduct = JSON.parse(JSON.stringify(products));
            showAll(newProduct);
        } 
    }
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
        newProduct = JSON.parse(localStorage.getItem('goods'));
    }
}
