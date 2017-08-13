var idxCuento = "";

/*Funcion inicial al cargar la pagina*/
$(function () {
    
    mostrar();
    mostrarHtml();
	animacion();
	nuevo();
    
    $("#nuevo").click(function (e) {
        nuevo();
        return false;
    });

    $("#guardar").click(function (e) {
        var obj;
        if (idxCuento === "") {
            obj = new Object();
        } else {
            obj = objJSON.contenido[0].cuento[idxCuento];
        }

        obj.codigo = $("#codigo").val();
        obj.titulo = $("#titulo").val();
        obj.descripcion = $("#descripcion").val();

        var paginas = [];
        $.each($("#paginas div"), function (i, v) {
            var pagina = new Object();
            pagina.id = "";
            pagina.historia = $(v).find("textarea.hst").val();
            pagina.foto = $(v).find("img.img").attr("src");
            pagina.audio = "";

            paginas.push(pagina);
        });

        obj.paginas = paginas;

        grabarArchivoJSON(objJSON);
        mostrar();
        nuevo();
        return false;
    });

    $("#cancelar").click(function (e) {
        nuevo();
        return false;
    });

});

var animacion = function (){
$( "#right" ).click(function() {
  $( ".block" ).animate({ "left": "+=50px" }, "slow" );
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});
}

var mostrar = function () {
    $.each($("#tabs a"), function (i, v) {
        $(v).click(function (e) {
            var tabindex = $(e.target).attr("tabindex");
            $(".tab:not(hid)").addClass("hid");
            $("#tab-" + tabindex).removeClass("hid");
            return false;
        });
    });

    var stefaniaTable = "";

    $.each(objJSON.contenido[0].cuento, function (index, value) { //"<td>" + "</td>"
        stefaniaTable += "<tr id='c" + index + "'><td>" + value.codigo + "</td>" + "<td>" + value.titulo + "</td>" + "<td>" + value.descripcion + "</td>" + "<td>" + value.creditos + "</td>" +
			"<td><a href='#' class='edt' value='" + index + "'>Editar</a></td><td><a href='#' class='del' value='" + index + "'>Eliminar</a></td><tr>";
    });

    $("#demo tbody").html("");
    $("#demo tbody").append(stefaniaTable);

    $.each($("#demo tbody a.edt"), function (i, v) {
        $(v).click(function (e) {
            var id = $(e.target).attr("value");
            idxCuento = id;

            var cuento = objJSON.contenido[0].cuento[id];
            $("#codigo").val(cuento.codigo);
            $("#titulo").val(cuento.titulo);
            $("#creditos").val(cuento.creditos);
            $("#descripcion").val(cuento.descripcion);
            $("#foto_principal").val(cuento.foto_principal);

            $("#paginas").html("");
            $.each(cuento.paginas, function (i, v) {
                var pagina = [];
                pagina.push("<div>");
                pagina.push("Historia:");
                pagina.push("<textarea class='hst'>");
                pagina.push(v.historia);
                pagina.push("</textarea>");
                pagina.push("<br />");
                pagina.push("Imagen:");
                pagina.push("<img class='img' src='");
                pagina.push(v.foto);
                pagina.push("' />");
		pagina.push("<br />");
                pagina.push("Audio:");
                pagina.push("<audio class='img' src='");
                pagina.push(v.audio);
                pagina.push("' />");
                pagina.push("</div>");
		
                $("#paginas").append(pagina.join(""));
            });

            return false;
        });
    });

    $("#demo tbody a.del").click(function (e) {
        return false;
    });
}

var mostrarHtml = function () {

    var stefaniaTable = "";

    $.each(objJSON.contenido[0].cuento, function (index, value) { //"<td>" + "</td>"
        stefaniaTable += "<tr id='c" + index + "'><td>" + value.titulo + "</td>" + "<td>" + value.descripcion + "</td>" +"<td>" + value.creditos+ "</td>" +
			"<td><a href='#' class='edt' value='" + index + "'>Abrir</a></td><tr>";
    });

    $("#demo1 tbody").html("");
    $("#demo1 tbody").append(stefaniaTable);

    $.each($("#demo1 tbody a.edt"), function (i, v) {
        $(v).click(function (e) {
            var id = $(e.target).attr("value");
            idxCuento = id;

            var cuento = objJSON.contenido[0].cuento[id];
            /*
            $("#codigo").val(cuento.codigo);
            $("#titulo").val(cuento.titulo);
            $("#descripcion").val(cuento.descripcion);*/

            $("#paginas1").html("");
            $.each(cuento.paginas, function (i, v) {
                var pagina1 = [];
                pagina1.push("<div class='prueba'>");
                pagina1.push("<div class='textoCuento'>");
                pagina1.push("<textarea class='hst'>");
                pagina1.push(v.historia);
                pagina1.push("</textarea>");
                 pagina1.push("</div>");

                pagina1.push("<br />");
               
                
                pagina1.push("<div class='imgCuento'>");
                pagina1.push("<img class='img' src='");
                pagina1.push(v.foto);
                pagina1.push("' />");
                pagina1.push("<br />");
                pagina1.push("</div>");
                pagina1.push("</div>");
               
            
		pagina1.push("<br />");
                $("#paginas1").append(pagina1.join(""));
            });

            return false;
        });
    });

    $("#demo1 tbody a.del").click(function (e) {
        return false;
    });
}

var nuevo = function () {
    idxCuento = "";
    $("#codigo").val("");
    $("#titulo").val("");
    $("#descripcion").val("");
    $("#paginas").html("");
};


