import { Document } from "mongoose"

export default interface IUser extends Document {
    tenant : string
}