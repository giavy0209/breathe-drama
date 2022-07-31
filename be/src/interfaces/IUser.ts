import { Document } from "mongoose"

export default interface IUser extends Document{
    username : string
    password : string,
    tenant : string
    lastLogin : Date,
    sockets : string[],

    createdAt : Date,
    updatedAt : Date,
}