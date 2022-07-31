import { AbstractController } from "abstracts";
import { DATA_FOUND } from "constant";
import { Request, Response } from "express";
import { IUser } from "interfaces";
import { Users } from "models";
import { UserService } from "services";
import { ResponseResult } from "utils";

export default class UserController extends AbstractController<IUser, UserService, Users> {
  constructor() {
    super(Users, UserService)
  }
  async signin(req: Request, res: Response) {
    const { username, password } = req.body
    const service = this.createService(req.user)
    const data = await service.signin({ username, password })
    res.send(new ResponseResult({
      data,
      message: 'Sign in successfully'
    }))
  }
  async signup(req: Request, res: Response) {
    const { username, password } = req.body
    const service = this.createService(req.user)
    const data = await service.signup({ username, password })
    res.send(new ResponseResult({
      data,
      message: 'Sign up successfully'
    }))
  }
  async getMy(req: Request, res: Response) {
    const service = this.createService(req.user)
    const data = await service.model.findById(req.user._id)
    res.send(new ResponseResult({
      data,
      message: DATA_FOUND
    }))
  }
}

