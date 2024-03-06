const tabHandler = () => {
    // Бургер меню / Humburger
    const burgerIco = document.getElementById('icon-burder');
    const burgerList = document.querySelectorAll('.lc-navigation-menu');
    const burgerListWrapper = document.querySelectorAll('.lc-header-lpc__fixed-wrapper');

    burgerIco.addEventListener('click', function(){
        burgerIco.classList.add('burger_active');
        document.documentElement.style.overflow = 'hidden';

        burgerList.forEach(function(element) {
            element.classList.add('lc-navigation-menu__active');
        });

        burgerListWrapper.forEach(function(wrapper) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('lc-navigation-menu__backdrop');
            wrapper.appendChild(newDiv);

            newDiv.addEventListener('click', function() {
                burgerIco.classList.remove('burger_active');
                document.documentElement.style.overflow = '';

                burgerList.forEach(function(element) {
                    element.classList.remove('lc-navigation-menu__active');
                });

                newDiv.remove();
            });
        });
    })
    //Табы с вопросами / Question Tabs
    const tabElement = document.querySelectorAll('.lc-tabs__tab');
    tabElement.forEach(function(element) {
        element.addEventListener('click', function() {
            if (!this.classList.contains('lc-tabs__tab_active')) {
                tabElement.forEach(function(tab) {
                    tab.classList.remove('lc-tabs__tab_active');
                });
                this.classList.add('lc-tabs__tab_active');
            }
        });
    });
    //Аккордеон / Accordeon
    const acordeonElement = document.querySelectorAll('.lc-spoiler-item');
    acordeonElement.forEach(function(element) {
        element.addEventListener('click', function() {
            if(this.classList.contains('lc-spoiler-item_open')){
                this.classList.remove('lc-spoiler-item_open');
            }else{
                this.classList.add('lc-spoiler-item_open');
            }
        });
    });
    // Тень / Toolbar Shadow
    const shadowBlock = document.querySelector('.lc-header-lpc__fixed-wrapper');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            shadowBlock.classList.add('lc-header-lpc__fixed-wrapper__active');
        } else {
            shadowBlock.classList.remove('lc-header-lpc__fixed-wrapper__active');
        }
    });
}

document.addEventListener('DOMContentLoaded', tabHandler);
