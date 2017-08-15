
var Cuento = class Cuento {
    constructor(jsonObj) {
        this.codigo = jsonObj.codigo;
        this.titulo = jsonObj.titulo;
        this.descripcion = jsonObj.descripcion;
        this.creditos = jsonObj.creditos;

    }
};

var Pagina = class Pagina  {
    constructor(jsonObj) {
        this.id = jsonObj.id;
        this.foto = jsonObj.foto;
        this.historia = jsonObj.historia;
        this.audio = jsonObj.audio;
    }
};