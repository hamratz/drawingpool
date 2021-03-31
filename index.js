let welcomeBtn = false

const url = 'http://localhost:3000/drawings'
const collection = document.querySelector('div#drawing-collection')
const usernameForm = document.querySelector('form#username-form')
const drawDiv = document.querySelector('div#all-drawings')
const welcomeDiv = document.querySelector('div#welcome')

usernameForm.addEventListener("submit", (event) => {

  event.preventDefault()
  // hide & seek with the form
  welcomeBtn = !welcomeBtn
  if (welcomeBtn) {
    drawDiv.style.display = "none"
  } else {
    drawDiv.style.display = "block"
  }
})

function hideWelcome () {
  if (drawDiv.style.display === "block"){
    welcomeDiv.style.display = "none"
  }
}

hideWelcome()


function renderAllDrawings() {
    fetch(url)
      .then(res => res.json())
      .then(drawings => {
        // console.log(drawings)
        drawings.forEach(drawing => {
          renderOneDrawing(drawing)
        })
      })
  }

function renderOneDrawing(drawing) {
    const drawDiv = document.createElement('div')
    drawDiv.dataset.id = drawing.id
    
    drawDiv.classList.add('draw')

    drawDiv.innerHTML = 
    `<img src=${drawing.image} class="all-drawings" />`

   collection.append(drawDiv)



}
  renderAllDrawings()