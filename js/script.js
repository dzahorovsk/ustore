// отоброжение разделов <О магазине>, <Контакты>, <Как купить>
createAbout()
createContact()
createHowtoBuy()
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
    showAll(newProduct);
    document.querySelector('.sort-block').classList.remove('sort-noactive');
    document.querySelector('.sort-block').classList.add('sort-active');
    document.querySelector('.sort-string').classList.remove('sort-active');
    document.querySelector('.sort-string').classList.add('sort-noactive');
    document.getElementById('tov').classList.remove('goods-string');
    document.getElementById('tov').classList.add('goods');
}
function displayString() {
    block = false;
    showAll(newProduct);
    document.querySelector('.sort-string').classList.remove('sort-noactive');
    document.querySelector('.sort-string').classList.add('sort-active');
    document.querySelector('.sort-block').classList.remove('sort-active'); 
    document.querySelector('.sort-block').classList.add('sort-noactive');
    document.getElementById('tov').classList.remove('goods');
    document.getElementById('tov').classList.add('goods-string');
}

//        ----------------------- about 
function createAbout(){
let html = '';
let divAbou = document.getElementById('about');
html += `
<div class="about__item">
    <div class="about_text">
    <h2 class="about_head">О Магазине</h2>
    <h2"> Маленькие мечты и грандиозные планы</h2>
    <p> TV-Shop – самый большой онлайн-магазин в стране. 
    С 2010 года мы воплощаем маленькие мечты и грандиозные планы миллионов людей. 
    У нас можно найти буквально все. Мы продаем по справедливой цене и предоставляем гарантию, 
    так как считаем, что онлайн-шопинг должен быть максимально удобным и безопасным. 
    И каждый раз, когда кто-то нажимает «Купить», мы понимаем, что делаем нужное дело.
    </p>
    <p><img class="logo_about" src="assets/icon/Group 1.svg" alt="logo"></p>
    <h2> Наша цель — быть полезными </h2>
    <p> Мы верим, что вещи существуют для того, чтобы делать жизнь проще, приятнее и добрее. 
    Поэтому и поиск той самой вещи должен быть быстрым, удобным и приятным. Мы не просто продаем бытовую технику, электронику, украшения или вино. 
    Мы помогаем найти именно то, что нужно, в одном месте и без лишних волнений, чтобы вы не тратили жизнь на поиски, а просто жили счастливо. 
    TV-Shop — это универсальный ответ на любой запрос, начало поиска и его конечная остановка, настоящий помощник. 
    Мы навсегда избавляем своих покупателей от неприятных компромиссов, исполняем желания и позволяем мечтать смелее.
    Благодаря разумному поиску и честному сервису мы делаем жизнь наших клиентов немножко лучше прямо сейчас.
    </p>
    </div>
</div>
`;
divAbou.innerHTML = html;
}

//       ------------------- contact 
function createContact(){
    let html = '';
    let divContact = document.getElementById('contact');
    html += `
    <div class="contact__item">
    <h2 class="contact_head"> Контакты </h2>
    <h3 class="consult">  Консультации и заказ по телефонам </h3>
        <div class="contact_text">
            <div class="contact_numb">
                <h3> TV-Shop </h3>
                <a href="tel:044 504 80 84"> 044 504 80 84 </a>
                <a href="tel:044 654 89 24"> <br> 044 654 89 24 </a>
                <p> 1.01.22 и 7.01.22 магазины не работают, 31.12.21 и 6.01.22 график работы  с 10.00 до 18.00 </p>
            </div>
                <div class="contact_graf"> 
                    <h2 class="contact_head"> График работы </h2>
                    <dl class="attrs2">
                        <dt>В будние </dt>
                        <dd> с 08:00 до 21:00 </dd>
                        <dt>Суббота</dt>
                        <dd> с 09:00 до 20:00 </dd>
                        <dt>Восресенье</dt>
                        <dd> с 10:00 до 19:00 </dd>
                    </dl>
                </div>
        </div>
        <h3> Пункты самовывоза и возврата </h3>
            <p> Вернуть товар можно в сервисных отделах или в пунктах приема возвратов.
            Пункты приема возвратов не имеют сервисных специалистов. 
            Окончательное решение по возврату товара будет принято после осмотра товара специалистом сервиса.
            </p>
    </div>
    `;
    divContact.innerHTML = html;
}

//           ------------------- how to buy
function createHowtoBuy() {
    let html = '';
    let howBuy = document.getElementById('buy');
    html +=` 
    <div class="howBuy__item">
        <h2 class="buy_head"> Как купить? </h2>
        <h3> Оформление заказа </h3>
        <p> Оформить заказ в электронном виде на сайте Вы можете 24 часа в сутки:</p>
        <ul>
            <li> добавляете понравившийся Вам товар в корзину (нажимаете кнопку "Купить");</li>
            <li> заполняете форму заказа (нажав кнопку "Оформить Заказ" указываете контактную информацию и место доставки товара);</li>
            <li> после нажимаете кнопку "Оформить Заказ";</li>
            <li> c Вами свяжется менеджер.</li>
        </ul>
    </div>
    `;
    howBuy.innerHTML = html;
}
