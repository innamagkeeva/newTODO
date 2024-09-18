import UI from './ui.js'

UI.HIGH_FORM.addEventListener('submit', addTask)
UI.LOW_FORM.addEventListener('submit', addTask)

function addTask(e) {
  e.preventDefault()

  console.log(e.target.classList)
  console.log(UI.FORM_INPUT.value)

  const newLi = document.createElement('li')
  newLi.className = 'list__item'

  if (e.target.classList.contains('form-high')) {
    console.log(111)

    newLi.appendChild(createInput())
    newLi.appendChild(createText(UI.FORM_INPUT.value))

    newLi.appendChild(createButton())

    UI.HIGH_LIST.appendChild(newLi)
  } else if (e.target.classList.contains('form-low')) {
    console.log(222)

    newLi.appendChild(createInput())
    newLi.appendChild(createText(UI.FORM_INPUT.value))

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
  console.log(777)

  const newText = document.createElement('p')
  newText.className = 'list__text'
  console.log(888)

  const inputText = text
  newText.textContent = inputText
  console.log(999)

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
  UI.FORM_INPUT.value = ''
}
