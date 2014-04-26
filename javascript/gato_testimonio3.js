$(function() {
	/*obtener  un objeto de jQuery para manipular la caja de los iconos de las redes sociales*/

	var gatito = $("#testimonio-gato img");

	gatito.hover(function() {
		gatito.fadeOut("slow", function(){
			gatito.attr("src", "../imagenes/testimonio2.png");
			gatito.fadeIn("slow");
		});
	

	},
	function() {
		gatito.fadeOut("slow", function(){
			gatito.attr("src", "../imagenes/testimonio.jpg");
			gatito.fadeIn("slow");
		});
		
		
	});

	

});
