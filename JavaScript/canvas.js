/**
 * @author arbia
 */


function draw() {
	var canvas = document.getElementById("canvasLogo");
	var ctx = canvas.getContext("2d");
	// Create gradient
	var grd = ctx.createRadialGradient(0, 50, 5, 90, 60, 100);
	grd.addColorStop(0, "#E97878");
	grd.addColorStop(1, "black");
	// Fill with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(10, 10, 150, 80);
	ctx.font = "20px verdana";
	ctx.strokeText("Electronic", 10, 50);
}

