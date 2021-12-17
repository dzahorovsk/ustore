let index = 0;
let arrSort = [
    'По популярности',
    'По названию',
    'От дешевых к дорогим',
    'От дорогих к дешевым'
];

showSort();

// ----------- проверка выбора сортировки ---------------------------------------------------------
function startSort(pr) {
    if (index === 0) {
        pr.sort((a, b) => a.tag < b.tag ? 1 : -1);
    }
    if (index === 1) {
        pr.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    if (index === 2) {
        pr.sort((a, b) => a.cost > b.cost ? 1 : -1);
    }
    if (index === 3) {
        pr.sort((a, b) => a.cost < b.cost ? 1 : -1);
    }
}
// ------------- сортировка по условиям
function tagClick() {
    index = 0;
    document.querySelector('.sort-box').style.display = 'none';
    showSort();
    products.sort((a, b) => a.tag < b.tag ? 1 : -1);
    allFilter();
    showAll(newProduct);
}
function abcClick() {
    index = 1;
    document.querySelector('.sort-box').style.display = 'none';
    showSort();
    products.sort((a, b) => a.name > b.name ? 1 : -1);
    allFilter();
    showAll(newProduct);
}
function ascClick() {
    index = 2;
    document.querySelector('.sort-box').style.display = 'none';
    showSort();
    products.sort((a, b) => a.cost > b.cost ? 1 : -1);
    allFilter();
    showAll(newProduct);
}
function descClick() {
    index = 3;
    document.querySelector('.sort-box').style.display = 'none';
    showSort();
    products.sort((a, b) => a.cost < b.cost ? 1 : -1);
    allFilter();
    showAll(newProduct);
}

function sortClick() {
    let arrLi = document.querySelectorAll('#sort');
    for (let i = 0; i < arrLi.length; i++) {
        arrLi[i].innerHTML =  `${arrSort[i]}`;   
        if (index === 0) {
            arrLi[0].innerHTML = `${arrSort[0]} &#8288 &#10003`;
        }
        if (index === 1) {
            arrLi[1].innerHTML = `${arrSort[1]} &#8288 &#10003`;
        }
        if (index === 2) {
            arrLi[2].innerHTML = `${arrSort[2]} &#8288 &#10003`;
        }
        if (index === 3) {
            arrLi[3].innerHTML = `${arrSort[3]} &#8288 &#10003`;
        }
    }    
    document.querySelector('.sort-box').style.display = 'block';
    
}

function showSort() {
    if (index === 0) {
        document.getElementById('sort-select').innerHTML = `${arrSort[0]} &#8288 &#10003`;
    }
    if (index === 1) {
        document.getElementById('sort-select').innerHTML = `${arrSort[1]} &#8288 &#10003`;
    }
    if (index === 2) {
        document.getElementById('sort-select').innerHTML = `${arrSort[2]} &#8288 &#10003`;
    }
    if (index === 3) {
        document.getElementById('sort-select').innerHTML = `${arrSort[3]} &#8288 &#10003`;
    }
}