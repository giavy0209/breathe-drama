import { model, Model, models, Schema } from "mongoose"

export default abstract class AbtractModel<I> {
  tenantId?: string
  name: string
  schema: Schema
  collectionName : string
  constructor({tenantId , name}: {tenantId? : string, name : string}) {
    this.name = name
    this.tenantId = tenantId
    this.collectionName = `${this.tenantId || ''}${this.name}`
  }
  getInstance() {
    let modelObject: Model<I> = models[this.collectionName]
    if (!modelObject) {
      modelObject = model<I>(this.collectionName, this.schema)
    }
    return modelObject
  }
}