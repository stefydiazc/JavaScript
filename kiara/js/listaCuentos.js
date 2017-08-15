var idxCuento = "";

/*Funcion inicial al cargar la pagina*/
$(function () {  
    mostrarHtml();
});

var mostrarHtml = function () {

    var stefaniaTable = "";

    $.each(objJSON.contenido[0].cuento, function (index, value) { //"<td>" + "</td>"
        stefaniaTable += "<tr id='c" + index + "'><td>" + value.titulo + "</td>" + "<td>" + value.descripcion + "</td>" + "<td>" + value.creditos + "</td>" +
			"<td><a href='#' class='edt' value='" + index + "'>Abrir</a></td><tr>";
    });

    $("#demo1 tbody").html("");
    $("#demo1 tbody").append(stefaniaTable);

    $("#paginas1").click(function (e) {
    });

    $.each($("#demo1 tbody a.edt"), function (i, v) {
        $(v).click(function (e) {
            var id = $(e.target).attr("value");
            idxCuento = id;

            var cuento = objJSON.contenido[0].cuento[id];

 
            $("#paginas1").html("");
            $.each(cuento.paginas, function (i, v) {
                var pagina1 = [];
                pagina1.push("<div id='cuento-" + i + "' class='pag hid'>");
                pagina1.push("<span style='width:100px;'>");
                pagina1.push(v.historia);
                pagina1.push("</span>");
                pagina1.push("<img class='img' src='");
                pagina1.push(v.foto);
                pagina1.push("' />");
                pagina1.push("</div>");
                pagina1.push("<audio id='audio-"+ i +"' class='' play src='");
                pagina1.push(v.audio);
                pagina1.push("' />");
                pagina1.push("</div>");
            
                $("#paginas1").append(pagina1.join(""));
            });

             $.each(cuento.preguntas, function (i, v) {
                var pagina1 = [];
                pagina1.push("<div id='cuento-" + i + "' class='pag hid'>");
                pagina1.push("<span style='width:100px;'>");
                pagina1.push(v.historia);
                pagina1.push("</span>");
                pagina1.push("<img class='img' src='");
                pagina1.push(v.foto);
                pagina1.push("' />");
                pagina1.push("</div>");

                $("#paginas1").append(pagina1.join(""));
            });


            var paginacion = [];
            paginacion.push('<div class="w3-center w3-container" onclick="">&#128266;</div>');
            paginacion.push('<div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">');
            paginacion.push('<div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>');  
            paginacion.push('<div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>');
            
            


            paginacion.push('</div>');

            $("#paginas1").append(paginacion.join(""));

            $('#cuento-0').removeClass("hid");
            return false;
        });
    });

    $("#demo1 tbody a.del").click(function (e) {
        return false;
    });
}

var plusDivs = function (desp) {
    var id = $("#paginas1 div.pag").not(".hid").attr("id");

    $("#" + id).addClass("hid");

    var idx = parseInt( id.replace("cuento-", ""),10);

    var next = idx + desp;
    if ($("#cuento-" + next).length === 0)
        next = idx;

    $("#cuento-" + next).removeClass("hid");
}

var reproducir = function(){



}