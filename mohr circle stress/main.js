
import Graph from "./js/graph.js";
// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 500
}).appendTo(document.getElementById("canvas_1"));

var circle = two.makeCircle(200,170,90);
circle.fill="transparent";
circle.stroke="black";
var dasline= two.makeLine(134,240,290,90);
dasline.linewidth=2;
dasline.opacity=0.7;
dasline.dashes[0] = 10; // Length of the dash
dasline.dashes[1] = 5;

 

two.update();
var mue = document.getElementById('mue');
//Function to rotate the rectangle based on slider input

  // Get the slider value
  var mueVal ;
  var points1 = [
    new Two.Anchor(80,  370),
    new Two.Anchor(140, 370),
    new Two.Anchor(140,400),
    new Two.Anchor(80, 400),
    new Two.Anchor(80,  370),
  ];
  var points2 = [
    new Two.Anchor(300,  340),
    new Two.Anchor(330, 340),
    new Two.Anchor(330,400),
    new Two.Anchor(300, 400),
    new Two.Anchor(300,  340),
  ];
  var points3 = [
    new Two.Anchor(110,  170),
    new Two.Anchor(110, 170),
    new Two.Anchor(290, 170),
    new Two.Anchor(290,170),
    
  ];
  var points4 = [
    new Two.Anchor(110,  170),
    new Two.Anchor(290, 170),
    
  ];
  var points5 = [
    new Two.Anchor(200,  80),
    new Two.Anchor(200, 260),
  ];
  var points6 = [
    new Two.Anchor(200,  170),
    new Two.Anchor(290, 170),
  ]
  var points7= [
    new Two.Anchor(200,  170),
    new Two.Anchor(110, 170),
  ]
  var xaxis=two.makeLine(110,170,290,170)
  xaxis.linewidth=2;
  xaxis.stroke="black"
  var graph1 = new Graph(two, points1, "black", "#adadae", 0.5, 2);
  var graph2 = new Graph(two, points2, "black", "#adadae", 0.5, 2);
  var graph3 = new Graph(two, points3, "black", "#adadae", 0.5, 2);
  var graph3 = new Graph(two, points4, "#139ae6", "yellow", 0.5, 2);
  var graph3 = new Graph(two, points5, "#b30f22", "red", 0.5, 2);
  var graph3 = new Graph(two, points6, "black", "grey", 0.5, 2);
  var graph3 = new Graph(two, points7, "black", "black", 0.5, 2);
  var stress1 =two.makeArrow(0,-10,0,-30)
  stress1.linewidth=2.5;
  stress1.stroke="#139ae6";
  stress1.translation.set(110,370);
  stress1.vertices[4].x=-3;
  stress1.vertices[2].x=3;
  var stress2 =two.makeArrow(-10,-10,10,-10)
  stress2.linewidth=2.5;
  stress2.stroke="#cc1126";
  stress2.vertices[4].y=-13;
  stress2.vertices[2].y=-8;
  stress2.translation.set(110,370);
  var stress3 =two.makeArrow(10,10,10,-10)
  stress3.linewidth=2.5;
  stress3.vertices[4].x=13;
  stress3.vertices[2].x=7;
  stress3.stroke="#cc1126";
  stress3.translation.set(330,370);
  var stress4 =two.makeArrow(20,0,14,0)
  stress4.linewidth=2.5;
  stress4.vertices[4].y=3;
  stress4.vertices[2].y=-3;
  stress4.stroke="#139ae6";
  stress4.translation.set(330,370);
  var mueVal=mue.value;
  var circle1 = two.makeCircle(110,170,4);
circle1.stroke="black";
var circle2= two.makeCircle(200,170,4);
circle2.stroke="black";
circle.linewidth=3;
var circle3= two.makeCircle(200,170,3);
circle3.stroke="black";
circle3.linewidth=2;
var circle4= two.makeCircle(200,170,3);
circle4.stroke="black";
circle4.linewidth=2;

  function stressRotate(){
    var mueVal=mue.value;
    var rotationInRadians = -mueVal * Math.PI / 180;
    stress1.rotation=rotationInRadians;
    stress2.rotation=rotationInRadians;
    points3[0].x=200+90*Math.sin(+rotationInRadians+Math.PI/4);
    points3[1].x=200+90*Math.sin(+rotationInRadians+Math.PI/4);
    points3[1].y=170-90*Math.cos(+rotationInRadians+Math.PI/4);
    points3[2].y=170+90*Math.cos(rotationInRadians+Math.PI/4);
    points3[2].x=200-90*Math.sin(+rotationInRadians+Math.PI/4);
    points3[3].x=200-90*Math.sin(+rotationInRadians+Math.PI/4);
    points4[0].x=200+90*Math.sin(+rotationInRadians+Math.PI/4);
    points4[1].x=200-90*Math.sin(+rotationInRadians+Math.PI/4);
    points5[1].y=170-90*Math.cos(+rotationInRadians+Math.PI/4);
    points5[0].y=170+90*Math.cos(rotationInRadians+Math.PI/4);
    points6[0].y=170-90*Math.cos(+rotationInRadians+Math.PI/4);
    points6[1].y=170-90*Math.cos(rotationInRadians+Math.PI/4);
    points6[1].x=200+90*Math.sin(+rotationInRadians+Math.PI/4);
    points7[0].y=170+90*Math.cos(+rotationInRadians+Math.PI/4);
    points7[1].y=170+90*Math.cos(rotationInRadians+Math.PI/4);
    points7[1].x=200-90*Math.sin(+rotationInRadians+Math.PI/4);
    circle1.translation.x=200-90*Math.sin(+rotationInRadians+Math.PI/4);
    circle2.translation.x=200+90*Math.sin(+rotationInRadians+Math.PI/4);
    circle4.translation.y=170+90*Math.cos(+rotationInRadians+Math.PI/4);
    circle3.translation.y=170-90*Math.cos(+rotationInRadians+Math.PI/4);

    if(mueVal<=45){
      
      
      stress1.vertices[4].y=-25+mueVal/2;
      stress1.vertices[0].y=-10;
      stress1.vertices[2].y=-25+mueVal/2;
      stress1.vertices[1].y=-30+mueVal/2;
      stress1.vertices[3].y=-30+mueVal/2;
      stress1.rotation = rotationInRadians;
     }  
     else if(mueVal>=45&&mueVal<=90){
      stress1.vertices[4].y=-15;
      stress1.vertices[2].y=-15;
      stress1.vertices[1].y=-10;
      stress1.vertices[3].y=-10;
      stress1.vertices[0].y=-10-mueVal/4;
      stress1.rotation = rotationInRadians ;
      }
     else if(mueVal>90&&mueVal<=135){
     stress1.vertices[0].y=-30+(mueVal-90)/2;
     stress1.vertices[4].y=-15;
     stress1.vertices[2].y=-15;
     stress1.vertices[1].y=-10;
     stress1.vertices[3].y=-10;
     stress1.rotation = rotationInRadians ;
     }
     else if(mueVal>135){
    stress1.vertices[0].y=-10;
    stress1.vertices[4].y=-5- (mueVal-135)/2;
    stress1.vertices[2].y=-5- (mueVal-135)/2;
    stress1.vertices[1].y=-10-(mueVal-135)/2;
    stress1.vertices[3].y=-10-(mueVal-135)/2;
    stress1.rotation = rotationInRadians;
     }
     if(mueVal<=15){
      stress2.vertices[0].x=-13-mueVal/1.3;
      stress2.vertices[4].x=12+mueVal/2;
      stress2.vertices[2].x=12+mueVal/2;
      stress2.vertices[1].x=17+mueVal/2;
      stress2.vertices[3].x=17+mueVal/2;
      stress2.rotation = rotationInRadians;
     }  
     else if(mueVal>=15&&mueVal<=45){
      stress2.vertices[4].x=25-mueVal/2;
      stress2.vertices[2].x=25-mueVal/2;
      stress2.vertices[1].x=30-mueVal/2;
      stress2.vertices[3].x=30-mueVal/2;
      stress2.vertices[0].x=(-35+mueVal/1.3);
      stress2.rotation = rotationInRadians ;
      }
     else if(mueVal>45&&mueVal<=90){
     stress2.vertices[0].x=(-15+mueVal/2.5);
     stress2.vertices[4].x=10-mueVal/4;
     stress2.vertices[2].x=10-mueVal/4;
     stress2.vertices[1].x=5-mueVal/4;
     stress2.vertices[3].x=5-mueVal/4;
     stress2.rotation = rotationInRadians ;
     }
     else if(mueVal>90&&mueVal<=135){
      stress2.vertices[0].x=20-(mueVal-90)/2.4;
      stress2.vertices[4].x=-13+(mueVal-90)/2.4;
      stress2.vertices[2].x=-13+(mueVal-90)/2.4;
      stress2.vertices[1].x=-18+(mueVal-90)/2.4;
      stress2.vertices[3].x=-18+(mueVal-90)/2.4;
      stress2.rotation = rotationInRadians ;
     }
     else{
      stress2.vertices[0].x=5-(mueVal-130)/2.4;
      stress2.vertices[4].x=(mueVal-130)/3;
      stress2.vertices[2].x=(mueVal-130)/3;
      stress2.vertices[1].x=5+(mueVal-130)/3;
      stress2.vertices[3].x=5+(mueVal-130)/3;
      stress2.rotation = rotationInRadians;
     }
  
  
      two.update();
  }
  function stressRotate2(){
    var mueVal=mue.value;
    var rotationInRadians = -mueVal * Math.PI / 180;
    stress3.rotation=rotationInRadians;
    stress4.rotation=rotationInRadians;
    if(mueVal<=35){
      stress3.vertices[4].y=-5-mueVal/3;
      stress3.vertices[2].y=-5-mueVal/3;
      stress3.vertices[0].y=10+mueVal/3.2;
      stress3.vertices[1].y=-10-mueVal/3;
      stress3.vertices[3].y=-10-mueVal/3;
      stress3.rotation = rotationInRadians;
     }  
     else if(mueVal>=35&&mueVal<=65){
      stress3.vertices[4].y=-17+(mueVal-35)/1.5;
      stress3.vertices[2].y=-17+(mueVal-35)/1.5;
      stress3.vertices[1].y=-23+(mueVal-35)/1.5;
      stress3.vertices[3].y=-23+(mueVal-35)/1.5;
      stress3.vertices[0].y=(45-mueVal/1.5);
      stress3.rotation = rotationInRadians ;
      }
     else if(mueVal>65&&mueVal<=125){
      stress3.vertices[0].y=(30-(mueVal)/2.4);
      stress3.vertices[4].y=0+(mueVal-65)/4;
      stress3.vertices[2].y=0+(mueVal-65)/4;
      stress3.vertices[1].y=5+(mueVal-65)/4;
      stress3.vertices[3].y=5+(mueVal-65)/4;
      stress3.rotation = rotationInRadians ;
     }
     else if(mueVal>125&&mueVal<=165){
      stress3.vertices[0].y=(-20+(mueVal-125)/2);
      stress3.vertices[4].y=14-(mueVal-125)/2;
      stress3.vertices[2].y=14-(mueVal-125)/2;
      stress3.vertices[1].y=19-(mueVal-125)/2;
      stress3.vertices[3].y=19-(mueVal-125)/2;
      stress3.rotation = rotationInRadians ;
     }
     else{
      stress3.vertices[0].y=(0+(mueVal-165)/2);
      stress3.vertices[4].y= 1-(mueVal-165)/2;
      stress3.vertices[2].y=1-(mueVal-165)/2;
      stress3.vertices[1].y=-4-(mueVal-165)/2;
      stress3.vertices[3].y=-4-(mueVal-165)/2;
      stress3.rotation = rotationInRadians;
     }
     if(mueVal<=15){
      stress4.vertices[0].x=20-mueVal/2;
      stress4.vertices[4].x=20;
      stress4.vertices[2].x=20;
      stress4.vertices[1].x=15;
      stress4.vertices[3].x= 15;
      stress4.rotation = rotationInRadians;
     }  
     else if(mueVal>=15&&mueVal<=45){
      stress4.vertices[4].x=15+((mueVal-15));
      stress4.vertices[2].x=15+((mueVal-15));
      stress4.vertices[1].x=20+((mueVal-15));
      stress4.vertices[3].x=20+((mueVal-15));
      stress4.rotation = rotationInRadians;
      }
     else if(mueVal>45&&mueVal<=135){
      stress4.rotation = rotationInRadians;
      stress4.vertices[4].x=45-(mueVal-45)/3;
      stress4.vertices[2].x=45-(mueVal-45)/3;
      stress4.vertices[1].x=50-(mueVal-45)/3;
      stress4.vertices[3].x=50-(mueVal-45)/3;
     }
     else {
      stress4.vertices[0].x=20+(mueVal-135)/2;
      stress4.vertices[4].x=20;
      stress4.vertices[2].x=20;
      stress4.vertices[1].x=15;
      stress4.vertices[3].x=15;
      stress4.rotation = rotationInRadians;
     }
     
  
  
      two.update();
  }
  function points1upload(){
    var mueVal=mue.value;
    if(mueVal<=45){
      points1[0].x=80;
      points1[1].x=140;
      points1[2].x=140;
      points1[2].y=400;
      points1[3].x=80;
      points1[3].y=400;
      points1[4].x=80;
      points1[1].y= 370 -  (mueVal)*(2/3) ;
      points1[0].y= 370 +  (mueVal)*(2/3) ;
      points1[4].y= 370 +  (mueVal)*(2/3);
    }
    if(mueVal>45&&mueVal<=135){
      points1[0].y=400;
      points1[1].y=340
      points1[2].x=140;
      points1[3].y=400;
      points1[4].y=400;
      points1[2].y=340;
      points1[3].x=140;
      points1[1].x=140-(mueVal-45)*(2/3);
      points1[0].x= 80 +  (mueVal-45)*(2/3);
      points1[4].x= 80 +  (mueVal-45)*(2/3) ;
    }
    else if (mueVal>135){
      points1[3].x=140;
      points1[0].x=140;
      points1[1].x=80;
      points1[4].x=140;
      points1[2].x=80;
      points1[3].y=340;
      points1[1].y=340+(mueVal-135)*(2/3);
      points1[0].y= 400 -  (mueVal-135)*(2/3) ;
      points1[4].y= 400 -  (mueVal-135)*(2/3) ;

    }
   
  }
  function points2upload(){
    var mueVal=mue.value;
    if(mueVal<45){
      points2[0].x=300;
      points2[0].y=340;
      points2[1].x=330-mueVal*(2/3);
      points2[1].y=340;
      points2[2].x=330+mueVal*(2/3);
      points2[2].y=400;
      points2[3].x=300;
      points2[3].y= 400 ;
      points2[4].x= 300 ;
      points2[4].y= 340 ;
    }
    if(mueVal>45&&mueVal<135){
      points2[0].x=300;
      points2[0].y=400;
      points2[1].x=300;
      points2[1].y=340+(mueVal-45)*(2/3);
      points2[2].x=360;
      points2[2].y=400-(mueVal-45)*(2/3);
      points2[3].x=360;
      points2[3].y= 400 ;
      points2[4].x= 300 ;
      points2[4].y= 400 ;
    }
    else if (mueVal>135){
      points2[0].x=360;
      points2[0].y=400;
      points2[1].x=300+(mueVal-135)*(2/3);
      points2[1].y=400;
      points2[2].x=360-(mueVal-135)*(2/3);
      points2[2].y=340;
      points2[3].x=360;
      points2[3].y=340 ;
      points2[4].x=360 ;
      points2[4].y=400 ;
     
    }
   
  }
var rotationAngle = 0;
var text1=two.makeText("",-40,40)
var text2=two.makeText("",-40,40)
text1.stroke="red";
text1.linewidth=0.5;
text2.stroke="yellow";
text2.linewidth=0.5
var exx=document.getElementById("length");
var eyy=document.getElementById("width");
var exy=document.getElementById('thick')
function handleInputChange() {
  textrotation();
  // Call other relevant functions if needed
}

// Add event listeners to all input elements
exx.addEventListener("input", handleInputChange);
eyy.addEventListener("input", handleInputChange);
exy.addEventListener("input", handleInputChange);

// Add event listener to the slider
document.getElementById('mue').addEventListener('input', function() {
 points1upload();
 points2upload();
 stressRotate();
 stressRotate2();

});

// Render the scene
two.update();


