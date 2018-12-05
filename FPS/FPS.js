// JavaScript Document
function draw ()
{
	var color = document.getElementById("selector_color").value;
	
	var length = parseInt(document.getElementById("range_length_disp").value);
	
	var gap = parseInt(document.getElementById("range_gap_disp").value);
	
	var thickness = parseInt(document.getElementById("range_thickness_disp").value);
	
	var canvas = document.getElementById("crosshairCanvas");
	
    var ctx = canvas.getContext('2d');
	
	
	//top
	ctx.fillStyle = color;
	
	
	ctx.fillRect(100-(thickness/2), 100-length-gap, thickness, length);
	
	//right
	ctx.fillRect(100+gap, 100-(thickness/2), length, thickness);
	
	//bottom
	ctx.fillRect(100-(thickness/2), 100+gap, thickness, length);
	
	//left
	ctx.fillRect(100-length-gap, 100-(thickness/2), length, thickness);
	
}
