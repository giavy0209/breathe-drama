import { AbstractRouter } from 'abstracts'
import { UserController } from 'controllers'
import {body} from 'express-validator'
import { IUser } from 'interfaces'
import { Users } from 'models'
import path from 'path'
const filename = path.basename(__filename)
const ext = path.extname(filename)
const param = filename.replace(ext, '')


export default class UserRouter extends AbstractRouter<IUser,UserController> {
    constructor() {
        super(param)
        this.controller = new UserController(Users)
        this.routes = [
            {
                param: '/login',
                method: 'POST',
                ref: this.controller.login,
                authorized : false,
                validate : [
                    body('username'),
                    body('password')
                ]
            },
            {
                method : 'GET',
                ref : this.controller.test
            }
        ]
    }
}
