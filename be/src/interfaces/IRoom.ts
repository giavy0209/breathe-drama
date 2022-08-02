import { Document, Types } from "mongoose";

export default interface IRoom extends Document{
  id : string,
  owner : Types.ObjectId
  members : Types.ObjectId[]
}