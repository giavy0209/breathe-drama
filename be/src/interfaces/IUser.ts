export default interface IUser{
    username : string
    password : string,
    tenant : string
    lastLogin : Date,
    sockets : string[],

    createdAt : Date,
    updatedAt : Date,
}