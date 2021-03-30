const url = 'http://localhost:3000/drawings'

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

function renderOneDrawing() {

    
}
  renderAllDrawings()