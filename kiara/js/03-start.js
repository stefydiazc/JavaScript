

/*Funcion inicial al cargar la pagina*/
$(function() {
    setData();
});

function setData(){
	objJSON = JSON.parse(datos);
	contenido = [];
	
	console.log(objJSON);
	
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
		
	
	
		
		/**/
				   
console.log(contenido.length);
console.log(contenido[0]);	
console.log(contenido[2]);	
}
	
		
	}


 

/*
function setesfera(key, title, description, image){
	$("")
}
*/