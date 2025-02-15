//закрытие в любом месте search
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.header__search-list');
    const checkbox = document.querySelector('.header__search-checkbox');
    const hamburger = document.querySelector('.header__search');

    if (!menu.contains(e.target) && !checkbox.contains(e.target) && !hamburger.contains(e.target)) {
        checkbox.checked = false;
    }
});
//----------------------------------------------------------------




//----------------показ списка ----------------------
const input = document.getElementById("myInput");
const dropdown = document.getElementById("myDropdown");
const dropdowns = dropdown.querySelectorAll('.header__search-dropdown'); 


input.addEventListener("input", filterFunction);

function filterFunction() {
    const filter = input.value.toLowerCase();

    dropdowns.forEach(dropdownBlock => {
        const link = dropdownBlock.querySelector("a");
        const paragraph = dropdownBlock.querySelector("p");

        const linkText = link.textContent.toLowerCase();
        if (linkText.includes(filter)) {
            link.style.display = "";
            paragraph.style.display = ""; 
        } else {
            link.style.display = "none";
            paragraph.style.display = "none"; 
        }
    });

    // Показать dropdown, если есть хотя бы один видимый блок
    const visibleBlocks = Array.from(dropdowns).filter(block => block.querySelector('a').style.display !== 'none');
    if (visibleBlocks.length > 0) {
        dropdown.style.display = "flex";
    } else {
        dropdown.style.display = "none";
    }
}

// Закрыть выпадающий список при клике вне его
document.addEventListener("click", function(event) {
    if (!input.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});


//---------------------------------------------------------------






const dataCatalog = `[
    {
    "img_1": "./img/img-1.png",
    "img_2": "./img/img-2.png"
     },
     {
    "img_1": "./img/img-2.png",
    "img_2": "./img/img-1.png"
     },
     {
    "img_1": "./img/img-1.png",
    "img_2": "./img/img-2.png"
     }
    ]`;

const catalogBox = document.querySelector('.main__content');
const contenerEl = document.createElement('div');
const cardsContainer = document.createElement('div');
const paginationEl = document.createElement('div');
const buttonEl = document.createElement('button');

paginationEl.classList.add('main__content__all__pagination');
cardsContainer.classList.add('main__content__column', 'center');
contenerEl.classList.add('main__content__all');

 
buttonEl.classList.add('main__content__all__pagination-button');
buttonEl.innerHTML = `Следующая
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
        <g clip-path="url(#clip0_2_912)">
            <path d="M7.58656 5.22558L2.96126 0.613083C2.80972 0.462049 2.56437 0.462303 2.41308 0.613865C2.26191 0.765407 2.2623 1.01089 2.41386 1.16205L6.76384 5.50002L2.41371 9.83797C2.26216 9.98914 2.26177 10.2345 2.41292 10.386C2.48876 10.462 2.58812 10.5 2.68747 10.5C2.78658 10.5 2.88554 10.4623 2.96124 10.3868L7.58656 5.77443C7.65954 5.70181 7.7005 5.60299 7.7005 5.50002C7.7005 5.39705 7.65943 5.29834 7.58656 5.22558Z" fill="#5D71DD"/>
        </g>
        <defs>
            <clipPath id="clip0_2_912">
                <rect width="10" height="10" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
        </defs>
    </svg>
    `;  


contenerEl.appendChild(cardsContainer);  
contenerEl.appendChild(paginationEl);  

 
const firstChild = catalogBox.firstChild;
catalogBox.insertBefore(contenerEl, firstChild);
  


const dataCatalogs = JSON.parse(dataCatalog);
let cardsPerPage = 1;
let currentPage = 1;

//------------------------ обработчики страниц на количество показы -------------------
function displayCards(arrData, rows, page) {
    cardsContainer.classList.add('fade-out');
    setTimeout(() => { 
    cardsContainer.innerHTML = '';
    page--;
    const start = rows * page;
    const end = start + rows;
    const paginatedData = arrData.slice(start, end);

    paginatedData.forEach((element) => {
        const dataCart = `
                
                <div class="main__content__title ">
                    <div class="main__content__more main__content__more-center">
                        <a class="main__content__link" href="#">Категория 1</a>
                        <p class="main__content__data">13 дек 2020</p>
                    </div>
                    <h4 class="main__content__heading">Управление ИТ-активами – скучная рутина или творческая задача?
                    </h4>
                    <p class="main__content__text">Размышляя об управлении ИТ-активами, я вспомнил один учебный пример.
                        Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В
                        очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. </p>
                </div>
                <div class="main__content__box">
                    <div class="main__content__box-desc main__content__title">
                        <div class="main__content__more main__content__more-center">
                            <a class="main__content__link" href="#">Категория 1</a>
                            <p class="main__content__data">13 дек 2020</p>
                        </div>
                        <h4 class="main__content__heading">Управление ИТ-активами – скучная рутина или творческая задача?
                        </h4>
                        <p class="main__content__text">Размышляя об управлении ИТ-активами, я вспомнил один учебный пример.
                            Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В
                            очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. </p>
                    </div>
                    <div class="main__content__box-card">
                        <div class="main__content__more main__content__box-card-more">
                            <a class="main__content__link main__content__box-card-link" href="#">Категория 1</a>
                            <h4 class="main__content__box-card-slogan">ITAM&amp;SAMDay – самая настоящая удача!</h4>
                        </div>
                        <p class="main__content__data main__content__box-card-data">13 дек 2020</p>

                    </div>
                </div>
                <div class="main__content__box ">
                     <div class="main__content-img">
                        <img class="main__content-img-size" src="${element.img_1}" alt="foto">
                        <div class="main__content-thumbnail">
                            <div class="main__content__more main__content__box-card-more">
                                <a class="main__content__link main__content__box-card-link main__content-thumbnail_link" href="#">Очень длинная категория 2</a>
                                <h4 class="main__content__box-card-slogan">Управление ИТ-активами <br>– скучная рутина или творческая задача?</h4>
                            </div>
                            <p class="main__content__data main__content__box-card-data">13 дек 2020</p>
                        </div>
                     </div>
                     <div class="main__content__box__content ">
                        <div class="main__content__box-item main__content__title">
                            <div class="main__content__more main__content__more-center">
                                <a class="main__content__link" href="#">Категория 1</a>
                                <p class="main__content__data">13 дек 2020</p>
                            </div>
                            <h4 class="main__content__heading main__content__box-item__heading">Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ...
                            </h4>
                         </div>
                         <div class="main__content__box-item main__content__title">
                            <div class="main__content__more main__content__more-center">
                                <a class="main__content__link" href="#">Категория 1</a>
                                <p class="main__content__data">13 дек 2020</p>
                            </div>
                            <h4 class="main__content__heading main__content__box-item__heading">ITAM&amp;SAMDay – самая настоящая удача!
                            </h4>
                         </div>
                     </div>

                </div>
                <div class="main__content__box main__content__box-none">
                    <div class="main__content__box-desc main__content__title">
                        <div class="main__content__more main__content__more-center">
                            <a class="main__content__link" href="#">Категория 1</a>
                            <p class="main__content__data">13 дек 2020</p>
                        </div>
                        <h4 class="main__content__heading">Управление ИТ-активами – скучная рутина или творческая задача?
                        </h4>
                        <p class="main__content__text">Размышляя об управлении ИТ-активами, я вспомнил один учебный пример.
                            Менеджер по ИТ-мощностям в крупной компании периодически готовил толстенный отчёт руководству. В
                            очередной раз он не принёс отчёт, решив проверить, нужен ли он вообще. </p>
                    </div>
                    <div class="main__content__box-card">
                        <div class="main__content__more main__content__box-card-more">
                            <a class="main__content__link main__content__box-card-link" href="#">Категория 1</a>
                            <h4 class="main__content__box-card-slogan">ITAM&amp;SAMDay – самая настоящая удача!</h4>
                        </div>
                        <p class="main__content__data main__content__box-card-data">13 дек 2020</p>

                    </div>
                </div>
                <div class="main__content__box main__content__box-none">
                    <div class="main__content-img">
                       <img class="main__content-img-size" src="${element.img_2}" alt="foto">
                       <div class="main__content-thumbnail">
                           <div class="main__content__more main__content__box-card-more">
                               <a class="main__content__link main__content__box-card-link main__content-thumbnail_link" href="#">Очень длинная категория 2</a>
                               <h4 class="main__content__box-card-slogan">Управление ИТ-активами <br>– скучная рутина или творческая задача?</h4>
                           </div>
                           <p class="main__content__data main__content__box-card-data">13 дек 2020</p>
                       </div>
                    </div>
                    <div class="main__content__box__content ">
                       <div class="main__content__box-item main__content__title">
                           <div class="main__content__more main__content__more-center">
                               <a class="main__content__link" href="#">Категория 1</a>
                               <p class="main__content__data">13 дек 2020</p>
                           </div>
                           <h4 class="main__content__heading main__content__box-item__heading">Управление ИТ-активами – скучная рутина или творческая задача слово слово и еще длинное слово после чего ...
                           </h4>
                        </div>
                        <div class="main__content__box-item main__content__title">
                           <div class="main__content__more main__content__more-center">
                               <a class="main__content__link" href="#">Категория 1</a>
                               <p class="main__content__data">13 дек 2020</p>
                           </div>
                           <h4 class="main__content__heading main__content__box-item__heading">ITAM&amp;SAMDay – самая настоящая удача!
                           </h4>
                        </div>
                    </div>

               </div>
            
              `;
        cardsContainer.insertAdjacentHTML('beforeend', dataCart);
    });
    cardsContainer.classList.remove('fade-out');
}, 500);
    
}
displayCards(dataCatalogs, cardsPerPage, currentPage);



function displayPagination(arrData, rowPerPage) {
    paginationEl.innerHTML = '';
    const pagesCount = Math.ceil(arrData.length / rowPerPage);
    const ulEl = document.createElement('ul');
    ulEl.classList.add('main__content__all__pagination-list');
  
    for (let i = 0; i < pagesCount; i++) {
      const liEl = displayPaginationBtn(i + 1);
      ulEl.appendChild(liEl);
    }
    paginationEl.appendChild(ulEl);
    paginationEl.appendChild(buttonEl);
  }
  displayPagination(dataCatalogs, cardsPerPage);


function displayPaginationBtn(page) {
    const liEl = document.createElement('li');
    liEl.classList.add('main__content__all__pagination-item', 'header__nav-link');
    liEl.innerText = page;
    if (currentPage == page) liEl.classList.add('main__content__all__pagination-active');
  
    liEl.addEventListener('click', () => {
      currentPage = page;
      displayCards(dataCatalogs, cardsPerPage, currentPage);
        
       
       
      let currentitemLi = document.querySelector('li.main__content__all__pagination-active');
      currentitemLi.classList.remove('main__content__all__pagination-active');
      liEl.classList.add('main__content__all__pagination-active');
  
      const linkEl = document.createElement('a');
      linkEl.href = '#section';
  
      
    });
    return liEl;
  }
//-----------------------------------------------------------------------------





 //----------------------кнопка дестоп обработчик------------------------------------- 
buttonEl.addEventListener('click', () => {
    const totalPages = Math.ceil(dataCatalogs.length / cardsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
    } else {
        currentPage = 1;  
    }
    displayCards(dataCatalogs, cardsPerPage, currentPage);
    displayPagination(dataCatalogs, cardsPerPage);  
});


//---------------------кнопка моб--------------------------------------------------
const mainContent = document.querySelector('.main__content ');
const buttomMob = document.createElement('button');
buttomMob.classList.add('main__content__button', 'main__aside__email__button', 'header__search-button')
 
mainContent.appendChild(buttomMob);
mainContent.insertBefore(buttomMob, contenerEl.nextSibling);


buttomMob.innerHTML = `Показать еще 6 <svg class="header__search-button__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_1087)">
        <path d="M17.6975 3.72857V5.56969C17.5652 5.3404 17.4228 5.11641 17.2697 4.89865C16.7339 4.13649 16.0849 3.46569 15.3406 2.90484C14.5874 2.33731 13.7545 1.89597 12.8651 1.59312C11.9452 1.2799 10.9819 1.12109 10.0022 1.12109C8.97906 1.12109 7.97556 1.29393 7.01967 1.63482C6.09585 1.96425 5.23726 2.44268 4.46773 3.05685C3.70581 3.66494 3.0527 4.38874 2.52661 5.20812C1.99067 6.04286 1.60156 6.95383 1.3701 7.91571C1.22138 8.53378 1.60185 9.1554 2.21994 9.30412C2.31045 9.32589 2.40102 9.33633 2.49017 9.33633C3.0099 9.33633 3.4814 8.98186 3.60835 8.4543C3.94753 7.04469 4.76273 5.76687 5.90379 4.85618C6.47386 4.40121 7.10943 4.04694 7.79286 3.80325C8.49993 3.55111 9.24323 3.42326 10.0022 3.42326C11.442 3.42326 12.809 3.87979 13.9552 4.74346C14.7308 5.3279 15.3703 6.08443 15.8219 6.93806H14.5466C13.9109 6.93806 13.3955 7.45342 13.3955 8.08914C13.3955 8.72486 13.9109 9.24021 14.5466 9.24021H18.8485C19.4843 9.24021 19.9996 8.72486 19.9996 8.08914V3.72857C19.9996 3.09285 19.4843 2.5775 18.8485 2.5775C18.2128 2.5775 17.6975 3.09285 17.6975 3.72857Z" fill="white"/>
        <path d="M1.15107 17.4209C1.78679 17.4209 2.30214 16.9056 2.30214 16.2698V14.421C2.98785 15.6145 3.94261 16.6344 5.10098 17.4027C6.55344 18.366 8.24543 18.8757 9.9946 18.8772C9.99556 18.8772 9.9965 18.8773 9.99745 18.8773C9.99821 18.8773 9.999 18.8773 9.99977 18.8773C10.0007 18.8773 10.0016 18.8773 10.0025 18.8773C10.0037 18.8773 10.0049 18.8772 10.0061 18.8772C11.0262 18.8762 12.0267 18.7035 12.9799 18.3636C13.9037 18.0341 14.7623 17.5557 15.5318 16.9416C16.2938 16.3335 16.9469 15.6097 17.473 14.7903C18.0089 13.9556 18.398 13.0446 18.6295 12.0827C18.7782 11.4647 18.3978 10.843 17.7796 10.6943C17.1615 10.5456 16.54 10.9261 16.3912 11.5441C16.052 12.9538 15.2368 14.2316 14.0958 15.1423C13.5257 15.5972 12.8902 15.9515 12.2067 16.1952C11.5004 16.447 10.7579 16.5749 9.99979 16.5751C8.70283 16.5746 7.44888 16.1974 6.37341 15.4841C5.44598 14.869 4.69477 14.0369 4.18074 13.0604H5.45301C6.08876 13.0604 6.60409 12.545 6.60409 11.9093C6.60409 11.2736 6.08873 10.7582 5.45301 10.7582H1.15107C0.515351 10.7582 0 11.2736 0 11.9093V16.2698C0 16.9056 0.515351 17.4209 1.15107 17.4209Z" fill="white"/>
    </g>
    <defs>
        <clipPath id="clip0_2_1087">
            <rect width="20" height="20" fill="white"/>
        </clipPath>
    </defs>
</svg>
`;

let isAtStart = false;

buttomMob.addEventListener('click', function (e) {
    const totalPages = Math.ceil(dataCatalogs.length / cardsPerPage); 

    if (currentPage < totalPages) {
        currentPage++;
        displayCards(dataCatalogs, cardsPerPage, currentPage);
        
       
        if (isAtStart) {
            isAtStart = false; 
            buttomMob.innerHTML = `Показать еще 6 <svg class="header__search-button__svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_1087)">
                    <path d="M17.6975 3.72857V5.56969C17.5652 5.3404 17.4228 5.11641 17.2697 4.89865C16.7339 4.13649 16.0849 3.46569 15.3406 2.90484C14.5874 2.33731 13.7545 1.89597 12.8651 1.59312C11.9452 1.2799 10.9819 1.12109 10.0022 1.12109C8.97906 1.12109 7.97556 1.29393 7.01967 1.63482C6.09585 1.96425 5.23726 2.44268 4.46773 3.05685C3.70581 3.66494 3.0527 4.38874 2.52661 5.20812C1.99067 6.04286 1.60156 6.95383 1.3701 7.91571C1.22138 8.53378 1.60185 9.1554 2.21994 9.30412C2.31045 9.32589 2.40102 9.33633 2.49017 9.33633C3.0099 9.33633 3.4814 8.98186 3.60835 8.4543C3.94753 7.04469 4.76273 5.76687 5.90379 4.85618C6.47386 4.40121 7.10943 4.04694 7.79286 3.80325C8.49993 3.55111 9.24323 3.42326 10.0022 3.42326C11.442 3.42326 12.809 3.87979 13.9552 4.74346C14.7308 5.3279 15.3703 6.08443 15.8219 6.93806H14.5466C13.9109 6.93806 13.3955 7.45342 13.3955 8.08914C13.3955 8.72486 13.9109 9.24021 14.5466 9.24021H18.8485C19.4843 9.24021 19.9996 8.72486 19.9996 8.08914V3.72857C19.9996 3.09285 19.4843 2.5775 18.8485 2.5775C18.2128 2.5775 17.6975 3.09285 17.6975 3.72857Z" fill="white"/>
                    <path d="M1.15107 17.4209C1.78679 17.4209 2.30214 16.9056 2.30214 16.2698V14.421C2.98785 15.6145 3.94261 16.6344 5.10098 17.4027C6.55344 18.366 8.24543 18.8757 9.9946 18.8772C9.99556 18.8772 9.9965 18.8773 9.99745 18.8773C9.99821 18.8773 9.999 18.8773 9.99977 18.8773C10.0007 18.8773 10.0016 18.8773 10.0025 18.8773C10.0037 18.8773 10.0049 18.8772 10.0061 18.8772C11.0262 18.8762 12.0267 18.7035 12.9799 18.3636C13.9037 18.0341 14.7623 17.5557 15.5318 16.9416C16.2938 16.3335 16.9469 15.6097 17.473 14.7903C18.0089 13.9556 18.398 13.0446 18.6295 12.0827C18.7782 11.4647 18.3978 10.843 17.7796 10.6943C17.1615 10.5456 16.54 10.9261 16.3912 11.5441C16.052 12.9538 15.2368 14.2316 14.0958 15.1423C13.5257 15.5972 12.8902 15.9515 12.2067 16.1952C11.5004 16.447 10.7579 16.5749 9.99979 16.5751C8.70283 16.5746 7.44888 16.1974 6.37341 15.4841C5.44598 14.869 4.69477 14.0369 4.18074 13.0604H5.45301C6.08876 13.0604 6.60409 12.545 6.60409 11.9093C6.60409 11.2736 6.08873 10.7582 5.45301 10.7582H1.15107C0.515351 10.7582 0 11.2736 0 11.9093V16.2698C0 16.9056 0.515351 17.4209 1.15107 17.4209Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_2_1087">
                        <rect width="20" height="20" fill="white"/>
                    </clipPath>
                </defs>
            </svg>`;
        }
    } else {
        currentPage = 1; 
        displayCards(dataCatalogs, cardsPerPage, currentPage);
        
        if (!isAtStart) {
            isAtStart = true; 
            buttomMob.innerHTML = `В начало каталога`;
        } else {
          
            buttomMob.innerHTML = ''; 
        }
    }

    const ancorEl = document.querySelector('.header__background');//---Якорь------ 
    ancorEl.scrollIntoView({ behavior: "smooth" });
});
//--------------------------------------------------------------------------------------


//----------------------бургер закрытие в любой точки---------------
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.header__right_menu');
    const checkbox = document.querySelector('.header__box');
    const hamburger = document.querySelector('.header__nav');

    if (!menu.contains(e.target) && !checkbox.contains(e.target) && !hamburger.contains(e.target)) {
      checkbox.checked = false; 
    }
  });


//---------------------------------------------------------------------


const navLinks = document.querySelectorAll('.header__nav__map'); // Выбираем все ссылки

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки

    const latitude = parseFloat(this.dataset.latitude);
    const longitude = parseFloat(this.dataset.longitude);

    if (!isNaN(latitude) && !isNaN(longitude)) {
      window.open(`https://yandex.ru/maps/?ll=${longitude},${latitude}&z=18`, '_blank');
    } else {
      console.error("Неверные координаты в атрибутах данных ссылки.");
    }
  });
});