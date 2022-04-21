export class Serie{
    index: number;
    nombre: string;
    source: string;
    seasons: number;
    desc: string;
    serieURL: string;
    imageURL: string;

    constructor(indexparam: number, nombreparam: string, sourceparam: string, seasonsparam: number, descparam: string, serieURLparam: string, imageURLparam: string)
    {
        this.index = indexparam;
        this.nombre = nombreparam;
        this.source = sourceparam;
        this.seasons = seasonsparam;
        this.desc = descparam;
        this.serieURL =  serieURLparam;  
        
        this.imageURL = imageURLparam;
    }    






}