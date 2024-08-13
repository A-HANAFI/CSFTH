import { Candidat } from "./Candidat";

export class Apprenant extends Candidat {

    public codeInscription ;

    constructor(
        codeInscription : string,
        numCIN : string,
        nomPrenom : string,
        nomPere : string ,
        prenomPere : string ,
        numTel : string ,
        adress : string ,
        dateNaissance : Date,
        id?: number,
        username? : string,
        email? : string,
        password? : string,
        role? : string[],
        
        
    ){
        super(
            numCIN, nomPrenom, nomPere, prenomPere, numTel, adress, dateNaissance,id, username, email, password, role
        )

        this.codeInscription = codeInscription;
    }
}