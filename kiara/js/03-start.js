

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
        <table><tbody>
        `;
    
    $.each(contenido, function(index, value) { //"<td>" + "</td>"
        
        stefaniaTable += "<tr><td>" + value.codigo + "</td>" + "<td>" + value.titulo + "</td><tr>";
        
    });
    
    stefaniaTable += "</tbody></table>";
    
    $("#contenido").append(stefaniaTable);
    
}
}

	
		
		/**/
				   
console.log(contenido.length);
console.log(contenido[0]);	
console.log(contenido[2]);	
}
	

 

/*
function setesfera(key, title, description, image){
	$("")
}
*/