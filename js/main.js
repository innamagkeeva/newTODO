import UI from './ui.js'

UI.HIGH_FORM.addEventListener('submit', addTask)

// function addTask(e) {
//   e.preventDefault()

//   const newLi = document.createElement('li')
//   newLi.className = 'list-high__item'
//   UI.HIGH_LIST.appendChild(newLi)

//   newLi.appendChild(createInput())
//   newLi.appendChild(createText(UI.HIGH_INPUT.value))
//   newLi.appendChild(createButton())

//   clearInput()
// }

function addTask(e) {
  e.preventDefault()
  const newLi = document.createElement('li')
  newLi.className = 'list__item'

  if (e.target.classList.contains('HIGH_FORM')) {
    newLi.appendChild(createInput())
    newLi.appendChild(createText(UI.HIGH_INPUT.value))
    newLi.appendChild(createButton())

    UI.HIGH_LIST.appendChild(newLi)
    // return
  }
  if (e.target.classList.contains('LOW_FORM')) {
    newLi.appendChild(createInput())
    newLi.appendChild(createText(UI.LOW_INPUT.value))
    newLi.appendChild(createButton())

    UI.LOW_LIST.appendChild(newLi)
    // return
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
  UI.FORM_INPUT.value = ''
}
