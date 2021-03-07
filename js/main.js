'use strickt';
const headerBtn = document.getElementById('btn-open');
const headerText = document.getElementById('header-text');
const doRedBtn = document.getElementById('btn-do-red');
const modalText = document.querySelector('.modal-content');

doRedBtn.addEventListener('click', () => {
  modalText.classList.toggle('red-text');
});

// MODAL WINDOW
const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('modal-wrapper');

const overlay = document.getElementById('modal-overlay');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
  modal.classList.add('active');
});

const closeModal = () => {
  modal.classList.remove('active');
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

$(function() {
$(window).scroll(function () {
  $('#waitings-section .waitings-section__main-title').each(function () {
    const imagePos = $(this).offset().top;

    const topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 650) {
      $(this).addClass("animate__fadeInLeft");
    }
  });
});
  });
