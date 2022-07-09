import { IUser } from "interfaces"
import { FilterQuery, Model, PopulateOption, QueryOptions } from "mongoose"

export default abstract class AbstractService<I> {
    model: Model<I>
    user: IUser
    constructor(model: Model<I>, user: IUser) {
        this.model = model
        this.user = user
    }
    async find(query: FilterQuery<I>, skip: number, limit: number, populate?: PopulateOption['populate']) {
        const options: QueryOptions = {}
        if (skip) {
            options.skip = skip
        }
        if (limit) {
            options.limit = limit
        }
        if (populate) {
            options.populate = populate
        }
        const [data,total] = await Promise.all([
            this.model.find(query, null, options),
            this.model.countDocuments(query)
        ])
        return {data,total}
    }

}