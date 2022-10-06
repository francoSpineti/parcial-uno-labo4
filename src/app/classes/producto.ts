import { Pais } from "./pais";

export class Producto{

    id !: string;
    codigo!: string;
    descripcion!: string;
    precio!: number; 
    stock !: number;
    pais !: Pais;
    comestible !: boolean;

    constructor(id :string,codigo : string, descripcion : string,precio:number,stock:number,pais:Pais,comestible:boolean){
        this.id = id;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.pais = pais;
        this.comestible = comestible;
    }


    toJson():any{
        const json ={
            id : this.id,
            codigo : this.codigo,
            descripcion : this.descripcion,
            precio : this.precio,
            stock : this.stock,
            pais : this.pais.toJson(),
            comestible : this.comestible
        }
        return json;
    }

}