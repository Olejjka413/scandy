const nameInput = document.querySelector('.callback__input--name');
const phoneInput = document.querySelector('.callback__input--phone');
const submit = document.querySelector('.callback__submit');


const handleInputChange = () => {
    const nameValue = nameInput.value;
    const phoneValue = phoneInput.value;

    if ((nameValue !== ``) && (phoneValue !== ``)) {
        submit.disabled = false;

    }

};

nameInput.addEventListener(`change`, handleInputChange);
phoneInput.addEventListener(`change`, handleInputChange);
submit.disabled = true;
