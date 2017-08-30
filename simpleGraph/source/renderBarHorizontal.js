var isResized = false;
var Percentages = [];
var Colors = [];
var Names = [];
var BaliseId = '';

function StartDisplayBarHorizontal(percentages, colors, names, baliseId){
	window.addEventListener("resize", resizeBar);
	Percentages = percentages;
	Colors = colors;
	Names = names;
	BaliseId = baliseId;
	displayBar(Percentages, Colors, Names, BaliseId);
}

function reziseDisplayBar(){
	displayBar(Percentages, Colors, Names, BaliseId);
}

function displayBar(percentages, colors, names, baliseId){
	var strongPercentage = 0;
	for(var i = 0; i<percentages.length; i++){
		if(strongPercentage < percentages[i])
			strongPercentage = percentages[i];
	}
	var legendId = 'legend'+baliseId;
	var sideCanvasId = 'side'+baliseId;
	var canvasId = 'canvas'+baliseId;
	document.getElementById(baliseId).innerHTML = "<div id='"+legendId+"'></div><div id='"+sideCanvasId+"' class='CanvasSide'><canvas id='"+canvasId+"' class='CanvasMarge'></canvas></div>";
	var parent = document.getElementById(sideCanvasId);
	var context = document.getElementById(canvasId).getContext("2d");
	var width = parent.offsetWidth;	
	var height = width * 2/3;//parent.offsetHeight;
	if(width > 600){
		width = 600;
		height = width * 2/3;
	}
	var fontSize = Math.floor(width / 33);
	context.canvas.width = width;
	context.canvas.height = height;
	
	DisplayScale(context, strongPercentage, height, width, fontSize);
	
	for(var i = 0; i<percentages.length; i++){
		DisplayPercentage(percentages[i], strongPercentage, colors[i], context, width, height, i, percentages.length, fontSize);
	}
	DisplayLegend(colors, names, legendId);
}

function DisplayLegend(colors, names, legendId){
	var legend = "";
	for(var i = 0; i < names.length; i++){
		legend += "<label style='margin:0.2em 0 0 0; height:1.8em; display:inline-block;'><label style='background-color:"+colors[i]+"; margin:0 0.1em 0 1em; padding: 0 0 0 0;'><label style='opacity:0;'>dddd</label></label><label style='margin:0;'>: "+names[i]+"</label></label>";
	}
	document.getElementById(legendId).innerHTML = legend;
}

function DisplayScale(context, strongPercentage, height, width, fontSize){
	context.beginPath();
	context.moveTo(width * 0.075, height * 0.925);
	context.lineTo(width * 0.925, height * 0.925);
	context.stroke();
	
	var tenPower = CalculateTenMultiple(strongPercentage);
	
	stepScale = Math.round((Math.round(strongPercentage / tenPower))/3) * tenPower;
	
	DisplayStepScale(context, stepScale, strongPercentage, height, width, fontSize);
}

function DisplayStepScale(context, stepScale, strongPercentage, height, width, fontSize){
	context.beginPath();
	context.moveTo(width * 0.075, height * 0.975);
	context.strokeStyle = "rgb(0,0,0)";
	context.fillStyle = "rgb(0,0,0)";
	context.font = fontSize * 1.4 + "px Arial";
	var numberSteps = Math.round(strongPercentage / stepScale);
	var strongSteps = (strongPercentage / stepScale);
	//context.font = 15 * 1.4 + "px Arial";
	for(var i = numberSteps; i>0; i--){
		if (i*stepScale <= strongPercentage)
			context.fillText(i * stepScale, (width * 0.85 * i) / (strongSteps) + width * 0.075 + width * 0.015, height * 0.975);
	}
	context.stroke();
	
	
	var numberSteps = Math.round(strongPercentage / stepScale);
	for(var i = numberSteps; i>0; i--){
		if (i*stepScale <= strongPercentage){
			context.beginPath();
			context.moveTo((width * 0.85 * i) / (strongSteps) + width * 0.075, height * 0.975);
			context.lineTo((width * 0.85 * i) / (strongSteps) + width * 0.075, height * 0.925);
			context.stroke();
		}
	}
}

function DisplayPercentage(percentage, strongPercentage, color, context, width, height, i, count, fontSize){
	context.beginPath();
	context.fillStyle = color;
	context.moveTo(0, 0);
	
	var heightStart = ((height * 0.9) / count) * i;
	var heightEnd = ((height * 0.85) / count);
	var widthStart = 0.075 * width;
	var widthEnd = width * 0.85 * ((1 / (strongPercentage / percentage)));
	context.rect(widthStart, heightStart, widthEnd, heightEnd);
	context.fill();
	
	context.strokeStyle = "rgb(0,0,0)";
	context.fillStyle = "rgb(0,0,0)";
	context.textAlign = 'center';
	context.font = fontSize * 1.4 + "px Arial";
	
	context.fillText(percentage, widthStart - width * 0.025, height * 0.025 + heightStart + heightEnd / 2);
} 

function resizeBar(){
	if(!isResized){
		isResized = true;
		setTimeout(function() {
			isResized = false;
			reziseDisplayBar();
		}, 200);
	}
}

/****************************************fonctionnalité**********/

//savoir le multiple de 10
function CalculateTenMultiple(strongPercentage){
	var tenPower = 1;
	var strongNumber = strongPercentage;
	for(var i = 0; i<strongPercentage.toString().length; i++){
		if(strongNumber > 10){
			tenPower = tenPower * 10;
			strongNumber = strongNumber / 10;
		}
		if(strongNumber < 0.1){
			tenPower = tenPower / 10;
			strongNumber = strongNumber * 10;
		}
	}
	return tenPower;
}