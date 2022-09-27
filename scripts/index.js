const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__save-button');

let formElement = document.querySelector('.popup__form'); 
let nameInput = document.querySelector('.popup__text_name');
let jobInput = document.querySelector('.popup__text_job');
let profileNameElement = document.querySelector('.profile__name');
let profileDescriptionElement = document.querySelector('.profile__description');

const popupToggle = function() {
    popup.classList.contains('popup_opened') 
    nameInput.value = profileNameElement.textContent;
    jobInput.value = profileDescriptionElement.textContent;
    popup.classList.toggle('popup_opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileNameElement.textContent = nameInput.value
    profileDescriptionElement.textContent = jobInput.value
    popupToggle()
}

formElement.addEventListener('submit', formSubmitHandler);