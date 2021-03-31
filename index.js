
document.addEventListener("DOMContentLoaded", () => {

const drawingsUrl = 'http://localhost:3000/drawings'
const usersUrl = 'http://localhost:3000/users'
const collection = document.querySelector('div#drawing-collection')
const usernameForm = document.querySelector('form#username-form')
const newDrawingForm = document.querySelector('form#new-drawing-form')
let drawDiv = document.querySelector('div#all-drawings')
const welcomeDiv = document.querySelector('div#welcome')
const mainImgDiv = document.querySelector('div#main-drawing')







usernameForm.addEventListener("submit", function(event){
  event.preventDefault()
const usernameInput = event.target[0].value

fetch(usersUrl, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },

  body: JSON.stringify({
    username: usernameInput
  })

})
  welcomeDiv.textContent = ""
renderAllDrawings()
})




function renderAllDrawings() {
    fetch(drawingsUrl)
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
    `<img src=${drawing.image} id=${drawing.id} class="all-drawings" />`

   collection.append(drawDiv)



}



   collection.addEventListener('click', event => {
    if (event.target.matches('img.all-drawings')) {

      const id = event.target.id
  
    fetch(`${drawingsUrl}/${id}`)
    .then(response => response.json())
    .then(img => {
      drawDiv.textContent = ""
      mainImg(img)
    })
    }
  })

  function mainImg(img){
    const imgDiv = document.createElement('div')

    imgDiv.innerHTML = 
     `<img src=${img.image} id=${img.id} class="all-drawings" />`

     mainImgDiv.append(imgDiv)
  }

})


