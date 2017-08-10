function mostrarUsuarios() {
    
    var stefaniaTable = 
        `
        <table><tbody>
        `;
    
    $.each(contenido, function(index, value) { //"<td>" + "</td>"
        
        stefaniaTable += "<tr><td>" + value.titulo + "</td>" + "<td>" + value.descripcion + "</td><tr>";
        
    });
    
    stefaniaTable += "</tbody></table>";
    
    $("#contenido").append(stefaniaTable);
    
}