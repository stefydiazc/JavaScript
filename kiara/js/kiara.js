var idxCuento = "";

/*Funcion inicial al cargar la pagina*/
$(function () {
    
    mostrar();

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
        obj.creditos = $("#creditos").val();

        if ($("#estadoA").prop("checked"))
            obj.estado = "A";
        else
            obj.estado = "I";

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


        if (datos.estado === "A") {
            // Validaciones
            if (!(datos.codigo)) {
                alert("Debe ingresar el código del cuento.");
                return;
            }
            if (paginas.length === 0) {
                alert("Debe ingresar las paginas");
                return false;
            }
        }

        if (idxCuento === "") {
            objJSON.contenido[0].cuento.push(obj);
        }

        grabarArchivoJSON(objJSON);

        mostrar();

        nuevo();
        console.log(objJSON);
        return false;
    });

    $("#cancelar").click(function (e) {
        nuevo();
        return false;
    });

    $("#exportar").click(function (e) {
        exportJSON();
        return false;
    });

});


	


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
            //$("#foto_principal").val(cuento.foto_principal);
          
          /*  if (cuento.estado) {
                if (cuento.estado === "A")
                    $("#estadoA").prop("checked", "checked");
                else
                    $("#estadoI").prop("checked", "checked");
            } else {
                $("#estadoI").prop("checked", "checked");
            }*/

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
        var id = $(e.target).attr("value");
        idxCuento = id;

        //var cuento = objJSON.contenido[0].cuento[id];
        objJSON.contenido[0].cuento.splice(id, 1);

        grabarArchivoJSON(objJSON);

        mostrar();

        return false;
    });
}


var nuevo = function () {
    idxCuento = "";
    $("#codigo").val("");
    $("#titulo").val("");
    $("#descripcion").val("");
    $("#creditos").val("");
    $("#paginas").html("");
};


