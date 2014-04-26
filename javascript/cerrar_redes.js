$(function(){
	/*obtener  un objeto de jQuery para manipular la caja de los iconos de las redes sociales*/
	
	var enlace = $("#cerrar");
	var cajita = $("#siguenos div");
	
	/*se crea el evento para escuchar el clic en el anchor*/
	
	/*enlace.click(function(){
		
		cajita.fadeToggle("slow");
		var estado = enlace.html();
		if( estado === "cerrar" ){
			enlace.html("abrir");
		}
		else{
			enlace.html("cerrar");
		}*/
		/*el return es para que cuando uno da clic no cargue de nuevo la página y no se suba*/
		/*return false;
	});
	*/
	
	
	/*Aquí */
	enlace.click(function(){
		/*alert("¡click!");*/
		cajita.fadeToggle("slow");
		var estado = enlace.html();
		if( estado === "cerrar" ){
			enlace.attr("data_estado", "abrir");
			enlace.html("abrir");
		}
		else{
			enlace.attr("data_estado", "cerrar");
			enlace.html("cerrar");
		}
		/*el return es para que cuando uno da clic no cargue de nuevo la página y no se suba*/
		return false;
	});
	
	


	
});