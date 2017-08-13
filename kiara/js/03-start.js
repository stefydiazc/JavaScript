
var objJSON = "";

$(function() {
    objJSON = leerArchivoJSON();
   objJSON = JSON.parse(datos);
   // grabarArchivoJSON(datos);
});

var leerArchivoJSON = function () {
    var datos = localStorage.getItem("cuentos")
    if (datos === null) {
        datos = new Object();
        datos.contenido = [];
        localStorage.setItem("cuentos", JSON.stringify(datos));
    } else {
        datos = JSON.parse(datos);
        if (typeof datos === "string") datos = JSON.parse(datos);
    }
    return datos;
}

var grabarArchivoJSON = function (datos) {
    if (datos === null) {
        datos = new Object();
        datos.contenido = [];
        datos.contenido[0] = new Object();
        datos.contenido[0].cuento = [];
        alert(datos.contenido[0].cuento);
        localStorage.setItem("cuentos", JSON.stringify(datos));
    } else {
        localStorage.setItem("cuentos", JSON.stringify(datos));
    }
}
