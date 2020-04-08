import sketch from 'sketch'
let doc = sketch.getSelectedDocument()
let currentPage = doc.pages.filter( page => page.selected )[0]
const LAYER_COUNT = 11
const COLORS = [
  '#ff6600',
  '#F63D5E',
  '#C4438C',
  '#7D5398',
  '#405481',
  '#2F4858',
  '#1C6E7D',
  '#039590',
  '#4BBC8E',
  '#9BDE7E',
  '#F9F871'
]

export default function() {
  // Reset document colors and selection
  doc.colors = []
  doc.selectedLayers.clear()

  for (var i = 0; i < LAYER_COUNT; i++) {
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
            color: COLORS[i],
            fillType: sketch.Style.FillType.Color
          }
        ]
      }
    })
    doc.colors.push({
      'name': `Rainbow ${i+1}`,
      'color': COLORS[i]
    })
    newLayer.selected = true
  }

  // Zoom to selected layers
  doc.centerOnLayer(doc.selectedLayers.layers[5])
  doc.selectedLayers.clear()
  sketch.UI.message("🌈 Have a very nice day! 🌈")
}
