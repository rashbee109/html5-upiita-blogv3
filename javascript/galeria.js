$(function(){
	var preview = $("#preview img");
	var principal = $("#principal img");
	
	/*se declara una funciónuna vez que se detone el evento click, target indica quién de los 3 preview se detonó y el EVENTO rellena con los datos del que se detonó*/
	preview.click(function(evento){
		var quien_fue = $(evento.target);
		var ruta = quien_fue.data("ruta-principal");
		/*alert(ruta);*/
		principal.slideUp("slow", function(){
			/*se hace una función dentro de slideup para que cuando termine de ejecutarla entonces la siguiente línea es que muestre la imagen que obtiene por la variable ruta y la otra ruta es para que haga la animación*/
			principal.attr("src", ruta);
			principal.slideDown("slow");
		});
		
	});
});
