import Graph from "./js/graph.js";
// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 500
}).appendTo(document.getElementById("canvas_1"));

// Creating twojs lines for graph
var points1 = [
  new Two.Anchor(98, 100),
  new Two.Anchor(300, 100),
  new Two.Anchor(300, 160),
  new Two.Anchor(98, 160),
];
var graph1 = new Graph(two, points1, "", "#276BB0", 0.5, 4);

two.update();
// Define the center and radius of the circle
var centerX = 200, centerY = 100;
var radius = 100;
var numSegments = 50; // Number of segments to approximate the arc

// Initial slider value
var sliderValue = 0;

// Create paths for the two bending lines
var line1Path = new Two.Path();
line1Path.fill="#f4f6ff"; // Set color to blue for distinction
line1Path.linewidth = 0;

var line2Path = new Two.Path();
line2Path.fill="#276BB0"; // Set color to green for distinction
line2Path.linewidth = 0;
line2Path.opacity=0.5;

// Function to update the paths based on the slider value
function updatePaths() {
  // Clear previous vertices
  line1Path.vertices = [];
  line2Path.vertices = [];

  // Calculate the angle for each segment of the arc
  var angleStep = Math.PI / numSegments;
  for (var i = 0; i <= numSegments; i++) {
    var angle = i * angleStep;

    // Calculate the position of points for the bending lines
    var x1 = centerX +radius *Math.cos(angle) + sliderValue;
    var x2 = centerX + radius * Math.cos(angle) - sliderValue/2;
    var y1 = centerY  + sliderValue *2* Math.sin(angle);
    var y2 = centerY +60 + sliderValue*2.3 * Math.sin(angle);
    points1[0].x=98+sliderValue*1.5;
    points1[1].x=300-sliderValue*1.5;
    // Add points to the paths
    line1Path.vertices.push(new Two.Anchor(x1, y1));
    line2Path.vertices.push(new Two.Anchor(x2, y2));
  }

  // Update the Two.js scene
  two.update();
}

// Add the paths to the Two.js scene
two.add(line1Path);
two.add(line2Path);



// Initial update
updatePaths();
var arraow1 = two.makeLine(150,50,150,200);
arraow1.linewidth=2;
var arraow2 = two.makeLine(250,50,250,200);
arraow2.linewidth=2;
two.update();

function updateArrow(){
  arraow1.vertices[0].x = 150 + sliderValue*2;
  arraow1.vertices[1].x = 150 - sliderValue*2;
  arraow2.vertices[0].x = 250 - sliderValue*2;
  arraow2.vertices[1].x = 250 + sliderValue*2;
  two.update();
}


// Add event listener to the slider
document.getElementById("mue").addEventListener("input", function(event) {
  sliderValue = parseFloat(event.target.value);
  updatePaths();
  updateArrow();
});