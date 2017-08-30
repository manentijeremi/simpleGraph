Utilisation de simple graph.


Il y a trois graphes dispnibles : un bar vertical, un bar horizontal et un graph pie.
Chacun des graphes sont responsive.
On peut définir la couleur de chaque pourcentage, le nombre total de pourcentage et 
afficher leurs noms dans la légende.


1) Insérer une balise dans le code html avec un id unique.

	<div id="graph1">
	</div>
	
2) Les fonctions a appeler.
	- "StartDisplayBarVertical".
	- "StartDisplayBarHorizontal".
	- "StartDisplayPie".
	
	Chacune de ses fonctions s'appellent avec 4 ou 5 paramêtres:
		- Premièrement, une liste de tous les pourcentages "ex: [5, 10, 3 ,40]".
		- Deuxièmement, une liste de même longueur des coleurs, les coleurs sont
aux norme CSS et Html "ex: ['green', '#555555', 'blue', '#15e6f1']".
		- Troisièmment, une list de même longueur du nom correspondant au pourcentage
"ex: ['nomGreen', 'nomDeux', 'nomBlue', 'nomQuatre']".
		- Quatrièmement, l'id unique définie pour la balise html ajouté 
pour contenir le graph "ex: id='graph1'".
		- Cinquièmement, que pour le rendePie, permet de définir la position de départ
du graph "ex: 0".

3)Inclure le fichier dans ton projet.
	- Récupère les sources, dépose les dans ton projet et les inclures. Par exemple :
		"ex: <head>
			 ...
			 <script type="text/javascript"  src="source/renderPie.js"></script>
			 </head>"