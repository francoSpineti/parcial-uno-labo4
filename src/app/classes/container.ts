export class Container{

    id !: string;
    codigo !: string;
    color !: string;
    empresa !: string;
    capacidad !: number;

    constructor(id:string,codigo:string,color:string,empresa:string,capacidad:number){
        this.id = id;
        this.codigo = codigo;
        this.color = color;
        this.empresa = empresa;
        this.capacidad = capacidad;
    }

    toJson() : any{
        const json ={
            id : this.id,
            codigo : this.codigo,
            color : this.color,
            empresa : this.empresa,
            capacidad : this.capacidad,
        };
        return json;
    }

}