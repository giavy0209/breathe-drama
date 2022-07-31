import { Document, Types } from "mongoose";

export default interface IChat extends Document {
  user : Types.ObjectId,
  content : string
  createdAt : Date
}