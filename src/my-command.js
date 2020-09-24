import sketch from 'sketch'

let doc = sketch.getSelectedDocument()
let currentPage = doc.pages.filter( page => page.selected )[0]

function generateHex() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  var hexColor = "#" + randomColor;
  return hexColor;
}

function generateColors(count) {
  // Reset document colors and selection
  doc.colors = []
  doc.selectedLayers.clear()

  for (var i = 0; i < LAYER_COUNT; i++) {
    const randomColor = generateHex()
    let newLayer = new sketch.ShapePath({
      name: `Rainbow Layer ${i+1}`,
      shapeType: sketch.ShapePath.ShapeType.Rectangle,
      parent: currentPage,
      frame: {
        x: (i * 50) + (10 * i),
        y: 0,
        width: 50,
        height: 50
      },
      style: {
        fills: [
          {
            color: randomColor,
            fillType: sketch.Style.FillType.Color
          }
        ]
      }
    })
    doc.colors.push({
      'name': `Rainbow ${i+1}`,
      'color': randomColor
    })
    newLayer.selected = true
  }

  // Zoom to selected layers
  doc.centerOnLayer(doc.selectedLayers.layers[5])
  doc.selectedLayers.clear()
  sketch.UI.message("🌈 Have a very nice day! 🌈")
}

export function generate50Swatches() { generateSwatches(50) }
export function generate100Swatches() { generateSwatches(100) }
export function generate50Colors() { generateColors(50) }
export function generate100Colors() { generateColors(100) }

function generateSwatches(count) {
  doc.swatches = []
  for (var i = 0; i < count; i++) {
    const randomColor = generateHex()
    const swatch = sketch.Swatch.from({
      name: `Rainbow ${i+1}`,
      color: randomColor
    })
    doc.swatches.push(swatch)
  }
  sketch.UI.message("🌈 Color Swatches generated. Have a very nice day! 🌈")
}

