<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf8" />
<script type="text/javascript"  src="source/renderBarHorizontal.js"></script>
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
	var percentages = [61, 46, 25, 60, 20, 40];
	var colors = ['yellow', 'blue', 'red', 'green', 'gray', '#555555'];
	var names = ['nomyellow', 'nomblue', 'nomred', 'nomgreen', '2', '3'];
	var baliseId = 'graphBar1';
	StartDisplayBarHorizontal(percentages, colors, names, baliseId);
}
</script>