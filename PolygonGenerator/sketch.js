/*
Click to create a vertex

Enter to finalise the polygon

Space to clear the page

The indices will be sorted clockwise, and that will be shown in text form once
the polygon is finalised

This does work for concave polygons however it does not draw them the way you might intend.
this is because it connects the lines based on their order clockwise.
  - Try spam clicking and watch it form a polygon anyway
*/


function setup() {
  createCanvas(800, 800);
  background(0)
  textSize(15);
}

function draw() {
}

function thetaAspect(vec){
  return atan2(vec.x, vec.y);
}

function sortVertices(vecs){
  let cx = 0, cy = 0;
  for (var i = 0, j = vecs.length; i < j; i++){
    cx+=vecs[i].x;
    cy+=vecs[i].y;
  }
  let inner = createVector(cx/vecs.length, cy/vecs.length);
  print(inner)
  veclist = [];
  for(let vec of vecs){ 
    veclist.push(p5.Vector.sub(vec, inner));
  }
  veclist.sort(function(a, b){ return thetaAspect(b)-thetaAspect(a)});
  let k = 0;
  for(let vec of veclist){
    veclist[k] = p5.Vector.add(vec, inner);
    k++;
  }
  return veclist;
}


var firstPos;
currentPoly = [];
function mouseClicked() {
  cur = createVector(mouseX, mouseY)
  stroke(255, 255, 255);
  strokeWeight(2);
  fill(255, 255, 255);
  noStroke();
  ellipse(mouseX, mouseY, 10);
  currentPoly.push(cur);
  stroke(255, 255, 255);
  strokeWeight(4);
  return false;
}
function keyPressed(){
  if(keyCode == ENTER){
    stroke(255, 255, 255);
    firstVec = undefined;
    lastVec = undefined;
    currentPoly = sortVertices(currentPoly);
    i = 1;
    var prevVec, firstVec = currentPoly[0];
    r = 0
    rflag = false;
    for(let vec of currentPoly){
      stroke(r, 0, 255);
      if(r>255-(255/(currentPoly.length/2))) rflag = true;
      print(rflag)
      r += (rflag) ? (-255/(currentPoly.length/2)) : (255/(currentPoly.length/2));
      if(prevVec != undefined) line(prevVec.x, prevVec.y, vec.x, vec.y);
      fill(255, 255, 255);
      noStroke();
      text(i, vec.x+10, vec.y-10)
      prevVec = vec;
      i++;
    }
    stroke(r, 0, 255);
    line(prevVec.x, prevVec.y, firstVec.x, firstVec.y);
    currentPoly = [];
  }
  if(keyCode == 32){
    clear();
    background(0);
    firstVec = undefined;
    prevVec = undefined;
    currentPoly = [];
  }
}