var ob2 = document.getElementById("canvas_1");
// Create a Two.js instance
var two = new Two({
  fullscreen: false,
}).appendTo(ob2);

// Define the pendulum parameters
var pendulumLength = 200;
var pendulumRadius = 20;
var pendulumColor = "#3498db";
var pendulumWidth = 220;
var rangeInputValue = 3;

// Create the pendulum rod
const pendulumRod = two.makeLine(
  pendulumWidth,
  0,
  pendulumWidth,
  pendulumLength
);
pendulumRod.linewidth = 2;
pendulumRod.stroke = pendulumColor;

// Create the pendulum bob
const pendulumBob = two.makeCircle(
  pendulumWidth,
  pendulumLength,
  pendulumRadius
);
pendulumBob.fill = pendulumColor;

// Add the pendulum components to the scene
two.update();

// Animation variables
let isAnimating = false;

// Store the initial position of the pendulum bob
const initialBobPosition = pendulumBob.translation.clone();

// Animation loop
function animate() {
  if (isAnimating) {
    // Calculate the pendulum motion
    var angle =
      (Math.sin((two.frameCount * rangeInputValue) / 70) * Math.PI) /
      (9 - rangeInputValue) /
      2;

    // Update the pendulum bob position
    var bobX = pendulumWidth + pendulumLength * Math.sin(angle);
    var bobY = pendulumLength * Math.cos(angle); // Include the initial height of the pendulum
    pendulumBob.translation.set(bobX, bobY);

    // Update the pendulum rod position
    pendulumRod.vertices[1].set(bobX, bobY);

    // Update the scene
    two.update();

    // Request the next animation frame
    requestAnimationFrame(animate);
  }
}
// Animation loop
function animate1() {
  if (isAnimating) {
    // Calculate the pendulum motion
    var angle = (Math.sin(two.frameCount * 0.04) * Math.PI) / 4;

    // Update the pendulum bob position
    var bobX = pendulumWidth + pendulumLength * Math.sin(angle);
    var bobY = pendulumLength * Math.cos(angle); // Include the initial height of the pendulum
    pendulumBob.translation.set(bobX, bobY);

    // Update the pendulum rod position
    pendulumRod.vertices[1].set(bobX, bobY);

    // Update the scene
    two.update();

    // Request the next animation frame
    requestAnimationFrame(animate1);
  }
}
function boxAnimate() {
  // Create a rectangle representing the box
  var box = two.makeRectangle(pendulumWidth - 150, pendulumLength, 30, 10);
  box.fill = "#e74c3c"; // Set the box color

  // Animation parameters
  var targetX = pendulumWidth - 33; // Target x-coordinate for the box
  var animationDuration = 4000; // Duration of the animation in milliseconds
  var startTime = new Date().getTime(); // Start time of the animation
  two.update();

  // Animation loop
  function animateBox() {
    var currentTime = new Date().getTime();
    var deltaTime = currentTime - startTime;

    // Calculate the new position based on elapsed time
    var progress = deltaTime / animationDuration;

    if (progress <= 0.25) {
      // First quarter: Move to the targetX
      var currentX =
        pendulumWidth - 150 + progress * 4 * (targetX - (pendulumWidth - 150));
      box.translation.set(currentX, pendulumLength);
      pendulumAnimateNew();
      two.update();
    } else if (progress < 0.75 && progress > 0.25) {
      // Second half: Remain still
      box.translation.set(targetX, pendulumLength);
      two.update();
    } else {
      // Last quarter: Move back to the original position
      var currentX =
        targetX - (progress - 0.75) * 4 * (targetX - (pendulumWidth - 150));
      box.translation.set(currentX, pendulumLength);
      two.update();
    }

    // Request the next animation frame
    if (progress < 1) {
      requestAnimationFrame(animateBox);
    }
  }

  // Start the animation loop
  animateBox();
}

function pendulumAnimateNew() {
  // Set the initial angle to 0 degrees
  var currentAngle = 0;
  // Define animation parameters
  var targetAngle = Math.PI / 4; // 45 degrees in radians
  var animationDuration = 2000; // Duration of the animation in milliseconds

  // Animation loop
  function animatePendulum() {
    var currentTime = new Date().getTime();
    var deltaTime = currentTime - startTime;

    // Calculate the progress based on elapsed time
    var progress = deltaTime / animationDuration;

    if (progress < 0.5) {
      // Update the angle based on the progress
      currentAngle = Math.sin(progress * Math.PI) * targetAngle;

      // Update the pendulum bob position
      var bobX = pendulumWidth + pendulumLength * Math.sin(currentAngle);
      var bobY = pendulumLength * Math.cos(currentAngle);
      pendulumBob.translation.set(bobX, bobY);

      // Update the pendulum rod position
      pendulumRod.vertices[1].set(bobX, bobY);
      // Update the scene
      two.update();

      // Request the next animation frame
      requestAnimationFrame(animatePendulum);
    } else if (progress >= 0.5 && progress <= 1) {
      // Update the angle for the second half of the animation
      currentAngle = Math.PI / 4;
      targetAngle = 0.78;
      currentAngle = Math.sin(progress * Math.PI) * targetAngle;

      // Update the pendulum bob position
      var bobX = pendulumWidth + pendulumLength * Math.sin(currentAngle);
      var bobY = pendulumLength * Math.cos(currentAngle);
      pendulumBob.translation.set(bobX, bobY);

      // Update the pendulum rod position
      pendulumRod.vertices[1].set(bobX, bobY);
      // Update the scene
      two.update();

      // Request the next animation frame
      requestAnimationFrame(animatePendulum);
    }
  }

  // Record the start time
  var startTime = new Date().getTime();

  // Start the animation loop
  animatePendulum();
}
var rangeInput;
var buttonclass = document.getElementsByClassName("buttons");
function addrangeInput() {
  rangeInput = document.createElement("input");
  rangeInput.type = "range";
  rangeInput.min = "3";
  rangeInput.max = "7";
  rangeInput.value = "3"; // Set an initial value as needed
  rangeInput.id = "rangeInputId"; // Set a unique ID for the input element
  rangeInput.step = "0.1";
  // Append the range input to ob2
  buttonclass[0].appendChild(rangeInput);
  // Add an event listener for the range input
  rangeInput.addEventListener("input", handleRangeInput);
}
// Event listeners
var btn1 = document.getElementById("firstLaw");
btn1.addEventListener("click", () => {
  checkAndReload();
  isAnimating = true;
  animate1();
});

// Add an event listener for the range input
//rangeInput.addEventListener('input', handleRangeInput);
var width;
var velocity = 0;
var text3;
var text;
var width2;
var height;
var btn2 = document.getElementById("SecondLaw");
btn2.addEventListener("click", () => {
  checkAndReload();
  // Create a range input element-
  width = two.makeLine(70, 220, 400, 220);
  height = two.makeLine(70, 220, 70, 210);
  width2 = two.makeLine(65, 210, 75, 210);
  text = two.makeText("h", 55, 214);
  text.size = 18;
  var text2 = two.makeText("h", 95, 450);
  text2.size = 18;
  width2.linewidth = 2;
  height.linewidth = 2;
  text3 = two.makeText("v=7.66m/s", 220, 300);
  addrangeInput();
  isAnimating = true;
  animate();
});

function handleRangeInput(event) {
  // Get the current value of the range input
  rangeInputValue = event.target.value;
  //isAnimating = true;
  //animate();
  text.translation.y = 220 - rangeInputValue * 2;
  height.vertices[1].y = 220 - rangeInputValue ** 2 - 2;
  width2.vertices[0].y = 220 - rangeInputValue ** 2 - 2;
  width2.vertices[1].y = 220 - rangeInputValue ** 2 - 2;
  text3.value = "v=" + Math.sqrt(2 * 9.8 * rangeInputValue).toFixed(2) + "m/s";
  two.update();
  // Use the currentValue as needed in your code
  console.log("Current Range Value:", rangeInputValue);
}

var btn3 = document.getElementById("ThirdLaw");
btn3.addEventListener("click", () => {
  checkAndReload();
  isAnimating = true;
  boxAnimate();
});

// Animation functions...

function checkAndReload() {
  if (isAnimating) {
    location.reload();
  }
}
