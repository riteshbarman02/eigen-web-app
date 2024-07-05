import eigenLine from "./js/line.JS";
import Graph from "./js/graph.js";



var ob2 = document.getElementById("canvas_1");
var slider_y1= 350;
var slider_y2= 450;
var ax = 90;
var bx = 340;
var by= 100;
var ay= 0;




// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width : 400,

}).appendTo(ob2);

//creating twojs lines for graph
var domian = new eigenLine(two, 30, 50, 390, 50, 4, "black", "arrow");

var points1 = [
  new Two.Anchor(ax, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor(ax, by),
  
];



var graph1 = new Graph(two, points1," " , "#276BB0", 0.5, 4);
var statement = two.makeText("For different poisson's ratio we can show\n variations",200,150);
statement.size = 17;

//sliders
var mue = document.getElementById("mue");
var load = document.getElementById("load");
let mueval=0;
let loadval=0;
var initialValue = 0;

//slider for mue
mue.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#mue").value);
  let value2=parseFloat(document.querySelector("#load").value);
  mueval=value1/100;
  loadval=value2*100;
  load.value=initialValue;

  two.update();
  

})
//adding rectangle
var l1 = two.makeLine(ax,ay,bx,ay);
var l2 = two.makeLine(ax,ay,ax,by);
var l1 = two.makeLine(ax,by,bx,by);
var l1 = two.makeLine(bx,by,bx,ay);
two.update();

//slider for load
load.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#mue").value);
  let value2=parseFloat(document.querySelector("#load").value);
  mueval=value1/50;
  loadval=value2*100;
  //update points of your path
  if(value1==0){
  points1[0].x= ax - loadval/30;
  points1[1].x= bx + loadval/30
  points1[3].x= ax - loadval/30;
  points1[2].x= bx + loadval/30;
  }
  else{
    points1[0].x= ax - loadval/30;
    points1[1].x= bx + loadval/30
    points1[3].x= ax - loadval/30;
    points1[2].x= bx + loadval/30;
    points1[0].y= ay + mueval*(loadval/50);
    points1[1].y= ay + mueval*(loadval/50);
    points1[2].y= by - mueval*(loadval/50);
    points1[3].y= by - mueval*(loadval/50);
  }
  two.update();
})