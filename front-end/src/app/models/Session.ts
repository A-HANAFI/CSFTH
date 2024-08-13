export class  Session {
    public id : number | undefined;
    annee? : string | undefined;
    nomSession?:string | undefined;
    capacite?: number | undefined;
    dateOuverture?  : string | undefined;
    dateFermeture?  : string | undefined;
    constructor(
        id? : any,
        annee? : string,
        nomSession?:string,
        capacite?: number,
        dateOuverture?  : string ,
        dateFermeture?  : string,
    ){

        this.id = id;
        this.annee = annee;
        this.nomSession = nomSession;
        this.capacite = capacite;
        this.dateOuverture = dateOuverture;
        this.dateFermeture = dateFermeture;
    }
}