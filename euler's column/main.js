var ob2 = document.getElementById("canvas_1");
var two = new Two({
  fullscreen: true,
  autostart:true,
}).appendTo(document.body);
var ax;
var ay;
var bx;
var by;


function drawend(ax,ay,bx,by){
  var line = two.makeLine(ax, ay, bx, by);
  line.linewidth = 4;
  var lines = [];
  for (var i = 0; i < 11; i++) {
    var y1 = ay+10;
    var x2 = ax+i*5;
    var x1 = x2+5;
    var y2 = by;
  
    lines.push(two.makeLine(x1, y1, x2, y2));
  }
  two.update();
}

function drawend3(ax,ay,bx,by){
  var line = two.makeLine(ax, ay-25, ax, ay+25);
  var rect = two.makeRectangle(ax+25,ay,40,40);
  line.linewidth = 4;
  var lines = [];
  for (var i = 0; i < 11; i++) {
    var y1 = (ay-30)+i*5;
    var x2 = ax;
    var x1 = ax-10;
    var y2 = y1+5;
    lines.push(two.makeLine(x1, y1, x2, y2));
  }
  var line1 = two.makeLine(bx, ay-25, bx, ay+25);
  line1.linewidth=4;
  var lines1 = [];
  for (var i = 0; i < 11; i++) {
    var y1 = (ay-20)+i*5;
    var x2 = bx;
    var x1 = bx+10;
    var y2 = y1-5;
    lines1.push(two.makeLine(x1, y1, x2, y2));
  }
  two.update();
}
function drawend2(ax,ay,bx,by){
  var line = two.makeLine(ax, ay, ax+25, ay-20);
  var line2 = two.makeLine( ax+25, ay-20,bx,by);
  var line3 = two.makeLine( bx,by,ax,ay);
  line.linewidth=2;
  line2.linewidth=2;
  line3.linewidth=2;
  var lines = [];
  for (var i = 0; i < 11; i++) {
    var y1 = ay+10;
    var x2 = ax+i*5;
    var x1 = x2+5;
    var y2 = by;
  
    lines.push(two.makeLine(x1, y1, x2, y2));
  }
  two.update();
}
function drawstart(ax,ay,bx,by){
  var line = two.makeLine(ax, ay, bx, by);
  line.linewidth = 4;
  var lines = [];
  for (var i = 0; i < 11; i++) {
    var y1 = ay-10;
    var x2 = ax+i*5;
    var x1 = x2+5;
    var y2 = by;
  
    lines.push(two.makeLine(x1, y1, x2, y2));
  }
  two.update();
}
function drawverticleLine(ax,ay){
  var line2=two.makeLine(ax,ay,ax,ay+250);
  line2.stroke="grey";
  line2.linewidth=3;
  line2.opacity=0.5;
  two.update();
}
function drawcurve(){
  var points = [
  new Two.Anchor(55,50),
  new Two.Anchor(55,80),
  new Two.Anchor(90, 175),
  new Two.Anchor(55, 270),
  new Two.Anchor(55, 300),
  ];
  
  // Create a new Two.js path using your custom points
  var curve = new Two.Path(points, /* closed = */ false, /* curved = */ true);
  curve.stroke = "black"; // Set stroke color
  curve.fill= "transparent";
  curve.linewidth = 3;   // Set line width
  
  // Add the curve to the scene
  two.add(curve);
  
  // Update the scene (not necessary if autostart is true)
  two.update();
}
function drawcurve2(){
  var points = [
  new Two.Anchor(250,100),
  new Two.Anchor(175, 300),
  new Two.Anchor(250,500),

  ];
  
  // Create a new Two.js path using your custom points
  var curve = new Two.Path(points, /* closed = */ false, /* curved = */ true);
  curve.stroke = "black"; // Set stroke color
  curve.fill= "transparent";
  curve.linewidth = 3;   // Set line width
  
  // Add the curve to the scene
  two.add(curve);
  
  // Update the scene (not necessary if autostart is true)
  two.update();
}
function drawcurve3(){
  var points = [
  new Two.Anchor(298,70),
  new Two.Anchor(320, 170),
  new Two.Anchor(298,270),
  new Two.Anchor(294,300),

  ];
  
  // Create a new Two.js path using your custom points
  var curve = new Two.Path(points, /* closed = */ false, /* curved = */ true);
  curve.stroke = "black"; // Set stroke color
  curve.fill= "transparent";
  curve.linewidth = 3;   // Set line width

  
  // Add the curve to the scene
  two.add(curve);
  
  // Update the scene (not necessary if autostart is true)
  two.update();
}
function drawcurve4(){
  var points = [
  new Two.Anchor(425,70),
  new Two.Anchor(470, 170),
  new Two.Anchor(425,300),
 

  ];
  
  // Create a new Two.js path using your custom points
  var curve = new Two.Path(points, /* closed = */ false, /* curved = */ true);
  curve.stroke = "black"; // Set stroke color
  curve.fill= "transparent";
  curve.linewidth = 3;   // Set line width

  
  // Add the curve to the scene
  two.add(curve);
  
  // Update the scene (not necessary if autostart is true)
  two.update();
}
function drawcircle(ax,ay){
  var r=50;
  var circle = two.makeCircle(ax,ay,r);
  circle.fill = "#FF0000"; // Fill color
  circle.stroke = "#000";  // Stroke color
  circle.linewidth = 2;    // Line width
  // Function to change the circle's color on click
   // Toggle fill color on click
   circle.onclick = function() {
    if (circle.fill === "#FF0000") {
      circle.fill = "#00FF00"; // Change fill color on click
    } else {
      circle.fill = "#FF0000"; // Change back to original fill color on next click
    }
    two.update(); // Update the scene
  };

   // Change cursor style on hover
   circle._renderer.elem.addEventListener('mouseover', function() {
    circle._renderer.elem.style.cursor = 'pointer'; // Set pointer cursor on hover
  });

  // Reset cursor style on mouseout
  circle._renderer.elem.addEventListener('mouseout', function() {
    circle._renderer.elem.style.cursor = 'default'; // Reset cursor
  });


  // Add the circle to the scene
  two.add(circle);
}

drawstart(30,50,80,50);
drawend(30,300,80,300);
drawend(150,300,200,300);
drawend(270,300,320,300);
drawend2(400,320,450,320);
drawverticleLine(55,50);
drawverticleLine(175,50);
drawverticleLine(295,50);
drawverticleLine(425,50);
drawend3(270,50,320,50);
drawend3(400,50,450,50);
drawcurve();
drawcurve2();
drawcurve3();
drawcurve4();
drawcircle(55,55);
