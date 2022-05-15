document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTask(e.target['new-task-description'].value)
    form.reset()
  })
})

function buildTask(task){
let li = document.createElement('li')
let btn = document.createElement('button')
btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
li.textContent = `${task} `
li.appendChild(btn)
document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
