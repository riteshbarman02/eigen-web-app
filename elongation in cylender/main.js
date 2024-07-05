
var two = new Two({
  fullscreen: false,
  width: 300,
  height: 500
}).appendTo(document.getElementById("canvas_1"));

var line1 = two.makeLine(100,220,100,80);
line1.linewidth=2;
var line2 = two.makeLine(200,220,200,80);
line2.linewidth=2;
var upperelipse = two.makeEllipse(150,80,50,20);
upperelipse.linewidth=2;
var lowerelipse = two.makeArcSegment(150,163,75,75,47*Math.PI/180,133*Math.PI/180);
lowerelipse.linewidth=2;

two.update();
