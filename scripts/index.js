const popupOpenButton = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__save-button');

const popupToggle = function() {
    popup.classList.toggle('popup__opened');
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form'); 
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__form_name');
let jobInput = document.querySelector('.popup__form_job');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.value 
    jobInput.value 

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile__name');
    let job = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value
    job.textContent = jobInput.value
}

formElement.addEventListener('submit', formSubmitHandler);

popupSaveButton.addEventListener('click', popupToggle);