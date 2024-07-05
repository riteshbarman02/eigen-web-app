//import { Two } from 'https://cdnjs.cloudflare.com/ajax/libs/two.js/3.2.2/two.module.js';

// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 500
}).appendTo(document.getElementById("canvas_1"));

// Create the main rectangle
var shadowRect = new Two.Rectangle(200 , 150 , 100, 100); // Offset by 10 pixels
shadowRect.fill = 'black'; // Shadow color
shadowRect.opacity = 0.2; // Shadow opacity
shadowRect.noStroke(); // No stroke for shadow
two.add(shadowRect);
var rect = new Two.Rectangle(200, 150, 100, 100); // x, y, width, height

// Style the main rectangle
rect.fill = 'skyblue'; // Fill color
rect.stroke = 'black'; // Stroke color
rect.linewidth = 2; // Stroke width

// Add the main rectangle to the Two.js scene
two.add(rect);


//addding the stress lines 
var stress1Arrow= two.makeArrow(280,170,280,130)
stress1Arrow.stroke= "red"
stress1Arrow.linewidth=2
var stress2Arrow= two.makeArrow(120,170,120,130)
stress2Arrow.stroke= "red"
stress2Arrow.linewidth=2

// Render the scene
two.update();
var mue = document.getElementById('mue');
//Function to rotate the rectangle based on slider input
function rotateRectangle() {
  var mueVal = mue.value;
  rect.rotation =- mueVal* (Math.PI / 180); // Convert degrees to radians
  two.update();
}
function rotatestress() {
  var mueval = mue.value;
  // var angleInRadians = - mue* (Math.PI / 180); // Convert degrees to radians

  var angleInRadians = 0; // Or replace with actual angle calculation if needed
  //Convert degrees to radians if using slider input:
  if (mue !== undefined) {
    angleInRadians = - mueval* (Math.PI / 180);
  }

  // Rotate the arrow without translation:
  var radius = 80; // Radius of rotation
  
  // Calculate the new position of the stress arrow
  var newX =  radius * Math.cos(angleInRadians);
  var newY =  radius * Math.sin(angleInRadians);
  
  // Set the new position for the arrow
  stress1Arrow.translation.set(newX-80, newY);
  // Update the scene:
  

  two.update();
  
  
  // Update the scene
  two.update();
}
stress1Arrow.translation.set(two.width / 2, two.height / 2);
  // Function to update arrow rotation based on slider value
function updateRotation() {
    // Get the slider value
    var mueVal = mue.value;
    // Convert slider value to radians for rotation
    var rotationInRadians = mueVal * Math.PI / 180;
    // Set arrow rotation
    stress1Arrow.rotation = rotationInRadians;
    // Render the scene
    console.log("hj")
    two.update();
  }
var rotationAngle = 0;
// Add event listener to the slider
document.getElementById('mue').addEventListener('input', function() {
  rotateRectangle();
 // rotatestress();
 updateRotation();
});
// Create axes
var xaxis = two.makeArrow(350, 150, 50, 150);
var xaxis2 = two.makeArrow(350, 150, 350, 150);
var yaxis = two.makeArrow(200, 50, 200, 280);
var yaxis2 = two.makeArrow(200, 50, 200, 30);
xaxis.linewidth = 2;
xaxis2.linewidth = 2;
yaxis.linewidth = 2;
yaxis2.linewidth = 2;

// Render the scene
two.update();


