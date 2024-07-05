import Graph from "./js/graph.js";



var ob2 = document.getElementById("canvas_1");
var slider_y1= 350;
var slider_y2= 450;
var ax = 60;
var bx = 360;
var by= 180;
var ay= 100;
var cx=60;
var cy=160;




// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 800,
}).appendTo(ob2);

//creating twojs lines for graph


var points1 = [
  new Two.Anchor(ax, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor(ax, by),
  
];
var points2 = [
  new Two.Anchor(ax, by),
  new Two.Anchor(bx, by),
  new Two.Anchor(bx, by+10),
  new Two.Anchor(ax, by+10),
];
var points3= [
  new Two.Anchor(ax, ay),
  new Two.Anchor(ax+50, ay),
  new Two.Anchor(ax+50, ay-10),
  new Two.Anchor(ax, ay-10),
];
var points4=[
  new Two.Anchor(ax, by),
  new Two.Anchor(ax,by),
  new Two.Anchor(ax+25, ay),
  new Two.Anchor(ax+25, ay),
]
var points5=[
  new Two.Anchor(cx,cy),
  new Two.Anchor(cx+5,cy+6),
]



var graph1 = new Graph(two, points1," " , "#276BB0", 0.5, 4);
var graph2 = new Graph(two, points2," " , "#grey", 0.5, 4);
var graph3 = new Graph(two, points3," " , "#grey", 0.5, 4);
var graph4 = new Graph(two, points4," " , "#black", 0.5, 4);
var graph5 = new Graph(two, points5," " , "#black", 0.5, 4);


//sliders
var mue = document.getElementById("mue");
var submit = document.getElementById("submit");
var initialValue = 1;

//adding text
var muetext= two.makeText("μ",25,240);
muetext.size = 32;
var muetext= two.makeText("γ",96,145);
muetext.size = 15;
var pos = two.makeText("1 centipoise",60,270);
pos.size = 15;
var pos1 = two.makeText("100 centipoise",360,270);
pos1.size = 15;
//adding rectangle
var l1 = two.makeLine(ax,ay,bx,ay);
var l2 = two.makeLine(ax,ay,ax,by);
var l1 = two.makeLine(ax,by,bx,by);
var l1 = two.makeLine(bx,by,bx,ay);
//adding angleline


two.update();
//force
var force = two.makeText("→ F", ax+75,ay-10)
force.size=20;

// Create a Two.js text element for displaying the duration
var durationText = two.makeText("Duration: ", 230, 350);
durationText.size = 14;
two.add(durationText);

//slider for load
submit.onclick = () => {
  let value1 = mue.value;
  var duration = 1000*value1/2; // Total animation duration in milliseconds
  var startTime = null;

  // Define the animation function
  function animate(timestamp) {
     

    if (!startTime) {
      startTime = timestamp;
    }

    const elapsedTime = (timestamp - startTime);
    
    // Calculate the progress of the animation (between 0 and 1)
    const progress = Math.min(1, elapsedTime / duration);

    // Update points gradually based on the progress
    points3[0].x = ax+(bx-120)*progress;
    points3[1].x = ax+50+(bx-110)*progress;
    points3[2].x = ax+50+(bx-110)*progress;
    points3[3].x = ax+(bx-120)*progress;
    points4[2].x = ax + 25 + (bx-120)*progress
    points4[3].x = ax + 25 + (bx-120)*progress
    points5[1].x = cx + 5+ 12*progress;
    points5[1].y = cy + 5+ 11*progress;
    force.translation.set(ax+75+(bx-100)*progress,ay-10);
    // Update the duration text element
    durationText.value = 'Duration: ' + duration/1000 + 's';

    console.log(value1)
    
    two.update();

    if (progress < 1) {
      // Continue the animation
      requestAnimationFrame(animate);
    } else {
      console.log('Animation complete');
    }
  }

  // Start the animation
  requestAnimationFrame(animate);
  console.log(duration);

};

    
