// -------------------------------- фильтры -------------------------------------------------------


createListOfBrands(newProduct);
setSliderValue(newProduct);

function getMinCost(pr){
  let tempCost = [];
  let items = pr.slice();
  for (let item of items) {
    tempCost.push(item.cost);
  }
  let minCost = tempCost.reduce(function(a, b) {
    return Math.min(a, b);
  });
  return minCost;
}

function getMaxCost(pr){
  let tempCost = [];
  let items = pr.slice();
  for (let item of items) {
    tempCost.push(item.cost);
  }
  let maxCost = tempCost.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return maxCost;
}


//   ----------------------- кнопка очистить фильтры -------------------------
function toClear() {
  newProduct = JSON.parse(JSON.stringify(products));
  createListOfBrands(newProduct);
  showAll(newProduct);
  let clist = document.querySelectorAll(`input[name="brend"]`);
  for (var i = 0; i < clist.length; ++i) { 
    clist[i].checked = false; 
  }
  document.querySelector('#allGoods').checked = true;

  rangeS = document.querySelectorAll("input[type=range]");
  numberS = document.querySelectorAll("input[type=number]");
  numberS[0].value = rangeS[0].value = getMinCost(newProduct);
  numberS[1].value = rangeS[1].value = getMaxCost(newProduct);
  createWood();
}

// кнопка применить фильтр
function allFilter() {
  newProduct = JSON.parse(JSON.stringify(products));
  selectFilter(newProduct);
  createWood();
}

// --------------- дерево каталога -----------------------------------------------------

function createWood() {
  let html = 'Интернет магазин <span>&gt</span>';
  let wood = document.querySelector('.wood-home');
  let temp = document.querySelectorAll(`input[name="brend"]:checked`);
  let values = [];
  temp.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  if (values.length > 0) {
    values.forEach((check) => {
      html += ` <span>&lt</span>${check}<span>&gt</span> `;
    });
    wood.innerHTML = html;  
  }
  else {
    wood.innerHTML = 'Интернет магазин <span>&gt</span>';
  }
}

//  --------- функция установки максимальной и минимальной цены

function setSliderValue(pr) {
  let sld = document.querySelectorAll('#numb-rang');
  sld[0].value = sld[0].min = getMinCost(pr);
  sld[0].max = getMaxCost(pr);
  sld[1].min = getMinCost(pr);
  sld[1].value = sld[1].max = getMaxCost(pr);
  document.getElementById('get_num').value = getMinCost(pr);
  document.getElementById('get_num1').value = getMaxCost(pr);
  
}


//         функция обработки фильтров, фильтр цены, наличие и производители

function selectFilter(arrPr) {
  let temp = [];
  var getNum = document.getElementById('get_num').value;
  var getNum1 = document.getElementById('get_num1').value;
  let filtrproiz = getSelectedCheckboxValues()
  //     filters brend 
  function filterProducts(products, filters) {
    return products.filter((item) => {
      return filters.some(filter => item.type === filter);
    });
  };
  if (document.querySelector('input[name="goods"]:checked').value === 'allGoods') {
    arrPr.forEach((item) => {
      if (item.sklad === item.sklad) {
        if (item.cost >= getNum && item.cost <= getNum1) {
          temp.push(item);
        }
      }
    });
    newProduct = temp;
    showAll(newProduct)
    if (filtrproiz.length > 0) {
      let filtrBrendsPrice = filterProducts(temp, filtrproiz)
      newProduct = filtrBrendsPrice;
      showAll(newProduct);
    }
  }
  if (document.querySelector('input[name="goods"]:checked').value === 'avGoods') {
    arrPr.forEach((item) => {
      if (item.sklad > 0) {
        if (item.cost >= getNum && item.cost <= getNum1) {
          temp.push(item);
        }
      }
    });
    newProduct = temp;
    showAll(newProduct)
    //     filters brend 
    function filterProducts(products, filters) {
      return products.filter((item) => {
        return filters.some(filter => item.type === filter);
      });
    };
    if (filtrproiz.length > 0) {
      let filtrBrendsPrice = filterProducts(temp, filtrproiz)
      newProduct = filtrBrendsPrice;
      showAll(newProduct);
    }
  }


  //получение значения чекбокса
  function getSelectedCheckboxValues() {
    const checkboxes = document.querySelectorAll(`input[name="brend"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
      values.push(checkbox.value);
    });
    return values;
  }
}

//             создать бренды 
function createListOfBrands(prods) {
  let html = '';
  let list = document.getElementById('filter-type');
  let temp = [];

  prods.forEach(el => temp[el.type]++);

  for (let key in temp) {
    html += `
      <div class="filter__item">
        <span class="filter__check-container">
          <input type="checkbox" value=${key} name="brend" id="che" 
            class="filter__check-input"
        </span>
        <span class="filter__item-title">${key}</span>
      </div>
    `;
  }
  list.innerHTML = html;
}

// ---------------------------             ползунок 
(function () {

  var parent = document.querySelector(".price-slider");
  if (!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);
      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });
  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      rangeS[0].value = number1;
      rangeS[1].value = number2;
    }
  });

})();