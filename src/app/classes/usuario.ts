export class Usuario{

    id !: string;
    email !: string;
    perfil ?: string;

    constructor(id : string, email : string, perfil ?: string){
        this.id = id;
        this.email = email;
        this.perfil = perfil;
    }

    toJson():any{
        const json ={
            id : this.id,
            email : this.email,
            perfil : this.perfil
        }
        return json;
    }

    public getID():string{
        return this.id;
    }

    public getEmail():string{
        return this.email;
    }
}