import { AbstractModel } from "abstracts";
import { IChat } from "interfaces";
import { Schema } from "mongoose";

class Users extends AbstractModel<IChat> {
  constructor() {
    super({name : 'chats'})
    this.schema = new Schema<IChat>({
      user : {type : Schema.Types.ObjectId , ref : 'users'},
      content : {type : String},
    }, {
      timestamps : true
    })
  }
}

export default Users