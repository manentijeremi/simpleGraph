var isResized = false;
var Percentages = [];
var Colors = [];
var Names = [];
var BaliseId = '';
var StartPoint = 0;// from 0 at 100

function StartDisplayPie(percentages, colors, names, baliseId, startPoint){
	window.addEventListener("resize", resizePie);
	
	Percentages = percentages;
	Colors = colors;
	Names = names;
	BaliseId = baliseId;
	StartPoint = startPoint;
	displayPie(Percentages, Colors, Names, BaliseId, StartPoint);
}

function reziseDisplayPie(){
	displayPie(Percentages, Colors, Names, BaliseId, StartPoint);
}

function displayPie(percentages, colors, names, baliseId, startPoint){
	var startPercentages = [];
	var totalStartPercentage = 0 + startPoint;
	for(var i = 0; i<percentages.length; i++){
		startPercentages[i] = totalStartPercentage;
		totalStartPercentage += percentages[i];
	}
	var legendId = 'legend'+baliseId;
	var sideCanvasId = 'side'+baliseId;
	var canvasId = 'canvas'+baliseId;
	document.getElementById(baliseId).innerHTML = "<div id='"+legendId+"'></div><div id='"+sideCanvasId+"' class='CanvasSide'><canvas id='"+canvasId+"' class='CanvasMarge'></canvas></div>";
	var parent = document.getElementById(sideCanvasId);
	var context = document.getElementById(canvasId).getContext("2d");
	var width = parent.offsetWidth;	
	if(width > 600){
		width = 600;
	}
	var fontSize = Math.floor(width / 33);
	context.canvas.width = width;
	context.canvas.height = width;
	for(var i = 0; i<percentages.length; i++){
		DisplayPercentage(percentages[i], startPercentages[i], colors[i], context, width, fontSize);
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

function DisplayPercentage(percentage, startPercentage, color, context, width, fontSize){

	var widthGraph = width;	
	widthGraph = (widthGraph / 100) * 60;//pour prendre 60% du canvas
	
	context.beginPath();
	context.fillStyle = color;//couleur voulu
	context.moveTo(width/2, width/2);
	context.arc(width/2, width/2, widthGraph/2, Math.PI * (startPercentage / 50) - Math.PI / 2, Math.PI * ((percentage + startPercentage) / 50) - Math.PI / 2, false);//dessine la partie de cercle voulu
	
	
	context.lineTo(width/2, width/2);
	context.fill();//rempli la partie de cercle
	
	context.strokeStyle = "rgb(0,0,0)";
	context.fillStyle = "rgb(0,0,0)";
	context.textAlign = 'center';
	context.font = fontSize * 1.4 + "px Arial";
	
	if(percentage > 5){
		context.fillText(percentage, width/2 + (widthGraph/1.7)*Math.cos(Math.PI * ((percentage * 0.5 + startPercentage) / 50) - Math.PI / 2), width/2 + (widthGraph/1.8)*Math.sin(Math.PI * ((percentage * 0.5 + startPercentage) / 50) - Math.PI / 2));
	}
} 

function resizePie(){
	if(!isResized){
		isResized = true;
		setTimeout(function() {
			isResized = false;
			reziseDisplayPie();
		}, 200);
	}
}