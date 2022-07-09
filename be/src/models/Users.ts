import { AbstractModel } from "abstracts";
import { IUser } from "interfaces";
import {  Schema } from "mongoose";

class Users extends AbstractModel<IUser> {
    constructor(tenantId?: string) {
        super(tenantId || '')
        this.name = 'Users'
        this.schema = new Schema<IUser>({
            tenant: String
        })
    }
}

export default Users