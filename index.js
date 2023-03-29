const addButtonEl = document.getElementById('add-button')
const inputFieldEl = document.getElementById('input-field')

addButtonEl.addEventListener("click", ()=>{
    let inputValue = inputFieldEl.value
    console.log(inputValue)
})