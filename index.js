// console.log ('Вёрстка валидная +10 \n  Вёрстка семантическая +20 \n Соответствие макету: \n блок header +3 \n секция hero +6 \n секция skills +4 \n секция portfolio +6 \n секция video +6 \n секция price +6 \n секция contacts +4 \n блок footer +3 \n для построения сетки используются флексы или гриды +2 \n при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n фоновый цвет тянется на всю ширину страницы +2 \n иконки добавлены в формате .svg. SVG может быть добавлен любым способом +2 \n изображения добавлены в формате .jpg +2 \n есть favicon +2 \n плавная прокрутка по якорям +5 \n ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5 \n интерактивность  +5 \n  плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5 \n Total 100');

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (hamburger) {
  hamburger.addEventListener("click", function (e){
    document.body.classList.toggle("lock");
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
  })
}

if (nav) {
  nav.addEventListener("click", function (e){
    document.body.classList.remove("lock");
    hamburger.classList.remove("open");
    nav.classList.remove("open");
  })
}
