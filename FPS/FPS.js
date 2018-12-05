// JavaScript Document
function draw ()
{
	var color = document.getElementById("selector_color").value;
	
	var length = document.getElementById("range_length_disp").value;
	
	var gap = document.getElementById("range_gap_disp").value;
	
	var thickness = document.getElementById("range_thickness_disp").value;
	
	var canvas = document.getElementById("crosshairCanvas");
	
	var ctx = canvas.getContext("2d");
	
	//top
	ctx.fillText("Why is there nothing?", 100, 100, 200)
	ctx.fillStyle = color;
	
	ctx.fillRect = (100, 100 - gap, thickness, length);
	
	//right
	ctx.fillRect = (100 + gap, 100, length, thickness);
	
	//bottom
	ctx.fillRect = (100, 100 + gap, thickness, length);
	
	//left
	ctx.fillRect = (100 - gap, 100, length, thickness);
	
	alert("Generated")
}
