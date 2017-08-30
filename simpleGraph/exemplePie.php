<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf8" />
<script type="text/javascript"  src="source/renderPie.js"></script>
</head>
<style type="text/css">
html{
	margin: 0;
	width: 100%;
	padding: 0;
}

body{
	margin: 0;
	width: 100%;
}

.CanvasSide{
	width: 100%;
	margin: 0;
}

.CanvasMarge{
	margin: 0;
}
</style>
<body onload="Initialisation()">
	<div id="graphPie1">
	</div>
</body>
</html>

<script type="text/javascript">
function Initialisation(){
	var percentages = [10, 40, 30, 20];
	var colors = ['yellow', 'blue', 'red', 'green'];
	var names = ['nomyellow', 'nomblue', 'nomred', 'nomgreen'];
	var baliseId = 'graphPie1';
	var startPoint = 0;
	StartDisplayPie(percentages, colors, names, baliseId, startPoint);
}
</script>
