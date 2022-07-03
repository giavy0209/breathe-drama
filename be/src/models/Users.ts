import { AbstractModel } from "abstracts";
import { IUser } from "interfaces";
import { model, Model, models, Schema } from "mongoose";

class Users extends AbstractModel<IUser> {
    constructor(tenantId?: string) {
        super(tenantId || '', 'Users')
    }
    getInstance: (tenantId: string) => Model<IUser, {}, {}, {}, any> = () => {
        const schema = new Schema<IUser>({
            tenant: String
        })
        let modelObject: Model<IUser> = models[this.tenantId + this.name]
        if (!modelObject) {
            modelObject = model<IUser>(this.tenantId + this.name, schema)
        }
        return modelObject
    }
}

export default new Users()