/*
	- Student No: A00026160
	- Name: David Klassen
	- Work:	Lab 6
	- Course: COMP 1950
	- File: canvas-examples.js
	-
*/

// JCanvas Extend example: for creating a drawHeart() method
$.jCanvas.extend({
  name: 'drawHeart',
  type: 'heart',
  props: {},
  fn: function(ctx, params) {
	// Just to keep our lines short
	var p = params;
	
	// Draw heart
	ctx.beginPath();
	ctx.moveTo(p.x, p.y + p.radius);
	
	// Left side of heart
	ctx.quadraticCurveTo(
	  p.x - (p.radius * 2),
	  p.y - (p.radius * 2),
	  p.x,
	  p.y - (p.radius / 1.5)
	);
	
	// Right side of heart
	ctx.quadraticCurveTo(
	  p.x + (p.radius * 2),
	  p.y - (p.radius * 2),
	  p.x,
	  p.y + p.radius
	);
	
	// Call the detectEvents() function to enable jCanvas events
	// Be sure to pass it these arguments, too!
	$.jCanvas.detectEvents(this, ctx, p);
	
	// Call the closePath() functions to fill, stroke, and close the path
	// This function also enables masking support and events
	// It accepts the same arguments as detectEvents()    
	$.jCanvas.closePath(this, ctx, p);
  }
});


// Making use of some extra API details for a logo.
function drawPageLogo() {

	// Draw a circle on the canvas
	$('canvas.intro').drawArc({
	  layer: true,
	  draggable: true,
	  fillStyle: 'black',
	  x: 50, y: 50,
	  radius: 40
	});			


	// Use the drawHeart() method
	$('canvas.intro').drawHeart({
	  layer: true,
	  draggable: true,
	  fillStyle: '#c33',
	  radius: 40,
	  x: 50, y: 60
	});	
}


/*
 * Place our code after the JQuery init calls.
 */
$(document).ready(function(){
				
	// Draw a logo for this page using JCanvas:
	drawPageLogo();

	// Example Mozilla code:	
	draw();
	draw2();
	draw3();
	draw4();
	draw5();
	draw6();
	draw7();
	
	// JCanvas replicated examples
	jdraw2();
	jdraw3();
	jdraw4();
	jdraw5();
	jdraw6();
	jdraw7();
}); 


function jdraw7() {

	// Because we are not using the Raw API... we used
	// new drawArc properties inDegrees and ccw to make 
	// the code more easily translatable.
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 3; j++){
			var obj = {
				radius: 20  // Arc radius
			}			
			obj['x'] = 25 + j * 50; // x coordinate
			obj['y'] = 25 + i * 50; // y coordinate
			obj['inDegrees'] = false; // Use Radians
			obj['start'] = (Math.PI/2); // Starting point on circle
			obj['end'] = Math.PI + (Math.PI * j) / 2 + (Math.PI/2); // End point on circle
			obj['ccw'] = i % 2 == 0 ? false : true; // clockwise or anticlockwise
		
			if (i > 1) {
				obj['fillStyle'] = 'black';
				$('canvas#jcanvas7').drawArc(obj);
			} else {
				obj['strokeStyle'] = 'black';
				obj['strokeWidth'] = 1;
				$('canvas#jcanvas7').drawArc(obj);
			}
		}
	}	
}


function jdraw6() {
		
	// Can use drawLine instead of lineTo
	$('canvas#jcanvas6').drawLine({
		fillStyle: '#000',
		x1: 25, y1: 25,
		x2: 105, y2: 25,
		x3: 25, y3: 105
	});	
	
	// Note it is important to close a line path here.
	$('canvas#jcanvas6').drawLine({
		strokeStyle: '#000',
		strokeWidth: 1,
		x1: 125, y1: 125,
		x2: 125, y2: 45,
		x3: 45, y3: 125,
		closed: true
	});		
}

function jdraw5() {

	// Draw a full circle/face
	$('canvas#jcanvas5').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x: 75, y: 75,
	  radius: 50
	});	
	
	// Draw a 180° arc/smile
	$('canvas#jcanvas5').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x: 75, y: 75,
	  radius: 35,
	  // start and end angles in degrees
	  start: 90, end: 270
	});	
	
	// Draw the tiny circle/eyes
	$('canvas#jcanvas5').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x: 60, y: 65,
	  radius: 5
	});
	$('canvas#jcanvas5').drawArc({
	  strokeStyle: '#000',
	  strokeWidth: 1,
	  x: 90, y: 65,
	  radius: 5
	});	
}

function jdraw4() {

	// Can use drawLine instead of lineTo
	$('canvas#jcanvas4').drawLine({
		fillStyle: '#000',
		x1: 75, y1: 50,
		x2: 100, y2: 75,
		x3: 100, y3: 25
	});
}

function jdraw3() {

	// Note there are three rectangles and no clear call.
	$('canvas#jcanvas3').drawRect({
		fillStyle: '#000',
		x: 75, y: 75,
		width: 100,
		height: 100
	});	
	
	$('canvas#jcanvas3').drawRect({
		fillStyle: '#FFF',
		x: 75, y: 75,
		width: 60,
		height: 60
	});
	
	// strokeStyle is used instead of strokeRect
	$('canvas#jcanvas3').drawRect({
		strokeStyle: '#000',
		strokeWidth: 1,
		x: 75, y: 75,
		width: 50,
		height: 50
	});	
}

function jdraw2() {
	
	// fillStyle is used instead of fillRect
	$('canvas#jcanvas2').drawRect({
		fillStyle: '#B00',
		x: 40, y: 40,
		width: 55,
		height: 50
	});	

	$('canvas#jcanvas2').drawRect({
		fillStyle: '#00B',
		x: 60, y: 60,
		width: 55,
		height: 50,
		opacity: 0.5
	});		
}


/*
 * The code from our investigation into the Mozilla Canvas Tutorials
 */
function draw7() {
  var canvas = document.getElementById('tutorial7');
  if (canvas.getContext){
	var ctx = canvas.getContext('2d');

	for(var i=0;i<4;i++){
	  for(var j=0;j<3;j++){
		ctx.beginPath();
		var x = 25+j*50; // x coordinate
		var y = 25+i*50; // y coordinate
		var radius = 20; // Arc radius
		var startAngle = 0; // Starting point on circle
		var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
		var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

		ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

		if (i>1){
		  ctx.fill();
		} else {
		  ctx.stroke();
		}
	  }
	}
  }
}

function draw6() {
  var canvas = document.getElementById('tutorial6');
  if (canvas.getContext){
	var ctx = canvas.getContext('2d');

	// Filled triangle
	ctx.beginPath();
	ctx.moveTo(25,25);
	ctx.lineTo(105,25);
	ctx.lineTo(25,105);
	ctx.fill();

	// Stroked triangle
	ctx.beginPath();
	ctx.moveTo(125,125);
	ctx.lineTo(125,45);
	ctx.lineTo(45,125);
	ctx.closePath();
	ctx.stroke();
  }
}		

function draw5() {
  var canvas = document.getElementById('tutorial5');
  if (canvas.getContext){
	 var ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
	ctx.moveTo(110,75);
	ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
	ctx.moveTo(65,65);
	ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
	ctx.moveTo(95,65);
	ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
	ctx.stroke();
  }
}		

function draw4() {
  var canvas = document.getElementById('tutorial4');
  if (canvas.getContext){
	var ctx = canvas.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(75,50);
	ctx.lineTo(100,75);
	ctx.lineTo(100,25);
	ctx.fill();
  }
}		

function draw3() {
  var canvas = document.getElementById('tutorial3');
  if (canvas.getContext) {
	var ctx = canvas.getContext('2d');

	ctx.fillRect(25,25,100,100);
	ctx.clearRect(45,45,60,60);
	ctx.strokeRect(50,50,50,50);
  }
}		

function draw2() {
	var canvas = document.getElementById("tutorial2");
	
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		ctx.fillStyle = "rgb(200,0,0)";
		ctx.fillRect (10, 10, 55, 50);

		ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
		ctx.fillRect (30, 30, 55, 50);
	}
}

function draw(){
	var canvas = document.getElementById('tutorial2');
	
	if (canvas.getContext){
		var ctx = canvas.getContext('2d');
	}
} 