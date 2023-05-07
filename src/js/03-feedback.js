import throttle from "lodash.throttle";

const feedbackFormEl = document.querySelector(".feedback-form");
const emailInputEl = document.querySelector('input');
const messageTextareaEl = document.querySelector('textarea');
const LOCAL_KEY = "feedback-form-state";

feedbackFormEl.addEventListener('input', throttle(onInputData, 500));
feedbackFormEl.addEventListener('submit', onSubmitData);
relaunchPage();

function onInputData() {
    const dataForm = {
        email: emailInputEl.value,
        message: messageTextareaEl.value
    };
    localStorage.setItem(LOCAL_KEY, JSON.stringify(dataForm));
};

function relaunchPage() {
    const savedValues = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if(savedValues) {
        emailInputEl.value = savedValues.email;
        messageTextareaEl.value = savedValues.message;
    }
};

function onSubmitData(event) {
    event.preventDefault();
    const email = emailInputEl.value;
    const message = messageTextareaEl.value;
    if(email !== '' && message !== '') {
        console.log({
            email: email,
            message: message
        });
        feedbackFormEl.reset();
    }
    else {
        alert('Please fill all form elements!!!')
    }
    localStorage.removeItem(LOCAL_KEY);
};

