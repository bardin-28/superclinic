// Переключение табов
const tabsContent = document.querySelectorAll('.tabs-content');
const tabsBtn = document.querySelectorAll('.tabs-btn');

tabsBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
        changeTab(i)
    })
})

const changeTab = (clickedTab) => {
    tabsContent.forEach((e, i) => {
        if (i !== clickedTab) {
            e.classList.remove('active')
        } else {
            e.classList.add('active')
        }
    })
}
// Mobile Menu
const mobMenuBtn = document.getElementsByClassName('header-menuMobileBtn')[0];
const mobMenuCont = document.getElementsByClassName('header-menuMobile')[0];
const docBody = document.getElementsByTagName('body')[0];
mobMenuBtn.addEventListener('click', () => {
    mobMenuBtn.classList.toggle('active')
    if (mobMenuBtn.classList.contains('active')) {
        mobMenuCont.classList.add('d-block');
        docBody.style.overflow = "hidden";
    } else {
        mobMenuCont.classList.remove('d-block');
        docBody.style.overflow = "auto";
    }
})