const popupOpenButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');

const popupToggle = function() {
    popup.classList.toggle('popup__opened');
}

// Навесить слушатель на клик по кнопке 'О проекте'

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);