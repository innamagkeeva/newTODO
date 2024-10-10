import UI from './ui.js'

let highTasks = []
let lowTasks = []

UI.HIGH_FORM.addEventListener('submit', addTask)
UI.LOW_FORM.addEventListener('submit', addTask)

UI.HIGH_INPUT.addEventListener('input', checkInput)
UI.LOW_INPUT.addEventListener('input', checkInput)

function checkInput() {
  const highInputValue = UI.HIGH_INPUT.value.trim()
  const lowInputValue = UI.LOW_INPUT.value.trim()

  if (highInputValue) {
    console.log('highInputValue= ', highInputValue)

    UI.HIGH_BUTTON.removeAttribute('disabled')
  } else {
    UI.HIGH_BUTTON.setAttribute('disabled', true)
  }

  if (lowInputValue) {
    console.log('lowInputValue= ', lowInputValue)

    UI.LOW_BUTTON.removeAttribute('disabled')
  } else {
    UI.LOW_BUTTON.setAttribute('disabled', true)
  }
}

function addTask(e) {
  e.preventDefault()

  console.log(e.target.classList)

  if (e.target.classList.contains('form-high')) {
    showTaskText('HIGH_INPUT', 'HIGH_LIST', highTasks)

    // const storage = JSON.stringify(highTasks)
    // localStorage.setItem('highTask', storage)
  } else if (e.target.classList.contains('form-low')) {
    showTaskText('LOW_INPUT', 'LOW_LIST', lowTasks)

    // const storage = JSON.stringify(lowTasks)
    // localStorage.setItem('lowTask', storage)
  }

  clearInput()
}

function saveToLocalStorage(tasks, list) {}

function showTaskText(input, list, task) {
  const newLi = document.createElement('li')
  newLi.className = 'list__item'

  const taskText = UI[input].value.trim()
  const normalizeTaskText = taskText.charAt(0).toUpperCase() + taskText.slice(1)

  task.push(taskText)
  newLi.appendChild(createInput())
  newLi.appendChild(createText(normalizeTaskText))
  newLi.appendChild(createButton())
  UI[list].appendChild(newLi)
  saveToLocalStorage()
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

function clearInput() {
  UI.HIGH_INPUT.value = ''
  UI.LOW_INPUT.value = ''
}
