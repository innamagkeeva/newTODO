const formHigh = document.querySelector('.form-high')
const listHigh = document.querySelector('.list-high')
const formLow = document.querySelector('.form-low')
const listLow = document.querySelector('.list-low')

const formHighInput = document.querySelector('.form-high__input')

formHigh.addEventListener('submit', addTask)
function addTask(e) {
  e.preventDefault()

  const newLi = document.createElement('li')
  newLi.className = 'list-high__item'
  listHigh.appendChild(newLi)

  newLi.appendChild(createInput())
  newLi.appendChild(createText(formHighInput.value))
  newLi.appendChild(createButton())

  clearInput()
}

function createInput() {
  const newInput = document.createElement('input')
  newInput.className = 'list-high__checkbox'
  newInput.type = 'checkbox'
  return newInput
}

function createText(text) {
  const newText = document.createElement('p')
  newText.className = 'list-high__text'
  const inputText = text
  newText.textContent = inputText
  return newText
}

function createButton() {
  const newButton = document.createElement('button')
  newButton.className = 'list-high__delete'
  newButton.textContent = '+'

  newButton.addEventListener('click', deleteTask)
  return newButton
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

function clearInput() {
  formHighInput.value = ''
}

const UI = {
  HIGH: {
    FORM: document.querySelector('.form-high'),
  },
  LOW: {
    FORM: document.querySelector('.form-low'),
  },
}
