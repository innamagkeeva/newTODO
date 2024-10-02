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

  let taskText
  let taskList

  if (e.target.classList.contains('form-high')) {
    taskText = UI.HIGH_INPUT.value
    taskList = UI.HIGH_LIST
    highTasks.push(taskText)
  } else if (e.target.classList.contains('form-low')) {
    taskText = UI.LOW_INPUT.value
    taskList = UI.LOW_LIST
    lowTasks.push(taskText)
  }
  newLi.appendChild(createInput())
  newLi.appendChild(createText(taskText))
  newLi.appendChild(createButton())
  taskList.appendChild(newLi)

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

  const inputText = text.trim()
  const newInputText = inputText.charAt(0).toUpperCase() + inputText.slice(1)

  newText.textContent = newInputText
  console.log(newText)

  // Ура работает! пока допетрила... все варианты прошлась

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
      console.log(highTasks)
    }
  } else if (UI.LOW_LIST.contains(e.target.parentNode)) {
    const index = lowTasks.indexOf(taskText)
    if (index !== -1) {
      lowTasks.splice(index, 1)
      console.log(lowTasks)
    }
  }

  e.target.parentNode.remove()
}

// в связи с изменениями в function addTask(e) поломалась function deleteTask(e). теперь задача из массива не удаляется. а что не так я не вижу.

function clearInput() {
  UI.HIGH_INPUT.value = ''
  UI.LOW_INPUT.value = ''
}
