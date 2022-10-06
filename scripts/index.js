const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__save-button');
const newpopupOpenButton = document.querySelector('.profile__add-button');
const newpopup = document.querySelector('.popup-new-place');
const newpopupCloseButton = document.querySelector('.popup-new-place__close');
const newpopupSaveButton = document.querySelector('.popup-new-place__save-button');

const formElement = document.querySelector('.popup__form'); 
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');
const likeButton = document.querySelector('.element__like-button');
const template = document.querySelector(".template");
const elementsContainer = document.querySelector(".elements");



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

 function createElement () {
    const newElement = template.content.cloneNode(true);
    const elementName = newElement.querySelector(".element__name");
    const elementImg = newElement.querySelector(".element__image");
    elementName.textContent = name; 
    elementImg.setAttribute('src', link);

    return newElement;
    elementsContainer.append(newElement);
 } 

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

const newpopupToggle = function() {
    newpopup.classList.toggle('popup-new-place_opened'); 
}

//function likeToggle () {
    //likeButton.classList.toggle('element__like-button_active');
//}

//songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    //evt.target.classList.toggle('song__like_active');
 //});

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
newpopupOpenButton.addEventListener('click', newpopupToggle);
newpopupCloseButton.addEventListener('click', newpopupToggle);
//likeButton.addEventListener('click', likeToggle);

formElement.addEventListener('submit', formSubmitHandler);