

/*Funcion inicial al cargar la pagina*/
$(function() {
    setData();
});

function setData(){
	objJSON = JSON.parse(datos);
	
	contenido = [];
	
	
	for (property in objJSON){
		
		switch(property){
			case "contenido":
			$.each(objJSON[property], function(index, value) {
				
				switch(Object.keys(value)[0]){
			
					case "cuento":
	
						$.each(value.cuento, function(index, value) {
       
							contenido.push(new Cuento(value));
							
						});
						break;
					}
			});
				break;
		
	}
	/**/	


/*
    [04]
*/	
function mostrarCuentos(){
	 var stefaniaTable = 
        `
        <table>
			<thead>
			<tr>
				<th> C&Oacute;DIGO </th> 
				<th> T&Iacute;TULO </th>
				<th> DESCRIPCI&Oacute;N </th>
				<th> EDITAR </th>
				<th> ELIMINAR </th>
			</tr>
	<tbody>
        `;
    
    $.each(contenido, function(index, value) { //"<td>" + "</td>"
        
		
		
        stefaniaTable += "<tr><td>" + value.codigo + "</td>" + "<td>" + value.titulo + "</td>" + "<td>" + value.descripcion + "</td>" +
			"<td><a href='#'>Editar</a></td><td><a href='#'>Eliminar</a></td><tr>";
         
    });
    
    stefaniaTable += "</tbody></table>";
    	
	console.log(stefaniaTable);
	return stefaniaTable;
}
		function mostrar(){
			console.log("hola");
		}
}
	
 document.getElementById("demo").innerHTML = mostrarCuentos();

		/**/
			   
console.log(contenido.length);
console.log(contenido[1]);	
}
	

 

/*
function setesfera(key, title, description, image){
	$("")
}
*/