import { Session } from "./Session";


export class Section {
    
	id : number;
	codeSection  :  string;
	codeSpecialite  : string ;
    nomSection : string;
	nombreGroup  : Number;
	capaciteApprenant : Number;
	codeDiplome : string;
	dateEntree : string;
	dateFin : string;
    session? : Session

    constructor(
        id : number,
    codeSection : string,
    codeSpecialite  : string ,
    nomSection : string,
	nombreGroup  : Number,
	capaciteApprenant : Number,
	codeDiplome : string,
	dateEntree : string,
	dateFin : string,
    session? : Session
    ){
        this.id = id
        this.codeSection = codeSection;
        this.codeSpecialite = codeSpecialite;
        this.nomSection = nomSection;
        this.nombreGroup = nombreGroup;
        this.capaciteApprenant = capaciteApprenant;
        this.codeDiplome = codeDiplome;
        this.dateEntree = dateEntree;
        this.dateFin = dateFin;
        this.session = session;
    }

    
}