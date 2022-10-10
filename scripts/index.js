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

const template = document.querySelector(".template");
const elementsContainer = document.querySelector(".elements");
const placeNameInput = document.querySelector('.popup-new-place__text_type_name');
const placeLinkInput = document.querySelector('.popup-new-place__text_type_link');
const newFormElement = document.querySelector('.popup-new-place__form');


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

  const render = () => {
    initialCards.forEach((initialCard) => {
      const newEl = createEl(initialCard.name, initialCard.link);
      elementsContainer.prepend(newEl);
    });

    newpopupSaveButton.addEventListener('click', AddElement);
    
  }

  const createEl = (name, link) => {
    const newEl = template.content.cloneNode(true);
    const newName = newEl.querySelector(".element__name");
    const newImg = newEl.querySelector(".element__image");
    newName.textContent = name;
    newImg.src = link;
    newImg.alt = name;

    newEl.querySelector('.element__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-button_active');
   });

   const deleteButton = newEl.querySelector(".element__trash-bin");
   deleteButton.addEventListener("click", elDelete);

    return newEl;
  };

  const AddElement = (evt) => {
    evt.preventDefault()
    const Element = createEl(placeNameInput.value, placeLinkInput.value);
    elementsContainer.prepend(Element);
    placeNameInput.value = '';
    placeLinkInput.value = '';
    newpopupToggle();
  };

  const elDelete = (evt) => {
    const currentEl = evt.target.closest('.element');
    currentEl.remove();
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

//const likeButton = document.querySelector('.element__like-button');
   // likeButton.addEventListener('click', like);
//const like = (evt) => {
  //const likeEl = evt.target.classList.toggle('element__like-button_active');
//}

//function addLike () {
  //likeButton.addEventListener('click', function (evt) {
  //evt.target.classList.toggle('element__like-button_active');
//});
//}


//songElement.querySelector('.song__like').addEventListener('click', function (evt) {
    //evt.target.classList.toggle('song__like_active');
 //});

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
newpopupOpenButton.addEventListener('click', newpopupToggle);
newpopupCloseButton.addEventListener('click', newpopupToggle);
//newpopupSaveButton.addEventListener('click', AddElement);
//likeButton.addEventListener('click', likeToggle);

formElement.addEventListener('submit', formSubmitHandler);
//newFormElement.addEventListener('submit', AddElement);

render();