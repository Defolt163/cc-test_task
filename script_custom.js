// Бургер меню / Humburger
function burgerHandler(){
    const burgerIco = document.getElementById('icon-burder');
    const burgerList = document.querySelectorAll('.lc-navigation-menu');
    const burgerListWrapper = document.querySelectorAll('.lc-header-lpc__fixed-wrapper');
    const burgerNavItems = document.querySelectorAll('.lc-navigation-menu__item')
    
    if (burgerList.length && burgerListWrapper.length && burgerNavItems.length === 0) {
        console.log("DOM элементы бургер меню не получены")
    } else {
        burgerIco.addEventListener('click', function() {
            burgerIco.classList.add('burger_active');
            document.documentElement.style.overflow = 'hidden';
    
            burgerList.forEach(function(element) {
                element.classList.add('lc-navigation-menu__active');
            });
    
            burgerListWrapper.forEach(function(wrapper) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('lc-navigation-menu__backdrop');
                wrapper.appendChild(newDiv);
            
                function closeBurgerMenu() {
                    burgerIco.classList.remove('burger_active');
                    document.documentElement.style.overflow = '';
            
                    burgerList.forEach(function(element) {
                        element.classList.remove('lc-navigation-menu__active');
                    });
            
                    newDiv.remove();
                }
            
                newDiv.addEventListener('click', closeBurgerMenu);
                
                burgerNavItems.forEach(function(item) {
                    item.addEventListener('click', closeBurgerMenu);
                });
            });
        });
    }
    
};
//Табы с вопросами / Question Tabs
function tabHandler(){
    const tabElement = document.querySelectorAll('.lc-tabs__tab');
    const contentElement = document.querySelectorAll('.lc-tabs__content[data-index]');

    if (tabElement.length && contentElement.length === 0) {
        console.log("DOM элементы не получены")
    } else {
        tabElement.forEach(function(element, index) {
            element.addEventListener('click', function() {
                const prevActiveTab = document.querySelector('.lc-tabs__tab_active');
                prevActiveTab.classList.remove('lc-tabs__tab_active');
    
                this.classList.add('lc-tabs__tab_active');
    
                contentElement.forEach(function(content) {
                    if (content.getAttribute('data-index') === String(index)) {
                        content.classList.add('lc-tabs__content_visible');
                    } else {
                        content.classList.remove('lc-tabs__content_visible');
                    }
                });
            });
        });
    }
    
};
//Аккордеон / Accordeon
function accordeonHandler(){
    const acordeonElement = document.querySelectorAll('.lc-spoiler-item');

    if (acordeonElement.length === 0) {
        console.log("DOM элемент lc-spoiler-item не получен")
    } else {
        acordeonElement.forEach(function(element) {
            element.addEventListener('click', function() {
                if (this.classList.contains('lc-spoiler-item_open')) {
                    this.classList.remove('lc-spoiler-item_open');
                } else {
                    this.classList.add('lc-spoiler-item_open');
                }
            });
        });
    }
    
};
// Тень / Toolbar Shadow
function shadowHandler(){
    const shadowBlock = document.querySelector('.lc-header-lpc__fixed-wrapper');

    if (shadowBlock.length === 0) {
        console.log("DOM элемент lc-header-lpc__fixed-wrapper не получен")
    } else {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 0) {
                shadowBlock.classList.add('lc-header-lpc__fixed-wrapper__active');
            } else {
                shadowBlock.classList.remove('lc-header-lpc__fixed-wrapper__active');
            }
        });
    }
    
};

const initializeHandlers = () => {
    burgerHandler();
    tabHandler();
    accordeonHandler();
    shadowHandler();
};

document.addEventListener('DOMContentLoaded', initializeHandlers);