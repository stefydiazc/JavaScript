/* [01]
    
    Los atributos de esta clase se extraen el objeto JSON (jsonObj) recibido en el constructor
*/


class Cuento {
    constructor(jsonObj) {
        this.codigo = jsonObj.codigo;
        this.titulo = jsonObj.titulo;
        this.descripcion = jsonObj.descripcion;
        this.foto_principal = jsonObj.foto_principal;
		/*this.paginas = this.auxSetter("paginas", jsonObj.paginas);*/
    }
}

class Pagina{
	constructor(jsonObj){
		this.id = jsonObj.id;
		this.foto = jsonObj.foto;
		this.reseña = jsonObj.reseña;
		this.audio = jsonObj.audio;
	}
}