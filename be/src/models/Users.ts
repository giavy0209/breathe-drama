import { AbstractModel } from "abstracts";
import { IUser } from "interfaces";
import { Schema } from "mongoose";

class Users extends AbstractModel<IUser> {
  constructor() {
    super({name : 'users'})
    this.schema = new Schema<IUser>({
      username : {type : String, required : true, unique : true},
      password : {type : String},
      lastLogin : {type : Date, default : Date.now},
      sockets : [{type : String, default : []}],
    })
  }
}

export default Users