import { AbstractController, AbstractModel } from "abstracts";
import { Request, Response } from "express";
import { IUser } from "interfaces";
import { sign } from "jsonwebtoken";
import { UserService } from "services";

export default class UserController extends AbstractController<IUser , UserService> {
    constructor (model : AbstractModel<IUser>, ) {
        super(model)
        this.service = new UserService(this.model)
    }
    async login (req : Request,res : Response) {
        const token = sign({tenant : req.body.username } , Config.JWT_SECRET)
        res.send(token)
    }
    async test (req : Request,res : Response) {
        this.service.test()
    }

}

