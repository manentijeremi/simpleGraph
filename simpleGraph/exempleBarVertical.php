<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf8" />
<script type="text/javascript"  src="source/renderBarVertical.js"></script>
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
<body onload="InitialisationBar()">
	<div id="graphBar1">
	</div>
</body>
</html>

<script type="text/javascript">
function InitialisationBar(){
	var percentages = [20, 59, 25, 20];
	var colors = ['yellow', 'blue', 'red', 'green'];
	var names = ['nomyellow', 'nomblue', 'nomred', 'nomgreen'];
	var baliseId = 'graphBar1';
	StartDisplayBarVertical(percentages, colors, names, baliseId);
}
</script>