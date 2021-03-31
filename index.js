const url = 'http://localhost:3000/drawings'
const collection = document.querySelector('div#drawing-collection')

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

function getOneDrawing(id) {
  fetch(`${url}/${id}`)
    .then(res => res.json())
    .then
}
  renderAllDrawings()