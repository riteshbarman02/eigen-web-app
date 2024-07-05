import eigenLine from "./js/line.js";
import Graph from "./js/graph.js";

var ob2 = document.getElementById("canvas_1");
var sfy = 150;
var bmy = 360;
var slider_y = 490;

var two = new Two({
  fullscreen: false,
  height: 900,
}).appendTo(ob2);

var domian = new eigenLine(two, 50, 30, 380, 30, 4, "black");
//upper blue rectangle
var points1 = [
  new Two.Anchor(50, sfy),
  new Two.Anchor(50, sfy - 70),
  new Two.Anchor(230, sfy - 70),
  new Two.Anchor(230, sfy),
];
//lower pink Rectangle
var points2 = [
  new Two.Anchor(230, sfy),
  new Two.Anchor(230, sfy + 70),
  new Two.Anchor(380, sfy + 70),
  new Two.Anchor(380, sfy),
];
//lower pink Triangle
var points3 = [
  new Two.Anchor(50, bmy),
  new Two.Anchor(230, bmy - 50),
  new Two.Anchor(380, bmy),
];
//graph for bending moment for Udl
var points4 = [
  new Two.Anchor(50, bmy),
  ...Array.from({ length: 100 }, (_, i) => {
    var t = (i / 100) * Math.PI;
    var x = 50 + (t / Math.PI) * 330;
    var y = bmy - Math.sin(t) * 100;
    return new Two.Anchor(x, y);
  }),
  new Two.Anchor(380, bmy),
];

//graph for shear force for Uvl
var points5 = [
  new Two.Anchor(50, sfy),
  ...Array.from({ length: 100 }, (_, i) => {
    var t = (i / 100) * Math.PI;
    var x = 50 + (t / Math.PI) * 440;
    var y = sfy - Math.cos(t) * 60;
    if (x > 380) {
      x = 380;
      y = sfy + 42;
    }
    return new Two.Anchor(x, y);
  }),
  new Two.Anchor(380, sfy),
];

var points6 = [
  new Two.Anchor(50, bmy),
  ...Array.from({ length: 100 }, (_, i) => {
    var t = (i / 100) * Math.PI;
    var angle = Math.PI / 4; // 45 degrees in radians

    var x = 50+   (t*1.8/ Math.PI) * angle * 200;
   
    var y = bmy - Math.sin(t * angle) * 80;
    if(x>50){
      x=x+i/2.7;
      y=bmy - Math.sin(t * angle) * 96;
    }
    else
    x = x + i;

    return new Two.Anchor(x, y);
  }),
  new Two.Anchor(380, bmy),
];


var points7 = [
  new Two.Anchor(50, sfy),
  new Two.Anchor(50, sfy - 70),
  new Two.Anchor(380, sfy - 70),
  new Two.Anchor(380, sfy),
];

var points8 = [
  new Two.Anchor(50, sfy),
  new Two.Anchor(50, sfy - 70),
  new Two.Anchor(380, sfy),
];

var points9 = [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50, bmy + 50),
  new Two.Anchor(380, bmy),
];

var points10 = [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50,bmy+70),
  ...Array.from({ length: 10 }, (_, i) => {
    var x = 50 + i**2.79;
    var y = bmy+70- i**2;
    if(x>380&&y<bmy){
      x=350;
      y=bmy;
    }
    return new Two.Anchor(x, y);
   
  }),
  new Two.Anchor(350, bmy),
];


var points11 = [
  new Two.Anchor(50, sfy),
  new Two.Anchor(50,sfy-70),
  ...Array.from({ length: 100 }, (_, i) => {
    var x = 50 + i**2.7;
    var y = sfy-70+ i**2;
    if(x>380){
      x=380;
      y=sfy;
    }
    return new Two.Anchor(x, y);
  }),
  new Two.Anchor(380, sfy),
];


var points12= [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50,bmy+70),
  ...Array.from({ length: 100 }, (_, i) => {
    var x = 50 + i**2.8;
    var y = bmy+70 - i**2.2;
    if(y<bmy+10&&x<300){
      y=bmy+5;
    }
    else if(x>300)
    y=bmy+2
    if(x>410){
      x=370;
      y=bmy;
    }
    return new Two.Anchor(x, y);
  }),
  new Two.Anchor(380, bmy),
];
var points13 = [
  new Two.Anchor(50, sfy),
  new Two.Anchor(50, sfy - 70),
  new Two.Anchor(380, sfy - 70),
  new Two.Anchor(380, sfy),
];

var points14 = [
  new Two.Anchor(50, bmy),
  new Two.Anchor(230, bmy - 50),
  new Two.Anchor(230, bmy),
  
];
var points15 = [
  new Two.Anchor(230, bmy),
  new Two.Anchor(230, bmy + 50),
  new Two.Anchor(380, bmy),
  
];
var points16 = [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50, bmy + 50),
  new Two.Anchor(380, bmy),
  
];
var points17 = [
  new Two.Anchor(50, bmy),
  new Two.Anchor(380, bmy -
     50),
  new Two.Anchor(380, bmy), 
];
var points18= [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50, bmy -
     50),
  new Two.Anchor(380, bmy-50), 
  new Two.Anchor(380, bmy), 
];
var points19= [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50, bmy -
     50),
  new Two.Anchor(230, bmy-50), 
  new Two.Anchor(230, bmy), 
];
var points20= [
  new Two.Anchor(50, bmy),
  new Two.Anchor(50, bmy -
     50),
];

var slider = new eigenLine(two, 50, slider_y, 380, slider_y, 4, "black");

var mouse = new Two.Vector();
var yaxis = two.makeLine(230, 30, 230, slider_y);
yaxis.linewidth = 4;
yaxis.dashes = [20, 10];
yaxis.noFill();
yaxis.stroke = "#0000002E";

var yaxis1 = two.makeLine(50, 30, 50, slider_y);
yaxis1.linewidth = 4;
yaxis1.dashes = [20, 10];
yaxis1.noFill();
yaxis1.stroke = "#0000002E";

var yaxis2 = two.makeLine(380, 30, 380, slider_y);
yaxis2.linewidth = 4;
yaxis2.dashes = [20, 10];
yaxis2.noFill();
yaxis2.stroke = "#0000002E";

var xlabel1 = two.makeText("Bending Moment", 25, 150);
xlabel1.rotation = -Math.PI / 2;
var xlabel3 = two.makeText("Shear Force", 25, 350);
xlabel3.rotation = -Math.PI / 2;

two.add(xlabel1);

var circle = two.makeCircle(230, slider_y, 10);
circle.fill = "#FFF";
circle.stroke = "#000000";
circle.linewidth = 3;

var sf_y_axis = new eigenLine(two, 35, sfy - 80, 35, sfy + 80, 4, "black");
var sf_x_axis = new eigenLine(two, 50, sfy, 380, sfy, 4, "black");

var bm_y_axis = new eigenLine(two, 35, bmy - 80, 35, bmy + 80, 4, "black");
var bm_x_axis = new eigenLine(two, 50, bmy, 380, bmy, 4, "black");

two.update();

ob2.addEventListener("touchstart", touchstart, { passive: true });
ob2.addEventListener("touchmove", touchmove, { passive: true });
ob2.addEventListener("touchend", touchend);

var pointA = document.getElementById("pointA");
var pointB = document.getElementById("pointB");
var pointElements = [pointA, pointB];

var supportPin = document.getElementById("supportPin");
var supportRoller = document.getElementById("supportRoller");
var supportFree = document.getElementById("supportFree");
var supportFixed = document.getElementById("supportFixed");
var supportElements = [supportPin, supportRoller, supportFree, supportFixed];

var ltypePointLoad = document.getElementById("ltypePointLoad");
var ltypeUDL = document.getElementById("ltypeUDL");
var ltypeMoment = document.getElementById("ltypeMoment");
var ltypeUVL = document.getElementById("ltypeUVL");
var loadElements = [ltypePointLoad, ltypeUDL, ltypeMoment, ltypeUVL];

var lpointA = document.getElementById("lPointA");
var lpointB = document.getElementById("lPointB");
var lpointC= document.getElementById("lPointC");
var lpointD= document.getElementById("lFulllength");
var lpointElements = [lpointA, lpointB , lpointC,lpointD];
var pointValue;
var loadValue;

function handlePointChange(event) {
  pointValue = event.target.value;
}

var supportValue;
var supportValueforA;
var supportValueforB;
var lpointValue;

function handleSupportChange(event) {
  supportValue = event.target.value;
}

function handleLoadChange(event) {
  loadValue = event.target.value;
}

function handlelPointChange(event) {
  lpointValue = event.target.value;
  // // // console.log(lpointValue);
}

document.addEventListener('DOMContentLoaded', function () {
  // Select the load type radio buttons
  var loadTypeRadios = document.querySelectorAll('input[name="ltype"]');

  // Select the "Full Length" radio button
  var fullLengthRadio = document.getElementById('lFullLength');

  // Add change event listener to the load type radio buttons
  loadTypeRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      // Get the value of the selected load type
      var loadValue = document.querySelector('input[name="ltype"]:checked').value;

      // Check if loadValue is "UDL" or "UVL"
      if (loadValue === "UDL" || loadValue === "UVL") {
        // Show the "Full Length" radio button
        fullLengthRadio.style.display = 'inline-block';
        
        // Check the "Full Length" radio button
        fullLengthRadio.checked = true;
      } else {
        // Hide the "Full Length" radio button
        fullLengthRadio.style.display = 'none';
        
        // Uncheck the "Full Length" radio button
        fullLengthRadio.checked = false;
      }
    });
  });
});


var drawBtn = document.querySelector(".draw-btn");
drawBtn.addEventListener("click", addSupport);

function addSupport() {
  if (loadValue === "PointLoad") {
    drawPointLoad();
  } else if (loadValue === "UDL") {
    drawUDL();
  } else if (loadValue === "UVL") {
    drawUVL();
  } else if (loadValue === "Moment"){
    drawmomentLoad();
  }

  if (pointValue === "A") {
    var vertex1 = new Two.Vector(30, 52);
    var vertex2 = new Two.Vector(70, 52);
    var vertex3 = new Two.Vector(50, 40);

    var rollerPosX = 50;
    var rollerPosY = 47;

    if (supportValue === "pin") {
      var line1 = new Two.Line(vertex1.x, vertex1.y, vertex2.x, vertex2.y);
      var line2 = new Two.Line(vertex2.x, vertex2.y, vertex3.x, vertex3.y);
      var line3 = new Two.Line(vertex3.x, vertex3.y, vertex1.x, vertex1.y);
      var line4 = two.makeLine(30, 53, 70, 53);

      two.add(line1, line2, line3);
      var lines = [];
      for (var i = 0; i < 10; i++) {
        var x1 = 30 + i * 5;
        var x2 = x1 - 5;
        var y1 = 54;
        var y2 = 57;

        lines.push(two.makeLine(x1, y1, x2, y2));
      }
      line1.linewidth = 2;
      line2.linewidth = 2;
      line3.linewidth = 2;
      supportValueforA = "pin";
      two.update();
    } else if (supportValue === "roller") {
      var roller = two.makeCircle(rollerPosX, rollerPosY, 7);
      var line4 = two.makeLine(30, 53, 70, 53);
      line4.linewidth = 2;
      var lines = [];
      for (var i = 0; i < 10; i++) {
        var x1 = 30 + i * 5;
        var x2 = x1 - 5;
        var y1 = 54;
        var y2 = 57;

        lines.push(two.makeLine(x1, y1, x2, y2));
      }
      supportValueforA = "roller";
      two.update();
    } else if (supportValue === "fixed") {
      var line = two.makeLine(48, 60, 48, 0);
      line.linewidth = 4;
      var lines = [];
      for (var i = 0; i < 11; i++) {
        var y1 = 0 + i * 5;
        var x2 = 42;
        var x1 = 48;
        var y2 = y1 + 5;

        lines.push(two.makeLine(x1, y1, x2, y2));
      }
      supportValueforA = "fixed";
      two.update();
    }
    // // // console.log("support Value for A" + supportValueforA);
  } else if (pointValue === "B") {
   


    if (supportValue === "pin") {
      var line4 = two.makeLine(360, 53, 400, 53);
      line4.linewidth = 2;
      vertex1 = new Two.Vector(370, 52);
      vertex2 = new Two.Vector(390, 52);
      vertex3 = new Two.Vector(380, 40);
      var line1 = new Two.Line(vertex1.x, vertex1.y, vertex2.x, vertex2.y);
      var line2 = new Two.Line(vertex2.x, vertex2.y, vertex3.x, vertex3.y);
      var line3 = new Two.Line(vertex3.x, vertex3.y, vertex1.x, vertex1.y);

      two.add(line1, line2, line3);
      var lines = [];
      for (var i = 0; i < 10; i++) {
        x1 = 360 + i * 5;
        x2 = x1 - 5;
        y1 = 54;
        y2 = 57;

        lines.push(two.makeLine(x1, y1, x2, y2));
      }

      line1.linewidth = 2;
      line2.linewidth = 2;
      line3.linewidth = 2;
      supportValueforB = "pin";
      two.update();
    } else if (supportValue === "roller") {
      rollerPosX = 380;
      rollerPosY = 47;
      var roller = two.makeCircle(rollerPosX, rollerPosY, 7);
      var line4 = two.makeLine(360, 53, 400, 53);
      line4.linewidth = 2;
      supportValueforB = "roller";
      var lines = [];
      for (var i = 0; i < 10; i++) {
        x1 = 360+ i * 5;
        x2 = x1 - 5;
        y1 = 54;
        y2 = 57;

        lines.push(two.makeLine(x1, y1, x2, y2));
      }
      two.update();
    } else if (supportValue === "fixed") {
      var line = two.makeLine(419, 0, 419, 60);
      line.linewidth = 4;
      var lines = [];
      for (var i = 0; i < 11; i++) {
        var y1 = 0 + i * 5;
        var x2 = 425;
        var x1 = 380;
        var y2 = y1 + 5;

        lines.push(two.makeLine(x1, y1, x2, y2));
      }
      supportValueforB = "fixed";
      two.update();
    }
    else if (supportValue === "free"){
      supportValueforB="free";
    }
  } 

  if ((supportValueforA === "pin" && supportValueforB === "roller")||(supportValueforB === "pin" && supportValueforA === "roller")) {
    if (loadValue === "PointLoad") {
      // // // console.log("Pointload ka graph");
      var graph1 = new Graph(two, points1, "#276BB0", "#276BB0", 0.5, 4);
      var graph2 = new Graph(two, points2, "#C2185B", "#C2185B", 0.5, 4);
      var graph3 = new Graph(two, points3, "#C2185B", "#C2185B", 0.5, 4);
      two.update();
    }

    if (loadValue === "UDL") {
     // // // // console.log("Udl ka graph");
      points1[2].y = sfy;
      points2[1].y = sfy;
      var graph1 = new Graph(two, points1, "#276BB0", "#276BB0", 0.5, 4);
      var graph2 = new Graph(two, points2, "#C2185B", "#C2185B", 0.5, 4);
      var graph3 = new Graph(two, points4, "#C2185B", "#C2185B", 0.5, 4);
      two.update();
    }
    if (loadValue === "UVL") {
    //  // // // console.log("UVl ka graph");
      var graph3 = new Graph(two, points5, "#276BB0", "#276BB0", 0.5, 4);
      var graph4 = new Graph(two, points6,  "#C2185B", "#C2185B", 0.5, 4);
      two.update();
    }
    if (loadValue === "Moment") {
      if(lpointValue==="c"){
       // // // // console.log("moment ka graph");
      var graph3 = new Graph(two, points13, "#276BB0", "#276BB0", 0.5, 4);
      var graph2 = new Graph(two, points14, "#C2185B", "#C2185B", 0.5, 4);
      var graph4 = new Graph(two, points15, "#C2185B", "#C2185B", 0.5, 4);
      two.update();
      }
      else  if(lpointValue==="A"){
       // // // // console.log("moment ka graph");
        var graph3 = new Graph(two, points13, "#276BB0", "#276BB0", 0.5, 4);
        var graph2 = new Graph(two, points16, "#C2185B", "#C2185B", 0.5, 4);

        two.update();
        }
        else  if(lpointValue==="B"){
        //  // // // console.log("moment ka graph");
          var graph3 = new Graph(two, points13, "#276BB0", "#276BB0", 0.5, 4);
          var graph2 = new Graph(two, points17, "#C2185B", "#C2185B", 0.5, 4);
  
          two.update();
          }
    }
  }
  else 
  if ((supportValueforA === "fixed" && supportValueforB === "free")||(supportValueforB === "fixed" && supportValueforA === "free")) {
    if (loadValue === "PointLoad") {
     // // // // console.log("Pointload ka graph");
      var graph1 = new Graph(two, points7, "#276BB0", "#276BB0", 0.5, 4);
      var graph2 = new Graph(two, points9, "#C2185B", "#C2185B", 0.5, 4);
      two.update();
    }

   else if (loadValue === "UDL") {
    //  // // // console.log("Udl ka graph");
      points1[2].y = sfy;
      points2[1].y = sfy;
      var graph1 = new Graph(two, points8, "#276BB0", "#276BB0", 0.5, 4);
      var graph2 = new Graph(two, points10, "#C2185B", "#C2185B", 0.5, 4);
      two.update();
    }
    else if (loadValue === "UVL") {
     // // // // console.log("UVl ka graph");
      var graph3 = new Graph(two, points11, "#276BB0", "#276BB0", 0.5, 4);
      var graph4 = new Graph(two, points12, "#C2185B", "#C2185B", 0.5, 4);
      two.update();
    }
    if (loadValue === "Moment") {
      if(lpointValue==="B"){
      //  // // // console.log("moment ka graph");
      var graph3 = new Graph(two, points18, "#276BB0", "#276BB0", 0.5, 4);

      two.update();
      }
      else  if(lpointValue==="C"){
        // // // console.log("moment ka graph");
        var graph3 = new Graph(two, points19, "#276BB0", "#276BB0", 0.5, 4);

        two.update();
        }
        else  if(lpointValue==="A"){
          // // // console.log("moment ka graph");
          var graph3 = new Graph(two, points20, "#276BB0", "#276BB0", 0.5, 4);
  
          two.update();
          }
    }

  }
}


pointElements.forEach((element) => {
  element.addEventListener("touchstart", handlePointChange, { passive: true });
  element.addEventListener("click", handlePointChange);
});

supportElements.forEach((element) => {
  element.addEventListener("touchstart", handleSupportChange, {
    passive: true,
  });
  element.addEventListener("click", handleSupportChange);
});

loadElements.forEach((element) => {
  element.addEventListener("touchstart", handleLoadChange, { passive: true });
  element.addEventListener("click", handleLoadChange);
});
lpointElements.forEach((element) => {
  element.addEventListener("touchstart", handlelPointChange, { passive: true });
  element.addEventListener("click", handlelPointChange);
});

ob2.addEventListener("touchstart", pointerdown, { passive: true });
ob2.addEventListener("pointerdown", pointerdown);

function handlePointTouchStart(e) {
  var touch = e.touches[0];
  pointerdown(touch);
}

function handleSupportTouchStart(e) {
  var touch = e.touches[0];
  pointerdown(touch);
}

function handleLoadTouchStart(e) {
  var touch = e.touches[0];
  pointerdown(touch);
}

function touchstart(e) {
  var touch = e.touches[0];
  pointerdown(touch);
}

function touchmove(e) {
  var touch = e.touches[0];
  pointermove(touch);
}

function touchend(e) {
  pointerup();
}

ob2.addEventListener("touchstart", pointerdown, { passive: true });

function pointerdown(e) {
  ob2.addEventListener("mousemove", pointermove);
  ob2.addEventListener("mouseup", pointerup);
}

function pointermove(e) {
  mouse.x = e.clientX - getOffset(ob2).left;
  mouse.y = e.clientY - getOffset(ob2).top;

  mouse.x = Math.min(mouse.x, 380);
  mouse.x = Math.max(mouse.x, 50);

  yaxis.translation.set(mouse.x - 230, 0);
  circle.translation.set(mouse.x, slider_y);

  two.update();
}

function pointerup(e) {
  ob2.removeEventListener("mousemove", pointermove);
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function drawPointLoad() {
  if(lpointValue==="A"){
    var load = two.makeArrow(50, 10, 50, 30);
  load.linewidth = 3;  
  }
  else if(lpointValue==="B"){
    var load = two.makeArrow(380, 10, 380, 30);
  load.linewidth = 3;  
  }
  else if(lpointValue==="C"){
    var load = two.makeArrow(200, 10, 200, 30);
  load.linewidth = 3;  
  }
 
  two.update();
}

function drawUDL() {
  var load = [];
  for (var i = 0; i < 12; i++) {
    var x1 = 50 + i * 30;
    var y1 = 10;
    var y2 = 30;

    load.push(two.makeArrow(x1, y1, x1, y2));
    two.update();
    load[i].linewidth = 3;
  }
}

function drawUVL() {
  var load = [];
  for (var i = 0; i < 10; i++) {
    var x1 = 110 + i * 30;
    var y1 = 29 - i * 3;
    var y2 = 30;

    load.push(two.makeArrow(x1, y1, x1, y2));
    two.update();
    load[i].linewidth = 3;
    load[i].stroke = "red";
  }
  var line1 = two.makeLine(50, 30, 380, 0);
  var line2 = two.makeLine(380, 0, 380, 30);
  line1.linewidth = 3;
  line2.linewidth = 3;
  two.update();
}

function drawmomentLoad() {
    var centerX ;
    var centerY  ;
  if(lpointValue==="A"){
    centerX = 70 ;
    centerY = 30 ;
  }
  else if(lpointValue==="B"){
    centerX = 380 ;
    centerY = 30 ;
  }
  else if(lpointValue==="C"){
   centerX = 250 ;
   centerY = 30 ; 
  }
  
  const innerRadius = 25;
  const outerRadius = 25;
  const startAngle = 0;
  const endAngle = Math.PI; // Adjust this to control the extent of the arc
  const resolution = 20; // Number of vertices

  // Create an arc segment using Two.ArcSegment
  const arcSegment = new Two.ArcSegment(centerX, centerY, innerRadius, outerRadius, startAngle, endAngle, resolution);
  const arrow = two.makeArrow(centerX,55,centerX+1,55)
  arrow.stroke="red";
  arrow.linewidth=2;
  // Add the arc segment to the Two.js scene
  two.add(arcSegment);
  arcSegment.rotation=Math.PI/2;
  arcSegment.stroke="red";
  arcSegment.linewidth=2;
  // Update the rendering
  two.update();

}
