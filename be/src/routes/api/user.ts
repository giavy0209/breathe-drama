import { AbstractRouter } from 'abstracts'
import { UserController } from 'controllers'
import {body} from 'express-validator'
import path from 'path'
const filename = path.basename(__filename)
const ext = path.extname(filename)
const param = filename.replace(ext, '')


export default class UserRouter extends AbstractRouter<UserController> {
    constructor() {
        super(param,UserController)
        this.controller = new UserController()
        this.routes = [
            {
                param: 'login',
                method: 'POST',
                authorized : false,
                validate : [body(['username', 'password']).exists()]
            },
            {
                method : 'GET',
            }
        ]
    }
}
