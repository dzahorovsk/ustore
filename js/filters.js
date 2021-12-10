// -------------------------------- фильтры -------------------------------------------------------
function toClear() {
    newProduct = JSON.parse(JSON.stringify(products));
    showAll(newProduct); 
    document.querySelector('#allGoods').checked = true;
    console.log(products);
}
// кнопка применить фильтр
function allFilter() {
    selectFilter(newProduct);
    getN()
}

// функция обработки фильтров 

function selectFilter(arrPr) {
    let temp = [];
    if (document.querySelector('input[name="goods"]:checked').value === 'avGoods') {
        arrPr.forEach((item) => {
            if (item.sklad > 0) {
                if (item.cost > 1000 && item.cost < 15000) {
                    temp.push(item);
                }
            }
        });
        newProduct = temp;
        showAll(newProduct);
        
    }
    else {
        arrPr.forEach((item) => {
            if (item.cost > 1000 && item.cost < 15000) {
                temp.push(item);
            }
        });
    }
}



    // -------------------------------- фильтры -------------------------------------------------------

  // фильтр по цене
  
  
  function getN() {
  var getNum = document.getElementById('get_num').value;
  var getNum1 = document.getElementById('get_num1').value;
  const filter = newProduct.filter(item => item.cost < getNum1 & item.cost >  getNum);
  console.log(filter);
  }
  
  
    // ползунок 
    (function() {
     
      var parent = document.querySelector(".price-slider");
      if(!parent) return;
     
      var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");
     
      rangeS.forEach(function(el) {
        el.oninput = function() {
          var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);
     
          if (slide1 > slide2) {
            [slide1, slide2] = [slide2, slide1];
          }
     
          numberS[0].value = slide1;
          numberS[1].value = slide2;
        }
      });
      numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
            number2 = parseFloat(numberS[1].value);
          if (number1 > number2) {
            var tmp = number1;
            numberS[0].value = number2;
            numberS[1].value = tmp;
          }
     
          rangeS[0].value = number1;
          rangeS[1].value = number2;
          
     
        }
      });
      
    })();
    
    
    
    // функция обработки фильтров 
    
    
    // function selectFilter(arrPr) {
    //     let temp = [];
    //     arrPr.forEach((item) => {
    //         // проверка фильтров и формирование массива объектов удовлетворяющего всем условиям, пока только одному :)
    //         // остальные нужно тянуть с формы, когда она будет готова
    //         if (item.type === 'Samsung') {
    //             temp.push(item);
    //         }
    //         // if (item.type === 'LG') {
    //         //     temp.push(item);
    //         // }
    //     });
    //     newProduct = temp;
    //     showAll(newProduct);
    // }
    
    
    