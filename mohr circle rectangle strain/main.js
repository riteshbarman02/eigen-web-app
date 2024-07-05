
import Graph from "./js/graph.js";
// Create a Two.js instance
var two = new Two({
  fullscreen: false,
  width: 500,
  height: 500
}).appendTo(document.getElementById("canvas_1"));

// Create the main rectangle
var shadowRect = new Two.Rectangle(200 , 150 , 100, 100); // Offset by 10 pixels
shadowRect.fill = 'transparent'; // Shadow color
shadowRect.opacity = 0.2; // Shadow opacity
shadowRect.noStroke(); // No stroke for shadow
two.add(shadowRect);
 // Stroke width

// Add the main rectangle to the Two.js scene
two.add(rect);
var xaxis = two.makeArrow(350, 150, 50, 150);
var xaxis2 = two.makeArrow(350, 150, 350, 150);
var yaxis = two.makeArrow(200, 50, 200, 280);
var yaxis2 = two.makeArrow(200, 50, 200, 30);
xaxis.linewidth = 2;
xaxis.stroke="black";
xaxis2.linewidth = 2;
xaxis2.stroke="black";
yaxis.linewidth = 2;
yaxis.stroke="black";
yaxis2.linewidth = 2;
yaxis2.stroke="black";
var rect = new Two.Rectangle(200, 150, 100, 100); // x, y, width, height

// Style the main rectangle
rect.fill = "#d4d4d4"; // Fill color
rect.stroke = 'black'; // Stroke color
rect.linewidth = 2;
two.add(rect);

//addding the stress lines 
var stress1Arrow= two.makeArrow(70,10,70,-10)
stress1Arrow.vertices[4].x=67;
stress1Arrow.vertices[2].x=73;
stress1Arrow.stroke= "#cc1126"
stress1Arrow.linewidth=2
//stress1Arrow.vertices[4].y=-3;
// Render the scene
var stress2Arrow= two.makeArrow(82,0,72,0)
stress2Arrow.stroke= "#0c67c8"
stress2Arrow.vertices[4].y=-3;
stress2Arrow.vertices[2].y=3;
stress2Arrow.linewidth=2
two.update();

var stress3Arrow= two.makeArrow(-20,-70,20,-70)
stress3Arrow.stroke= "#cc1126"
stress3Arrow.vertices[4].y=-73;
stress3Arrow.vertices[2].y=-67;
stress3Arrow.linewidth=2
//stress1Arrow.vertices[4].y=-3;
// Render the scene
var stress4Arrow= two.makeArrow(0,-70,0,-100)
stress4Arrow.stroke= "#0c67c8"
stress4Arrow.vertices[4].x=-3;
stress4Arrow.vertices[2].x=3;
stress4Arrow.linewidth=2
two.update();
var mue = document.getElementById('mue');
//Function to rotate the rectangle based on slider input
function rotateRectangle() {
  var mueVal = mue.value;
  rect.rotation = -mueVal* (Math.PI / 180); // Convert degrees to radians
  two.update();
}

stress1Arrow.translation.set(200,150);
stress2Arrow.translation.set(200,150);
stress3Arrow.translation.set(200,150);
stress4Arrow.translation.set(200,150);
  // Get the slider value
  var mueVal ;
  // Function to update arrow rotation based on slider value
function updateRotation() {
    mueVal=mue.value;
    // Convert slider value to radians for rotation
    var rotationInRadians = -mueVal * Math.PI / 180;
    // Set arrow rotation
    
    // Render the scene
   if(mueVal<=35){
    stress1Arrow.vertices[0].y=10+mueVal/3.2;
    stress1Arrow.vertices[4].y=-5-mueVal/3;
    stress1Arrow.vertices[2].y=-5-mueVal/3;
    stress1Arrow.vertices[1].y=-10-mueVal/3;
    stress1Arrow.vertices[3].y=-10-mueVal/3;
    stress1Arrow.rotation = rotationInRadians;
   }  
   else if(mueVal>=35&&mueVal<=65){
    stress1Arrow.vertices[4].y=-17+(mueVal-35)/1.5;
    stress1Arrow.vertices[2].y=-17+(mueVal-35)/1.5;
    stress1Arrow.vertices[1].y=-23+(mueVal-35)/1.5;
    stress1Arrow.vertices[3].y=-23+(mueVal-35)/1.5;
    stress1Arrow.vertices[0].y=(45-mueVal/1.5);
    stress1Arrow.rotation = rotationInRadians ;
    }
   else if(mueVal>65&&mueVal<=125){
    stress1Arrow.vertices[0].y=(30-(mueVal)/2.4);
   stress1Arrow.vertices[4].y=0+(mueVal-65)/4;
   stress1Arrow.vertices[2].y=0+(mueVal-65)/4;
   stress1Arrow.vertices[1].y=5+(mueVal-65)/4;
   stress1Arrow.vertices[3].y=5+(mueVal-65)/4;
    stress1Arrow.rotation = rotationInRadians ;
   }
   else if(mueVal>125&&mueVal<=165){
    stress1Arrow.vertices[0].y=(-20+(mueVal-125)/2);
    stress1Arrow.vertices[4].y=14-(mueVal-125)/2;
    stress1Arrow.vertices[2].y=14-(mueVal-125)/2;
    stress1Arrow.vertices[1].y=19-(mueVal-125)/2;
    stress1Arrow.vertices[3].y=19-(mueVal-125)/2;
    stress1Arrow.rotation = rotationInRadians ;
   }
   else{
    stress1Arrow.vertices[0].y=(0+(mueVal-165)/2);
    stress1Arrow.vertices[4].y= 1-(mueVal-165)/2;
    stress1Arrow.vertices[2].y=1-(mueVal-165)/2;
    stress1Arrow.vertices[1].y=-4-(mueVal-165)/2;
    stress1Arrow.vertices[3].y=-4-(mueVal-165)/2;
    stress1Arrow.rotation = rotationInRadians;
   }

    two.update();
   // console.log(mueVal);
  }
  function updateRotation2() {
    // Convert slider value to radians for rotation
    var rotationInRadians = -mueVal * Math.PI / 180;
    // Set arrow rotation
    
    // Render the scene
   if(mueVal<=15){
    stress2Arrow.vertices[0].x=78-mueVal/2;
    stress2Arrow.vertices[4].x=78;
    stress2Arrow.vertices[2].x=78;
    stress2Arrow.vertices[1].x=72;
    stress2Arrow.vertices[3].x=72;
    stress2Arrow.rotation = rotationInRadians;
   }  
   else if(mueVal>=15&&mueVal<=45){
    stress2Arrow.vertices[4].x=50+(15+mueVal/1.3);
    stress2Arrow.vertices[2].x=50+(15+mueVal/1.3);
    stress2Arrow.vertices[1].x=55+(15+mueVal/1.3);
    stress2Arrow.vertices[3].x=55+(15+mueVal/1.3);
    stress2Arrow.rotation = rotationInRadians;
    }
   else if(mueVal>45&&mueVal<=135){
    stress2Arrow.rotation = rotationInRadians;
    stress2Arrow.vertices[4].x=49+(75-mueVal/2.5);
    stress2Arrow.vertices[2].x=49+(75-mueVal/2.5);
    stress2Arrow.vertices[1].x=54+(75-mueVal/2.5);
    stress2Arrow.vertices[3].x=54+(75-mueVal/2.5);
   }
   else {
    stress2Arrow.vertices[0].x=90-(80-mueVal/2);
    stress2Arrow.vertices[4].x=80;
    stress2Arrow.vertices[2].x=80;
    stress2Arrow.vertices[1].x=75;
    stress2Arrow.vertices[3].x=75;
    stress2Arrow.rotation = rotationInRadians;
   }
   

    two.update();
   // console.log(mueVal);
  }
  function updateRotation3() {
    // Convert slider value to radians for rotation
    var rotationInRadians = -mueVal * Math.PI / 180;
    // Set arrow rotation
    
    // Render the scene
   if(mueVal<=15){
    stress3Arrow.vertices[0].x=-13-mueVal/1.3;
    stress3Arrow.vertices[4].x=12+mueVal/2;
    stress3Arrow.vertices[2].x=12+mueVal/2;
    stress3Arrow.vertices[1].x=17+mueVal/2;
    stress3Arrow.vertices[3].x=17+mueVal/2;
    stress3Arrow.rotation = rotationInRadians;
   }  
   else if(mueVal>=15&&mueVal<=45){
    stress3Arrow.vertices[4].x=25-mueVal/2;
    stress3Arrow.vertices[2].x=25-mueVal/2;
    stress3Arrow.vertices[1].x=30-mueVal/2;
    stress3Arrow.vertices[3].x=30-mueVal/2;
    stress3Arrow.vertices[0].x=(-35+mueVal/1.3);
    stress3Arrow.rotation = rotationInRadians ;
    }
   else if(mueVal>45&&mueVal<=90){
    stress3Arrow.vertices[0].x=(-15+mueVal/2.5);
   stress3Arrow.vertices[4].x=10-mueVal/4;
   stress3Arrow.vertices[2].x=10-mueVal/4;
   stress3Arrow.vertices[1].x=5-mueVal/4;
   stress3Arrow.vertices[3].x=5-mueVal/4;
    stress3Arrow.rotation = rotationInRadians ;
   }
   else if(mueVal>90&&mueVal<=135){
    stress3Arrow.vertices[0].x=20-(mueVal-90)/2.4;
    stress3Arrow.vertices[4].x=-13+(mueVal-90)/2.4;
    stress3Arrow.vertices[2].x=-13+(mueVal-90)/2.4;
    stress3Arrow.vertices[1].x=-18+(mueVal-90)/2.4;
    stress3Arrow.vertices[3].x=-18+(mueVal-90)/2.4;
    stress3Arrow.rotation = rotationInRadians ;
   }
   else{
    stress3Arrow.vertices[0].x=5-(mueVal-130)/2.4;
    stress3Arrow.vertices[4].x=(mueVal-130)/3;
    stress3Arrow.vertices[2].x=(mueVal-130)/3;
    stress3Arrow.vertices[1].x=5+(mueVal-130)/3;
    stress3Arrow.vertices[3].x=5+(mueVal-130)/3;
    stress3Arrow.rotation = rotationInRadians;
   }

    two.update();
   // console.log(mueVal);
  }
  function updateRotation4() {
    // Convert slider value to radians for rotation
    var rotationInRadians = -mueVal * Math.PI / 180;
    // Set arrow rotation
    
    // Render the scene
   if(mueVal<=45){
    stress4Arrow.vertices[0].y=-70;
    stress4Arrow.vertices[4].y=-100+mueVal/2;
    stress4Arrow.vertices[2].y=-100+mueVal/2;
    stress4Arrow.vertices[1].y=-105+mueVal/2;
    stress4Arrow.vertices[3].y=-105+mueVal/2;
    stress4Arrow.rotation = rotationInRadians;
   }  
   else if(mueVal>=45&&mueVal<=90){
    stress4Arrow.vertices[4].y=-80;
    stress4Arrow.vertices[2].y=-80;
    stress4Arrow.vertices[1].y=-75;
    stress4Arrow.vertices[3].y=-75;
    stress4Arrow.vertices[0].y=-75-mueVal/4;
    stress4Arrow.rotation = rotationInRadians ;
    }
   else if(mueVal>90&&mueVal<=135){
    stress4Arrow.vertices[0].y=-100-(45-mueVal/2);
   stress4Arrow.vertices[4].y=-80;
   stress4Arrow.vertices[2].y=-80;
   stress4Arrow.vertices[1].y=-75;
   stress4Arrow.vertices[3].y=-75;
    stress4Arrow.rotation = rotationInRadians ;
   }
   else if(mueVal>135&&mueVal<=180){
    stress4Arrow.vertices[0].y=-75;
    stress4Arrow.vertices[4].y=-5-mueVal/2;
    stress4Arrow.vertices[2].y=-5-mueVal/2;
    stress4Arrow.vertices[1].y=-10-mueVal/2;
    stress4Arrow.vertices[3].y=-10-mueVal/2;
    stress4Arrow.rotation = rotationInRadians;
   }

    two.update();
   // console.log(mueVal);
  }
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
  var graph1 = new Graph(two, points1, "black", "#adadae", 0.5, 2);
  var graph1 = new Graph(two, points2, "black", "#adadae", 0.5, 2);
  var stress1 =two.makeArrow(0,-10,0,-30)
  stress1.linewidth=2.5;
  stress1.stroke="#139ae6";
  stress1.vertices[4].x=-3;
  stress1.vertices[2].x=3;
  stress1.translation.set(110,370);
  var stress2 =two.makeArrow(-10,-10,10,-10)
  stress2.linewidth=2.5;
  stress2.stroke="#cc1126";
  stress2.vertices[4].y=-12;
  stress2.vertices[2].y=-8;
  stress2.translation.set(110,370);
  var stress3 =two.makeArrow(10,10,10,-10)
  stress3.linewidth=2.5;
  stress3.stroke="#cc1126";
  stress3.vertices[4].x=13;
  stress3.vertices[2].x=7;
  stress3.translation.set(330,370);
  var stress4 =two.makeArrow(20,0,14,0)
  stress4.linewidth=2.5;
  stress4.stroke="#139ae6";
  stress4.vertices[4].y=3;
  stress4.vertices[2].y=-3;
  stress4.translation.set(330,370);

  function stressRotate(){
    var rotationInRadians = -mueVal * Math.PI / 180;
    stress1.rotation=rotationInRadians;
    stress2.rotation=rotationInRadians;
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
text2.stroke="#0c67c8";
text2.linewidth=0.5
var exx=document.getElementById("length");
var eyy=document.getElementById("width");
var exy=document.getElementById('thick')
function textrotation(){
  var rotationInRadians = -mueVal * Math.PI / 180;
  var exxval=parseFloat(exx.value);
  var eyyval=parseFloat(eyy.value);
  var exyval=parseFloat(exy.value);
  var load = exxval+eyyval+exyval+rotationInRadians;
  text1.value=load.toFixed(2);
  text2.value=(load-20).toFixed(2)
  text1.translation.x=200+60*Math.sin(-rotationInRadians+Math.PI/2.8);
  text1.translation.y=150+60*Math.cos(-rotationInRadians+Math.PI/2.8);
  text2.translation.x=200+60*Math.sin(-rotationInRadians+Math.PI/2);
  text2.translation.y=150+60*Math.cos(-rotationInRadians+Math.PI/2);
}
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
  rotateRectangle();
 // rotatestress();
 updateRotation();
 updateRotation2();
 updateRotation3();
 updateRotation4();
 points1upload();
 points2upload();
 stressRotate();
 stressRotate2();
 textrotation();
});

// Render the scene
two.update();


