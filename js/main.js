import UI from './ui.js'

UI.HIGH_FORM.addEventListener('submit', addTask)
UI.LOW_FORM.addEventListener('submit', addTask)

function addTask(e) {
  e.preventDefault()

  console.log(e.target.classList)

  const newLi = document.createElement('li')
  newLi.className = 'list__item'

  if (e.target.classList.contains('form-high')) {
    newLi.appendChild(createInput())
    newLi.appendChild(createText(UI.HIGH_INPUT.value))
    newLi.appendChild(createButton())
    UI.HIGH_LIST.appendChild(newLi)
  } else if (e.target.classList.contains('form-low')) {
    newLi.appendChild(createInput())
    newLi.appendChild(createText(UI.LOW_INPUT.value))

    newLi.appendChild(createButton())

    UI.LOW_LIST.appendChild(newLi)
  }
  clearInput()
}

function createInput() {
  const newInput = document.createElement('input')
  newInput.className = 'list__checkbox'
  newInput.type = 'checkbox'
  return newInput
}

function createText(text) {
  const newText = document.createElement('p')
  newText.className = 'list__text'

  const inputText = text
  newText.textContent = inputText

  return newText
}

function createButton() {
  const newButton = document.createElement('button')
  newButton.className = 'list__delete'
  newButton.textContent = '+'

  newButton.addEventListener('click', deleteTask)
  return newButton
}

function deleteTask(e) {
  e.target.parentNode.remove()
}

function clearInput() {
  UI.HIGH_INPUT.value = ''
  UI.LOW_INPUT.value = ''
}
