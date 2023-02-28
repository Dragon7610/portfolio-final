import i18Obj from './translate.js';

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtnParent = document.querySelector('.portfolio-btns');
const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const burgerBtn = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-menu_item-link');

///change image
function changeImage(event) {
    if(event.target.classList.contains('portfolio-btn')) {
        portfolioImages.forEach((image, index) => {
            image.src = `assets/img/${event.target.dataset.season}/${index +1}.jpg`;
        })
    }

    removeActiveBtn(portfolioBtns)

    event.target.classList.add('active');
}

////universal function
function removeActiveBtn(array) {
    array.forEach((btn) => {
        btn.classList.remove('active');
    })
}

portfolioBtnParent.addEventListener('click', changeImage)


///burger menu
burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
})


navLink.forEach((link) => {
    link.addEventListener('click', function(){
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
    })
})


//////translate
const langParent  = document.querySelector('.header-languages');
const languages = document.querySelectorAll('.header-language')

function getTranslate(lang) {
    const dataAttributes = document.querySelectorAll('[data-i18n]');
    const languageObj = i18Obj[lang];

    dataAttributes.forEach((data) => {
        const dataValue = data.dataset.i18n;
        for (let key in languageObj) {
            if(key === dataValue) {
                data.textContent = languageObj[key];
            }
        }
    })
}



function getLanguage (event) {
    if(event.target.classList.contains('header-language')) {
        getTranslate(event.target.textContent);
    }

    
    removeActiveBtn(languages);

    event.target.classList.add('active');
}


langParent.addEventListener('click', getLanguage);


/////change theme

const themeBtn = document.querySelector('.theme-button');

function changeTheme() {
    onOffThemeBtn();

    const sections = document.querySelectorAll('.skills, .portfolio, .video, .price');
    const sectionHeader = document.querySelectorAll('.section-header');
    const sectionTitle = document.querySelectorAll('.section-title');

    sections.forEach(section => section.classList.toggle('light-theme'));
    sectionHeader.forEach(header => header.classList.toggle('light-theme'));
    sectionTitle.forEach(title => title.classList.toggle('light-theme'));
}

function onOffThemeBtn() {
    themeBtn.classList.toggle('active');
}

themeBtn.addEventListener('click', changeTheme);

/////popup
const popupBody = document.querySelector('.popup-body');
const popup = document.querySelector('.popup');
const showPopup = document.querySelector('.hero-btn');
const closePopup = document.querySelector('.popup-close');



showPopup.addEventListener('click', () =>{
    popupBody.classList.add('active');
    popup.classList.add('active');
}) 
    
    


closePopup.addEventListener('click', ()=> {
    popupBody.classList.remove('active');
    popup.classList.remove('active');
})



