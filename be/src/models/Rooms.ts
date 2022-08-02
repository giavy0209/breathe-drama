import { AbstractModel } from "abstracts";
import { IRoom } from "interfaces";
import { Schema } from "mongoose";

class Room extends AbstractModel<IRoom> {
  constructor() {
    super({name : 'chats'})
    this.schema = new Schema<IRoom>({
      id : {type : String},
      owner : {type : Schema.Types.ObjectId},
      members : [{type : Schema.Types.ObjectId}]
    }, {
      timestamps : true
    })
  }
}

export default Room