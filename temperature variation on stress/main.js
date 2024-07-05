import eigenLine from "./js/line.JS";
import Graph from "./js/graph.js";



var ob2 = document.getElementById("canvas_1");
var slider_y1 = 350;
var slider_y2 = 450;
var ax = 100;
var bx = 380;
var by = 60;
var ay = 20;




// Create a Two.js instance
var two = new Two({
  fullscreen:false,
  width: 500,
  height: 1000,
}).appendTo(ob2);


var points1 = [
  new Two.Anchor(ax, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor(ax, by),

];

var rect = two.makeRectangle(ax-5, ay + 20, 5, 80)
rect.fill = "black";
var rect = two.makeRectangle(bx + 5, ay + 20, 5, 80)
rect.fill = "black";


var graph1 = new Graph(two, points1, " ", "#276BB0", 0.5, 4);
var lineForl = new eigenLine(two,ax,ay-5,bx,ay-5,2,"black",'arrow');
var ltext1 = two.makeText('L',(ax+bx)/2,ay-15);
ltext1.size=20;
var lineFordl = two.makeLine(bx,ay-5,bx,ay-5);


//sliders
var delt = document.getElementById("delt");
var load = document.getElementById("load");
let mueval = 0;
let loadval = 0;
var initialValue = 1;
var lText = two.makeText("1. ΔL:- ", 90, 240);
lText.size = 20;
var eText = two.makeText("2. σ:-", 300, 240);
eText.size = 20;
two.add(lText);
var alphaInput = document.getElementById("alpha");
var alpha = parseFloat(alphaInput.value);

var eInput = document.getElementById("E")
var e = parseFloat(eInput.value);

// Add an input event listener to update 'alpha' when the input field changes
alphaInput.addEventListener("input", function () {
  alpha = parseFloat(alphaInput.value);
  console.log(alpha); // Log the updated alpha value
});
eInput.addEventListener("input", function () {
  e = parseFloat(eInput.value);
  console.log(e); // Log the updated alpha value
});

//slider for mue
delt.oninput = (() => {
  let value1 = parseFloat(document.querySelector("#delt").value);
  let value2 = parseFloat(document.querySelector("#load").value);
  mueval = value1;
  loadval = value2;
  if (value1 < value2) {
    points1[2].x = bx + mueval ;
    points1[1].x = bx + mueval ;
    lText.value = 'ΔL:- ' + (mueval + loadval) * alpha + 'mm';
    eText.value = 'σ:-' + 0 + 'N/mm'
    lineFordl.translation.set(300, 300);
  }
  else if (value2 < value1) {
    points1[2].x = bx+loadval;
    points1[1].x = bx+loadval;
    eText.value = 'σ:-' + (e * alpha * (mueval-loadval)) + 'N/mm'
  }
  if (value1==0){
    lText.value='ΔL:- ' + 0 + 'mm';
  }


  two.update();


})
//adding text
var muetext = two.makeText("ΔT", 25, 390);
muetext.size = 25;
var loadtext1 = two.makeText("x", 25, 315);
loadtext1.size = 32;
//adding rectangle
var l1 = two.makeLine(ax, ay, bx, ay);
var l2 = two.makeLine(ax, ay, ax, by);
var l1 = two.makeLine(ax, by, bx, by);
var l1 = two.makeLine(bx, by, bx, ay);
two.update();

//slider for load
load.oninput = (() => {
  let value1 = parseFloat(document.querySelector("#delt").value);
  let value2 = parseFloat(document.querySelector("#load").value);
  mueval = value1 / 50;
  loadval = value2;
  //update points of your path
  rect.translation.set(bx + 5 + loadval, 40);
  delt.value = initialValue;

  two.update();
})
