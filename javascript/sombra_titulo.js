$(function(){
	/*obtener  un objeto de jQuery para manipular el titulo*/
	/*aquí solo incica que se hace un objeto que modificará solo a titulo*/
	/*aquí busca en todo el árbol hasta que encuentra en este documento todo lo que se llame titulo, solo se manda llamar una vez, para facilitar la busqueda*/
	var titulo = $("#titulo");
	/*
	titulo.html("Otra consultora");
	*/
	/*aquí se le añade por código la clase texto_sombreado a la etiqueta titulo*/
	titulo.mouseover(function(){
		titulo.addClass("texto_sombreado");
	});
	
});
