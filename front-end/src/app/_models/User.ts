import { Role } from "./Role";

export class User {
    public id  : number | undefined ;
    public username : string ;
    public email : string ;
    public password : string ;
    public roles : string[] ;
    constructor(
        id? : any  ,
       username? : string,
       email? : string,
        password? : string ,
         roles? : string[] ,
    ){
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
}

