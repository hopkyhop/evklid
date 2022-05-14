/*слайдер*/
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    slideLabelMessage: '{{index}}-ый слайд',
    paginationBulletMessage: 'Переход к слайду {{index}}'
  }
});

/*табы*/
window.addEventListener('DOMContentLoaded', function () {
document.querySelector("#burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector("#cross").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.questions__item').addEventListener('click', function () {
    document.querySelector('').classList.toggle('is-active')
  })
})

/*аккордион*/
$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    icons: false,
    collapsible: true,
    active: false
  });
});


/*табы*/
document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

