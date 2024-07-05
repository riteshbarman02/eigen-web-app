import eigenLine from "./js/line.JS";
import Graph from "./js/graph.js";

var ob2 = document.getElementById("canvas_1");
var slider_y1 = 350;
var slider_y2 = 450;
var ax = 120;
var bx = 380;
var by = 160;
var ay = 60;

// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 800,
}).appendTo(ob2);

// Creating twojs lines for graph
var domain = new eigenLine(two, 240, ay, 240, ay+100, 4, "black", "arrow");

var points1 = [
  new Two.Anchor(ax, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor(ax, by),
];
var points2 = [
  new Two.Anchor(240, ay),
  new Two.Anchor(240, ay+100),
];


var graph1 = new Graph(two, points1, " ", "#276BB0", 0.5, 4);
var graph2 = new Graph(two, points2, "black ", "black", 0.5, 4);
// Sliders
var theta = document.getElementById("theta");
//inputs
var p = document.getElementById("P")
var P = parseFloat(p.value);
p.addEventListener("input", function () {
  P = parseFloat(p.value);
});
var area = document.getElementById("A")
var A = parseFloat(area.value);
area.addEventListener("input", function () {
  A = parseFloat(area.value);
});

//outputs declaration
//sigma
var sigmatxt = two.makeText("σ", 100, 310);
sigmatxt.size=18;
var sigmaval = two.makeText("0.00N/mm2", 150, 310);
sigmaval.size = 10;
var rect=two.makeRectangle(150,310,55,25);
rect.fill="transparent";
//tou
var toutxt = two.makeText("τ", 320, 310);
toutxt.size=18;
var touval = two.makeText("0.00N/mm2", 360, 310);
touval.size = 10;
var rect=two.makeRectangle(360,310,55,25);
rect.fill="transparent";
//theta
var thetatxt = two.makeText("θ=0°", 400, 40);
thetatxt.size=20;
var thet = two.makeText("θ:", 50, 380);
thet.size=20;
var zero = two.makeText("0°",82,405);
zero.size=18;
var zero = two.makeText("45°",263,405);
zero.size=18;
var zero = two.makeText("90°",450,405);
zero.size=18;


// Specify the center and radius of the arc
var center = new Two.Vector((ax+bx)/2 -10, (ay+by)/2);
var radius = 10;

// Specify the start and end angles of the arc in radians
var startAngle = 0; // Starting angle
var endAngle = (Math.PI/180)*180; // Ending angle (180 degrees in radians)

// Number of anchor points to approximate the arc
var resolution = 100;

// Create a Two.Path to represent the arc
var path = new Two.Path();
path.stroke = "black"; // Set the stroke color
path.linewidth = 4; // Set the stroke width

// Add the path to the Two.js scene
two.add(path);

// Update the rendering

two.update();


// Slider for rotating the line
theta.oninput = () => {
  let angle = parseFloat(document.querySelector("#theta").value);
  var angleInRadian=(Math.PI/180)*angle;
  var cosAngle = Math.cos(angleInRadian);
  var sinAngle = Math.sin(angleInRadian);
  points2[0].x=50*sinAngle + ax+120;
  points2[0].y=50*cosAngle + ay+50;
  points2[1].x=-50*sinAngle + ax+120;
  points2[1].y=-50*cosAngle + ay+50;
  var sigma= P*cosAngle*cosAngle/A;
  var tou=P*sinAngle*cosAngle/A;
  thetatxt.value="θ="+angle+"°";
  sigmaval.value= parseFloat(sigma).toFixed(2)+"N/mm2";
  touval.value=parseFloat(tou).toFixed(2)+"N/mm2";
  if (angle==45){
    var theta= two.makeText("θ",248, 130)
    theta.size = 18;
  }

  two.update();
};


