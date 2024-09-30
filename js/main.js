import UI from './ui.js'

let highTasks = []
let lowTasks = []

UI.HIGH_FORM.addEventListener('submit', addTask)
UI.LOW_FORM.addEventListener('submit', addTask)

function addTask(e) {
  e.preventDefault()

  console.log(e.target.classList)

  const newLi = document.createElement('li')
  newLi.className = 'list__item'

  if (e.target.classList.contains('form-high')) {
    const highTaskText = UI.HIGH_INPUT.value

    newLi.appendChild(createInput())
    newLi.appendChild(createText(highTaskText))
    newLi.appendChild(createButton())
    UI.HIGH_LIST.appendChild(newLi)

    highTasks.push(highTaskText)
    console.log('highTasks= ', highTasks)
  } else if (e.target.classList.contains('form-low')) {
    const lowTaskText = UI.LOW_INPUT.value

    console.log('lowTaskText= ', lowTaskText)
    newLi.appendChild(createInput())
    newLi.appendChild(createText(lowTaskText))
    newLi.appendChild(createButton())

    UI.LOW_LIST.appendChild(newLi)

    lowTasks.push(lowTaskText)
    console.log('lowTasks= ', lowTasks)
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

  const inputText = text.charAt(0).toUpperCase() + text.slice(1).trim()
  // вопрос 1: что лучше text[0] или text.charAt(0) ???
  // вопрос 2: если убирает пробелы с помощью trim(), то пишет с маленькой буквы.

  newText.textContent = inputText
  console.log(newText)

  return newText
}

function createButton() {
  const newButton = document.createElement('button')
  newButton.className = 'list__button-delete'
  newButton.textContent = '+'

  newButton.addEventListener('click', deleteTask)
  return newButton
}

function deleteTask(e) {
  const taskText = e.target.parentNode.querySelector('.list__text').textContent

  if (UI.HIGH_LIST.contains(e.target.parentNode)) {
    const index = highTasks.indexOf(taskText)
    if (index !== -1) {
      highTasks.splice(index, 1)
    }
    console.log(highTasks)
  } else if (UI.LOW_LIST.contains(e.target.parentNode)) {
    const index = lowTasks.indexOf(taskText)
    if (index !== -1) {
      lowTasks.splice(index, 1)
      console.log(lowTasks)
    }
  }

  e.target.parentNode.remove()
}

function clearInput() {
  UI.HIGH_INPUT.value = ''
  UI.LOW_INPUT.value = ''
}
