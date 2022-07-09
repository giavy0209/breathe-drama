import { AbstractController } from "abstracts";
import { Request, Response } from "express";
import { IUser } from "interfaces";
import { sign } from "jsonwebtoken";
import { Users } from "models";
import { UserService } from "services";

export default class UserController extends AbstractController<IUser , UserService, Users> {
    constructor () {
        super(Users,UserService)
    }
    async login (req : Request,res : Response) {
        
        const token = sign({tenant : req.body.username } , Config.JWT_SECRET)
        res.send(token)
    }
}

