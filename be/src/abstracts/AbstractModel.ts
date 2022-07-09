import { model, Model, models, Schema } from "mongoose"

export default abstract class AbtractModel<I> {
    tenantId: string
    name : string
    schema : Schema
    constructor(tenantId : string) {
        this.tenantId = tenantId
    }
    getInstance () {
        let modelObject: Model<I> = models[this.tenantId + this.name]
        if (!modelObject) {
            modelObject = model<I>(this.tenantId + this.name, this.schema)
        }
        return modelObject
    }
}