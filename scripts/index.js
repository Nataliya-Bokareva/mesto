const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__save-button');

const formElement = document.querySelector('.popup__form'); 
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');

const popupToggle = function() {
    if (!popup.classList.contains('popup_opened')) { 
        nameInput.value = profileNameElement.textContent; 
        jobInput.value = profileDescriptionElement.textContent; 
    }
    popup.classList.toggle('popup_opened'); 
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = jobInput.value;
    popupToggle();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

formElement.addEventListener('submit', formSubmitHandler);