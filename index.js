console.clear()
const form = document.querySelector('form')
const arrayContainingInput = [];
form.addEventListener('submit', handleSubmit)

function handleSubmit(ev){
    ev.preventDefault()
    const form = ev.target
    const input = form.inputting.value
    arrayContainingInput.push(input)
    const movies = document.querySelector('#movies')
    movies.textContent = ""
    
    const list = createList(arrayContainingInput)
    
    movies.appendChild(list)
    form.reset()
    form.inputting.focus()
}

function createList(arrayContainingInput){
    const list = document.createElement('ul')
    for(let element in arrayContainingInput){
        const theDiv = document.createElement('div')
        const para = document.createElement('p')
        const button = document.createElement('button')
        button.innerHTML = "Remove it"
        button.addEventListener('click', removeTheElement)
        para.textContent = arrayContainingInput[element]
        theDiv.appendChild(para)
        theDiv.appendChild(button)
        list.appendChild(theDiv)
    }

    return list
}

function removeTheElement(ev){
    const d = ev.target.parentElement
    let index = arrayContainingInput.indexOf(d.querySelector('p').textContent)
    arrayContainingInput.splice(index,1);
    d.parentElement.removeChild(d)
    console.log(arrayContainingInput)
    form.reset()
}