// Burger-nav

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

if (hamburger) {
  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("lock");
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  })
}

if (nav) {
  nav.addEventListener("click", () => {
    document.body.classList.remove("lock");
    hamburger.classList.remove("open");
    nav.classList.remove("open");
  })
}

// Portfolio-switch

const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const portfolioPhotos = document.querySelectorAll('.portfolio-photo');
const portfolioButtons = document.querySelector('.portfolio-buttons');

const changePhoto = (e) => {  
  if (e.target.classList.contains('portfolio-btn')) {
    portfolioBtn.forEach(el => el.classList.remove('portfolio-active'));
    e.target.classList.add('portfolio-active');
    let seasons = e.target.dataset.season;
    portfolioPhotos.forEach((img, index) => img.src = `assets/img/${seasons}/${index + 1}.jpg`);
  }
};

portfolioButtons.addEventListener('click', changePhoto);

function preLoadPhotos() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  for(let i = 1; i <= 6; i++) {
    for (let s = 0; s < seasons.length; s++) {
      const img = new Image();
      img.src = `./assets/img/${seasons[s]}/${i}.jpg`;
    }
  }
}

preLoadPhotos();

// Lang-switch

import i18Obj from './translate.js';

const translateData = document.querySelectorAll('[data-i18]');

const getTranslate = (lang) => {
  translateData.forEach(e => {
    let valueData = e.dataset.i18;
    e.textContent = `${lang[valueData]}`;
  });
};

const lang = document.querySelectorAll('.lang')

const changeLanguage = (e) => {
  if (e.target.classList.contains('lang')) {
    lang.forEach(el => el.classList.remove('active'));
    e.target.classList.add('active');
    getTranslate(i18Obj[e.target.dataset.i18]);
  }
};
lang.forEach(el => el.addEventListener('click', changeLanguage));

// Theme

const skills = document.querySelector('.skills-container');
const portfolio = document.querySelector('.portfolio-container');
const video = document.querySelector('.video-container');
const price = document.querySelector('.price-container');
const themeSwitch = document.querySelector('.theme-link');
const itemBurger = document.querySelectorAll('.nav-link')
const close = document.querySelectorAll('.line');

const sections = [skills, portfolio, video, price, themeSwitch];

themeSwitch.addEventListener('click', () => {
  sections.forEach(x => x.classList.toggle('light-theme'));
  nav.classList.toggle('navBurger');
  close.forEach(l => l.classList.toggle('close'));
  itemBurger.forEach(i => i.classList.toggle('itemBurger'));
})

// const theme = () => {
//   sections.forEach(x => x.classList.toggle('light-theme'));
// };
// themeSwitch.addEventListener('click', theme);

// Portfolio part 3

console.log('Ваша отметка - 78 баллов\n Отзыв по пунктам ТЗ:\n Не выполненные не засчитанные пункты:\n 1 выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы\n Частично выполненные пункты:\n 1 при клике по надписи ru англоязычная страница переводится на русский язык — 8 баллов');





