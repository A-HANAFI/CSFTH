import { Role } from "./Role";

export class User {
    public id  : number | undefined ;
    public username : string | undefined;
    public email : string | undefined;
    public password : string | undefined;
    public role : string[] | undefined ;
    constructor(
        id? : any  ,
       username? : string,
       email? : string,
        password? : string ,
         role? : string[] ,
    ){
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

