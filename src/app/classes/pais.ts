export class Pais {
    name !: string;
    flag !: string;

    constructor(name : string, flag : string){
        this.name = name;
        this.flag = flag;
    }

    toJson() : any{
        const json ={
            name : this.name,
            flag : this.flag,
        };
        return json;
    }
}

