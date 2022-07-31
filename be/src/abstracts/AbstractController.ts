import { AbstractModel, AbstractService } from "abstracts"
import { DATA_FOUND } from "constant"
import { Request, Response } from "express"
import { IUser } from "interfaces"
import { FilterQuery, Model } from "mongoose"
import { ResponseResult } from "utils"

export default class AbtractController<I, S extends AbstractService<I>, M extends AbstractModel<I>> {
  ModelTenant: new (tenantId?: string) => M;
  Service: new (model: Model<I>, user: IUser) => S;
  [k: string]: any;
  constructor(ModelTenant: new () => M, Service: new (model: Model<I>, user: IUser) => S) {
    this.ModelTenant = ModelTenant
    this.Service = Service
  }
  createService(user: IUser) {
    const model = new this.ModelTenant(user?.tenant).getInstance()
    return new this.Service(model, user)
  }

  async get(req: Request, res: Response) {
    const { skip, limit } = req.pagin
    const query = req.query as FilterQuery<I>
    const service = this.createService(req.user)
    const { data, total } = await service.find(query, skip, limit)
    res.send(new ResponseResult({
      data,
      total,
      message: DATA_FOUND
    }))
  }
  
  put(_: Request, __: Response) {

  }
  patch(_: Request, __: Response) {

  }
  delete(_: Request, __: Response) {

  }

}