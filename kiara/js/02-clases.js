
var Cuento = class Cuento {
    constructor(jsonObj) {
        this.codigo = jsonObj.codigo;
        this.titulo = jsonObj.titulo;
        this.descripcion = jsonObj.descripcion;
        this.foto_principal = jsonObj.foto_principal;
    }
};

var Pagina = class Pagina  {
    constructor(jsonObj) {
        this.id = jsonObj.id;
        this.foto = jsonObj.foto;
        this.reseña = jsonObj.reseña;
        this.audio = jsonObj.audio;
    }
};