import Graph from "./js/graph.js";
import eigenLine from "./js/line.js"

var ob2 = document.getElementById("canvas_1");
var ax = 100;
var bx = 400;
var by= 150;
var ay= 90;
var arrowX = (ax+bx)/2;




// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 800,
}).appendTo(ob2);

var points1 = [
  new Two.Anchor((ax+bx)/2, ay),
  new Two.Anchor(ax, ay),
  new Two.Anchor(ax, by),
  new Two.Anchor((ax+bx)/2, by),
  
];
var points2 = [
  new Two.Anchor((ax+bx)/2, ay),
  new Two.Anchor(bx, ay),
  new Two.Anchor(bx, by),
  new Two.Anchor((ax+bx)/2, by),
  
];

var arrow=two.makeArrow(arrowX,45,arrowX,85);
arrow.linewidth = 2.4;
var arrow2=two.makeArrow(ax,by+40,ax,by+10);
arrow2.linewidth = 2.4;
var arrow2=two.makeArrow(bx,by+40,bx,by+10);
arrow2.linewidth = 2.4;
var graph1 = new Graph(two, points1," black" , "#276BB0", 0.5, 4);
var graph2 = new Graph(two, points2,"black " , "#AA4BB0", 0.5, 4);

//R1
var R1txt = two.makeText("R1=", 100, 215);
R1txt.size=18;
var R1val = two.makeText("", 150, 215);
R1val.size = 10;
var rect=two.makeRectangle(150,215,55,25);
rect.fill="transparent";
//R2
var R2txt = two.makeText("=R2", bx, 215);
R2txt.size=18;
var R2val = two.makeText("", 350, 215);
R2val.size = 10;
var rect=two.makeRectangle(350,215,55,25);
rect.fill="transparent";
//P
var ptxt = two.makeText("P=", 250, 30);
ptxt.size=18;
//L
var L = two.makeText("L=", 40, 304);
L.size=18;
var L = two.makeText("0", 55, 324);
L.size=18;
var L = two.makeText("50", 240, 324);
L.size=18;
var L = two.makeText("100", 425, 324);
L.size=18;
var p = document.getElementById("P")
var Pval = p.value;
p.addEventListener("input", function () {
  Pval = parseFloat(p.value);
});
//arrows
var larrow1=new eigenLine(two, ax, ay+70, arrowX, ay+70, 2, "black", "arrow");
var larrow2=new eigenLine(two, bx, ay+70, arrowX, ay+70, 2, "black", "arrow");
var line = two.makeText('|',arrowX,ay+70);
line.size = 18;
var ltext= two.makeText('x',(arrowX+ax)/2,ay+80);
ltext.size=16;
var Xtext= two.makeText('l',(arrowX+bx)/2,ay+80);
Xtext.size=16;
//sliders
var length = document.getElementById("length");
//slider for length
length.oninput = (()=>{
  let value1= parseFloat(document.querySelector("#length").value);
  points1[0].x=(ax+bx)/2+(value1-50)*3;
  points1[3].x=(ax+bx)/2+(value1-50)*3;
  points2[0].x=(ax+bx)/2+(value1-50)*3;
  points2[3].x=(ax+bx)/2+(value1-50)*3;

  let R1=Pval*(100-value1)/100;
  R1val.value= parseFloat(R1).toFixed(2);
  let R2=Pval*value1/100;
  R2val.value= parseFloat(R2).toFixed(2);
  arrowX = (ax + bx) / 2 + (value1 - 50) * 3;
  larrow1.update(two, ax, arrowX);
  larrow2.update(two, bx, arrowX);
  arrow.translation.set(arrowX-250,0)
  line.translation.set(arrowX,ay+70);
  ltext.translation.set((arrowX+ax)/2,ay+80);
  Xtext.translation.set((arrowX+bx)/2,ay+80);
  two.update();

})
two.update();



