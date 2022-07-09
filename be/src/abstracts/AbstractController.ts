import { AbstractModel,AbstractService } from "abstracts"
import { Request, Response } from "express"
import { IUser } from "interfaces"
import { Model } from "mongoose"

export default class AbtractController<I, S extends AbstractService<I>> {
    ModelTenant: AbstractModel<I>
    service : S
    model : Model<I>
    constructor(ModelTenant: AbstractModel<I> ) {
        this.ModelTenant = ModelTenant
    }

    getInstance (user : IUser) {
        this.model = this.ModelTenant.getInstance(user.tenant)
        this.service.model = this.model
        this.service.user = user
    }

    get(req : Request, _ : Response) {
    }
    post(_ : Request, __ : Response) {
        
    }
    put(_ : Request, __ : Response) {
        
    }
    patch(_ : Request, __ : Response) {
        
    }
    delete(_ : Request, __ : Response) {
        
    }

}