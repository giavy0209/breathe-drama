import { IUser } from "interfaces"
import { FilterQuery, Model } from "mongoose"

export default abstract class AbstractService<I> {
    model: Model<I>
    user : IUser
    constructor(model: Model<I>) {
        this.model = model
    }
    async find({
        query,
        skip,
        limit,
    } : {
        query : FilterQuery<I>,
        skip : number,
        limit : number
    }) {
        return await this.model.find(query).skip(skip).limit(limit)
    }
    
}