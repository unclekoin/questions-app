import {createModal, isValid} from "./utils";
import Question from "./question";
import './styles.css';
import {getAuthForm} from "./auth";

const form = document.getElementById('form');
const modalBtn = document.getElementById('modal-btn');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');

window.addEventListener('load', Question.renderList);

modalBtn.addEventListener('click', openModal);

form.addEventListener('submit', submitFormHandler);
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value);
})

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value,
      date: new Date().toJSON()
    }

    submitBtn.disabled = true

    // Async request to server to save question
    Question.create(question).then(() => {
      input.value = '';
      input.className = '';
      submitBtn.disabled = false;
    })
  }
}

function openModal() {
  createModal('Authorization', getAuthForm())
}
