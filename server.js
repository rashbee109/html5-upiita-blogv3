/*PASO 1: Obtener un objeto que nos permita usar la librería express*/

var express = require("express");
var nunjucks = require("nunjucks");
var app = express();
app.listen(8010);

console.log("servidor levantado");


/*atender peticiones get, las get a diferencia de las post son peticiones al servidor p{ublica, esto es que van directamente en la url, las post son privadas como las cotraseñas de nuestro correo o transacción bancaria*/

/*configurar el sistema de templates*/

nunjucks.configure(__dirname + "/vistas",{ 

express:app 

});
console.log("sistema de templates configurado");

/*configurar las rutas estáticas*/


app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));
app.use("/javascript", express.static(__dirname + "/javascript"));

/*configurar el sitema de templates, sólo se configura una vez*/


/*responder peticiones get*/
app.get("/", function(request, response){
	response.render("index.html");
});

app.get("/home", function(request, response){
	response.render("index.html");
});

app.get("/galeria", function(request, response){
	response.render("galeria.html");
});
