const formHigh = document.querySelector('.formHigh')
const listHigh = document.querySelector('.listHigh')
const formLow = document.querySelector('.formLow')
const listLow = document.querySelector('.listLow')

const formHighInput = document.querySelector('.formHigh__input')

formHigh.addEventListener('submit', addTask)
// formLow.addEventListener('submit', addTask2)

function addTask(e) {
  e.preventDefault()

  const newLi = document.createElement('li')
  newLi.className = 'listHigh__item'
  listHigh.appendChild(newLi)

  newLi.appendChild(createInput())
  newLi.appendChild(createText(formHighInput.value))
  newLi.appendChild(createButton())

  clearInput()

  // newButton.addEventListener('click', deleteTask())
}

function createInput() {
  const newInput = document.createElement('input')
  newInput.className = 'listHigh__checkbox'
  newInput.type = 'checkbox'
  return newInput
}

function createText(text) {
  const newText = document.createElement('p')
  newText.className = 'listHigh__text'
  const inputText = text
  newText.textContent = inputText
  return newText
}

function createButton() {
  const newButton = document.createElement('button')
  newButton.className = 'listHigh__delete'
  newButton.textContent = '+'

  // newButton.addEventListener('click', deleteTask())
  return newButton
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

function clearInput() {
  formHighInput.value = ''
}
