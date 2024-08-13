import { Role } from "./Role";
import { User } from "./User";

export class Candidat extends User {
    public nomPrenom : string ;
    public  numCIN : string ;
	public dateNaissance:  Date  ;
	public  nomPere : string ;
	public prenomPere : string ;
	public  numTel : string ;
	public  adress : string ;
	
    constructor(
        numCIN : string,
        nomPrenom : string,
        nomPere : string ,
        prenomPere : string ,
        numTel : string ,
        adress : string ,
        dateNaissance : Date,
        id? : number,
        username? : string,
        email? : string,
        password? : string,
        role? : string[],
        
    ){
        super(id,username,email,password,role);
        
        this.nomPrenom = nomPrenom;
        this.numCIN = numCIN;
        this.dateNaissance = dateNaissance;
        this.nomPere = nomPere;
        this.prenomPere = prenomPere;
        this.numTel = numTel;
        this.adress = adress;
    }
}